import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

// Shared RSVP form for scheduled event sessions. Posts to /api/rsvps.
export const RsvpForm = ({ eventId, eventTitle, sessionLabel = null, dark = true }) => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const labelCls = dark
    ? "block text-[11px] uppercase tracking-wider text-[#F7F4EE]/80 mb-1.5 font-medium"
    : "block text-[11px] uppercase tracking-wider text-[#202832]/80 mb-1.5 font-medium";
  const inputCls = dark
    ? "w-full bg-[#101B2B] border border-[#5F6773]/50 px-3.5 py-2.5 text-xs text-white placeholder-[#5F6773] focus:outline-none focus:border-[#C6A66B] rounded-sm transition-colors"
    : "w-full bg-white border border-[#5F6773]/40 px-3.5 py-2.5 text-xs text-[#202832] placeholder-[#5F6773] focus:outline-none focus:border-[#C6A66B] rounded-sm transition-colors";

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
          dark ? "border-[#C6A66B]/40 bg-[#101B2B]" : "border-[#C6A66B]/50 bg-[#F7F4EE]"
        }`}
        data-testid="rsvp-confirmation"
      >
        <p className={`font-display text-lg font-medium ${dark ? "text-white" : "text-[#101B2B]"}`}>
          Seat requested.
        </p>
        <p className={`text-xs mt-1 ${dark ? "text-[#F7F4EE]/70" : "text-[#5F6773]"}`}>
          Your RSVP for {eventTitle} is recorded. Confirmation details follow by email.
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
      <button
        type="submit"
        disabled={submitting}
        data-testid="rsvp-submit-button"
        className="w-full py-3.5 bg-[#C6A66B] text-[#101B2B] text-xs font-bold uppercase tracking-[0.14em] hover:bg-[#d8bb83] transition-colors rounded-sm disabled:opacity-60"
      >
        {submitting ? "Reserving…" : "Reserve a Seat"}
      </button>
    </form>
  );
};
