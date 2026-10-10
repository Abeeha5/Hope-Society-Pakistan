import { getCollection, type CollectionEntry } from 'astro:content';

export const fmtDate = (d: Date) => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Karachi' });
export const fmtMonth = (d: Date) => d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric', timeZone: 'Asia/Karachi' });
export const dayNum = (d: Date) => d.toLocaleDateString('en-GB', { day: '2-digit', timeZone: 'Asia/Karachi' });
export const monShort = (d: Date) => d.toLocaleDateString('en-GB', { month: 'short', timeZone: 'Asia/Karachi' });
export const fullDay = (d: Date) => d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Karachi' });

export async function getPosts() {
  return (await getCollection('blog', (p) => !p.data.draft)).sort((a, b) => +b.data.date - +a.data.date);
}

export async function getEvents() {
  return (await getCollection('events')).sort((a, b) => +a.data.date - +b.data.date);
}

/** End of the event's day, so an event stays "upcoming" until the day is over. */
export const eventEnds = (e: CollectionEntry<'events'>) => +e.data.date + 24 * 3600 * 1000;

export function readingTime(body = '') {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}
