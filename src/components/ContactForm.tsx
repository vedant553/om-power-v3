"use client";

import { useState, FormEvent, useEffect, Suspense } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useSearchParams } from "next/navigation";

// Initialize EmailJS with public key
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");

const interestedInOptions = [
  // Panel Manufacturing
  "LT Panel",
  "HT Panel",
  "VFD Panel",
  "Control & APFC Panel",
  "Thyristor Panel",
  "SVG Hybrid Panel",
  "MSEDCL Liaisoning",
  // Testing & Consulting
  "Energy Audit",
  "Power Quality Audit",
  "Electrical Safety Audit",
  "Thermographic Testing",
  "Hazardous Area Classification",
  "Arc-Flash Study",
  "Lightning Risk Assessment",
  "AMC",
  "Bill Analysis",
  "Energy Audits",
  // Other
  "General Enquiry",
  "Other",
];

// Slug mapping for deep-linking
const slugToOptionMap: Record<string, string> = {
  "lt-panel": "LT Panel",
  "ht-panel": "HT Panel",
  "vfd-panel": "VFD Panel",
  "apfc-panel": "Control & APFC Panel",
  "thyristor-panel": "Thyristor Panel",
  "svg-hybrid-panel": "SVG Hybrid Panel",
  "msedcl-liaisoning": "MSEDCL Liaisoning",
  "energy-audit": "Energy Audit",
  "power-quality": "Power Quality Audit",
  "safety-audit": "Electrical Safety Audit",
  "thermographic": "Thermographic Testing",
  "hazardous-area-classification": "Hazardous Area Classification",
  "arc-flash-study": "Arc-Flash Study",
  "lightning-risk-assessment": "Lightning Risk Assessment",
  "amc-power-factor": "AMC",
  "bill-analysis": "Bill Analysis",
  "walkthrough-detailed-audit": "Energy Audits",
};

type FormState = "idle" | "submitting" | "success" | "error";

function ContactFormInner() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [preselectedOption, setPreselectedOption] = useState<string>("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const interestedParam = searchParams?.get("interested");
    if (interestedParam && slugToOptionMap[interestedParam]) {
      setPreselectedOption(slugToOptionMap[interestedParam]);
    }
  }, [searchParams]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Map form fields to EmailJS template parameters
    const templateParams = {
      from_name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      from_email: formData.get("email") as string,
      interested_in: formData.get("interested_in") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
    };

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

      if (!serviceId || !templateId) {
        throw new Error("EmailJS configuration is missing");
      }

      await emailjs.send(serviceId, templateId, templateParams);

      setFormState("success");
      form.reset();
      setPreselectedOption(""); // Clear preselection after successful submission
    } catch (error) {
      console.error("EmailJS error:", error);
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
          value={preselectedOption || ""}
          onChange={(e) => setPreselectedOption(e.target.value)}
        >
          <option value="" disabled>Select a product or service...</option>
          <optgroup label="Panel Manufacturing">
            {interestedInOptions.slice(0, 7).map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </optgroup>
          <optgroup label="Testing & Energy Audit">
            {interestedInOptions.slice(7, 17).map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </optgroup>
          <optgroup label="Other">
            {interestedInOptions.slice(17).map((opt) => (
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
        <div className="flex items-start gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3" role="alert">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-semibold mb-1">Unable to send enquiry</p>
            <p className="text-red-600/80">Please try again, or contact us directly by phone or WhatsApp for immediate assistance.</p>
          </div>
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

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="opacity-0">Loading...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}