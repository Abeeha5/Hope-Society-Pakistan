/**
 * Editable page content that isn't a blog post, event or book.
 * Add a `photo: '/images/...'` to any person, club or gallery item to replace
 * its placeholder.
 */

export const departments = [
  { n: '01', t: 'Creative Arts & Literature', s: 'Writing, poetry, art, music and dramatics clubs', anchor: 'arts' },
  { n: '02', t: 'Media Cell', s: 'Photography, film and storytelling for every event', anchor: 'media' },
  { n: '03', t: 'Administration & Operations', s: 'Finance, information, publication and outreach', anchor: 'admin' },
  { n: '04', t: 'Peace League', s: 'Sports, tours and capacity-building workshops', anchor: 'peace' },
  { n: '05', t: 'Volunteers & Internships', s: 'Hands-on experience that turns into leadership', anchor: 'vol' },
];

export const clubs: { t: string; d: string; photo?: string }[] = [
  { t: 'Writing & Reading', d: 'Book circles, essay contests and the newsletter.' },
  { t: 'Poetry', d: 'Mushairas, recitation and Iqbal Festival entries.' },
  { t: 'Art', d: 'Calligraphy, painting and campus exhibitions.' },
  { t: 'Music', d: 'Qawwali, national songs and evening performances.' },
  { t: 'Dramatics', d: 'Stage plays and street theatre with a message.' },
];

export const otherDepartments: { anchor: string; n: string; t: string; d: string; u: string; photo?: string }[] = [
  { anchor: 'admin', n: '03', t: 'Administration & Operations', d: 'The engine room. Plans budgets, keeps records, publishes material and builds relationships with schools, partners and media.', u: 'Finance · Information · Publication · Outreach' },
  { anchor: 'peace', n: '04', t: 'Peace League', d: 'Unity through play and travel. Sports tournaments, study tours and capacity-building workshops that bring students from different backgrounds together.', u: 'Sports · Tours & visits · Workshops' },
  { anchor: 'vol', n: '05', t: 'Volunteers & Internships', d: 'Your on-ramp. Volunteer at events, intern with a department, and grow from Change Maker to Peace Maker to Shaheen.', u: '1,200+ volunteers · 100+ interns', photo: '/images/monument-vests.jpg' },
];

// TODO: replace with real, consented testimonials
export const voices: { q: string; name: string; role: string; photo?: string }[] = [
  { q: "I joined as a volunteer for one event. Two years later I'm running the poetry club at my university.", name: 'Ayesha K.', role: 'Poetry Club Coordinator, Lahore chapter' },
  { q: 'HOPE gave me a stage before I knew I needed one. My first debate was at the Iqbal Festival.', name: 'Hamza R.', role: 'Embassy Lead, Peshawar' },
  { q: "We started an embassy with four friends. Now it's the most active society on campus.", name: 'Zainab M.', role: 'Peace Maker, Karachi chapter' },
];

export const signaturePrograms = ['Iqbal Festival', 'Peace Conference', 'Hope Day', 'Youth Symposium', 'Executive Summit', 'Hope Circle', 'Hussain The Global Hope', 'Webinars & Workshops'];

export const homePrograms = [
  { n: '02', when: 'Dec', t: 'Peace Conference', d: 'Students, scholars and civil society on building cohesion across divides.', href: '/events/peace-conference-2026' },
  { n: '03', when: 'Annual', t: 'Hope Day', d: 'Our founding celebration: awards, performances and the yearly newsletter.', href: '/events/hope-day-2026' },
  { n: '04', when: 'Feb', t: 'Youth Symposium', d: 'Ideas from young leaders on education, opportunity and the future.', href: '/events/youth-symposium-2027' },
  { n: '05', when: 'Mar', t: 'Executive Summit', d: 'Cabinets from every chapter meet to plan the year ahead.', href: '/events/executive-summit-2026' },
];

export const hope = [
  { l: 'H', w: 'Harmony', d: 'Peace, unity and social cohesion among individuals and communities.' },
  { l: 'O', w: 'Opportunity', d: 'Education, skill development and socio-economic growth for all.' },
  { l: 'P', w: 'Patriotism', d: 'Love for Pakistan through cultural heritage and national identity.' },
  { l: 'E', w: 'Empowerment', d: 'Youth, students and women as active contributors to society.' },
];

export const milestones = [
  { y: '2021', t: 'Hope Society Pakistan founded in Islamabad.' },
  { y: '2022', t: 'First campus embassies and the Writing & Reading Club.' },
  { y: '2023', t: 'Hope Media Cell launched; first Peace Conference.' },
  { y: '2024', t: 'Chapters form at provincial level.' },
  { y: '2025', t: '1,200+ volunteers and 50+ events reached.' },
  { y: '2026', t: 'Manifesto revised; new website launches.' },
];

export const chairman = { name: 'Husayn Paras Naqvi', role: 'Chairman, Hope Society Pakistan', bio: 'Founder of Hope Society Pakistan and author of its manifesto.', photo: undefined as string | undefined };

