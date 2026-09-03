"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/clients", label: "Our Clients" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ind-950/98 shadow-lg shadow-black/30 backdrop-blur-md"
          : "bg-ind-950/90 backdrop-blur-sm"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Om Power Consultant and Engineers - Home">
            <div className="flex items-center justify-center w-8 h-8 rounded-sm bg-haz-500 group-hover:scale-105 transition-transform duration-200">
              <Zap className="w-4 h-4 text-ind-950" aria-hidden="true" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-heading font-bold text-white text-sm leading-none tracking-wide">
                OM POWER
              </span>
              <span className="text-[0.6rem] text-haz-500 font-heading font-semibold tracking-[0.18em] uppercase leading-none mt-0.5">
                Consultant &amp; Engineers
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active text-haz-500" : ""}`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/contact"
              id="nav-call-cta"
              className="btn-primary !py-2 !px-4 !text-xs"
              aria-label="Get a quote"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-sm text-white hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-[400px] opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!menuOpen}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-ind-700/50">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2.5 rounded-sm font-heading font-semibold text-sm tracking-wide uppercase transition-colors ${
                  pathname === link.href
                    ? "bg-haz-500/15 text-haz-500"
                    : "text-ind-200 hover:bg-white/5 hover:text-haz-500"
                }`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 px-4 mt-3">
              <a href="/contact" id="mobile-cta" className="btn-primary flex-1 justify-center !py-2.5 !text-xs">
                Get a Quote
              </a>
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-whatsapp-cta"
                className="btn-cir flex-1 justify-center !py-2.5 !text-xs"
                aria-label="Chat on WhatsApp"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
