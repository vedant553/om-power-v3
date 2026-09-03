"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

// TODO: Sign up at https://formspree.io and replace the form ID below with your actual endpoint.
// Free tier allows 50 submissions/month. Upgrade for more.
const FORMSPREE_ID = "xpwzyabq"; // TODO: Replace with actual Formspree form ID

const interestedInOptions = [
  // Panel Manufacturing
  "LT Panel (Low Tension Panel)",
  "HT Panel (High Tension Panel)",
  "VFD Panel (Variable Frequency Drive Panel)",
  "Control & APFC Panel (Power Factor Correction)",
  // Testing & Consulting
  "Energy Audit Services",
  "Power Quality Audit / Harmonics Measurement",
  "Electrical Safety Audit",
  "Electrical Testing / Thermographic Testing",
  // Other
  "General Enquiry",
  "Other",
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 px-6 bg-[#0D9488]/08 rounded-sm border border-[#0D9488]/20">
        <CheckCircle className="w-14 h-14 text-[#0D9488] mb-4" aria-hidden="true" />
        <h3 className="font-heading text-2xl font-bold text-[#0A1628] mb-2">Enquiry Received!</h3>
        <p className="text-ind-500 text-sm mb-6">
          Thank you for reaching out. We&apos;ll get back to you within 1 business day — or call us directly for a faster response.
        </p>
        <a href="tel:+919168029393" className="btn-primary">
          Call Us Now
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact enquiry form"
      className="space-y-5"
    >
      {/* Hidden fields for Formspree */}
      <input type="hidden" name="_subject" value="New Enquiry — Om Power Consultant and Engineers Website" />
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} aria-hidden="true" />

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className="form-label">
            Full Name <span className="text-red-500" aria-label="required">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className="form-input"
          />
        </div>
        {/* Phone */}
        <div>
          <label htmlFor="contact-phone" className="form-label">
            Phone Number <span className="text-red-500" aria-label="required">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            placeholder="+91 9XXXXX XXXXX"
            className="form-input"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="form-label">
          Email Address
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="your@company.com"
          className="form-input"
        />
      </div>

      {/* Interested In */}
      <div>
        <label htmlFor="contact-service" className="form-label">
          Interested In <span className="text-red-500" aria-label="required">*</span>
        </label>
        <select
          id="contact-service"
          name="interested_in"
          required
          className="form-input"
          defaultValue=""
        >
          <option value="" disabled>Select a product or service...</option>
          <optgroup label="Panel Manufacturing">
            {interestedInOptions.slice(0, 4).map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </optgroup>
          <optgroup label="Testing & Energy Audit">
            {interestedInOptions.slice(4, 8).map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </optgroup>
          <optgroup label="Other">
            {interestedInOptions.slice(8).map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </optgroup>
        </select>
      </div>

      {/* Company */}
      <div>
        <label htmlFor="contact-company" className="form-label">
          Company / Organisation
        </label>
        <input
          id="contact-company"
          type="text"
          name="company"
          autoComplete="organization"
          placeholder="Your company name (optional)"
          className="form-input"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="form-label">
          Message / Requirements
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          placeholder="Describe your requirement, e.g. panel rating, location, number of phases, or audit scope..."
          className="form-input resize-none"
        />
      </div>

      {/* Error message */}
      {formState === "error" && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3" role="alert">
          <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
          Something went wrong. Please try again, or call us directly.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        id="contact-form-submit"
        disabled={formState === "submitting"}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        aria-busy={formState === "submitting"}
      >
        {formState === "submitting" ? (
          <>
            <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Enquiry
            <Send className="w-4 h-4" aria-hidden="true" />
          </>
        )}
      </button>

      <p className="text-xs text-ind-400 text-center">
        We respond within 1 business day. For urgent queries, call or WhatsApp directly.
      </p>
    </form>
  );
}
