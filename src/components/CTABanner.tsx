import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-ind-dark relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 blueprint-grid opacity-30" aria-hidden="true" />
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(circle, #eab308 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(circle, #4fd1c5 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <span className="accent-line mb-4" />
          <h2 id="cta-heading" className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Ready to Get Started?
          </h2>
          <p className="text-ind-300 text-base md:text-lg mb-10 leading-relaxed">
            Whether you need custom electrical panels built or a professional
            energy, safety, or power quality audit — our engineers are ready to
            help. Reach out for a free consultation.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" id="cta-banner-quote" className="btn-primary">
              Request a Free Quote
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link href="/contact" id="cta-banner-contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>

          <p className="mt-8 text-ind-500 text-sm font-heading">
            Mon – Sat, 9:00 AM – 7:00 PM &nbsp;|&nbsp; Panvel, Navi Mumbai
          </p>
        </div>
      </div>

      {/* Top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-haz-500/20 to-transparent" aria-hidden="true" />
    </section>
  );
}
