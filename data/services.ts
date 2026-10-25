import type { IconName } from '@/components/Icon';

export type ServiceCard = {
  icon: IconName;
  title: string;
  items: { title: string; text: string }[];
};

export type Service = {
  id: string;
  /** Full name, also used to pre-select the service on the contact form */
  name: string;
  /** Short label for the footer and jump links */
  short: string;
  icon: IconName;
  /** One-line summary for the home page */
  summary: string;
  heading: string;
  headingCyan: string;
  intro: string;
  cta: string;
  cards: ServiceCard[];
  tags: string[];
};

export const services: Service[] = [
  {
    id: 'web',
    name: 'Web & Systems Development',
    short: 'Web & Systems',
    icon: 'code',
    summary: 'Responsive websites, e-commerce stores and custom systems for inventory, clinics and accommodation.',
    heading: 'Transform your business',
    headingCyan: 'digital presence',
    intro: 'Fast websites and custom systems tailored to automate your workflows and support your growth.',
    cta: 'Request a project quote',
    cards: [
      {
        icon: 'monitor',
        title: 'Web Design & Development',
        items: [
          { title: 'Modern, Responsive Layouts', text: 'Optimised for mobile, tablet and desktop screens.' },
          { title: 'High Speed & Performance', text: 'Fast loading speeds to retain visitors and customers.' },
          { title: 'E-Commerce & Portfolios', text: 'Custom web stores, business sites and blogs.' },
        ],
      },
      {
        icon: 'code',
        title: 'Custom System Development',
        items: [
          { title: 'Tailored Web Applications', text: 'Built to match your unique business workflow.' },
          { title: 'Database & Management Systems', text: 'Secure inventory, clinic and accommodation apps.' },
          { title: 'Automation & Dashboards', text: 'Real-time reporting and administrative controls.' },
        ],
      },
    ],
    tags: ['Business Websites', 'Online Stores', 'Management Systems', 'Dashboards'],
  },
  {
    id: 'repairs',
    name: 'Hardware & Software Repairs',
    short: 'Repairs',
    icon: 'wrench',
    summary: 'Diagnostics, upgrades, screen and battery replacements, virus removal and data recovery.',
    heading: 'Device giving you',
    headingCyan: 'trouble?',
    intro: 'We diagnose the fault, agree the repair plan with you, fix it and hand it back tested.',
    cta: 'Book a repair',
    cards: [
      {
        icon: 'laptop',
        title: 'Computer & Laptop Repair',
        items: [
          { title: 'Diagnostics & Component Repair', text: 'Testing and component-level repairs of faults.' },
          { title: 'Upgrades & Replacements', text: 'RAM, SSD, keyboards, batteries and screens.' },
          { title: 'Power & Motherboard Faults', text: 'Power issues, motherboard checks and fan care.' },
        ],
      },
      {
        icon: 'shield',
        title: 'Software Troubleshooting',
        items: [
          { title: 'OS Installation & Activation', text: 'Windows 11 / 10 installs, updates and activation.' },
          { title: 'Virus & Malware Removal', text: 'Spyware cleanup with full system optimisation.' },
          { title: 'Data Recovery & Tuning', text: 'Driver updates, software setup and performance.' },
        ],
      },
    ],
    tags: ['HP • Dell • Lenovo & More', 'Printers & Copiers', 'Networking Gear', 'Windows 11 / 10'],
  },
  {
    id: 'network',
    name: 'Network Solutions',
    short: 'Networking',
    icon: 'network',
    summary: 'Business internet, Wi-Fi and LAN setup, firewalls, VPN access and managed network support.',
    heading: 'Reliable networks',
    headingCyan: 'for your business',
    intro: 'Connectivity that holds up at peak hours, secured against threats and supported as you grow.',
    cta: 'Plan my network',
    cards: [
      {
        icon: 'network',
        title: 'Network & Connectivity',
        items: [
          { title: 'Business-Grade Internet', text: 'Reliable broadband and fibre for peak business hours.' },
          { title: 'Wi-Fi & LAN Setup', text: 'Access points, switches and cabling for PCs and POS.' },
          { title: 'Network Design & Scaling', text: 'Upgrades as your team grows or relocates.' },
        ],
      },
      {
        icon: 'shield',
        title: 'Network Security & Support',
        items: [
          { title: 'Firewalls & Threat Management', text: 'Block malware, hackers and unauthorised access.' },
          { title: 'VPN & Secure Remote Access', text: 'Safely connect to company resources from anywhere.' },
          { title: 'Managed Network Services', text: 'Ongoing monitoring, maintenance and updates.' },
        ],
      },
    ],
    tags: ['VoIP Phone Systems', 'Cloud & Backup', 'VLAN Segmentation', 'Network as a Service'],
  },
  {
    id: 'office',
    name: 'Office 365 & Licensing',
    short: 'Office 365 & Licensing',
    icon: 'document',
    summary: 'Microsoft 365 deployment, OneDrive and SharePoint, and genuine Windows and Office activation.',
    heading: 'Office 365 & software',
    headingCyan: 'activation services',
    intro: 'We assess your needs, install apps and accounts, apply genuine licensing and support renewals.',
    cta: 'Get Office activated',
    cards: [
      {
        icon: 'document',
        title: 'Office 365 Setup',
        items: [
          { title: 'Full Microsoft 365 Deployment', text: 'Word, Excel, PowerPoint, Outlook, OneNote and more.' },
          { title: 'Desktop Apps & Cloud Setup', text: 'App installs, cloud configuration and user accounts.' },
          { title: 'OneDrive & SharePoint', text: 'Document sync and workflow optimisation.' },
        ],
      },
      {
        icon: 'key',
        title: 'Licensing & Activation',
        items: [
          { title: 'Windows & Office Activation', text: 'Safe, authentic activation services.' },
          { title: 'License Fixes & Renewals', text: 'License errors, renewals and account migration.' },
          { title: 'Corporate Volume Licensing', text: 'Setup for multi-device offices.' },
        ],
      },
    ],
    tags: ['Word & Excel', 'PowerPoint & Outlook', 'OneNote & More', 'Windows & Office'],
  },
];

/** Link to the contact page with this service pre-selected */
export const quoteHref = (service: Service) => '/contact?service=' + encodeURIComponent(service.name);
