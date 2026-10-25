'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

// Page-wide motion: scroll progress bar, header shadow, reveal-on-scroll and count-up numbers.
// Runs again after every page change.
export default function SiteEffects() {
  const pathname = usePathname();
  const progress = useRef<HTMLDivElement>(null);

  // Header shadow + scroll progress bar
  useEffect(() => {
    const header = document.querySelector('.site-header');
    let ticking = false;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) progress.current.style.transform = 'scaleX(' + (max > 0 ? window.scrollY / max : 0) + ')';
      header?.classList.toggle('scrolled', window.scrollY > 10);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
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
    reveals.forEach((el) => {
      // Vary the direction: side-by-side columns slide in, cards and photos zoom
      if (el.matches('.row-main') || el.closest('.row-main')) el.classList.add('reveal-left');
      else if (el.matches('.row-side')) el.classList.add('reveal-right');
      else if (el.matches('.project, .member, .stat')) el.classList.add('reveal-zoom');
      // Stagger siblings so a row of cards arrives one after another
      let i = 0;
      for (let sib = el.previousElementSibling; sib; sib = sib.previousElementSibling) {
        if (sib.classList.contains('reveal')) i++;
      }
      if (i) el.style.transitionDelay = Math.min(i, 5) * 0.09 + 's';
    });

    const timers: number[] = [];
    const show = (el: HTMLElement) => {
      el.classList.add('in');
      // Drop the stagger delay afterwards so hover effects respond instantly
      if (el.style.transitionDelay) timers.push(window.setTimeout(() => (el.style.transitionDelay = ''), 1300));
    };
    if (!('IntersectionObserver' in window)) {
      reveals.forEach(show);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target as HTMLElement);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    reveals.forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [pathname]);

  // Count-up numbers (elements with data-count)
  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>('[data-count]');
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (!counters.length || reduceMotion || !('IntersectionObserver' in window)) return;

    const countUp = (el: HTMLElement) => {
      const target = parseInt(el.dataset.count || '0', 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1400;
      let start: number | null = null;
      const step = (now: number) => {
        if (start === null) start = now;
        const t = Math.min((now - start) / duration, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3))) + suffix;
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            countUp(entry.target as HTMLElement);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    counters.forEach((el) => {
      el.textContent = '0' + (el.dataset.suffix || '');
      io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);

  return <div ref={progress} className="scroll-progress" aria-hidden="true" />;
}
