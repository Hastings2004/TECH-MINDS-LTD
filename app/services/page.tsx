import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { Cta, PageHead } from '@/components/Blocks';
import { quoteHref, services } from '@/data/services';

const description = 'Web and systems development, hardware and software repairs, network solutions, and Office 365 and licensing in Lilongwe, Malawi.';

export const metadata: Metadata = {
  title: 'Our Services',
  description,
  openGraph: { title: 'Our Services | Tech Minds and General Dealers', description },
};

export default function ServicesPage() {
  return (
    <>
      <PageHead
        pill="OUR SERVICES"
        intro="From your first website to a fully networked office, we handle the technology so you can focus on your business."
        extra={
          <nav className="jump" aria-label="Service sections">
            {services.map((s) => (
              <a key={s.id} href={'#' + s.id}>{s.short}</a>
            ))}
          </nav>
        }
      >
        Professional tech solutions <span className="cyan">under one roof</span>
      </PageHead>

      {services.map((s, i) => (
        <section key={s.id} id={s.id} className={i % 2 ? 'section section-alt' : 'section'}>
          <div className="wrap">
            <div className="split-head">
              <div>
                <p className="eyebrow">{String(i + 1).padStart(2, '0')} · {s.name}</p>
                <h2 className="h2">
                  {s.heading} <span className="cyan">{s.headingCyan}</span>
                </h2>
                <p className="muted" style={{ fontSize: 17 }}>{s.intro}</p>
              </div>
              <Link href={quoteHref(s)} className="btn">{s.cta}</Link>
            </div>
            <div className="grid grid-2">
              {s.cards.map((card) => (
                <div className="card reveal" key={card.title}>
                  <div className="card-head">
                    <span className="icon"><Icon name={card.icon} /></span>
                    <h3>{card.title}</h3>
                  </div>
                  <ul className="checks">
                    {card.items.map((item) => (
                      <li key={item.title}>
                        <div>
                          <b>{item.title}</b>
                          <span>{item.text}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="tags">
              {s.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </section>
      ))}

      <Cta
        title="Not sure which service you need?"
        text="Tell us the problem and we will recommend the right solution, free of charge."
        button="Get a Free Consultation"
        padding="80px 0"
      />
    </>
  );
}
