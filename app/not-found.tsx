import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="page-head grid-bg">
      <div className="wrap">
        <span className="pill">404</span>
        <h1>
          This page <span className="cyan">could not be found</span>
        </h1>
        <p className="muted">The link may be broken or the page may have moved. Try one of these instead.</p>
        <div className="btn-row">
          <Link href="/" className="btn">Back to Home</Link>
          <Link href="/services" className="btn-outline">Our Services</Link>
          <Link href="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
