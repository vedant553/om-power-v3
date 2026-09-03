import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Award, Target, Users, ChevronRight, CheckCircle } from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Us — Electrical Panel Manufacturer & Energy Audit Consultancy | Panvel",
  description:
    "Learn about Om Power Consultant and Engineers — a Panvel-based electrical engineering firm with 10+ years of experience in LT/HT/VFD/APFC panel manufacturing and energy auditing, power quality, safety audit and thermographic testing services.",
  openGraph: {
    title: "About Om Power Consultant and Engineers | Panvel, Navi Mumbai",
    description:
      "10+ years of electrical engineering expertise — panel manufacturing and energy auditing under one roof. Based in Panvel, serving Navi Mumbai and Mumbai.",
  },
};

const certifications = [
  { name: "GST Registered", detail: "GSTIN: Available on request", note: "TODO: replace with actual GSTIN" },
  // TODO: Add ISO/BIS/IE certifications if applicable
  { name: "Licensed Electrical Contractor", detail: "Maharashtra State", note: "TODO: confirm license details with client" },
  { name: "BEE Empanelled Energy Auditor", detail: "Bureau of Energy Efficiency", note: "TODO: confirm if applicable" },
];

const serviceAreas = [
  "Panvel", "Taloja MIDC", "Uran", "Ulwe",
  "Kharghar", "Belapur CBD", "Navi Mumbai",
  "Thane", "Mumbai", "Raigad District",
];

