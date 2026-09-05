import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle, ChevronRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Contact Us — Get a Quote for Electrical Panels or Energy Audit | Panvel, Navi Mumbai",
  description:
    "Contact Om Power Consultant and Engineers, Panvel — get a free quote for LT/HT/VFD/APFC panel manufacturing or energy audit, power quality audit, safety audit and thermographic testing services in Navi Mumbai and Mumbai.",
  openGraph: {
    title: "Contact Om Power Consultant and Engineers | Panvel, Navi Mumbai",
    description:
      "Get a free quote for electrical panel manufacturing or energy audit services. Call, WhatsApp, or fill our enquiry form.",
  },
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 91680 29393",
    href: "tel:+919168029393",
    id: "contact-phone-link",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/919168029393?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.",
    id: "contact-whatsapp-link",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "ompowerconsultancy2017@gmail.com",
    href: "mailto:ompowerconsultancy2017@gmail.com",
    id: "contact-email-link",
  },
  {
    icon: MapPin,
    label: "Address",
    // TODO: Replace with client's exact street address
    value: "Panvel, Navi Mumbai, Maharashtra — 410206",
    href: "https://maps.google.com/?q=Panvel,Navi+Mumbai",
    id: "contact-address-link",
    external: true,
  },
];

const businessHours = [
  { day: "Monday – Friday", hours: "9:00 AM – 7:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 5:00 PM" },
  // TODO: Confirm Sunday hours with client
  { day: "Sunday", hours: "By appointment only" },
];

export default function ContactPage() {
  return (
    <div className="pt-16 md:pt-18">
      {/* Page Header */}
      {/* Page Header */}
      <section className="bg-ind-dark py-6 md:py-8 relative overflow-hidden" aria-labelledby="contact-hero-heading">
        <div className="absolute inset-0 blueprint-grid opacity-40" aria-hidden="true" />
        <div className="container-custom relative z-10 flex flex-col items-start">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-ind-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
            <span className="text-[#F59E0B]">Contact</span>
          </nav>
          
          <h1 id="contact-hero-heading" className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
            Get in Touch
          </h1>
          
          <p className="text-ind-300 text-sm md:text-base max-w-4xl leading-relaxed">
            Call, WhatsApp, or send us an enquiry. We typically respond within 1 business day — and for urgent queries, a call is always the fastest route.
          </p>
        </div>
      </section>

      {/* Main contact section */}
      <section className="py-8 md:py-10 bg-white" aria-label="Contact information and form">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Contact details — 2/5 */}
            <div className="lg:col-span-2 space-y-8">

              {/* Contact cards */}
              <div>
                <h2 className="font-heading text-xl font-bold text-[#0A1628] mb-5">Contact Details</h2>
                <div className="space-y-3">
                  {contactDetails.map((item) => {
                    const Icon = item.icon;
                    const linkProps = item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {};
                    return (
                      <a
                        key={item.label}
                        id={item.id}
                        href={item.href}
                        {...linkProps}
                        className="flex items-start gap-4 p-4 rounded-sm border border-ind-100 bg-ind-50 hover:border-[#0D9488] hover: transition-all group"
                      >
                        <div className="w-10 h-10 rounded-sm bg-[#0D9488]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0D9488] transition-colors">
                          <Icon className="w-5 h-5 text-[#0D9488] group-hover:text-white transition-colors" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-ind-400 uppercase tracking-widest mb-0.5">{item.label}</div>
                          <div className="text-sm font-semibold text-[#0A1628] group-hover:text-[#0D9488] transition-colors">
                            {item.value}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Business hours */}
              <div>
                <h2 className="font-heading text-xl font-bold text-[#0A1628] mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#0D9488]" aria-hidden="true" />
                  Business Hours
                </h2>
                <div className="rounded-sm border border-ind-100 overflow-hidden">
                  {businessHours.map((slot, idx) => (
                    <div
                      key={slot.day}
                      className={`flex justify-between items-center px-4 py-3 text-sm ${
                        idx < businessHours.length - 1 ? "border-b border-ind-100" : ""
                      }`}
                    >
                      <span className="font-semibold text-[#0A1628]">{slot.day}</span>
                      <span className="text-ind-500">{slot.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service area quick note */}
              <div className="bg-[#0A1628] rounded-sm p-5 text-white">
                <h3 className="font-heading font-bold text-base mb-2">📍 We Come to You</h3>
                <p className="text-ind-300 text-sm leading-relaxed">
                  We serve Panvel, Taloja, Uran, Ulwe, Navi Mumbai, Kharghar, Belapur, and the broader Mumbai industrial belt. Site visits are available — just call or WhatsApp to schedule.
                </p>
              </div>
            </div>

            {/* Enquiry form — 3/5 */}
            <div className="lg:col-span-3">
              <h2 className="font-heading text-xl font-bold text-[#0A1628] mb-5">Send Us an Enquiry</h2>
              <div className="bg-white rounded-sm border border-ind-100  p-6 md:p-8">
                <Suspense fallback={<div className="text-center py-8">Loading form...</div>}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps embed */}
      <section className="bg-ind-50" aria-label="Our location on map">
        <div className="container-custom py-8">
          <h2 className="font-heading text-xl font-bold text-[#0A1628] mb-4">Find Us — Panvel, Navi Mumbai</h2>
          {/* TODO: Replace this embed with the exact address Google Maps embed from client */}
          {/* To get the embed: go to maps.google.com → search your address → Share → Embed a map → copy iframe src */}
          <div className="rounded-sm overflow-hidden border border-ind-200 ">
            <iframe
              title="Om Power Consultant and Engineers location — Panvel, Navi Mumbai"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60386.90!2d73.0935!3d18.9894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e8bb7e5b7a1b%3A0x3ccd4a4b5b5b5b5b!2sPanvel%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1000000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-xs text-amber-600 font-medium mt-2 italic">
            {/* TODO: Replace map embed with exact business address pin once confirmed with client */}
          </p>
        </div>
      </section>
    </div>
  );
}
