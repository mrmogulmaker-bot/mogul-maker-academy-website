// Cloudflare Pages Function — POST/GET /api/rsvps
// Storage: Cloudflare KV binding `MMA_DATA`.
// Honeypot ("website") submissions are accepted silently and never stored.

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const validEmail = (e) => typeof e === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ detail: "Invalid JSON" }, 400);
  }
  const { name, email, event_id, event_title, session_label, website } = body || {};
  if (website) return json({ ok: true }, 201); // honeypot — drop silently
  if (!name || !validEmail(email) || !event_id || !event_title) {
    return json({ detail: "name, valid email, event_id, and event_title are required" }, 422);
  }
  const doc = {
    id: crypto.randomUUID(),
    name: String(name).slice(0, 120),
    email: String(email).slice(0, 200),
    event_id: String(event_id).slice(0, 80),
    event_title: String(event_title).slice(0, 200),
    session_label: session_label ? String(session_label).slice(0, 200) : null,
    created_at: new Date().toISOString(),
  };
  if (env.MMA_DATA) {
    await env.MMA_DATA.put(`rsvp:${doc.event_id}:${doc.id}`, JSON.stringify(doc));
  }
  return json(doc, 201);
}

export async function onRequestGet({ request, env }) {
  if (!env.MMA_DATA) return json([]);
  const url = new URL(request.url);
  const eventId = url.searchParams.get("event_id");
  const prefix = eventId ? `rsvp:${eventId}:` : "rsvp:";
  const list = await env.MMA_DATA.list({ prefix });
  const docs = await Promise.all(
    list.keys.map(async (k) => JSON.parse(await env.MMA_DATA.get(k.name)))
  );
  docs.sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
  return json(docs.slice(0, 50));
}
