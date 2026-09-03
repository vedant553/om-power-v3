import { MapPin } from "lucide-react";

const areas = [
  "Panvel",
  "Taloja",
  "Uran",
  "Ulwe",
  "Navi Mumbai",
  "Kharghar",
  "Belapur",
  "Mumbai",
  "Raigad District",
];

export default function ServiceAreaCallout() {
  return (
    <section className="py-14 md:py-16 bg-ind-900 relative overflow-hidden" aria-labelledby="service-area-heading">
      <div className="absolute inset-0 circuit-pattern opacity-40" aria-hidden="true" />
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Text */}
          <div className="md:max-w-md">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-haz-500" aria-hidden="true" />
              <span className="text-haz-500/80 text-xs font-heading font-semibold tracking-[0.15em] uppercase">
                Service Coverage
              </span>
            </div>
            <h2 id="service-area-heading" className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
              Serving the Mumbai Industrial Belt
            </h2>
            <p className="text-ind-300 text-sm leading-relaxed">
              Based in Panvel, we deliver panel manufacturing and energy audit
              services to industries, factories, commercial buildings, and
              hospitals across the greater Navi Mumbai and Mumbai region.
            </p>
          </div>

          {/* Area chips */}
          <div className="flex flex-wrap gap-2 md:max-w-sm lg:max-w-md" role="list" aria-label="Service areas">
            {areas.map((area) => (
              <span
                key={area}
                role="listitem"
                className="px-3.5 py-1.5 rounded-sm bg-white/8 border border-white/15 text-ind-200 text-sm font-heading font-semibold hover:bg-haz-500/15 hover:border-haz-500/30 hover:text-haz-500 transition-colors"
              >
                {area}
              </span>
            ))}
            <span className="px-3.5 py-1.5 rounded-sm bg-haz-500 text-ind-950 text-sm font-heading font-bold">
              + surrounding areas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
