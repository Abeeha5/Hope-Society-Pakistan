/**
 * Shared form sender. Every form posts JSON to one endpoint (by default a
 * Google Apps Script web app that writes rows into a Google Sheet; see
 * forms/google-apps-script.gs). The `form` field tells the script which tab
 * to write to.
 */
export async function sendForm(endpoint: string, form: string, data: Record<string, unknown>): Promise<void> {
  if (!endpoint) {
    throw new Error('not-configured');
  }
  // Honeypot: bots fill hidden fields, humans don't.
  if (data.website) return;
  delete data.website;
  const payload = JSON.stringify({ form, submittedAt: new Date().toISOString(), page: location.pathname, ...data });
  // Apps Script doesn't send CORS headers, so we use a "simple" no-cors POST.
  // The response is opaque, so a network error is the only failure we can see.
  await fetch(endpoint, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: payload });
}

export function formData(form: HTMLFormElement): Record<string, string> {
  const out: Record<string, string> = {};
  new FormData(form).forEach((v, k) => { out[k] = String(v).trim(); });
  return out;
}

export function failMessage(err: unknown, email: string): string {
  if (err instanceof Error && err.message === 'not-configured') {
    return `Online forms aren't connected yet. Please email us at ${email} for now.`;
  }
  return `Something went wrong sending that. Please try again, or email ${email}.`;
}

/**
 * Wire a form: validates fields marked data-validate, sends, then swaps the
 * form for its success panel. Returns nothing; all behaviour is attribute-driven:
 *   <form data-form="membership" data-endpoint="..." data-email="...">
 *   <div class="field" data-validate="required|email|phone"> ... <span class="err">
 *   <div data-success hidden> ... <span data-first-name></span>
 *   <div class="form-error" data-error hidden>
 */
export function wireForms(root: ParentNode = document) {
  root.querySelectorAll<HTMLFormElement>('form[data-form]').forEach((form) => {
    const container = form.closest('[data-form-wrap]') || form.parentElement!;
    const success = container.querySelector<HTMLElement>('[data-success]');
    const errBox = form.querySelector<HTMLElement>('[data-error]');
    const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');

    const check = (field: HTMLElement): boolean => {
      const input = field.querySelector<HTMLInputElement>('input,textarea,select');
      if (!input) return true;
      const v = input.value.trim();
      const rule = field.dataset.validate;
      let ok = true;
      if (rule === 'required') ok = v.length > 0;
      if (rule === 'email') ok = /^\S+@\S+\.\S+$/.test(v);
      if (rule === 'phone') ok = v.replace(/\D/g, '').length >= 10;
      field.classList.toggle('invalid', !ok);
      input.setAttribute('aria-invalid', String(!ok));
      return ok;
    };
    form.querySelectorAll<HTMLElement>('[data-validate]').forEach((f) => {
      f.querySelector('input,textarea')?.addEventListener('input', () => { if (f.classList.contains('invalid')) check(f); });
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fields = [...form.querySelectorAll<HTMLElement>('[data-validate]')];
      const results = fields.map(check);
      if (results.includes(false)) {
        fields[results.indexOf(false)].querySelector<HTMLElement>('input,textarea')?.focus();
        return;
      }
      const data = formData(form);
      // collect pressed chips (multi-select groups) into a field
      form.querySelectorAll<HTMLElement>('[data-chips]').forEach((g) => {
        data[g.dataset.chips!] = [...g.querySelectorAll('[aria-pressed="true"]')].map((b) => b.textContent!.trim()).join(', ');
      });
      if (errBox) errBox.hidden = true;
      const label = submit?.textContent;
      if (submit) { submit.disabled = true; submit.textContent = 'Sending…'; }
      try {
        await sendForm(form.dataset.endpoint || '', form.dataset.form!, data);
        container.querySelectorAll<HTMLElement>('[data-first-name]').forEach((el) => {
          el.textContent = (data.name || '').split(' ')[0] || 'Hopian';
        });
        form.hidden = true;
        if (success) { success.hidden = false; success.focus?.(); }
        form.reset();
      } catch (err) {
        if (errBox) { errBox.textContent = failMessage(err, form.dataset.email || ''); errBox.hidden = false; }
      } finally {
        if (submit) { submit.disabled = false; submit.textContent = label ?? 'Send'; }
      }
    });

    container.querySelectorAll<HTMLElement>('[data-reset]').forEach((b) => b.addEventListener('click', () => {
      form.hidden = false; if (success) success.hidden = true;
      form.querySelectorAll('.invalid').forEach((f) => f.classList.remove('invalid'));
    }));
  });
}

/** Single-select or multi-select chip/segment groups. */
export function wireChips(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-select]').forEach((group) => {
    const multi = group.dataset.select === 'multi';
    const hidden = group.dataset.input ? group.parentElement?.querySelector<HTMLInputElement>(`input[name="${group.dataset.input}"]`) : null;
    group.querySelectorAll<HTMLButtonElement>('button').forEach((b) => {
      b.type = 'button';
      b.addEventListener('click', () => {
        if (multi) {
          b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true'));
        } else {
          group.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
          if (hidden) hidden.value = b.dataset.value || b.textContent!.trim();
        }
        group.dispatchEvent(new CustomEvent('change', { detail: b.dataset.value || b.textContent!.trim() }));
      });
    });
  });
}
