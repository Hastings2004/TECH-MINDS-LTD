import Link from 'next/link';
import { site } from '@/data/site';
import { services } from '@/data/services';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="stack">
            <p className="footer-brand">
              TECH MINDS AND <span className="cyan">GENERAL DEALERS</span>
            </p>
            <p className="muted" style={{ fontSize: 14 }}>{site.tagline}</p>
          </div>
          <div>
            <h4>PAGES</h4>
            <Link href="/about">About Us</Link>
            <Link href="/team">Our Team</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <h4>SERVICES</h4>
            {services.map((s) => (
              <Link key={s.id} href={'/services#' + s.id}>{s.short}</Link>
            ))}
          </div>
          <div>
            <h4>CONTACT</h4>
            <p className="muted" style={{ fontSize: 15 }}>
              {site.location}
              <br />
              {site.phones.map((p) => (
                <a key={p.tel} href={'tel:' + p.tel}>{p.display}</a>
              ))}
              <a href={'mailto:' + site.email}>{site.email}</a>
            </p>
          </div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} TECH MINDS AND GENERAL DEALERS • LILONGWE, MALAWI</p>
      </div>
    </footer>
  );
}
