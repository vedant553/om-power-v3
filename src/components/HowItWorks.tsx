const steps = [
  {
    num: "01",
    title: "Initial Consultation",
    desc: "We discuss your facility, pain points, and scope the right product or service for you.",
  },
  {
    num: "02",
    title: "Site Visit & Measurement",
    desc: "Our engineers visit your site with calibrated instruments for testing, auditing, or assessment.",
  },
  {
    num: "03",
    title: "Analysis & Report",
    desc: "We analyse all collected data and prepare a detailed report with findings and prioritised recommendations.",
  },
  {
    num: "04",
    title: "Recommendations & Support",
    desc: "We present findings and help you implement corrective actions or deliver your custom panel.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-white" aria-labelledby="hiw-heading">
      <div className="container-custom">
        <div className="mb-10">
          <span className="accent-line" />
          <h2 id="hiw-heading" className="section-title mb-4">
            How We Work With You
          </h2>
          <p className="section-subtitle">
            From first call to final delivery — a straightforward four-step process.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="bg-ind-50 border border-ind-100 rounded-sm p-6 card-industrial">
              <span className="flex-shrink-0 inline-block w-7 h-7 rounded-sm bg-ind-950 text-haz-500 text-xs font-heading font-bold flex items-center justify-center mb-4">
                {step.num}
              </span>
              <h3 className="font-heading font-bold text-base text-ind-950 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-ind-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