// TODO: fill in real names and photos
export const cabinet: { n: string; r: string; b: string; photo?: string }[] = [
  ['President', 'Leads the federal cabinet and the society’s annual program.'],
  ['Federal Chief Coordinator', 'Coordinates provinces, chapters and embassies.'],
  ['Finance & Publication Coordinator', 'Budgets, sponsorships and the yearly newsletter.'],
  ['Writing & Reading Club Coordinator', 'Book circles, essay contests and literary events.'],
  ['Poetry Club Coordinator', 'Mushairas and the Iqbal Festival poetry track.'],
  ['Music Club Coordinator', 'Performances and cultural evenings.'],
  ['Art Club Coordinator', 'Exhibitions, calligraphy and visual campaigns.'],
  ['Information & Outreach Coordinator', 'Partnerships with schools and institutions.'],
  ['Media Club Coordinator', 'Leads Hope Media Cell and all coverage.'],
  ['Peace League Coordinator', 'Sports, tours and capacity-building.'],
].map(([r, b]) => ({ n: 'Member name', r, b }));

export const advisors: { n: string; r: string; photo?: string }[] = ['Education', 'Civil society', 'Media', 'Public policy'].map((r) => ({ n: 'Advisor name', r: 'Advisor · ' + r }));

/** [city, province, embassies, lat, lng, isHQ] */
export const chapters: [string, string, number, number, number, boolean?][] = [
  ['Islamabad', 'Islamabad Capital Territory', 14, 33.6844, 73.0479, true],
  ['Rawalpindi', 'Punjab', 9, 33.5651, 73.0169],
  ['Lahore', 'Punjab', 12, 31.5204, 74.3587],
  ['Multan', 'Punjab', 5, 30.1575, 71.5249],
  ['Faisalabad', 'Punjab', 4, 31.4504, 73.135],
  ['Karachi', 'Sindh', 10, 24.8607, 67.0011],
  ['Hyderabad', 'Sindh', 3, 25.396, 68.3578],
  ['Peshawar', 'Khyber Pakhtunkhwa', 6, 34.0151, 71.5249],
  ['Abbottabad', 'Khyber Pakhtunkhwa', 3, 34.1688, 73.2215],
  ['Quetta', 'Balochistan', 3, 30.1798, 66.975],
  ['Gilgit', 'Gilgit-Baltistan', 2, 35.9208, 74.308],
  ['Muzaffarabad', 'Azad Kashmir', 2, 34.37, 73.4711],
];

/** Gallery wall. `h` is the tile height on desktop. */
export const gallery: { cat: 'Events' | 'Clubs' | 'Peace League'; cap: string; h: number; photo?: string }[] = [
  { cat: 'Events', cap: 'Iqbal Festival', h: 320 },
  { cat: 'Clubs', cap: 'Poetry night', h: 220 },
  { cat: 'Events', cap: 'Hussain The Global Hope peace walk', h: 260, photo: '/images/peace-walk.jpg' },
  { cat: 'Peace League', cap: 'Football league', h: 260 },
  { cat: 'Clubs', cap: 'Art exhibition', h: 340 },
  { cat: 'Events', cap: 'At Minar-e-Pakistan', h: 400, photo: '/images/minar-e-pakistan.jpg' },
  { cat: 'Peace League', cap: 'Pakistan Monument visit', h: 300, photo: '/images/monument-vests.jpg' },
  { cat: 'Events', cap: 'Youth Symposium', h: 380 },
  { cat: 'Clubs', cap: 'Dramatics', h: 240 },
  { cat: 'Peace League', cap: 'Workshop', h: 280 },
  { cat: 'Peace League', cap: 'Pakistan Monument at dusk', h: 300, photo: '/images/monument-backs.jpg' },
  { cat: 'Clubs', cap: 'Music evening', h: 230 },
];

/** Featured film on the gallery page. Put a YouTube video ID to make it play. */
export const featuredFilm = { title: 'Hope Day 2026', length: '3:42', youtubeId: '', poster: undefined as string | undefined };

export const faq: Record<string, [string, string][]> = {
  Joining: [
    ['Who can become a member?', 'Anyone directly or indirectly linked with an educational institution: school, college or university students, and teachers. Membership is open to all, regardless of race, colour, religion, language or sect.'],
    ['When can I join?', 'We run two membership drives a year, in January and July. You can apply anytime and we’ll place you in the next intake.'],
    ['Is there a membership fee?', 'Membership is free. Some events may have a small registration fee to cover costs.'],
    ['What is a Hopian?', 'A Hopian is a registered member of Hope Society Pakistan who has joined a department and takes part in its programs.'],
  ],
  Volunteering: [
    ['What are Change Maker, Peace Maker and Shaheen?', 'They are the three stages of the volunteer path. You start as a Change Maker, lead teams as a Peace Maker, and mentor others as a Shaheen.'],
    ['Can I intern with HOPE?', 'Yes. Departments take interns each drive for media, outreach, publication and event management. Over 100 students have interned with us.'],
    ['Do volunteers get certificates?', 'Every volunteer receives a certificate for each event they help deliver.'],
  ],
  Chapters: [
    ['What is an embassy?', 'An embassy is HOPE inside a single institution, run by its students under the guidance of the local chapter cabinet.'],
    ['How do I start an embassy at my school?', 'Gather three to five students, contact your nearest chapter focal person, and they will guide you through approval.'],
    ['Where is the headquarters?', 'Our Federal Office is in Islamabad.'],
  ],
};
