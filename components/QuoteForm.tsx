'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { WhatsAppIcon } from './Icon';
import { site, whatsappLink } from '@/data/site';
import { services } from '@/data/services';

const options = [...services.map((s) => s.name), 'Not sure / Other'];

// Pre-select a service from ?service=... in the URL. Kept in its own component inside
// <Suspense> so the rest of the form is still included in the pre-built HTML.
function ServicePreset({ onPreset }: { onPreset: (service: string) => void }) {
  const preset = useSearchParams().get('service');
  useEffect(() => {
    if (preset && options.includes(preset)) onPreset(preset);
  }, [preset, onPreset]);
  return null;
}

// No backend: the request opens in WhatsApp or the visitor's email app, ready to send.
export default function QuoteForm() {
  const form = useRef<HTMLFormElement>(null);
  const [service, setService] = useState(options[0]);
  const [status, setStatus] = useState<{ text: string; error?: boolean } | null>(null);

  const field = (name: string) => (form.current?.elements.namedItem(name) as HTMLInputElement | null)?.value.trim() || '';

  const buildMessage = () =>
    'Hello Tech Minds, I would like a quote.\n\n' +
    'Name: ' + field('name') + '\n' +
    'Phone: ' + field('phone') + '\n' +
    (field('email') ? 'Email: ' + field('email') + '\n' : '') +
    'Service: ' + service + '\n\n' +
    field('message');

  const valid = () => {
    if (form.current && !form.current.checkValidity()) {
      form.current.reportValidity();
      setStatus({ text: 'Please fill in your name, phone number and message.', error: true });
      return false;
    }
    return true;
  };

  const sendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid()) return;
    window.open(whatsappLink(site.whatsappQuote, buildMessage()), '_blank', 'noopener');
    setStatus({ text: 'Thank you! WhatsApp has opened with your request. Press send and our team will reply shortly.' });
  };

  const sendEmail = () => {
    if (!valid()) return;
    const subject = 'Quote request: ' + service;
    window.location.href = 'mailto:' + site.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(buildMessage());
    setStatus({ text: 'Your email app has opened with your request. Press send and we will reply shortly.' });
  };

  return (
    <form ref={form} className="form" noValidate onSubmit={sendWhatsApp}>
      <Suspense fallback={null}>
        <ServicePreset onPreset={setService} />
      </Suspense>
      <div>
        <p className="eyebrow">Request a quote</p>
        <h2 style={{ fontSize: 26, fontWeight: 900, color: '#fff', marginTop: 6 }}>Send us a message</h2>
      </div>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Full name *</label>
          <input id="name" name="name" className="input" type="text" autoComplete="name" required placeholder="Your name" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone / WhatsApp *</label>
          <input id="phone" name="phone" className="input" type="tel" autoComplete="tel" required placeholder="+265 ..." />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" className="input" type="email" autoComplete="email" placeholder="you@example.com" />
        </div>
        <div className="field">
          <label htmlFor="service">Service needed</label>
          <select id="service" name="service" className="input" value={service} onChange={(e) => setService(e.target.value)}>
            {options.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">Message *</label>
        <textarea id="message" name="message" className="input" rows={5} required placeholder="Tell us about your project or the problem with your device" />
      </div>
      <div className="btn-row">
        <button type="submit" className="btn">
          <WhatsAppIcon size={20} /> Send via WhatsApp
        </button>
        <button type="button" className="btn-outline" onClick={sendEmail}>
          Send by Email
        </button>
      </div>
      <p className="form-note">Your request opens in WhatsApp or your email app, ready to send.</p>
      <div className={'form-status' + (status ? ' show' : '') + (status?.error ? ' error' : '')} role="status" aria-live="polite">
        {status?.text}
      </div>
    </form>
  );
}
