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
    facebook: { label: 'HOPE Society Pakistan', url: 'https://www.facebook.com/share/1FPS2FXmB6/' },
    linkedin: { label: 'Hope Society Pakistan', url: 'https://www.linkedin.com/company/hope-society-pakistan-attock-chapter/' },
    youtube: { label: 'Hope Media Cell', url: 'https://youtube.com/@hopesocietypakistan?si=defKmltbaRWGA3mI' },
  },

  /**
   * Where every form (membership, contact, partner, event registration,
   * newsletter) is sent. Deploy forms/google-apps-script.gs as a Web App and
   * paste its URL here, or set PUBLIC_FORMS_ENDPOINT in your host's env vars.
   */
  formsEndpoint: import.meta.env.PUBLIC_FORMS_ENDPOINT || '',
};

export const stats = [
  { n: 500, suffix: '+', label: 'Members' },
  { n: 100, suffix: '+', label: 'Interns' },
  { n: 1500, suffix: '+', label: 'Volunteers' },
  { n: 70, suffix: '+', label: 'Events' },
  { n: 50, suffix: '+', label: 'Campaigns' },
  { n: 10, suffix: 'k+', label: 'Followers' },
];
