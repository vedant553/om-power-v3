import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Building2 } from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Our Clients — Trusted by Industry Leaders Across India | Om Power Consultant",
  description:
    "Om Power Consultant and Engineers is trusted by leading companies in Real Estate, Pharmaceuticals, Steel, and Chemicals for reliable testing and energy auditing services.",
  openGraph: {
    title: "Our Clients | Om Power Consultant and Engineers",
    description:
      "Trusted by Godrej, Tata, Petronas, Welspun, SAIL and 20+ leading industrial companies across India.",
  },
};

interface ClientEntry {
  name: string;
  logo?: string;
  logoWidth?: number;
}

const clients: ClientEntry[] = [
  { name: "Godrej Properties", logo: "/clients/godrej-properties.png", logoWidth: 160 },
  { name: "Godrej Industries", logo: "/clients/godrej-industries.png", logoWidth: 140 },
  { name: "Tata Cancer Centre", logo: "/clients/tata-memorial.png", logoWidth: 120 },
  { name: "Petronas Lubricants", logo: "/clients/petronas.png", logoWidth: 150 },
  { name: "Welspun Michigan Engineers", logo: "/clients/welspun-michigan.png", logoWidth: 200 },
  { name: "Vinati Organics", logo: "/clients/vinati-organics.png", logoWidth: 160 },
  { name: "Nipro Pharma", logo: "/clients/nipro-group.png", logoWidth: 160 },
  { name: "RPG Life Science", logo: "/clients/rpg-life-science.png", logoWidth: 180 },
  { name: "Alkyl Amines", logo: "/clients/alkyl-amines.png", logoWidth: 160 },
  { name: "Alana Khopoli", logo: "/clients/alana-khopoli.png", logoWidth: 150 },
  { name: "LSR Speciality Oils", logo: "/clients/lsr-oils.png", logoWidth: 130 },
  { name: "Emil Pharma", logo: "/clients/emil-pharma.png", logoWidth: 100 },
  { name: "DK Pharma", logo: "/clients/dk-pharma.png", logoWidth: 80 },
  { name: "Avyasta Pharma", logo: "/clients/avyasta-pharma.png", logoWidth: 80 },
  { name: "Korton Pharma", logo: "/clients/korton-pharma.png", logoWidth: 70 },
  { name: "Neon Labs", logo: "/clients/neon-labs.png", logoWidth: 180 },
  { name: "CETP Koparkhairne", logo: "/clients/cetp-koparkhairne.png", logoWidth: 100 },
  { name: "Morning Star", logo: "/clients/morningstar.png", logoWidth: 180 },
  { name: "Lakshya Chandi Heights", logo: "/clients/lakshya-chandi.png", logoWidth: 200 },
  { name: "AGS Global", logo: "/clients/ags-global.png", logoWidth: 130 },
  { name: "Aezis Global Private", logo: "/clients/aezis-global.png", logoWidth: 160 },
  { name: "Cantor Pharma", logo: "/clients/cantor-pharma.png", logoWidth: 160 },
  { name: "Wanbury", logo: "/clients/wanbury.png", logoWidth: 150 },
  { name: "Merc Life Science", logo: "/clients/merck.png", logoWidth: 150 },
  { name: "Mukund Steel", logo: "/clients/mukand.png", logoWidth: 140 },
  { name: "SAIL", logo: "/clients/sail.svg", logoWidth: 100 },
];

export default function ClientsPage() {
  return (
    <div className="pt-16 md:pt-18">
      {/* Hero — compressed */}
      <section className="bg-ind-dark py-6 md:py-8 relative overflow-hidden" aria-labelledby="clients-hero-heading">
        <div className="absolute inset-0 blueprint-grid opacity-40" aria-hidden="true" />
        <div className="container-custom relative z-10 flex flex-col items-start">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-ind-400 mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
            <span className="text-[#F59E0B]">Our Clients</span>
          </nav>
          
          <div className="inline-block px-3 py-1 rounded-sm bg-haz-500/20 border border-haz-500/40 mb-5">
            <span className="text-haz-400 text-xs font-bold tracking-widest uppercase">Client Portfolio</span>
          </div>
          
          <h1 id="clients-hero-heading" className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
            Trusted by Industry Leaders <span className="text-haz-400">Across India</span>
          </h1>
          
          <p className="text-ind-300 text-sm md:text-base max-w-2xl leading-relaxed">
            Our team of certified consultants and engineers is trusted by leading companies in Real Estate, Pharmaceuticals, Steel, and Chemicals to deliver reliable testing and energy auditing services.
          </p>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="section-padding bg-white relative" aria-label="Our clients">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group relative flex items-center justify-center h-28 md:h-32 rounded-sm border border-ind-100 bg-ind-50/60 hover:bg-ind-50 hover:border-haz-500/40 hover:shadow-lg hover:shadow-haz-500/5 transition-all duration-300 overflow-hidden"
              >
                {/* Corner accent on hover */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-transparent group-hover:border-haz-500/60 transition-colors duration-300" aria-hidden="true" />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-transparent group-hover:border-haz-500/60 transition-colors duration-300" aria-hidden="true" />

                {/* Content: logo or text fallback */}
                <div className="relative z-10 flex items-center justify-center px-4">
                  {client.logo ? (
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={client.logoWidth || 150}
                      height={60}
                      className="max-h-24 md:max-h-28 w-auto object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                      priority={false}
                    />
                  ) : (
                    <div className="text-center">
                      <Building2 className="w-4 h-4 mx-auto mb-1.5 text-ind-300 group-hover:text-haz-500 transition-colors duration-300" aria-hidden="true" />
                      <span className="font-heading font-bold text-sm md:text-base text-ind-500 group-hover:text-ind-900 transition-colors duration-300 leading-tight block">
                        {client.name}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-12 text-center">
            <p className="text-ind-400 text-sm">
              {clients.length}+ clients and counting — across Real Estate, Pharmaceuticals, Chemicals, Steel, and FMCG sectors.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
