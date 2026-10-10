/**
 * Site-wide settings. Edit this file to change contact details, social links,
 * the forms endpoint and payment details. Everything else reads from here.
 */
export const site = {
  name: 'Hope Society Pakistan',
  domain: 'hopesocietypakistan.org',
  phone: '0333 4673015',
  phoneHref: 'tel:+923334673015',
  whatsapp: 'https://wa.me/923334673015',
  email: 'hopesociety92@gmail.com',
  address: 'Federal Office · Islamabad, Pakistan',
  // TODO: paste the real Google Maps link for the office
  mapsUrl: 'https://maps.google.com/?q=Islamabad,Pakistan',

  socials: {
    // TODO: confirm these URLs
    instagram: { label: 'hope_society_pakistan', url: 'https://www.instagram.com/hope_society_pakistan/' },
    facebook: { label: 'HOPE Society Pakistan', url: 'https://www.facebook.com/' },
    linkedin: { label: 'Hope Society Pakistan', url: 'https://www.linkedin.com/' },
    youtube: { label: 'Hope Media Cell', url: 'https://www.youtube.com/' },
  },

  /**
   * Where every form (membership, contact, partner, event registration,
   * newsletter) is sent. Deploy forms/google-apps-script.gs as a Web App and
   * paste its URL here, or set PUBLIC_FORMS_ENDPOINT in your host's env vars.
   */
  formsEndpoint: import.meta.env.PUBLIC_FORMS_ENDPOINT || '',

  /**
   * Base URL for library PDFs. Leave as '/library/' while PDFs live in
   * public/library. When you move them to Cloudflare R2, change this to the
   * bucket's public URL, e.g. 'https://library.hopesocietypakistan.com/'.
   */
  libraryBaseUrl: import.meta.env.PUBLIC_LIBRARY_BASE_URL || '/library/',

  // TODO: replace with the society's real accounts before launch
  payments: [
    { method: 'Bank transfer', title: 'Hope Society Pakistan', detail: 'Bank name · IBAN PK00 XXXX 0000 0000 0000 0000' },
    { method: 'JazzCash', title: 'Account title', detail: '03XX XXXXXXX' },
    { method: 'Easypaisa', title: 'Account title', detail: '03XX XXXXXXX' },
  ],
};

export const stats = [
  { n: 300, suffix: '+', label: 'Members' },
  { n: 100, suffix: '+', label: 'Interns' },
  { n: 1200, suffix: '+', label: 'Volunteers' },
  { n: 50, suffix: '+', label: 'Events' },
  { n: 30, suffix: '+', label: 'Campaigns' },
  { n: 11, suffix: 'k+', label: 'Followers' },
];
