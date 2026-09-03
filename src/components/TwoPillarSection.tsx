import Link from "next/link";
import { ArrowRight, Settings, Activity } from "lucide-react";

export default function TwoPillarSection() {
  return (
    <section className="section-padding bg-ind-50" aria-labelledby="pillars-heading">
      <div className="container-custom">
        <div className="mb-14">
          <span className="accent-line" />
          <h2 id="pillars-heading" className="section-title mb-4">
            Two Equally Important Business Lines
          </h2>
          <p className="section-subtitle">
            We are both a panel manufacturer and an energy testing consultancy — not
            just one or the other. This dual capability means we understand your
            power systems from design through to compliance.
          </p>
        </div>

        {/* Two pillars — editorial alternating */}
        <div className="space-y-6">

          {/* Pillar A — Panel Manufacturing */}
          <div className="grid md:grid-cols-12 gap-0 bg-white border border-ind-100 rounded-sm overflow-hidden card-industrial">
            {/* Left content area */}
            <div className="md:col-span-7 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-ind-950 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-haz-500" aria-hidden="true" />
                </div>
                <span className="font-heading text-xs font-semibold tracking-[0.15em] uppercase text-ind-400">
                  Business Line 1
                </span>
              </div>

              <h3 className="font-heading text-2xl md:text-3xl font-bold text-ind-950 mb-3">
                Panel Manufacturing
              </h3>
              <p className="text-ind-500 text-sm leading-relaxed mb-6 max-w-lg">
                Custom-built, in-house fabricated electrical panels designed to
                specification for industrial plants, commercial buildings, and
                infrastructure projects.
              </p>

              <Link
                href="/products"
                id="pillar-products-cta"
                className="inline-flex items-center gap-2 font-heading font-bold text-haz-600 text-sm tracking-wide uppercase hover:gap-3 transition-all group-hover:text-haz-700"
                aria-label="View all electrical panel products"
              >
                View All Panels
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Right panel list */}
            <div className="md:col-span-5 bg-ind-950 p-8 md:p-10">
              <ul className="space-y-4">
                {[
                  { name: "LT Panel", desc: "Low Tension distribution panels" },
                  { name: "HT Panel", desc: "High Tension switchgear panels" },
                  { name: "VFD Panel", desc: "Variable Frequency Drive panels" },
                  { name: "Control & APFC Panel", desc: "Power factor correction panels" },
                ].map((item, i) => (
                  <li key={item.name} className="flex items-start gap-3 group/item">
                    <span className="flex-shrink-0 w-6 h-6 rounded-sm bg-haz-500/10 border border-haz-500/20 flex items-center justify-center mt-0.5 font-heading text-xs font-bold text-haz-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <span className="font-semibold text-white text-sm block">
                        {item.name}
                      </span>
                      <span className="text-ind-400 text-xs">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pillar B — Testing & Audit Services */}
          <div className="grid md:grid-cols-12 gap-0 bg-white border border-ind-100 rounded-sm overflow-hidden card-industrial">
            {/* Right content area (reversed on desktop) */}
            <div className="md:col-span-7 p-8 md:p-10 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-cir-500/10 border border-cir-500/20 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-cir-500" aria-hidden="true" />
                </div>
                <span className="font-heading text-xs font-semibold tracking-[0.15em] uppercase text-ind-400">
                  Business Line 2
                </span>
              </div>

              <h3 className="font-heading text-2xl md:text-3xl font-bold text-ind-950 mb-3">
                Testing &amp; Energy Audit
              </h3>
              <p className="text-ind-500 text-sm leading-relaxed mb-6 max-w-lg">
                Professional energy auditing, power quality measurement, safety
                inspections and thermographic testing — helping industries cut
                costs, ensure compliance, and prevent failures.
              </p>

              <Link
                href="/services"
                id="pillar-services-cta"
                className="inline-flex items-center gap-2 font-heading font-bold text-cir-600 text-sm tracking-wide uppercase hover:gap-3 transition-all group-hover:text-cir-500"
                aria-label="View all testing and audit services"
              >
                View All Services
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Left panel list (reversed on desktop) */}
            <div className="md:col-span-5 bg-ind-900 p-8 md:p-10 md:order-1">
              <ul className="space-y-4">
                {[
                  { name: "Energy Audit", desc: "Identify savings, reduce energy bills" },
                  { name: "Power Quality Audit", desc: "Harmonics measurement & analysis" },
                  { name: "Electrical Safety Audit", desc: "Compliance & hazard prevention" },
                  { name: "Thermographic Testing", desc: "Thermal imaging fault detection" },
                ].map((item, i) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-sm bg-cir-500/10 border border-cir-500/20 flex items-center justify-center mt-0.5 font-heading text-xs font-bold text-cir-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <span className="font-semibold text-white text-sm block">
                        {item.name}
                      </span>
                      <span className="text-ind-400 text-xs">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
