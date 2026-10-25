import type { Metadata } from 'next';
import { Cta, PageHead } from '@/components/Blocks';
import TeamGrid from '@/components/TeamGrid';
import { team } from '@/data/team';

const description = 'Meet the developers, technicians and network specialists at Tech Minds and General Dealers in Lilongwe.';

export const metadata: Metadata = {
  title: 'Our Team',
  description,
  openGraph: { title: 'Our Team | Tech Minds and General Dealers', description },
};

export default function TeamPage() {
  return (
    <>
      <PageHead pill="OUR TEAM" intro="Developers, technicians and network specialists working together to keep your business connected and running.">
        The people behind <span className="cyan">Tech Minds</span>
      </PageHead>

      <section className="section">
        <div className="wrap">
          <TeamGrid members={team.filter((m) => !m.hidden)} />
        </div>
      </section>

      <Cta title="Want to work with our team?" text="Tell us about your project or problem and the right person will get back to you." button="Contact Us" />
    </>
  );
}
