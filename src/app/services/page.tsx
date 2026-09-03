import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight, ChevronRight, ClipboardCheck, FileText, AlertTriangle, Thermometer, ShieldAlert, Zap, CloudLightning, Wrench, Receipt, Search } from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Energy Audit, Power Quality, Safety Audit, HAC, Arc-Flash, Lightning, AMC & Bill Analysis Services | Panvel, Navi Mumbai",
  description:
    "Professional energy auditing, power quality audit, electrical safety audit, hazardous area classification, arc-flash study, lightning risk assessment, AMC, electricity bill analysis and thermographic testing services by Om Power Consultant and Engineers, Panvel.",
  openGraph: {
    title: "Energy Audit, Safety & Electrical Testing Services | Om Power Consultant and Engineers",
    description:
      "Energy audits, hazardous area classification, arc-flash studies, lightning risk assessment, power quality analysis, safety audits, AMC, bill analysis and thermographic testing — Panvel, Navi Mumbai.",
  },
};

const services = [
  {
    id: "energy-audit",
    name: "Energy Audit",
    fullName: "Energy Auditing Services",
    icon: ClipboardCheck,
    accentColor: "#0D9488",
    image: "/services/Energy Auditing Services.png",
    imageAlt: "",
    description:
      "An energy audit is a systematic examination of how energy flows through your facility — identifying where energy is wasted and where savings are possible. We conduct both Level 1 (walk-through) and Level 2 (detailed) energy audits for industrial plants, commercial buildings, and healthcare facilities.",
    whyItMatters: [
      "Typical industrial facilities waste 15–30% of their energy consumption",
      "Audit findings directly reduce electricity bills — often delivering ROI within months",
      "Mandatory for BEE-designated consumers under the Energy Conservation Act",
      "Identifies equipment nearing failure before it causes downtime",
      "Required for green building ratings (LEED, GRIHA) and ESG reporting",
    ],
    deliverables: [
      "Detailed energy consumption baseline & benchmarking",
      "Identification of major energy-consuming equipment (motors, HVAC, lighting, compressed air)",
      "Quantified saving opportunities with investment & payback estimates",
      "Priority-ranked action plan (no-cost, low-cost, capital investment)",
      "Comprehensive audit report with site measurements and data",
    ],
  },
  {
    id: "power-quality",
    name: "Power Quality Audit",
    fullName: "Power Quality Audit & Harmonics Measurement",
    icon: AlertTriangle,
    accentColor: "#F59E0B",
    // TODO: Replace with actual client or royalty-free power quality/harmonics image
    image: "/services/Power Quality Audit & Harmonics Measurement.png",
    imageAlt: "Power quality audit and harmonics measurement",
    description:
      "Poor power quality — manifesting as voltage fluctuations, harmonics, transients, and unbalance — causes mysterious equipment trips, premature motor and transformer failures, and overheating in cables and panels. We measure, diagnose and recommend solutions.",
    whyItMatters: [
      "Harmonic distortion reduces transformer and cable capacity and causes overheating",
      "Voltage unbalance reduces motor efficiency and life by up to 50%",
      "Transients and sags cause PLC/drive trips and data corruption",
      "Non-linear loads (VFDs, UPS, rectifiers) inject harmonics affecting other equipment",
      "Penalties for exceeding utility harmonic injection limits (IEEE 519 / IEC 61000)",
    ],
    deliverables: [
      "Power quality survey using calibrated Class A power analysers",
      "Total Harmonic Distortion (THD) measurement at key panels",
      "Voltage unbalance, sag/swell, and transient analysis",
      "Individual harmonic spectrum analysis (2nd through 50th)",
      "Recommendations: harmonic filters, detuned capacitor banks, isolation transformers",
      "Detailed PQ report with waveforms, trend charts, and corrective actions",
    ],
  },
  {
    id: "safety-audit",
    name: "Electrical Safety Audit",
    fullName: "Electrical Safety Audit",
    icon: FileText,
    accentColor: "#0D9488",
    // TODO: Replace with actual client or royalty-free electrical safety audit image
    image: "/services/Electrical Safety Audit.png",
    imageAlt: "Electrical safety audit by Om Power Consultant",
    description:
      "Electrical installations degrade over time — insulation ages, connections loosen, earthing deteriorates. An electrical safety audit systematically inspects your entire electrical installation against IS/NBC safety standards, identifying life-safety risks and compliance gaps.",
    whyItMatters: [
      "Electrical failures cause ~25% of industrial fires in India",
      "Mandatory for factory license renewals and insurance assessments in many states",
      "Protects workers from electrocution and arc flash incidents",
      "Identifies earthing deficiencies before they become fatal",
      "Documents compliance — critical for ISO 45001 / OHSAS 18001 certification",
    ],
    deliverables: [
      "Visual inspection of all panels, switchboards, cable runs and earthing",
      "Insulation resistance (IR) testing of cables and equipment",
      "Earth continuity and earth loop impedance testing",
      "Arc flash risk assessment (qualitative)",
      "Review against IS 732, IS 3043, IS 1646 and applicable factory regulations",
      "Prioritised corrective action report with compliance gap analysis",
    ],
  },
  {
    id: "thermographic",
    name: "Thermographic Testing",
    fullName: "Electrical Testing & Thermographic (Thermal Imaging) Inspection",
    icon: Thermometer,
    accentColor: "#F59E0B",
    // TODO: Replace with actual client or royalty-free thermographic testing image
    image: "/services/Electrical Testing & Thermographic (Thermal Imaging) Inspection.png",
    imageAlt: "Thermographic testing and thermal imaging inspection",
    description:
      "Thermographic (thermal imaging / infrared) inspection is one of the most powerful non-invasive tools for predictive maintenance. It detects abnormal heat signatures in electrical equipment — loose connections, overloaded circuits, failing components — before they cause a breakdown or fire.",
    whyItMatters: [
      "Most electrical failures begin as a thermal anomaly weeks or months before failure",
      "Prevents unplanned production downtime due to electrical failures",
      "Detects loose/corroded connections, overloaded cables, and failing components",
      "Insurance companies often require periodic thermographic inspection",
      "Dramatically reduces risk of electrical fires",
    ],
    deliverables: [
      "Infrared thermographic scan of all main panels, sub-panels, and critical equipment",
      "High-resolution thermal images of all anomalies found",
      "Comparison against ambient temperature; severity classification (NETA / IEC standards)",
      "Exact location and probable cause of each hotspot",
      "Prioritised corrective action report (Critical / Major / Minor)",
      "Before-and-after imaging option to verify repairs",
    ],
  },
  {
    id: "hazardous-area-classification",
    name: "Hazardous Area Classification",
    fullName: "Hazardous Area Classification & Assessment",
    icon: ShieldAlert,
    accentColor: "#0D9488",
    image: "/services/Hazardous Area Classification & Assessment.png",
    imageAlt: "Hazardous area classification and assessment",
    description:
      "In facilities handling flammable gases, vapors, or combustible dust, the risk of ignition is ever-present. Hazardous Area Classification (HAC) is the systematic evaluation of your facility to identify and zone areas where explosive atmospheres may occur, ensuring the correct selection and installation of explosion-proof (Ex) electrical equipment.",
    whyItMatters: [
      "Mandatory requirement for compliance with IS 5571, IS 5572, and international IEC 60079 standards",
      "Critical for obtaining safety clearances and statutory approvals for chemical, pharma, and oil & gas plants",
      "Prevents catastrophic explosions caused by sparks from non-rated electrical equipment",
      "Accurately defines the extent of hazardous zones to minimize the use of expensive explosion-proof equipment",
      "Essential for protecting personnel, assets, and ensuring business continuity",
    ],
    deliverables: [
      "Detailed facility survey to identify sources of potential release (gas, vapor, or dust)",
      "Determination and mapping of Zone 0, Zone 1, and Zone 2 (gas) and Zone 20, 21, 22 (dust) areas",
      "Comprehensive review of existing lighting, motors, switchgear, and instrumentation against the assigned zone",
      "Creation of detailed hazardous area layout drawings and zoning diagrams",
      "Recommendations for equipment selection (Ex d, Ex e, Ex i, etc.) based on the specific gas groups and temperature classes",
      "Prioritized corrective action report for mitigating identified ignition risks",
    ],
  },
  {
    id: "arc-flash-study",
    name: "Arc-Flash Study",
    fullName: "Arc-Flash Study & Risk Assessment",
    icon: Zap,
    accentColor: "#F59E0B",
    image: "/services/Arc-Flash Study & Risk Assessment.png",
    imageAlt: "Arc-flash study and risk assessment",
    description:
      "An arc flash is an extremely dangerous electrical explosion that can cause severe burns, blindness, and fatal injuries. An Arc-Flash Study calculates the incident thermal energy at specific points in your electrical distribution system, helping you implement proper PPE requirements and safe work practices.",
    whyItMatters: [
      "Crucial for worker safety and compliance with NFPA 70E, IEEE 1584, and OSHA regulations",
      "Determines the exact Arc-Flash Boundary to keep non-qualified personnel safe",
      "Calculates the Incident Energy (cal/cm²) to define the correct level of Personal Protective Equipment (PPE)",
      "Identifies equipment with high arc-flash hazards, allowing you to prioritize mitigation measures",
      "Reduces liability and potential legal consequences in the event of an electrical accident",
    ],
    deliverables: [
      "Complete data collection and modeling of your facility's electrical distribution network",
      "Short circuit, protective device coordination (selectivity), and arc-flash studies",
      "Calculation of incident energy levels and arc-flash boundaries at each major panel (LV & MV)",
      "Generation of compliant Arc-Flash Warning Labels for all switchgear and panels",
      "Comprehensive recommendations to reduce arc-flash energy (e.g., changing breaker settings, installing arc-resistant gear)",
      "Practical safety training recommendations regarding approach boundaries and PPE categories",
    ],
  },
  {
    id: "lightning-risk-assessment",
    name: "Lightning Risk Assessment",
    fullName: "Lightning Arrester & Earthing Risk Assessment",
    icon: CloudLightning,
    accentColor: "#0D9488",
    image: "/services/Lightning Arrester & Earthing Risk Assessment.png",
    imageAlt: "Lightning arrester and earthing risk assessment",
    description:
      "Lightning strikes are a leading cause of equipment damage, data loss, and fire hazards in industrial facilities. A comprehensive Lightning Risk Assessment evaluates your building's susceptibility to direct and indirect strikes, ensuring your Lightning Protection System (LPS) and earthing are robust enough to safely dissipate this massive surge of energy.",
    whyItMatters: [
      "Reduces the risk of catastrophic equipment failure, downtime, and costly repairs caused by surges",
      "Compliance with IS/IEC 62305 standards for Lightning Protection Systems",
      "Prevents fire hazards in highly vulnerable areas like control rooms, chemical storage, and roof-mounted equipment",
      "Ensures adequate bonding and earthing to handle high-frequency lightning currents",
      "Essential for the protection of sensitive electronic equipment (SCADA, PLCs, servers) from induced surges",
    ],
    deliverables: [
      "Calculation of the facility's risk level (L1, L2, L3, L4) based on geographic location, structure, and occupancy",
      "Visual inspection and assessment of existing Air Terminals (Rods), Down Conductors, and Earth Terminals",
      "Evaluation of the lightning protection zone (LPZ) boundaries and surge protection measures",
      "Earth pit resistance measurement to ensure effective dissipation of lightning currents",
      "Detailed drawings and recommendations for the installation or upgrading of Lightning Arresters (ESE & Conventional)",
      "Recommendations for the installation of Class I & Class II Surge Protective Devices (SPDs) in your power and data lines",
    ],
  },
  {
    id: "amc-power-factor",
    name: "AMC",
    fullName: "Annual Maintenance Contracts (AMC) & Power Factor Optimization",
    icon: Wrench,
    accentColor: "#F59E0B",
    image: "/services/Annual Maintenance Contracts (AMC) & Power Factor Optimization.png",
    imageAlt: "",
    description:
      "Maintaining optimal power factor is crucial for avoiding penalties and reducing electricity bills. Our AMC services go beyond standard maintenance by providing real-time monitoring of instantaneous power factor based on the import and export of reactive power, ensuring your systems consistently operate at peak efficiency.",
    whyItMatters: [
      "Real-time monitoring prevents fluctuations that lead to heavy utility penalties for low power factor",
      "Consistent attention to reactive power management avoids costly equipment failures and replacements",
      "Maintains optimal performance of capacitor banks and power factor improvement systems",
      "Ensures uninterrupted production by proactively identifying degrading components",
      "Extends the lifespan of your electrical infrastructure through scheduled maintenance",
    ],
    deliverables: [
      "Scheduled preventive maintenance visits by certified engineers",
      "Real-time measurement and logging of instantaneous power factor",
      "Inspection, testing, and servicing of APFC panels and capacitor banks",
      "Identification and rectification of reactive power import/export issues",
      "Replacement of worn-out components to ensure longevity of machinery",
      "Comprehensive AMC reports detailing system health and savings achieved",
    ],
  },
  {
    id: "bill-analysis",
    name: "Bill Analysis",
    fullName: "Electricity Bill Analysis & Tariff Optimization",
    icon: Receipt,
    accentColor: "#0D9488",
    image: "/services/Electricity Bill Analysis & Tariff Optimization.png",
    imageAlt: "",
    description:
      "Electricity bills are often riddled with erroneous charges, incorrect demand calculations, and missed rebates. We perform a forensic analysis of your electricity bills against your actual consumption patterns to identify billing errors, optimize your tariff structure, and uncover hidden areas of zone-wise wastage.",
    whyItMatters: [
      "Even a small percentage of incorrect billing or missed incentives can cost thousands of rupees annually",
      "Optimizing Time of Day (TOD) usage can significantly reduce energy charges for industrial users",
      "Identifying peak demand penalties allows for effective load management strategies",
      "Accurate verification of consumer data and billing history ensures you are never overcharged",
      "Provides crucial baseline data for future capital investments and energy savings projects",
    ],
    deliverables: [
      "Verification of consumer-related data, billing history, and demand calculations",
      "Detailed analysis of power factor, TOD energy charges, and electricity duty",
      "Identification of zone-wise consumption patterns and wastage",
      "Comparative study of energy bills with previous years to track efficiency trends",
      "Recommendations for tariff restructuring to minimize overall costs",
      "Comprehensive report with bill analysis and energy conservation (EC) suggestions with/without capital investment",
    ],
  },
  {
    id: "walkthrough-detailed-audit",
    name: "Energy Audits",
    fullName: "Walkthrough & Detailed Energy Audits",
    icon: Search,
    accentColor: "#F59E0B",
    image: "/services/Walkthrough & Detailed Energy Audits.png",
    imageAlt: "Walkthrough and detailed energy audits",
    description:
      "We offer tiered auditing solutions tailored to your specific requirements. Our initial Walkthrough Audit provides a rapid, on-site overview of where energy is being wasted, while our Detailed Energy Audit provides a comprehensive, data-driven roadmap for deep energy conservation and capital planning.",
    whyItMatters: [
      "Walkthrough audits provide immediate, low-cost identification of quick-wins and maintenance needs",
      "Detailed audits are essential for creating accurate baselines and identifying major capital investment opportunities",
      "Helps prioritize spending based on the most impactful energy conservation measures",
      "Ensures you have the necessary data to justify large-scale energy upgrades to management",
      "Comprehensive audits provide the required documentation for green building compliance",
    ],
    deliverables: [
      "Walkthrough Audit: On-site inspection identifying where energy is wasted, where repairs are needed, and potential capital investments",
      "Detailed Audit: Complete facility description, equipment inventory, and detailed energy balance",
      "Detailed Audit: Financial analysis (ROI, payback periods) associated with each energy-saving measure",
      "Identification of best practices and operational changes to immediately reduce consumption",
      "Prioritized recommendations based on cost vs. savings analysis",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16 md:pt-18">
      {/* Page Header */}
      <section className="bg-ind-dark py-6 md:py-8 relative overflow-hidden" aria-labelledby="services-hero-heading">
        <div className="absolute inset-0 blueprint-grid opacity-40" aria-hidden="true" />
        <div className="container-custom relative z-10 flex flex-col items-start">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-ind-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
            <span className="text-[#0D9488]">Services</span>
          </nav>
          
          <h1 id="services-hero-heading" className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
            Testing &amp; Energy Audit Services
          </h1>
          
          <p className="text-ind-300 text-sm md:text-base max-w-4xl leading-relaxed">
            Comprehensive electrical testing, energy auditing, safety compliance, and power system risk assessment services — ten specialised offerings for industrial plants, chemical facilities, commercial buildings and healthcare infrastructure.
          </p>
        </div>
      </section>

      {/* Overview Card Grid */}
      <section className="bg-ind-50 py-10 border-b border-ind-100" aria-label="Services Overview">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={`card-${s.id}`} className="bg-white border border-ind-100 rounded-sm shadow-sm overflow-hidden flex flex-col transition-all hover:shadow-md hover:border-ind-200 group">
                <div className="relative h-48 w-full overflow-hidden bg-ind-100">
                  {s.image ? (
                    <Image src={s.image} alt={s.imageAlt || s.fullName} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-ind-400 font-heading text-xs tracking-widest uppercase">No Image</div>
                  )}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2 py-1 rounded-sm text-[10px] font-bold tracking-widest uppercase text-white shadow-sm" style={{ background: s.accentColor }}>
                      {s.name}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-heading text-lg font-bold text-[#0A1628] mb-2 group-hover:text-[#0D9488] transition-colors line-clamp-2">{s.fullName}</h3>
                  <p className="text-ind-500 text-sm line-clamp-2 mb-4 flex-grow">{s.description}</p>
                  <a href={`#${s.id}`} className="inline-flex items-center text-sm font-semibold text-[#0A1628] hover:text-[#0D9488] transition-colors mt-auto group/link">
                    View Details <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service sections */}
      <div>
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <section
              key={service.id}
              id={service.id}
              className={`section-padding scroll-mt-28 ${idx % 2 === 0 ? "bg-white" : "bg-ind-50"}`}
              aria-labelledby={`${service.id}-heading`}
            >
              <div className="container-custom">
                <div className={`grid lg:grid-cols-2 gap-12 items-start`}>

                  {/* Image */}
                  <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                    {service.image ? (
                    <div className="relative rounded-sm overflow-hidden shadow-xl aspect-[4/3]">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span
                          className="px-3 py-1 rounded-sm text-xs font-bold tracking-widest uppercase text-white"
                          style={{ background: service.accentColor }}
                        >
                          {service.name}
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
                  <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                    <span className="accent-line" style={{ background: `linear-gradient(90deg, ${service.accentColor}, #0A1628)` }} />
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ background: `${service.accentColor}18` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: service.accentColor }} aria-hidden="true" />
                      </div>
                      <span className="text-xs font-bold tracking-widest uppercase text-ind-400">Testing &amp; Consulting</span>
                    </div>
                    <h2 id={`${service.id}-heading`} className="section-title mb-4">
                      {service.fullName}
                    </h2>
                    <p className="text-ind-500 text-sm leading-relaxed mb-6">{service.description}</p>

                    {/* Why it matters */}
                    <div className="mb-6">
                      <h3 className="font-heading font-bold text-base text-[#0A1628] uppercase tracking-wide mb-3">
                        Why It Matters
                      </h3>
                      <ul className="space-y-1.5">
                        {service.whyItMatters.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-sm text-ind-500">
                            <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: service.accentColor }} aria-hidden="true" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="mb-8">
                      <h3 className="font-heading font-bold text-base text-[#0A1628] uppercase tracking-wide mb-3">
                        What You Get
                      </h3>
                      <ul className="space-y-2">
                        {service.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-ind-600">
                            <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: service.accentColor }} aria-hidden="true" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href="/contact" id={`${service.id}-enquiry-cta`} className="btn-cir">
                      Enquire About {service.name}
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CTABanner />
    </div>
  );
}