const values = [
  {
    icon: Target,
    title: "Engineering-First Approach",
    desc: "We are practising engineers — not traders or agents. Every panel we build and every audit we conduct is backed by hands-on technical expertise.",
  },
  {
    icon: Award,
    title: "Quality Without Compromise",
    desc: "In-house manufacturing means full quality control at every stage — from raw material selection to final testing before dispatch.",
  },
  {
    icon: Users,
    title: "Long-Term Partnerships",
    desc: "We don't just complete projects — we build lasting relationships. Many of our clients have trusted us for multiple projects over many years.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16 md:pt-18">
      {/* Hero — compressed */}
      <section className="bg-ind-dark py-6 md:py-8 relative overflow-hidden" aria-labelledby="about-hero-heading">
        <div className="absolute inset-0 blueprint-grid opacity-40" aria-hidden="true" />
        <div className="container-custom relative z-10 flex flex-col items-start">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-ind-400 mb-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
            <span className="text-[#F59E0B]">About Us</span>
          </nav>
          
          <h1 id="about-hero-heading" className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
            About Om Power Consultant and Engineers
          </h1>
          
          <p className="text-ind-300 text-sm md:text-base max-w-2xl leading-relaxed">
            A Panvel-based electrical engineering firm — building panels and auditing electrical systems for industries and commercial facilities across Navi Mumbai for over a decade.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="section-padding bg-white" aria-labelledby="story-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="accent-line" />
              <h2 id="story-heading" className="section-title mb-5">Our Story</h2>
              {/* TODO: Replace narrative below with real founding year and story from client */}
              <div className="space-y-4 text-ind-500 text-sm leading-relaxed">
                <p>
                  Founded by <strong className="text-[#0A1628]">S. Parange</strong>, Om Power Consultant and Engineers was established in Panvel with a clear vision: to be an engineering firm that doesn't just supply electrical panels, but truly understands the power systems they serve.
                </p>
                <p>
                  Over the years, we have grown into a full-service electrical engineering practice with two distinct — and equally important — competencies: <strong className="text-[#0A1628]">custom electrical panel manufacturing</strong> and <strong className="text-[#0D9488]">energy testing and audit consulting</strong>. This dual capability sets us apart from vendors who only supply equipment or consultants who only audit.
                </p>
                <p>
                  From our base in Panvel, we serve the dense industrial corridors of Taloja MIDC, Uran, Ulwe, Navi Mumbai, and the broader Mumbai industrial belt — working with factories, pharmaceutical plants, commercial complexes, hospitals, and infrastructure projects.
                </p>
              </div>
            </div>

            <div className="relative">
              {/* TODO: Replace with actual photo of facility/team/office */}
              <div className="relative rounded-sm overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"
                  alt="Electrical engineering team in workshop — placeholder image, to be replaced with client photo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/30 to-transparent" />

              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-4 bg-[#0A1628] text-white rounded-sm px-5 py-4 shadow-xl">
                {/* TODO: Replace with actual verified figure */}
                <div className="font-heading text-3xl font-bold text-[#F59E0B]">10+</div>
                <div className="text-xs text-ind-300 uppercase tracking-widest mt-1">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-ind-50" aria-labelledby="mission-heading">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="accent-line mx-auto" />
            <h2 id="mission-heading" className="section-title mb-4">Our Mission &amp; Values</h2>
            <p className="section-subtitle mx-auto text-center">
              Engineers who build and audit — giving clients a uniquely comprehensive electrical engineering partner.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-white rounded-sm p-6 border border-ind-100  card-industrial">
                  <div className="w-12 h-12 rounded-sm bg-gradient-to-br from-[#0D9488]/15 to-[#F59E0B]/15 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#0D9488]" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#0A1628] mb-2">{value.title}</h3>
                  <p className="text-sm text-ind-500 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>

          {/* What we do callout */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0A1628] rounded-sm p-8">
              <h3 className="font-heading text-xl font-bold text-[#F59E0B] mb-4">We Build</h3>
              <ul className="space-y-2">
                {["LT Distribution Panels", "HT Switchgear Panels", "VFD Panels", "Control & APFC Panels"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white text-sm">
                    <CheckCircle className="w-4 h-4 text-[#F59E0B] flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0D9488] rounded-sm p-8">
              <h3 className="font-heading text-xl font-bold text-white mb-4">We Audit &amp; Test</h3>
              <ul className="space-y-2">
                {["Energy Auditing", "Power Quality Audit & Harmonics", "Electrical Safety Audit", "Thermographic Testing"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white text-sm">
                    <CheckCircle className="w-4 h-4 text-white/80 flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white" aria-labelledby="team-heading">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="accent-line mx-auto" />
            <h2 id="team-heading" className="section-title mb-4">Leadership</h2>
          </div>
          <div className="max-w-sm mx-auto">
            <div className="bg-white rounded-sm border border-ind-100  overflow-hidden card-industrial">
              {/* TODO: Replace with actual photo of S. Parange */}
              <div className="relative h-56 bg-gradient-to-br from-[#0A1628] to-[#1e3670] flex items-center justify-center">
                <div className="w-20 h-20 rounded-sm bg-ind-800 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white/50" aria-hidden="true" />
                </div>

              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-ind-950">S. Parange</h3>
                <p className="text-cir-500 text-sm font-semibold mb-3">Founder &amp; Principal Engineer</p>
                <p className="text-ind-500 text-sm leading-relaxed">
                  Electrical engineer with deep expertise in panel manufacturing and energy auditing across the Mumbai industrial belt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas & Certifications */}
      <section className="section-padding bg-ind-50" aria-labelledby="areas-certs-heading">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Service Areas */}
            <div>
              <span className="accent-line" />
              <h2 id="areas-certs-heading" className="font-heading text-2xl font-bold text-[#0A1628] mb-4">
                Service Area
              </h2>
              <p className="text-ind-500 text-sm leading-relaxed mb-5">
                Based in Panvel, we serve industries and commercial facilities across the greater Navi Mumbai and Mumbai region.
              </p>
              <div className="flex flex-wrap gap-2" role="list" aria-label="Service areas">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    role="listitem"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-white border border-ind-200 text-sm text-ind-600 shadow-xs"
                  >
                    <MapPin className="w-3 h-3 text-[#0D9488]" aria-hidden="true" />
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <span className="accent-line" style={{ background: "linear-gradient(90deg, #0D9488, #F59E0B)" }} />
              <h2 className="font-heading text-2xl font-bold text-[#0A1628] mb-4">
                Registrations &amp; Certifications
              </h2>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-start gap-3 bg-white rounded-sm p-4 border border-ind-100 shadow-xs">
                    <Award className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <div className="font-semibold text-sm text-[#0A1628]">{cert.name}</div>
                      <div className="text-xs text-ind-400">{cert.detail}</div>
                      {/* Note is a developer TODO comment in JSX, not visible to end user */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
