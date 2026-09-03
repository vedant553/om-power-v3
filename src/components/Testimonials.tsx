import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Plant Manager",
    location: "Chemical Factory, Taloja MIDC",
    quote:
      "Om Power delivered our LT distribution panels on time and exactly to spec. Their engineering team also conducted an energy audit that identified savings we immediately acted on.",
    category: "Panel + Audit",
  },
  {
    name: "Electrical Head",
    location: "Logistics Warehouse, Panvel",
    quote:
      "We had serious power quality issues causing equipment tripping. Their harmonics measurement and APFC panel solution resolved it completely within weeks.",
    category: "Power Quality + APFC Panel",
  },
  {
    name: "Facility Manager",
    location: "Commercial Complex, Navi Mumbai",
    quote:
      "The thermographic testing they conducted flagged a potentially dangerous hotspot in our main panel before it became a failure. That alone saved us from a major incident.",
    category: "Thermographic Testing",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-ind-50" aria-labelledby="testimonials-heading">
      <div className="container-custom">
        <div className="mb-14">
          <span className="accent-line" />
          <h2 id="testimonials-heading" className="section-title mb-4">
            From Our Clients&apos; Facilities
          </h2>
          <p className="section-subtitle">
            We work with factories, plants, and commercial buildings across
            Navi Mumbai. Here is what our clients tell us about working with Om
            Power.
          </p>
        </div>

        {/* Editorial card layout — not uniform grid */}
        <div className="grid md:grid-cols-12 gap-4">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`bg-white border border-ind-100 rounded-sm p-7 md:p-8 card-industrial ${
                idx === 0
                  ? "md:col-span-7"
                  : idx === 1
                  ? "md:col-span-5"
                  : "md:col-span-12"
              }`}
            >
              {/* Category tag */}
              <span className="inline-block px-2.5 py-1 rounded-sm bg-ind-950 text-haz-500 text-[10px] font-heading font-semibold tracking-[0.15em] uppercase mb-5">
                {t.category}
              </span>

              <blockquote>
                <p className="text-ind-600 text-sm leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-sm bg-ind-950 flex items-center justify-center text-haz-500 font-heading text-xs font-bold flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ind-950">{t.name}</div>
                    <div className="text-xs text-ind-400">{t.location}</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
