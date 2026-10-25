import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import { PageHead } from '@/components/Blocks';
import QuoteForm from '@/components/QuoteForm';
import { site, whatsappLink } from '@/data/site';

const description = 'Contact Tech Minds and General Dealers in Lilongwe for a free consultation and quote. Call +265 993 835 308.';

export const metadata: Metadata = {
  title: 'Contact Us',
  description,
  openGraph: { title: 'Contact Us | Tech Minds and General Dealers', description },
};

export default function ContactPage() {
  return (
    <>
      <PageHead pill="GET IN TOUCH" intro="Free consultation and quote on every service. Send us a message, call, or visit us in Lilongwe.">
        Let&apos;s talk about <span className="cyan">your needs</span>
      </PageHead>

      <section style={{ padding: '64px 0' }}>
        <div className="wrap row" style={{ gap: 32 }}>
          <div className="card row-main">
            <QuoteForm />
          </div>

          <div className="row-side stack">
            <div className="card stack" style={{ gap: 22 }}>
              <div className="contact-row">
                <span className="icon"><Icon name="pin" /></span>
                <div>
                  <p className="k">LOCATION</p>
                  <p className="v">{site.location}</p>
                  <p className="muted" style={{ fontSize: 14 }}>{site.address}</p>
                </div>
              </div>
              <div className="contact-row">
                <span className="icon"><Icon name="phone" /></span>
                <div>
                  <p className="k">PHONE</p>
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
                  <p className="k">EMAIL</p>
                  <p className="v"><a href={'mailto:' + site.email}>{site.email}</a></p>
                </div>
              </div>
              <div className="contact-row">
                <span className="icon"><Icon name="clock" /></span>
                <div>
                  <p className="k">OPENING HOURS</p>
                  <p className="v">{site.hours[0]}</p>
                  <p className="muted" style={{ fontSize: 14 }}>{site.hours[1]}</p>
                </div>
              </div>
            </div>
            <a href={whatsappLink(site.whatsappQuote)} target="_blank" rel="noopener" className="btn btn-block">Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: 80 }}>
        <div className="wrap stack" style={{ gap: 20 }}>
          <div>
            <p className="eyebrow">Find us</p>
            <h2 className="h2" style={{ marginTop: 6 }}>Our location in Lilongwe</h2>
          </div>
          <div className="map">
            <iframe
              title="Map showing Tech Minds and General Dealers in Lilongwe"
              src={'https://www.google.com/maps?q=' + encodeURIComponent(site.mapQuery) + '&z=13&output=embed'}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
