import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

// Shared RSVP form for scheduled event sessions. Posts to /api/rsvps.
export const RsvpForm = ({ eventId, eventTitle, sessionLabel = null, dark = true }) => {
  const [form, setForm] = useState({ name: "", email: "", website: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const labelCls = dark
    ? "block text-[11px] uppercase tracking-wider text-[#FBF6EB]/80 mb-1.5 font-medium"
    : "block text-[11px] uppercase tracking-wider text-[#142635]/80 mb-1.5 font-medium";
  const inputCls = dark
    ? "w-full bg-[#0E1D29] border border-[#FBF6EB]/20 px-3.5 py-2.5 text-xs text-white placeholder-[#9FB8C8]/60 focus:outline-none focus:border-[#C29949] rounded-sm transition-colors"
    : "w-full bg-white border border-[#142635]/25 px-3.5 py-2.5 text-xs text-[#142635] placeholder-[#142635]/40 focus:outline-none focus:border-[#115754] rounded-sm transition-colors";

  const submit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      await axios.post(`${API}/rsvps`, {
        name: form.name,
        email: form.email,
        event_id: eventId,
        event_title: eventTitle,
        session_label: sessionLabel,
        website: form.website,
      });
      setDone(true);
      toast.success("Seat requested", {
        description: `Your RSVP for ${eventTitle} has been recorded. Confirmation details follow by email.`,
      });
    } catch (err) {
      toast.error("Could not record your RSVP", {
        description: "Please check your details and try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div
        className={`p-5 rounded-sm border text-center ${
          dark ? "border-[#C29949]/40 bg-[#0E1D29]" : "border-[#C29949]/50 bg-[#FBF6EB]"
        }`}
        data-testid="rsvp-confirmation"
      >
        <p className={`font-display text-lg font-medium ${dark ? "text-white" : "text-[#142635]"}`}>
          Interest registered.
        </p>
        <p className={`text-xs mt-1 ${dark ? "text-[#FBF6EB]/70" : "text-[#142635]/60"}`}>
          Your interest in {eventTitle} is recorded. The Academy confirms attendance directly —
          this is not a confirmed registration.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4" data-testid="rsvp-form">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`rsvp-name-${eventId}`} className={labelCls}>Full Name</label>
          <input
            id={`rsvp-name-${eventId}`}
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Alex Morgan"
            className={inputCls}
            data-testid="rsvp-name-input"
          />
        </div>
        <div>
          <label htmlFor={`rsvp-email-${eventId}`} className={labelCls}>Work Email</label>
          <input
            id={`rsvp-email-${eventId}`}
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="alex@enterprise.com"
            className={inputCls}
            data-testid="rsvp-email-input"
          />
        </div>
      </div>
      {/* Honeypot — bots only; humans never see or fill this field */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(e) => setForm({ ...form, website: e.target.value })}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }}
      />
      <button
        type="submit"
        disabled={submitting}
        data-testid="rsvp-submit-button"
        className="w-full py-3.5 bg-[#C29949] text-[#142635] text-xs font-bold uppercase tracking-[0.14em] hover:bg-[#d0a857] transition-colors rounded-sm disabled:opacity-60"
      >
        {submitting ? "Submitting…" : "Register My Interest"}
      </button>
      <p className={`text-[10px] leading-relaxed ${dark ? "text-[#FBF6EB]/45" : "text-[#142635]/50"}`}>
        By submitting, you consent to the Academy contacting you about this event. Your details
        are used only for this purpose and are never sold.
      </p>
    </form>
  );
};
