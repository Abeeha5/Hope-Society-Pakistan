export type NavItem = { label: string; href: string; sub: string };
export type NavGroup = { label: string; href: string; items: NavItem[] };

export const navGroups: NavGroup[] = [
  {
    label: 'About', href: '/about',
    items: [
      { label: 'About us', href: '/about', sub: 'Our story, philosophy and milestones' },
      { label: 'Leadership', href: '/team', sub: 'Federal cabinet and advisors' },
      { label: 'Our impact', href: '/impact', sub: 'Five years in numbers' },
      { label: 'FAQ', href: '/faq', sub: 'Joining, volunteering, embassies' },
    ],
  },
  {
    label: 'Events', href: '/events',
    items: [
      { label: 'Upcoming events', href: '/events#upcoming', sub: "What's coming up next" },
      { label: 'Past events', href: '/events#past', sub: 'Reports and photos from past programs' },
      { label: 'Signature programs', href: '/events#signature', sub: 'Iqbal Festival, Hope Day and more' },
    ],
  },
  {
    label: 'Community', href: '/departments',
    items: [
      { label: 'Departments & clubs', href: '/departments', sub: 'Five ways to belong' },
      { label: 'Chapters & embassies', href: '/chapters', sub: 'Find HOPE near you' },
      { label: 'Contact', href: '/contact', sub: 'Reach the federal office' },
    ],
  },
  {
    label: 'Media', href: '/gallery',
    items: [
      { label: 'Gallery', href: '/gallery', sub: 'Photos and films by Hope Media Cell' },
      { label: 'Blog', href: '/blog', sub: 'The Hope Journal' },
      { label: 'Library', href: '/library', sub: 'Books and PDFs to read free' },
    ],
  },
];

export const ctaItems: NavItem[] = [
  { label: 'Become a member', href: '/get-involved#join', sub: 'Join the next membership drive' },
  { label: 'Volunteer', href: '/get-involved#path', sub: 'Start as a Change Maker' },
  { label: 'Donate', href: '/donate', sub: 'Fund events and workshops' },
  { label: 'Partner with us', href: '/donate#partner', sub: 'Sponsor or co-host a program' },
];
