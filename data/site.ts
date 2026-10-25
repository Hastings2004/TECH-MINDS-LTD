// Business details used across the whole site. Edit here and every page updates.
export const site = {
  name: 'Tech Minds and General Dealers',
  tagline: 'Professional tech solutions for businesses and individuals in Lilongwe, Malawi.',
  location: 'Lilongwe, Malawi',
  // TODO: add the street / area / landmark of the office
  address: '[Street / area / landmark]',
  // TODO: replace with the exact business address or Google Maps place
  mapQuery: 'Lilongwe, Malawi',
  // TODO: confirm opening hours
  hours: ['[Mon – Fri, 8:00 – 17:00]', '[Sat - 8:00 - 12:00]'],
  email: 'matolaowen1@gmail.com',
  phones: [
    { display: '+265 993 835 308', tel: '+265993835308' },
    { display: '+265 881 373 363', tel: '+265881373363' },
  ],
  // Floating WhatsApp button shown on every page
  whatsappChat: '265881373363',
  // Quote form "Send via WhatsApp" and the Contact page "Chat on WhatsApp" button
  whatsappQuote: '265881373363',
};

export const whatsappLink = (number: string, text?: string) =>
  'https://wa.me/' + number + (text ? '?text=' + encodeURIComponent(text) : '');
