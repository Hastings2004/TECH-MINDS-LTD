import Link from 'next/link';
import type { ReactNode } from 'react';

/** Coloured heading area at the top of each inner page */
export function PageHead({ pill, children, intro, extra }: { pill: string; children: ReactNode; intro: string; extra?: ReactNode }) {
  return (
    <section className="page-head grid-bg">
      <div className="wrap">
        <span className="pill">{pill}</span>
        <h1>{children}</h1>
        <p className="muted">{intro}</p>
        {extra}
      </div>
    </section>
  );
}

/** Centred eyebrow + heading above a section */
export function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2">{title}</h2>
    </div>
  );
}

/** Blue call-to-action banner near the bottom of a page */
export function Cta({ title, text, button, href = '/contact', padding = '0 0 80px' }: { title: string; text: string; button: string; href?: string; padding?: string }) {
  return (
    <section style={{ padding }}>
      <div className="wrap">
        <div className="cta reveal">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <Link href={href} className="btn">{button}</Link>
        </div>
      </div>
    </section>
  );
}
