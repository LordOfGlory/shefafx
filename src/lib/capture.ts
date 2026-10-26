/** Sends a validated inquiry to the academy inbox. The site stores nothing. */
const ENDPOINT = 'https://formsubmit.co/ajax/shefaventurez@outlook.com'

export async function sendInquiry(fields: Record<string, string>, subject: string, replyTo: string): Promise<boolean> {
  const payload: Record<string, string> = { _subject: subject, _template: 'table', _captcha: 'false', _replyto: replyTo }
  for (const [key, value] of Object.entries(fields)) {
    if (!value.trim() || key.startsWith('_') || key === 'company_website') continue
    payload[key] = value
  }
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) return false
    const json = (await res.json().catch(() => ({}))) as { success?: boolean | string }
    return json.success !== false && json.success !== 'false'
  } catch {
    return false
  }
}
