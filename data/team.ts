export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  /** Photo in public/images/team/ */
  photo: string;
  /** Where the face sits in the photo, and how far to zoom the round avatar */
  focus: string;
  zoom: number;
  linkedin: string;
  email: string;
  /** Set to true to hide this person from the site */
  hidden?: boolean;
};

export const team: TeamMember[] = [
  {
    name: 'Phillip Mwale',
    role: 'Founder & Network Engineer',
    bio: 'Founder of Tech Minds, with over 10 years as an IT specialist and assistant lecturer at Lilongwe Technical College. CCNA trained and awaiting graduation with a BSc in ICT from Mzuzu University, Phillip leads our network projects.',
    photo: '/images/team/phillip.jpg',
    focus: '51% 17%',
    zoom: 3.8,
    linkedin: 'https://www.linkedin.com/in/phillip-mwale-50823969/',
    email: 'phillipmwa@gmail.com',
  },
  {
    name: 'Owen Matola',
    role: 'Lead Software Developer',
    bio: 'Leads our software team. Owen is a full-stack engineer building multi-tenant SaaS platforms with Next.js, NestJS and PostgreSQL. He studied Information Systems at the University of Malawi and is awaiting graduation with a BSc in ICT from Mzuzu University.',
    photo: '/images/team/owen.jpg',
    focus: '45% 38%',
    zoom: 1.6,
    linkedin: 'https://www.linkedin.com/in/owen-matola-7367b4234/',
    email: 'matolaowen1@gmail.com',
  },
  {
    name: 'Hastings Chitenje',
    role: 'Full Stack Developer',
    bio: "Hastings builds web and mobile apps with Laravel, Ruby on Rails, React, Next.js, Vue.js and Flutter, including the Mlumbwira Investments website and Mzuzu University's e-workflow system. He is awaiting graduation with a BSc in ICT from Mzuzu University and holds Cisco CCNA and cybersecurity certifications.",
    photo: '/images/team/hastings.jpg',
    focus: '52% 30%',
    zoom: 3.2,
    linkedin: 'https://www.linkedin.com/in/hastings-chitenje-482b85389/',
    email: 'hastingschitenje81@gmail.com',
  },
];
