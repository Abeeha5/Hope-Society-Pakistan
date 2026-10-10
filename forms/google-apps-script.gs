/**
 * Hope Society Pakistan — form handler (free, no server needed)
 * ----------------------------------------------------------------
 * Every form on the website sends its data here. Each form type gets its own
 * tab in the Google Sheet (Membership, Contact, Event registration, ...),
 * created automatically on first use, and an email alert goes to NOTIFY_EMAIL.
 *
 * SETUP (one time, ~5 minutes):
 *  1. Create a Google Sheet from the society's Google account,
 *     e.g. "Hope Society — Website submissions".
 *  2. In the sheet: Extensions → Apps Script. Delete the sample code and
 *     paste this whole file. Save.
 *  3. Deploy → New deployment → type "Web app".
 *       Execute as: Me
 *       Who has access: Anyone
 *     Click Deploy, approve the permissions, and copy the Web app URL
 *     (it ends in /exec).
 *  4. Put that URL in the website: either set the environment variable
 *     PUBLIC_FORMS_ENDPOINT on Cloudflare Pages, or paste it into
 *     formsEndpoint in src/data/site.ts. Rebuild / redeploy.
 *
 * If you edit this script later, use Deploy → Manage deployments → Edit →
 * Version: New version, so the URL stays the same.
 */

const NOTIFY_EMAIL = 'hopesociety92@gmail.com'; // who gets an email per submission ('' to turn off)

const TAB_NAMES = {
  'membership': 'Membership',
  'contact': 'Contact',
  'event-registration': 'Event registration',
  'partnership': 'Partnership',
  'newsletter': 'Newsletter',
};

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = JSON.parse(e.postData.contents || '{}');
    const form = String(data.form || 'other');
    if (data.website) return ok_(); // honeypot field filled → bot

    const sheet = getSheet_(TAB_NAMES[form] || 'Other');
    const fields = Object.keys(data).filter((k) => k !== 'form');

    // Header row: keep existing columns, add any new ones at the end.
    let headers = sheet.getLastRow() ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0] : [];
    fields.forEach((f) => { if (headers.indexOf(f) === -1) headers.push(f); });
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight('bold');
    sheet.setFrozenRows(1);

    const row = headers.map((h) => (data[h] === undefined ? '' : String(data[h]).slice(0, 5000)));
    sheet.appendRow(row);

    if (NOTIFY_EMAIL && form !== 'newsletter') {
      const body = fields.map((f) => f + ': ' + data[f]).join('\n');
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        replyTo: isEmail_(data.email) ? data.email : NOTIFY_EMAIL,
        subject: '[Website] New ' + (TAB_NAMES[form] || form) + (data.name ? ' — ' + data.name : ''),
        body: body + '\n\nAll submissions: ' + SpreadsheetApp.getActive().getUrl(),
      });
    }
    return ok_();
  } catch (err) {
    console.error(err);
    return ContentService.createTextOutput(JSON.stringify({ ok: false })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return ContentService.createTextOutput('Hope Society form endpoint is running.');
}

function getSheet_(name) {
  const ss = SpreadsheetApp.getActive();
  return ss.getSheetByName(name) || ss.insertSheet(name);
}
function isEmail_(v) { return /^\S+@\S+\.\S+$/.test(String(v || '')); }
function ok_() {
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
