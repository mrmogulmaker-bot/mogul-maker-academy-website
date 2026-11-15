import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const STAGES = [
  "Aspiring Entrepreneur / Validating an Idea",
  "High-Income Professional Seeking Ownership",
  "Operating Business Owner Scaling Systems",
  "Strategic Owner & Emerging Acquirer",
];

export const EnquiryForm = ({ dark = true }) => {
  const [form, setForm] = useState({ name: "", email: "", stage: STAGES[0], interest: "courses", message: "", website: "" });
  const [submitting, setSubmitting] = useState(false);

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
      await axios.post(`${API}/enquiries`, form);
      toast.success("Enquiry received", {
        description:
          "Thank you. The Academy will review your operating stage and follow up with pathway guidance.",
      });
      setForm({ name: "", email: "", stage: STAGES[0], interest: "courses", message: "", website: "" });
    } catch (err) {
      toast.error("Could not submit your enquiry", {
        description: "Please check your details and try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={submit} data-testid="enquiry-form">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="enquiry-name" className={labelCls}>Full Name</label>
          <input
            id="enquiry-name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Alex Morgan"
            className={inputCls}
            data-testid="enquiry-name-input"
          />
        </div>
        <div>
          <label htmlFor="enquiry-email" className={labelCls}>Work Email</label>
          <input
            id="enquiry-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="alex@enterprise.com"
            className={inputCls}
            data-testid="enquiry-email-input"
          />
        </div>
      </div>

      <div>
        <label htmlFor="enquiry-stage" className={labelCls}>Current Operating Stage</label>
        <select
          id="enquiry-stage"
          value={form.stage}
          onChange={(e) => setForm({ ...form, stage: e.target.value })}
          className={inputCls}
          data-testid="enquiry-stage-select"
        >
          {STAGES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="enquiry-interest" className={labelCls}>Primary Interest</label>
        <select
          id="enquiry-interest"
          value={form.interest}
          onChange={(e) => setForm({ ...form, interest: e.target.value })}
          className={inputCls}
          data-testid="enquiry-interest-select"
        >
          <option value="courses">Courses & Learning Pathways</option>
          <option value="make">MAKE — Create Economic Value</option>
          <option value="manage">MANAGE — Financial & Operating Discipline</option>
          <option value="multiply">MULTIPLY — Ownership & Enterprise Value</option>
          <option value="events">Workshops & Events</option>
          <option value="partnership">Partnership / Speaking / Media</option>
        </select>
      </div>

      <div>
        <label htmlFor="enquiry-message" className={labelCls}>Message (Optional)</label>
        <textarea
          id="enquiry-message"
          rows={3}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us where you are and what you're working toward."
          className={`${inputCls} resize-none`}
          data-testid="enquiry-message-input"
        />
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
        data-testid="enquiry-submit-button"
        className="w-full mt-2 py-3.5 bg-[#C29949] text-[#142635] text-xs font-bold uppercase tracking-[0.14em] hover:bg-[#d0a857] transition-colors rounded-sm disabled:opacity-60"
      >
        {submitting ? "Submitting…" : "Request Pathway Consultation"}
      </button>

      <p className={`text-[10px] leading-relaxed ${dark ? "text-[#FBF6EB]/45" : "text-[#142635]/50"}`}>
        By submitting, you consent to the Academy contacting you about your enquiry. Your details
        are used only to respond and are never sold. Mogul Maker Academy provides entrepreneurial
        and financial education. We do not promise or imply guaranteed wealth, investment returns,
        or funding outcomes.
      </p>
    </form>
  );
};
