# Tech Minds and General Dealers — Website (Next.js)

The company website built with [Next.js](https://nextjs.org) (React). Every page is
pre-built to plain HTML (`output: 'export'`), so it loads fast, is fully readable by
Google, and can be hosted anywhere.

## Editing content

Most changes only need the files in `data/` — no page code:

| File | What it controls |
|---|---|
| `data/site.ts` | Phone numbers, email, WhatsApp numbers, address, opening hours, map location |
| `data/services.ts` | The four services: summaries, cards, tags, quote button text |
| `data/team.ts` | Team members: name, role, bio, photo, LinkedIn, email (`hidden: true` hides someone) |
| `data/projects.ts` | Portfolio projects. Filter tabs appear automatically for categories that have projects |

Images live in `public/images/` (`team/` and `portfolio/`).

## Structure

```
app/                 one folder per page (page.tsx), plus layout.tsx and globals.css
  page.tsx           Home
  services/          Services
  about/             About Us
  team/              Our Team
  portfolio/         Portfolio
  contact/           Contact (quote form + map)
  not-found.tsx      404 page
components/          Header, Footer, icons, team grid + photo lightbox,
                     portfolio filters, quote form, scroll animations
data/                site content (see above)
public/images/       favicon, team photos, portfolio screenshots
```

## Commands (run in terminal, where Node.js is installed

```bash
npm install        # first time only
npm run dev        # local development at http://localhost:3000
npm run build      # build the static site into out/
npm run preview    # serve the built out/ folder locally
```

## How the quote form works

There is no backend. "Send via WhatsApp" opens WhatsApp with the customer's request
already typed (number: `whatsappQuote` in `data/site.ts`). "Send by Email" opens their
email app addressed to `email`. Service buttons link to `/contact?service=...`, which
pre-selects that service.


