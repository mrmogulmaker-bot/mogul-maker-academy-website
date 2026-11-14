// Privacy-aware analytics stub (measurement-ready, consent-first).
// Events are queued in-memory and mirrored to console in development only.
// A consented analytics destination (e.g. a privacy-aware provider) can subscribe
// to this queue later without touching call sites.

const queue = [];

export const track = (event, properties = {}) => {
  const payload = {
    event,
    properties: { ...properties, path: window.location.pathname },
    at: new Date().toISOString(),
  };
  queue.push(payload);
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.debug("[mma-analytics]", payload);
  }
};

export const getAnalyticsQueue = () => [...queue];
