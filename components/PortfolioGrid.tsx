'use client';

import { useState } from 'react';
import { categories, type Project, type ProjectCategory } from '@/data/projects';

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all');
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
      <div className="grid grid-3">
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
