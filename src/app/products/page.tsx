import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight, ChevronRight } from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Electrical Panels, Thyristor, SVG Hybrid & MSEDCL Liaisoning | Panvel, Navi Mumbai",
  description:
    "Custom LT, HT, VFD, APFC, Thyristor switching, SVG hybrid panels and MSEDCL liaisoning services by Om Power Consultant and Engineers, Panvel.",
  openGraph: {
    title: "Electrical Panel Manufacturing & MSEDCL Liaisoning | Om Power Consultant and Engineers",
    description:
      "LT, HT, VFD, APFC, Thyristor, SVG hybrid panels and end-to-end MSEDCL regulatory services — Panvel, Navi Mumbai.",
  },
};

const products = [
  {
    id: "lt-panel",
    name: "LT Panel",
    fullName: "Low Tension (LT) Distribution Panel",
    badge: "Panel Manufacturing",
    badgeColor: "#0A1628",
    // TODO: Replace with actual client photo of LT Panel
    image: "/products/Low Tension (LT) Distribution Panel.png",
    imageAlt: "",
    description:
      "Low Tension panels are the backbone of power distribution in industrial and commercial facilities. We design and fabricate custom LT panels built to IS standards, engineered for your specific load requirements and facility layout.",
    applications: [
      "Industrial factories & MIDC plants",
      "Commercial office buildings",
      "Hospitals & healthcare facilities",
      "Logistics & warehousing",
      "Residential complexes & townships",
    ],
    features: [
      "Custom-built enclosures per IS 8623 / IEC 61439",
      // TODO: Confirm actual rating ranges with client
      "Ratings from 100A to 6300A (busbar configuration)",
      "Air-insulated or draw-out type breakers",
      "In-house fabrication — no subcontracting",
      "Complete metering, protection & indication",
      "Factory-tested before dispatch",
    ],
  },
  {
    id: "ht-panel",
    name: "HT Panel",
    fullName: "High Tension (HT) Switchgear Panel",
    badge: "Panel Manufacturing",
    badgeColor: "#0A1628",
    // TODO: Replace with actual client photo of HT Panel
    image: "/products/High Tension (HT) Switchgear Panel.png",
    imageAlt: "",
    description:
      "High Tension panels handle power at 11 kV and above — critical for industrial facilities with their own HT connections. Our HT switchgear panels are engineered for reliability, safety, and seamless integration with utility supply points.",
    applications: [
      "Industries with HT (11kV) utility connection",
      "Large manufacturing plants",
      "Power-intensive process industries",
      "Substations & transformer yards",
      "Infrastructure & utility projects",
    ],
    features: [
      // TODO: Confirm voltage classes and specifications with client
      "11 kV & 33 kV switchgear panels",
      "Vacuum Circuit Breakers (VCB)",
      "Ring Main Unit (RMU) configurations",
      "Bus-bar chambers with protection relays",
      "Interlocking & safety shutters",
      "Compliant with IS 3427 / IEC 62271",
    ],
  },
  {
    id: "vfd-panel",
    name: "VFD Panel",
    fullName: "Variable Frequency Drive (VFD) Panel",
    badge: "Panel Manufacturing",
    badgeColor: "#0A1628",
    // TODO: Replace with actual client photo of VFD Panel
    image: "/products/Variable Frequency Drive (VFD) Panel.png",
    imageAlt: "",
    description:
      "VFD panels provide precise motor speed control, dramatically reducing energy consumption and mechanical stress. Whether for pumps, fans, compressors, or conveyors — our VFD panels are custom-built and pre-wired for fast site commissioning.",
    applications: [
      "Pumps & water treatment plants",
      "HVAC fans & AHUs",
      "Compressors & blowers",
      "Conveyors & material handling",
      "Cooling towers & chillers",
    ],
    features: [
      // TODO: Confirm drive brands and rating ranges stocked/integrated by client
      "Leading VFD brands: ABB, Siemens, Schneider (as specified)",
      "Single & multi-drive enclosures",
      "Input/output isolation transformers (optional)",
      "Bypass contactor for emergency operation",
      "PLC integration & remote monitoring ready",
      "Energy saving: up to 50% on variable load drives",
    ],
  },
  {
    id: "apfc-panel",
    name: "Control & APFC Panel",
    fullName: "Control & Automatic Power Factor Correction (APFC) Panel",
    badge: "Panel Manufacturing",
    badgeColor: "#0A1628",
    // TODO: Replace with actual client photo of APFC Panel
    image: "/products/Control & Automatic Power Factor Correction (APFC) Panel.png",
    imageAlt: "",
    description:
      "APFC panels automatically maintain your facility's power factor within the utility-required range, eliminating penalty charges on your electricity bill. Our control panels also serve as motor control centers and automation panels for industrial processes.",
    applications: [
      "Factories with heavy motor loads",
      "Commercial complexes with inductive loads",
      "Industries facing power factor penalties",
      "Process automation & motor control",
      "Hospitals & data centres",
    ],
    features: [
      // TODO: Confirm kVAR range and relay types used by client
      "Automatic power factor correction up to 2000 kVAR (modular)",
      "Capacitor banks with detuned reactors (anti-harmonic)",
      "Digital PF controller (Ducati, Epcos, Novar or equivalent)",
      "Thyristor switching for high-cycle applications (optional)",
      "Motor Control Centre (MCC) configurations available",
      "Custom relay logic & PLC-based control panels",
    ],
    educationalNote: {
      title: "What is an APFC Panel — and why does your business need one?",
      body: "When your facility runs motors, transformers, or other inductive loads, your power factor drops below 1.0. Electricity utilities in India charge a penalty when your average power factor falls below 0.85–0.90. An APFC panel continuously monitors your power factor and automatically switches capacitor banks in/out to keep it near unity — eliminating the penalty and reducing your maximum demand charges. It typically pays for itself within 12–18 months through bill savings alone.",
    },
  },
  {
    id: "thyristor-panel",
    name: "Thyristor Panel",
    fullName: "Thyristor Switching Panel",
    badge: "Panel Manufacturing",
    badgeColor: "#0A1628",
    image: "/products/Thyristor Switching Panel.png",
    imageAlt: "",
    description:
      "Thyristor switching panels are engineered for ultra-fast, zero-lag reactive power compensation. Unlike standard contactor-based APFC systems, thyristor switching provides transient-free switching, making them ideal for facilities with rapidly fluctuating loads, sensitive electronic equipment, and welding or crane operations where capacitor switching must be instantaneous and silent.",
    applications: [
      "Facilities with rapidly fluctuating loads (e.g., spot welding, cranes, presses)",
      "High-rise buildings and data centers with sensitive electronics",
      "Pharmaceutical and semiconductor plants requiring pure power",
      "Textile and rolling mills with heavy, cyclic motor loads",
      "Induction furnaces and arc furnaces",
      "Renewable energy systems (Solar/Wind) requiring dynamic PF correction",
    ],
    features: [
      "Ultra-fast switching: response time less than 20 milliseconds",
      "Zero-maintenance, silent operation (no mechanical contactors required)",
      "Zero-transient switching ensuring no inrush current or voltage spikes",
      "Thyristor modules (e.g., Semikron, Infineon, or equivalent)",
      "Designed to handle continuous switching cycles (up to millions of operations)",
      "Integrated cooling system and overtemperature protection",
      "Digital power factor controller with high-speed communication (RS485/Modbus)",
      "Ratings available from 50 kVAR to 5000 kVAR (modular)",
      "Compliant with IEC 60439 / IS 8623 standards",
    ],
  },
  {
    id: "svg-hybrid-panel",
    name: "SVG Hybrid Panel",
    fullName: "Static Var Generator (SVG) Hybrid System Panel",
    badge: "Panel Manufacturing",
    badgeColor: "#0A1628",
    image: "/products/Static Var Generator (SVG) Hybrid System Panel.png",
    imageAlt: "",
    description:
      "Static Var Generators (SVGs) are state-of-the-art, active power electronics-based solutions that provide dynamic, stepless reactive power compensation. Unlike conventional capacitors, SVGs inject leading or lagging current instantaneously to correct power factor and stabilize voltage, even in systems with severe harmonic distortion and unbalanced loads. Our hybrid panels combine APFC capacitor banks with SVG modules for maximum efficiency and cost-effectiveness.",
    applications: [
      "Facilities with severe harmonic distortion (VFD, UPS, inverter loads)",
      "Plants with rapidly varying and unbalanced loads",
      "Wind and solar power plants (grid stability and power quality)",
      "High-tech data centers and research labs (requiring ultra-clean power)",
      "Electrical arc furnaces and induction melting plants",
      "Marine and offshore electrical installations",
    ],
    features: [
      "Stepless, instantaneous reactive power compensation (leading to lagging)",
      "Active harmonic filtering capability (up to 50th order) — combined in one unit",
      "Effective on 3-phase, 3-wire and 3-phase, 4-wire systems",
      "Hybrid design: SVG module combined with standard APFC capacitor banks for optimized cost",
      "Microprocessor/DSP based intelligent control",
      "Advanced IGBT-based inverters from trusted global brands",
      "Voltage balancing and flicker mitigation for unstable grid conditions",
      "User-friendly touch screen interface with real-time data logging",
      "Ratings available from 30 kVAR to 5000 kVAR (modular, parallel operation)",
    ],
  },
  {
    id: "msedcl-liaisoning",
    name: "MSEDCL Liaisoning",
    fullName: "MSEDCL Liaisoning & Regulatory Approvals",
    badge: "Regulatory Services",
    badgeColor: "#0D9488",
    image: "/products/MSEDCL Liaisoning & Regulatory Approvals.png",
    imageAlt: "",
    description:
      "Navigating the complex procedures of the Maharashtra State Electricity Distribution Company Limited (MSEDCL) requires deep technical knowledge and precise documentation. We provide end-to-end liaisoning services to secure new connections, load enhancements, and statutory approvals — ensuring your facility is energized on time and fully compliant with utility regulations.",
    applications: [
      "New industrial & commercial facility setups requiring HT/LT connections",
      "Existing industries upgrading their sanctioned load (Load Enhancement)",
      "Temporary supply connections for construction sites & events",
      "Metering, relaying, and protection scheme approvals",
      "Change of ownership, tariff reclassification, and name transfers",
      "Green energy (solar/wind) net-metering approvals and synchronization",
    ],
    features: [
      "Complete application preparation and document management",
      "Coordination with MSEDCL sub-division, division, and circle offices",
      "Technical design and vetting of metering cubicles, CT/PT sets, and protection relays",
      "Accurate calculation of demand charges, development charges, and security deposits",
      "Site inspections, pre-commissioning testing, and energy meter sealing follow-ups",
      "Facilitation of Right of Way (ROW), trenching, and duct laying permissions (as applicable)",
      "Resolution of bill disputes, penal charges, and billing errors with the utility",
      "NOC (No Objection Certificate) assistance for factory license renewals and CEIG clearances",
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="pt-16 md:pt-18">
      {/* Page Header */}
      <section className="bg-ind-dark py-6 md:py-8 relative overflow-hidden" aria-labelledby="products-hero-heading">
        <div className="absolute inset-0 blueprint-grid opacity-40" aria-hidden="true" />
        <div className="container-custom relative z-10 flex flex-col items-start">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-ind-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
            <span className="text-[#F59E0B]">Products</span>
          </nav>
          
          <h1 id="products-hero-heading" className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
            Electrical Panel Manufacturing
          </h1>
          
          <p className="text-ind-300 text-sm md:text-base max-w-4xl leading-relaxed">
            Custom-built LT, HT, VFD, APFC, Thyristor switching and SVG hybrid panels — plus end-to-end MSEDCL liaisoning and regulatory approval services.
          </p>
        </div>
      </section>

      {/* Overview Card Grid */}
      <section className="bg-ind-50 py-10 border-b border-ind-100" aria-label="Products Overview">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {products.map((p) => (
              <div key={`card-${p.id}`} className="bg-white border border-ind-100 rounded-sm shadow-sm overflow-hidden flex flex-col transition-all hover:shadow-md hover:border-ind-200 group">
                <div className="relative h-48 w-full overflow-hidden bg-ind-100">
                  {p.image ? (
                    <Image src={p.image} alt={p.imageAlt || p.fullName} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-ind-400 font-heading text-xs tracking-widest uppercase">No Image</div>
                  )}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2 py-1 rounded-sm text-[10px] font-bold tracking-widest uppercase text-white shadow-sm" style={{ background: p.badgeColor }}>
                      {p.badge}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-heading text-lg font-bold text-[#0A1628] mb-2 group-hover:text-[#F59E0B] transition-colors">{p.fullName}</h3>
                  <p className="text-ind-500 text-sm line-clamp-2 mb-4 flex-grow">{p.description}</p>
                  <a href={`#${p.id}`} className="inline-flex items-center text-sm font-semibold text-[#0A1628] hover:text-[#F59E0B] transition-colors mt-auto group/link">
                    View Details <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product sections */}
      <div>
        {products.map((product, idx) => (
          <section
            key={product.id}
            id={product.id}
            className={`section-padding scroll-mt-28 ${idx % 2 === 0 ? "bg-white" : "bg-ind-50"}`}
            aria-labelledby={`${product.id}-heading`}
          >
            <div className="container-custom">
              <div className={`grid lg:grid-cols-2 gap-12 items-start ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>

                {/* Image */}
                <div className={`${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  {product.image ? (
                    <div className="relative rounded-sm overflow-hidden shadow-xl aspect-[4/3]">
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-sm bg-[#F59E0B] text-[#0A1628] text-xs font-bold tracking-widest uppercase">
                          {product.name}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative rounded-sm overflow-hidden shadow-xl aspect-[4/3] bg-ind-100 flex items-center justify-center border-2 border-dashed border-ind-200">
                      <span className="font-heading text-sm text-ind-400 tracking-widest uppercase">Image Coming Soon</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={`${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="accent-line" />
                  <div className="inline-block px-2.5 py-1 rounded-sm bg-[#0A1628]/08 text-[#0A1628] text-xs font-bold tracking-widest uppercase mb-3">
                    {product.badge}
                  </div>
                  <h2 id={`${product.id}-heading`} className="section-title mb-4">
                    {product.fullName}
                  </h2>
                  <p className="text-ind-500 text-sm leading-relaxed mb-6">{product.description}</p>

                  {/* Applications */}
                  <div className="mb-6">
                    <h3 className="font-heading font-bold text-base text-[#0A1628] uppercase tracking-wide mb-3">
                      Typical Applications
                    </h3>
                    <ul className="space-y-1.5">
                      {product.applications.map((app) => (
                        <li key={app} className="flex items-center gap-2 text-sm text-ind-500">
                          <ArrowRight className="w-3.5 h-3.5 text-[#0D9488] flex-shrink-0" aria-hidden="true" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="font-heading font-bold text-base text-[#0A1628] uppercase tracking-wide mb-3">
                      Key Features &amp; Specifications
                    </h3>
                    <ul className="space-y-2">
                      {product.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-sm text-ind-600">
                          <CheckCircle className="w-4 h-4 text-[#0D9488] flex-shrink-0 mt-0.5" aria-hidden="true" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact" id={`${product.id}-enquiry-cta`} className="btn-primary">
                    Enquire About {product.name}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* APFC educational note */}
              {product.educationalNote && (
                <div className="mt-12 p-6 rounded-sm bg-[#0D9488]/08 border border-[#0D9488]/20">
                  <h3 className="font-heading font-bold text-lg text-[#0D9488] mb-3">
                    ℹ️ {product.educationalNote.title}
                  </h3>
                  <p className="text-sm text-ind-600 leading-relaxed">
                    {product.educationalNote.body}
                  </p>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      <CTABanner />
    </div>
  );
}
