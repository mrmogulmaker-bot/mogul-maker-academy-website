// Cloudflare Pages Function — future PAIGE form/API integration.
// Server-side proxy: PAIGE credentials live in Pages environment variables
// (PAIGE_API_URL, PAIGE_API_KEY) and are NEVER exposed to browser code.
// The frontend calls /api/paige/* with same-origin fetch; this function
// forwards to the real PAIGE endpoint with the secret attached.

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export async function onRequest({ request, env, params }) {
  if (!env.PAIGE_API_URL || !env.PAIGE_API_KEY) {
    return json(
      { detail: "PAIGE integration is not configured. Set PAIGE_API_URL and PAIGE_API_KEY in Pages environment variables." },
      501
    );
  }
  const path = Array.isArray(params.path) ? params.path.join("/") : params.path || "";
  const target = `${env.PAIGE_API_URL.replace(/\/$/, "")}/${path}`;
  const init = {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.PAIGE_API_KEY}`,
    },
  };
  if (request.method !== "GET" && request.method !== "HEAD") {
    init.body = await request.text();
  }
  const res = await fetch(target, init);
  const text = await res.text();
  return new Response(text, {
    status: res.status,
    headers: { "Content-Type": res.headers.get("Content-Type") || "application/json" },
  });
}
