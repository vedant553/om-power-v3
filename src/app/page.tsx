import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import TwoPillarSection from "@/components/TwoPillarSection";
import StatsBar from "@/components/StatsBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceAreaCallout from "@/components/ServiceAreaCallout";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title:
    "Om Power Consultant and Engineers | LT HT VFD APFC Panel Manufacturing & Energy Audit — Panvel, Navi Mumbai",
  description:
    "Om Power Consultant and Engineers, Panvel — expert LT, HT, VFD & APFC electrical panel manufacturers and energy audit / power quality / safety audit / thermographic testing consultants serving Navi Mumbai, Taloja, Uran, Ulwe and the Mumbai industrial belt.",
  openGraph: {
    title:
      "Om Power Consultant and Engineers | Panel Manufacturing & Energy Audit — Panvel",
    description:
      "Custom electrical panels + professional energy auditing services. Serving Navi Mumbai, Panvel, Taloja, Uran, Ulwe and the Mumbai industrial belt.",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TwoPillarSection />
      <StatsBar />
      <WhyChooseUs />
      <ServiceAreaCallout />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
    </>
  );
}
