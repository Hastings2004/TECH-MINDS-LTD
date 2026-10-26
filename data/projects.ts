export type ProjectCategory = 'websites' | 'systems' | 'networking' | 'repairs' | 'office';

export const categories: { id: ProjectCategory; label: string }[] = [
  { id: 'websites', label: 'Websites' },
  { id: 'systems', label: 'Systems' },
  { id: 'networking', label: 'Networking' },
  { id: 'repairs', label: 'Repairs' },
  { id: 'office', label: 'Office 365' },
];

export type Project = {
  category: ProjectCategory;
  /** Small label above the title */
  label: string;
  title: string;
  description: string;
  tech: string[];
  client: string;
  /** Screenshot in public/images/portfolio/ */
  image: string;
  live?: string;
};

// Filter tabs only appear for categories that have at least one project.
// TODO: add real networking, repairs and Office 365 projects
export const projects: Project[] = [
  {
    category: 'websites',
    label: 'Website',
    title: 'Mlumbwira Investments',
    description: 'Production website for a Lilongwe tractor and farm equipment dealer, with machinery listings, servicing requests, request tracking and SMS notifications.',
    tech: ['Next.js 14', 'Node.js / Express', 'PostgreSQL + Prisma', "Africa's Talking SMS"],
    client: 'Mlumbwira Investments',
    image: '/images/portfolio/mlumwira.jpg',
    live: 'https://mlumbwira-investiment.vercel.app',
  },
  {
    category: 'systems',
    label: 'Custom System',
    title: 'LTCAAS (Lilongwe Technical College Accommodation Administration System)',
    description: 'A role-based platform for Lilongwe Technical College that digitises hostel applications, fee payments, bed allocation, and cafeteria meal cards. Features TVET-priority automatic allocation, live occupancy tracking, QR meal cards, bulk user import, audit logging, and eight exportable reports',
    tech: ['Laravel 12', 'React + Inertia.js', 'MySQL', 'Tailwind CSS'],
    client: 'Lilongwe Technical College',
    image: '/images/portfolio/ltc.png',
  },
  {
    category: 'websites',
    label: 'Website',
    title: 'CyberTrain: Cybersecurity Training Platform',
    description: 'Gamified cybersecurity awareness platform with interactive attack-and-defence simulations, a drag-and-drop lesson builder for instructors, XP and badges for learners, and a full admin portal',
    tech: ['React + TypeScript', 'Node.js / Express', 'PostgreSQL + Prisma', 'Material UI'],
    client: 'Mzuzu University',
    image: '/images/portfolio/cybertrain.png',
  },
  {
    category: 'websites',
    label: 'Website',
    title: 'The Strategy-Led Church',
    description: 'Production church website with events, sermons and member tools, helping ministers and leaders plan their ministry.',
    tech: ['Laravel', 'PHP / Blade', 'MySQL'],
    client: 'The Strategy-Led Church',
    image: '/images/portfolio/church.jpg',
    live: 'https://www.thestrategy-ledchurch.com/',
  },
  {
    category: 'systems',
    label: 'Custom System',
    title: 'Dynamic E-Workflow System (DEW)',
    description: 'Workflow automation platform that digitises academic, administrative and operational approvals across the university.',
    tech: ['Laravel 12', 'React + Inertia.js', 'MySQL'],
    client: 'Mzuzu University',
    image: '/images/portfolio/dew.jpg',
  },
  {
    category: 'systems',
    label: 'Web & Mobile App',
    title: 'Wavefy Music Streaming',
    description: 'Full-stack music streaming platform with playlists, uploads, listening stats and an admin panel, plus a Flutter mobile client.',
    tech: ['Flutter', 'Express.js', 'Node.js', 'MongoDB'],
    client: 'Freelance project',
    image: '/images/portfolio/wave.jpg',
    live: 'https://wise-streaming-app.vercel.app/',
  },
];
