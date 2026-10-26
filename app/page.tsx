import { Fragment } from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { Cta, SectionHead } from '@/components/Blocks';
import { site } from '@/data/site';
import { services } from '@/data/services';

const strip = ['Business Websites', 'Custom Systems', 'Mobile Apps', 'Website & App Repair', 'Laptop & Desktop Repairs', 'Printers & Copiers', 'Wi-Fi & LAN', 'Firewalls & VPN', 'Office 365', 'Genuine Licensing'];

const steps = [
  { title: 'Consult', text: 'We listen and learn your needs, free of charge.' },
  { title: 'Quote', text: 'We agree on the plan and the price before any work starts.' },
  { title: 'Deliver', text: 'We build, install, repair or activate, then test everything.' },
  { title: 'Support', text: 'We stay with you for renewals, updates and fixes.' },
];

const reasons = [
  { title: 'Free consultation', text: 'Every job starts with a free assessment and a clear quote.' },
  { title: 'Genuine licensing', text: 'Safe, authentic Windows and Office activation, no shortcuts.' },
  { title: 'All major brands', text: 'HP, Dell, Lenovo and more, plus printers, copiers and networking gear.' },
  { title: 'Support after delivery', text: 'Go-live support, renewals and ongoing maintenance.' },
];

export default function HomePage() {
  return (
    <>
      <section className="hero grid-bg">
        <div className="wrap hero-inner">
          <div className="hero-text">
            <span className="pill">PROFESSIONAL TECH SOLUTIONS</span>
            <h1>
              Your One-Stop Tech Partner
              <br />
              <span className="cyan">in Lilongwe</span>
            </h1>
            <p className="hero-lead muted">
              Websites and custom systems, computer and laptop repairs, business networks, and Office 365 setup. One trusted team for every tech need of your business or home.
            </p>
            <div className="btn-row">
              <Link href="/contact" className="btn">Get a Free Quote</Link>
              <Link href="/services" className="btn-outline">Explore Our Services</Link>
            </div>
          </div>
          <div className="row-side">
            <div className="card stack" style={{ gap: 20 }}>
              <p className="eyebrow">Free consultation</p>
              <p style={{ fontSize: 22, fontWeight: 900, color: '#fff' }}>Talk to us about your project or device today</p>
              <div className="contact-row">
                <span className="icon"><Icon name="phone" /></span>
                <div>
                  <p className="muted" style={{ fontSize: 13 }}>Call or WhatsApp</p>
                  <p className="v">
                    {site.phones.map((p, i) => (
                      <span key={p.tel}>
                        {i > 0 && <br />}
                        <a href={'tel:' + p.tel}>{p.display}</a>
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              <div className="contact-row">
                <span className="icon"><Icon name="mail" /></span>
                <div>
                  <p className="muted" style={{ fontSize: 13 }}>Email</p>
                  <p className="v"><a href={'mailto:' + site.email}>{site.email}</a></p>
                </div>
              </div>
              <div className="contact-row">
                <span className="icon"><Icon name="pin" /></span>
                <div>
                  <p className="muted" style={{ fontSize: 13 }}>Visit us</p>
                  <p className="v">{site.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling services strip (decorative; the same content is listed below) */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div className="marquee-group" key={copy}>
              {strip.map((item) => (
                <Fragment key={item}>
                  <span>{item}</span>
                  <span className="sep">✦</span>
                </Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="What we do" title="Six services, one trusted team" />
          <div className="grid grid-3">
            {services.map((s) => (
              <Link key={s.id} href={'/services#' + s.id} className="card card-link reveal">
                <span className="icon"><Icon name={s.icon} /></span>
                <h3>{s.name}</h3>
                <p className="muted">{s.summary}</p>
                <span className="more">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <SectionHead eyebrow="How we work" title="Simple, clear and transparent" />
          <div className="steps">
            {steps.map((step, i) => (
              <div className="reveal" key={step.title}>
                <div className="num">{i + 1}</div>
                <h3>{step.title}</h3>
                <p className="muted">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap row">
          <div className="row-side stack">
            <p className="eyebrow">Why choose us</p>
            <h2 className="h2">Technology that works for your business</h2>
            <p className="muted" style={{ fontSize: 17 }}>
              We combine practical repair skills with modern software and networking know-how, so you deal with one team instead of many.
            </p>
            <div><Link href="/about" className="btn-outline">More about us</Link></div>
          </div>
          <div className="row-main grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap: 20 }}>
            {reasons.map((r) => (
              <div className="card reveal" key={r.title}>
                <h3>{r.title}</h3>
                <p className="muted" style={{ marginTop: 8 }}>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta title="Ready to digitise your operations?" text="Contact us today for a free consultation and quote." button="Contact Us" />
    </>
  );
}
