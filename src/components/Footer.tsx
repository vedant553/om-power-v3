import Link from "next/link";
import { Zap, MapPin, Mail, Clock, Phone } from "lucide-react";

const productLinks = [
  { href: "/products#lt-panel", label: "LT Panel" },
  { href: "/products#ht-panel", label: "HT Panel" },
  { href: "/products#vfd-panel", label: "VFD Panel" },
  { href: "/products#apfc-panel", label: "Control & APFC Panel" },
];

const serviceLinks = [
  { href: "/services#energy-audit", label: "Energy Audit" },
  { href: "/services#power-quality", label: "Power Quality Audit" },
  { href: "/services#safety-audit", label: "Electrical Safety Audit" },
  { href: "/services#thermographic", label: "Thermographic Testing" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/clients", label: "Our Clients" },
  { href: "/contact", label: "Contact" },
];

const serviceAreas = [
  "Panvel", "Taloja", "Uran", "Ulwe",
  "Navi Mumbai", "Mumbai", "Kharghar", "Belapur",
];

export default function Footer() {
  return (
    <footer className="bg-ind-950 text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="container-custom py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4" aria-label="Om Power Consultant and Engineers">
              <div className="flex items-center justify-center w-8 h-8 rounded-sm bg-haz-500">
                <Zap className="w-4 h-4 text-ind-950" aria-hidden="true" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading font-bold text-white text-sm tracking-wide">OM POWER</span>
                <span className="text-[0.6rem] text-haz-500 font-heading font-semibold tracking-[0.18em] uppercase">Consultant &amp; Engineers</span>
              </div>
            </Link>
            <p className="text-sm text-ind-400 leading-relaxed mb-4">
              Full-service electrical panel manufacturing and energy audit
              consultancy serving Panvel, Navi Mumbai and the Mumbai
              industrial belt.
            </p>
          </div>

          {/* Products + Services Column */}
          <div>
            <h3 className="font-heading font-bold text-xs text-haz-500 uppercase tracking-[0.15em] mb-4">
              Panel Manufacturing
            </h3>
            <ul className="space-y-2 mb-6">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ind-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-cir-500/50 flex-shrink-0 group-hover:bg-haz-500 transition-colors" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-heading font-bold text-xs text-cir-400 uppercase tracking-[0.15em] mb-3">
              Testing &amp; Audit
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ind-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-haz-500/50 flex-shrink-0 group-hover:bg-cir-500 transition-colors" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas + Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-xs text-white uppercase tracking-[0.15em] mb-4">Service Areas</h3>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {serviceAreas.map((area) => (
                <span key={area} className="text-xs bg-white/5 text-ind-300 px-2.5 py-1 rounded-sm border border-white/8 font-heading">
                  {area}
                </span>
              ))}
            </div>
            <h3 className="font-heading font-bold text-xs text-white uppercase tracking-[0.15em] mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ind-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-heading font-bold text-xs text-white uppercase tracking-[0.15em] mb-4">Contact Us</h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-haz-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm text-ind-400 leading-relaxed">
                  Panvel, Navi Mumbai,<br />Maharashtra — 410206
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-haz-500 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:ompowerconsultancy@yahoo.com" className="text-sm text-ind-400 hover:text-white transition-colors break-all">
                  ompowerconsultancy@yahoo.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-haz-500 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+919168029393" className="text-sm text-ind-400 hover:text-white transition-colors">
                  +91 91680 29393
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-haz-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-sm text-ind-400">
                  <div>Mon – Sat: 9:00 AM – 7:00 PM</div>
                  <div>Sunday: By appointment</div>
                </div>
              </li>
            </ul>
            <div className="mt-5 p-3 rounded-sm bg-white/5 border border-white/8">
              <p className="text-xs text-ind-400">
                <span className="text-haz-500 font-heading font-semibold">GST Registered</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ind-800">
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ind-500">
          <p>&copy; {new Date().getFullYear()} Om Power Consultant and Engineers. All rights reserved.</p>
          <p className="font-heading">Panvel, Navi Mumbai | Serving the Mumbai Industrial Belt</p>
        </div>
      </div>
    </footer>
  );
}
