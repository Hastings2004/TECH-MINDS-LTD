'use client';

import { useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import Icon from './Icon';
import type { TeamMember } from '@/data/team';

export default function TeamGrid({ members }: { members: TeamMember[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [photo, setPhoto] = useState<TeamMember | null>(null);

  const open = (member: TeamMember) => {
    setPhoto(member);
    if (dialog.current?.showModal) dialog.current.showModal();
    else window.open(member.photo, '_blank', 'noopener'); // Old browsers without <dialog>
  };

  return (
    <>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))' }}>
        {members.map((m) => (
          <article className="card member reveal" key={m.name}>
            <button type="button" className="avatar" aria-label={'View full photo of ' + m.name} onClick={() => open(m)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={m.photo} alt={m.name} loading="lazy" style={{ '--focus': m.focus, '--zoom': m.zoom } as CSSProperties} />
            </button>
            <div>
              <h3 style={{ fontSize: 20 }}>{m.name}</h3>
              <p className="role">{m.role.toUpperCase()}</p>
            </div>
            <p className="muted">
              {m.bio}{' '}
              <a className="bio-link" href={m.linkedin} target="_blank" rel="noopener">Full profile on LinkedIn &rarr;</a>
            </p>
            <div className="socials">
              <a href={m.linkedin} aria-label="LinkedIn profile" target="_blank" rel="noopener"><Icon name="linkedin" size={18} /></a>
              <a href={'mailto:' + m.email} aria-label={'Email ' + m.name.split(' ')[0]}><Icon name="mail" size={18} /></a>
            </div>
          </article>
        ))}
      </div>

      <dialog
        className="lightbox"
        ref={dialog}
        aria-label="Team member photo"
        // Close when clicking the backdrop (outside the photo)
        onClick={(e) => e.target === dialog.current && dialog.current.close()}
      >
        <button type="button" className="lightbox-close" aria-label="Close photo" onClick={() => dialog.current?.close()}>
          &times;
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {photo && <img src={photo.photo} alt={photo.name} />}
      </dialog>
    </>
  );
}
