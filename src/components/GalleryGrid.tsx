"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

type Category = "all" | "panels" | "audits" | "site";

// TODO: Replace ALL images below with actual client project photos.
// All Unsplash URLs are royalty-free placeholder images only.
const galleryItems = [
  {
    id: 1,
    category: "panels" as Category,
    // TODO: Replace with client photo of LT panel
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    alt: "LT distribution panel manufactured by Om Power — placeholder",
    title: "LT Distribution Panel",
    subtitle: "Custom 800A LT Panel — Industrial Client, Taloja",
  },
  {
    id: 2,
    category: "panels" as Category,
    // TODO: Replace with client photo of HT panel
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
    alt: "HT switchgear panel — placeholder image",
    title: "HT Switchgear Panel",
    subtitle: "11kV VCB Panel — Manufacturing Plant, Navi Mumbai",
  },
  {
    id: 3,
    category: "panels" as Category,
    // TODO: Replace with client photo of VFD panel
    src: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80",
    alt: "VFD panel for motor drive — placeholder image",
    title: "VFD Drive Panel",
    subtitle: "Multi-drive VFD Panel — Water Treatment, Panvel",
  },
  {
    id: 4,
    category: "panels" as Category,
    // TODO: Replace with client photo of APFC panel
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    alt: "APFC power factor correction panel — placeholder image",
    title: "Control & APFC Panel",
    subtitle: "500 kVAR APFC Panel — Commercial Complex, Ulwe",
  },
  {
    id: 5,
    category: "audits" as Category,
    // TODO: Replace with client photo of energy audit activity
    src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
    alt: "Engineer conducting energy audit — placeholder image",
    title: "Energy Audit",
    subtitle: "Detailed Energy Audit — Pharmaceutical Plant, Uran",
  },
  {
    id: 6,
    category: "audits" as Category,
    // TODO: Replace with client photo of thermographic testing
    src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&q=80",
    alt: "Thermographic infrared inspection of electrical panel — placeholder image",
    title: "Thermographic Testing",
    subtitle: "Thermal Imaging Inspection — Factory, Taloja MIDC",
  },
  {
    id: 7,
    category: "audits" as Category,
    // TODO: Replace with client photo of power quality audit instruments
    src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
    alt: "Power quality analyser measurement at industrial switchboard — placeholder image",
    title: "Power Quality Audit",
    subtitle: "Harmonics Measurement & PQ Survey — Logistics Hub",
  },
  {
    id: 8,
    category: "audits" as Category,
    // TODO: Replace with client photo of safety audit
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    alt: "Electrical safety audit inspection — placeholder image",
    title: "Electrical Safety Audit",
    subtitle: "Safety & Compliance Audit — Hospital, Navi Mumbai",
  },
  {
    id: 9,
    category: "site" as Category,
    // TODO: Replace with actual site installation/visit photo
    src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
    alt: "Engineers installing electrical panel on site — placeholder image",
    title: "Site Installation",
    subtitle: "Panel Installation — Industrial Plant, Kharghar",
  },
  {
    id: 10,
    category: "site" as Category,
    // TODO: Replace with actual control room photo
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
    alt: "Industrial electrical control room — placeholder image",
    title: "Control Room",
    subtitle: "Electrical Control Room Fit-Out — Manufacturing, Belapur",
  },
  {
    id: 11,
    category: "site" as Category,
    // TODO: Replace with actual project photo
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    alt: "Electrical substation site visit — placeholder image",
    title: "Site Visit",
    subtitle: "Pre-installation Survey — Chemical Plant, Uran",
  },
  {
    id: 12,
    category: "panels" as Category,
    // TODO: Replace with actual panel photo
    src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&q=80",
    alt: "MCC motor control centre panel — placeholder image",
    title: "Motor Control Centre",
    subtitle: "MCC Panel — Pump Station, Taloja",
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All Projects", value: "all" },
  { label: "Panels Manufactured", value: "panels" },
  { label: "Testing & Audits", value: "audits" },
  { label: "Site Visits", value: "site" },
];

export default function GalleryGrid() {
  const [active, setActive] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<(typeof galleryItems)[0] | null>(null);

  const filtered = active === "all" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter gallery by category">
        {filters.map((f) => (
          <button
            key={f.value}
            id={`gallery-filter-${f.value}`}
            onClick={() => setActive(f.value)}
            className={`px-4 py-2 rounded-sm text-sm font-semibold transition-all ${
              active === f.value
                ? "bg-[#0A1628] text-white shadow-md"
                : "bg-white border border-ind-200 text-ind-500 hover:border-[#0A1628] hover:text-[#0A1628]"
            }`}
            aria-pressed={active === f.value}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((item) => (
          <button
            key={item.id}
            className="group relative rounded-sm overflow-hidden aspect-square cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:ring-offset-2"
            onClick={() => setLightbox(item)}
            aria-label={`View ${item.title} — ${item.subtitle}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-[#0A1628]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-xs font-bold">{item.title}</div>
              <div className="text-white/70 text-xs leading-tight">{item.subtitle}</div>
            </div>
            <div className="absolute top-2 right-2 w-7 h-7 rounded-sm bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-3.5 h-3.5 text-white" aria-hidden="true" />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-[200] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Image: ${lightbox.title}`}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-sm bg-ind-800 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close image"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
          <div
            className="relative w-full max-w-3xl max-h-[80vh] rounded-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={lightbox.src.replace("w=600", "w=1200")}
                alt={lightbox.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <div className="bg-[#0A1628] px-5 py-3">
              <div className="text-white font-heading font-bold">{lightbox.title}</div>
              <div className="text-ind-400 text-sm">{lightbox.subtitle}</div>
              <div className="text-xs text-amber-500/70 mt-1 italic"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
