'use client';

import { useEffect, useRef, useState } from 'react';
import { revealElement } from '@/components/SiteEffects';
import { categories, type Project, type ProjectCategory } from '@/data/projects';

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all');
  const grid = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  // Switching tabs brings the matching projects in one after another
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    grid.current
      ?.querySelectorAll<HTMLElement>('.project:not([hidden])')
      .forEach((el, i) => revealElement(el, 'translateY(20px) scale(0.96)', 'translateY(0px) scale(1)', i * 0.07));
  }, [filter]);
  // Only show tabs for categories that have projects
  const tabs = categories.filter((c) => projects.some((p) => p.category === c.id));

  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects">
        {[{ id: 'all' as const, label: 'All' }, ...tabs].map((tab) => (
          <button key={tab.id} type="button" className="filter" aria-pressed={filter === tab.id} onClick={() => setFilter(tab.id)}>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="grid grid-3" ref={grid}>
        {projects.map((p) => (
          <article className="project reveal" key={p.title} hidden={filter !== 'all' && filter !== p.category}>
            <div className="thumb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={'Screenshot of ' + p.title} loading="lazy" />
            </div>
            <div className="project-body">
              <span className="project-cat">{p.label.toUpperCase()}</span>
              <h3>{p.title}</h3>
              <p className="muted">{p.description}</p>
              <ul className="tags">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <p className="client">
                Client: <span className="cyan">{p.client}</span>
              </p>
              {p.live && (
                <a className="project-link" href={p.live} target="_blank" rel="noopener">
                  View live site &rarr;
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
