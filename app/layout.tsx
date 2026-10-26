import type { Metadata, Viewport } from 'next';
import { Lato } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SiteEffects from '@/components/SiteEffects';
import { WhatsAppIcon } from '@/components/Icon';
import { site, whatsappLink } from '@/data/site';
import './globals.css';

const lato = Lato({ subsets: ['latin'], weight: ['400', '700', '900'], variable: '--font-lato', display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'Tech Minds and General Dealers | IT Solutions in Lilongwe, Malawi',
    template: '%s | Tech Minds and General Dealers',
  },
  description:
    'Websites, mobile apps and custom systems, website and app repair, computer and laptop repairs, business networks, and Office 365 setup in Lilongwe, Malawi. Free consultation and quote.',
  icons: { icon: '/images/favicon.svg' },
  openGraph: { type: 'website', siteName: site.name },
};

export const viewport: Viewport = { themeColor: '#081222' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={lato.variable} data-scroll-behavior="smooth">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <a className="wa-float" href={whatsappLink(site.whatsappChat)} target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">
          <WhatsAppIcon size={28} />
        </a>
        <SiteEffects />
      </body>
    </html>
  );
}
