import {
  Factory,
  ShieldCheck,
  Timer,
  MapPin,
  BadgeCheck,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: Factory,
    title: "In-House Manufacturing",
    desc: "We fabricate panels ourselves — no middlemen, no subcontracting. Full control over quality, specifications, and delivery timelines means you deal with engineers, not traders.",
    accent: "amber" as const,
    size: "large" as const,
  },
  {
    icon: ShieldCheck,
    title: "Certified Engineers on Every Project",
    desc: "Our team of qualified electrical engineers brings hands-on domain expertise to both panel manufacturing and energy auditing.",
    accent: "cir" as const,
    size: "small" as const,
  },
  {
    icon: MapPin,
    title: "Pan-Mumbai Industrial Belt Coverage",
    desc: "Based in Panvel, we serve Taloja MIDC, Uran, Ulwe, Kharghar, Belapur, and across the greater Mumbai industrial corridor.",
    accent: "cir" as const,
    size: "small" as const,
  },
  {
    icon: Timer,
    title: "Rapid Turnaround, Minimal Downtime",
    desc: "We understand that industrial downtime is costly. Our production and audit processes are built for speed without sacrificing rigour — because every day of delay hits your bottom line.",
    accent: "amber" as const,
    size: "large" as const,
  },
  {
    icon: BadgeCheck,
    title: "GST Registered & Compliant",
    desc: "Fully GST-registered with transparent invoicing for procurement departments and large organisations.",
    accent: "amber" as const,
    size: "small" as const,
  },
  {
    icon: Users,
    title: "End-to-End Partnership",
    desc: "From design and manufacturing to testing, auditing, and post-installation support — a single point of contact for your power systems.",
    accent: "cir" as const,
    size: "small" as const,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white" aria-labelledby="why-heading">
      <div className="container-custom">
        {/* Section header — left-aligned, editorial */}
        <div className="mb-14">
          <span className="accent-line" />
          <h2 id="why-heading" className="section-title mb-4">
            Why Companies Across Navi Mumbai Trust Us
          </h2>
          <p className="section-subtitle">
            We are engineers who both build and audit electrical systems —
            giving you a uniquely comprehensive partner that understands your
            power infrastructure from every angle.
          </p>
        </div>

        {/* Bento grid — varied card sizes */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            const isLarge = reason.size === "large";
            const isAmber = reason.accent === "amber";

            return (
              <div
                key={reason.title}
                className={`${
                  isLarge
                    ? "md:col-span-7"
                    : "md:col-span-5"
                } group relative bg-ind-50 rounded-sm border border-ind-100 p-7 md:p-8 card-industrial overflow-hidden`}
              >
                {/* Corner accent */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 opacity-[0.03] ${
                    isAmber ? "bg-haz-500" : "bg-cir-500"
                  }`}
                  style={{
                    clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                  }}
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Icon + title row */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-11 h-11 rounded-sm flex items-center justify-center flex-shrink-0 border ${
                        isAmber
                          ? "bg-haz-500/10 border-haz-500/20"
                          : "bg-cir-500/10 border-cir-500/20"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          isAmber ? "text-haz-600" : "text-cir-600"
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="font-heading text-lg md:text-xl font-bold text-ind-950 leading-tight pt-1.5">
                      {reason.title}
                    </h3>
                  </div>

                  <p className="text-ind-500 text-sm leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
