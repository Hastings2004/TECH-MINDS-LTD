'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Icon, { Logo } from './Icon';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/team', label: 'Our Team' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname().replace(/\/$/, '') || '/';
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="wrap nav-inner">
        <Link href="/" className="brand" aria-label="Tech Minds and General Dealers, home" onClick={close}>
          <Logo />
          <span>
            <b>TECH MINDS AND</b>
            <small>GENERAL DEALERS</small>
          </span>
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen(!open)}
        >
          <Icon name="menu" size={22} strokeWidth={2} />
        </button>
        <nav className={open ? 'nav-links open' : 'nav-links'} id="nav-links" aria-label="Main">
          {links.map((link) => (
            <Link key={link.href} href={link.href} aria-current={pathname === link.href ? 'page' : undefined} onClick={close}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn" onClick={close}>
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
