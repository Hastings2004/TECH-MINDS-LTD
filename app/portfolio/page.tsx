import type { Metadata } from 'next';
import { Cta, PageHead } from '@/components/Blocks';
import PortfolioGrid from '@/components/PortfolioGrid';
import { projects } from '@/data/projects';

const description = 'Websites, custom systems, networks and IT projects delivered by Tech Minds and General Dealers in Lilongwe, Malawi.';

export const metadata: Metadata = {
  title: 'Portfolio',
  description,
  openGraph: { title: 'Portfolio | Tech Minds and General Dealers', description },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHead pill="PORTFOLIO" intro="A selection of websites, systems, networks and IT jobs we have delivered for clients in Lilongwe and beyond.">
        Projects we are <span className="cyan">proud of</span>
      </PageHead>

      <section style={{ padding: '56px 0 80px' }}>
        <div className="wrap">
          <PortfolioGrid projects={projects} />
        </div>
      </section>

      <Cta title="Have a project in mind?" text="Let us build the next success story together." button="Start Your Project" />
    </>
  );
}
