import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { PageHead, SectionHead } from '@/components/Blocks';

const description = 'Learn about Tech Minds and General Dealers, a Lilongwe technology company: our story, mission, vision and values.';

export const metadata: Metadata = {
  title: 'About Us',
  description,
  openGraph: { title: 'About Us | Tech Minds and General Dealers', description },
};

// Numbers animate from 0 when `count` is set. Add real figures here when available,
// e.g. years of experience, projects delivered, devices repaired.
const stats = [
  { value: '4', count: 4, label: 'Service areas' },
  { value: 'Free', label: 'First consultation' },
  { value: '1', count: 1, label: 'Team for software, hardware and networks' },
  { value: '100%', count: 100, suffix: '%', label: 'Genuine licences' },
];

const values = [
  { title: 'Integrity', text: 'Genuine licences, honest diagnosis and clear quotes before we start.' },
  { title: 'Quality', text: 'Every repair and system is tested before it is handed back.' },
  { title: 'Customer first', text: 'We learn your needs before recommending any solution.' },
  { title: 'Lasting support', text: 'Renewals, updates and maintenance long after go-live.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHead
        pill="ABOUT US"
        intro="Tech Minds and General Dealers is a Lilongwe-based technology company helping businesses and individuals get the most out of their technology, from building systems to keeping devices and networks running."
      >
        Who we are
      </PageHead>

      <section className="section">
        <div className="wrap row">
          <div className="row-main stack" style={{ gap: 18 }}>
            <p className="eyebrow">Our story</p>
            <h2 className="h2">
              Built to make technology <span className="cyan">simple for Malawian businesses</span>
            </h2>
            <p className="muted" style={{ fontSize: 17 }}>
              Tech Minds was founded by network engineer Phillip Mwale and has grown into a full-service tech partner, bringing together developers, technicians and network specialists to cover software, hardware, networks and licensing under one roof.
            </p>
            <p className="muted" style={{ fontSize: 17 }}>
              Today we work with businesses, churches and institutions, from a Lilongwe farm equipment dealer to Mzuzu University, with one goal: reliable technology, honest advice and support you can count on.
            </p>
          </div>
          <div className="row-side stats">
            {stats.map((s) => (
              <div className="card stat reveal" key={s.label}>
                <strong data-count={s.count} data-suffix={s.suffix}>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap grid grid-2">
          <div className="card stack reveal">
            <span className="icon"><Icon name="target" /></span>
            <h3 style={{ fontSize: 24 }}>Our Mission</h3>
            <p className="muted" style={{ fontSize: 16 }}>
              To provide reliable, affordable and genuine technology solutions that help businesses and individuals in Malawi work smarter and grow faster.
            </p>
          </div>
          <div className="card stack reveal">
            <span className="icon"><Icon name="eye" /></span>
            <h3 style={{ fontSize: 24 }}>Our Vision</h3>
            <p className="muted" style={{ fontSize: 16 }}>
              To be the most trusted technology partner in Malawi, known for quality work, honest advice and lasting support.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Our values" title="What we stand for" />
          <div className="grid grid-4">
            {values.map((v) => (
              <div className="card reveal" key={v.title}>
                <h3>{v.title}</h3>
                <p className="muted" style={{ marginTop: 8 }}>{v.text}</p>
              </div>
            ))}
          </div>
          <div className="btn-row" style={{ justifyContent: 'center', marginTop: 40 }}>
            <Link href="/team" className="btn">Meet Our Team</Link>
            <Link href="/portfolio" className="btn-outline">See Our Work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
