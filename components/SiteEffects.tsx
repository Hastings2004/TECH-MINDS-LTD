'use client';

import { animate, inView, scroll } from 'motion';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

const reducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/**
 * Fade an element in, then hand it back to the stylesheet so CSS hover transforms keep working.
 * `from` and `to` must use the same transform functions (e.g. scale(0.92) → scale(1)); Motion can't blend to 'none'.
 */
export function revealElement(el: HTMLElement, from: string, to: string, delay = 0) {
  const duration = 0.7;
  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    el.classList.add('in');
    el.style.removeProperty('opacity');
    el.style.removeProperty('transform');
  };
  // Safety net: never leave content hidden if an animation fails or is interrupted
  const fallback = window.setTimeout(finish, (duration + delay) * 1000 + 500);
  animate(el, { opacity: [0, 1], transform: [from, to] }, { duration, delay, ease }).then(
    () => {
      clearTimeout(fallback);
      finish();
    },
    finish,
  );
}

// Page-wide motion (Motion library): scroll progress bar, header shadow, reveal-on-scroll and count-up numbers.
// Runs again after every page change.
export default function SiteEffects() {
  const pathname = usePathname();
  const progress = useRef<HTMLDivElement>(null);

  // Header shadow + scroll progress bar
  useEffect(() => {
    const header = document.querySelector('.site-header');
    return scroll((p: number, info) => {
      if (progress.current) progress.current.style.transform = 'scaleX(' + p + ')';
      header?.classList.toggle('scrolled', info.y.current > 10);
    });
  }, [pathname]);

  // Reveal on scroll
  useEffect(() => {
    // Animate common blocks on every page without marking each one in the markup
    document
      .querySelectorAll<HTMLElement>('.section-head, .split-head, main .tags, .filters, .map, .footer-grid > div, .row-main, .row-side, main .card')
      .forEach((el) => {
        if (el.closest('.hero, .page-head') || el.classList.contains('reveal')) return;
        if (el.querySelector('.reveal') || el.parentElement?.closest('.reveal')) return;
        el.classList.add('reveal');
      });

    const reveals = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.in)'));
    if (reducedMotion()) {
      reveals.forEach((el) => el.classList.add('in'));
      return;
    }

    const stops = reveals.map((el) => {
      // Vary the direction: side-by-side columns slide in, cards and photos zoom
      let [from, to] = ['translateY(28px)', 'translateY(0px)'];
      if (el.matches('.row-main') || el.closest('.row-main')) [from, to] = ['translateX(-36px)', 'translateX(0px)'];
      else if (el.matches('.row-side')) [from, to] = ['translateX(36px)', 'translateX(0px)'];
      else if (el.matches('.project, .member, .stat')) [from, to] = ['scale(0.92)', 'scale(1)'];
      // Stagger siblings so a row of cards arrives one after another
      let i = 0;
      for (let sib = el.previousElementSibling; sib; sib = sib.previousElementSibling) {
        if (sib.classList.contains('reveal')) i++;
      }
      const stop = inView(
        el,
        () => {
          revealElement(el, from, to, Math.min(i, 5) * 0.09);
          stop();
        },
        { amount: 0.12, margin: '0px 0px -40px 0px' },
      );
      return stop;
    });
    return () => stops.forEach((stop) => stop());
  }, [pathname]);

  // Count-up numbers (elements with data-count)
  useEffect(() => {
    const counters = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'));
    if (!counters.length || reducedMotion()) return;

    const controls: { stop: () => void }[] = [];
    const stops = counters.map((el) => {
      const target = parseInt(el.dataset.count || '0', 10);
      const suffix = el.dataset.suffix || '';
      el.textContent = '0' + suffix;
      const stop = inView(
        el,
        () => {
          controls.push(
            animate(0, target, {
              duration: 1.4,
              ease: 'easeOut',
              onUpdate: (v) => (el.textContent = Math.round(v) + suffix),
            }),
          );
          stop();
        },
        { amount: 0.5 },
      );
      return stop;
    });
    return () => {
      stops.forEach((stop) => stop());
      controls.forEach((c) => c.stop());
    };
  }, [pathname]);

  return <div ref={progress} className="scroll-progress" aria-hidden="true" />;
}
