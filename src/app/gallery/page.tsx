import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import GalleryGrid from "@/components/GalleryGrid";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Project Gallery — Panels Manufactured & Audits Conducted | Om Power Consultant",
  description:
    "Browse our project gallery — LT, HT, VFD and APFC panels manufactured, energy audits, thermographic testing, and site installations by Om Power Consultant and Engineers, Panvel.",
  openGraph: {
    title: "Project Gallery | Om Power Consultant and Engineers",
    description:
      "Gallery of electrical panels manufactured, energy audits and thermographic testing projects by Om Power — Panvel, Navi Mumbai.",
  },
};

export default function GalleryPage() {
  return (
    <div className="pt-16 md:pt-18">
      {/* Hero */}
      <section className="bg-ind-dark py-16 md:py-20 relative overflow-hidden" aria-labelledby="gallery-hero-heading">
        <div className="absolute inset-0 blueprint-grid opacity-40" aria-hidden="true" />
        <div className="container-custom relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-ind-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
            <span className="text-[#F59E0B]">Gallery</span>
          </nav>
          <h1 id="gallery-hero-heading" className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Projects &amp; Gallery
          </h1>
          <p className="text-ind-300 text-base md:text-lg max-w-2xl leading-relaxed">
            A selection of panels we have manufactured and testing/audit projects we have conducted — for factories, plants, and commercial buildings across Navi Mumbai.
          </p>
          {/* TODO: All images in this gallery are placeholder stock photos. Replace with actual client project photos. */}
          <p className="mt-4 text-amber-400 text-sm font-medium">
            ⚠️ All images are placeholder stock photos — to be replaced with actual project photos from the client.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white" aria-label="Project gallery">
        <div className="container-custom">
          <GalleryGrid />
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
