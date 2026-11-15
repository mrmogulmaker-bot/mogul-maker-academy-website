// Cloudflare Pages Function — POST/GET /api/enquiries
// Replaces the FastAPI endpoint for the Pages deployment.
// Storage: Cloudflare KV binding `MMA_DATA` (set in Pages project settings).
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
  const { name, email, stage, interest, message, website } = body || {};
  if (website) return json({ ok: true }, 201); // honeypot — drop silently
  if (!name || !validEmail(email) || !stage) {
    return json({ detail: "name, valid email, and stage are required" }, 422);
  }
  const doc = {
    id: crypto.randomUUID(),
    name: String(name).slice(0, 120),
    email: String(email).slice(0, 200),
    stage: String(stage).slice(0, 200),
    interest: String(interest || "courses").slice(0, 60),
    message: message ? String(message).slice(0, 2000) : null,
    created_at: new Date().toISOString(),
  };
  if (env.MMA_DATA) {
    await env.MMA_DATA.put(`enquiry:${doc.id}`, JSON.stringify(doc));
  }
  return json(doc, 201);
}

export async function onRequestGet({ env }) {
  // Simple listing for the internal inbox — gate behind auth before exposing.
  if (!env.MMA_DATA) return json([]);
  const list = await env.MMA_DATA.list({ prefix: "enquiry:" });
  const docs = await Promise.all(
    list.keys.map(async (k) => JSON.parse(await env.MMA_DATA.get(k.name)))
  );
  docs.sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
  return json(docs.slice(0, 50));
}
