"use client";

import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [voltage, setVoltage] = useState(415);
  const [pf, setPf] = useState(0.98);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const bg = el.querySelector<HTMLElement>(".hero-visual");
      if (bg) bg.style.transform = `translateY(${scrollY * 0.15}px)`;
    };

    const handleMouse = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    el.addEventListener("mousemove", handleMouse, { passive: true });
    
    // Live Data Simulation
    const dataInterval = setInterval(() => {
      setVoltage((prev) => {
        const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        let next = prev + change;
        if (next < 412) next = 412;
        if (next > 418) next = 418;
        return next;
      });

      setPf((prev) => {
        const vals = [0.97, 0.98, 0.99];
        const currentIdx = vals.indexOf(prev);
        const nextIdx = (currentIdx + (Math.random() > 0.5 ? 1 : -1) + vals.length) % vals.length;
        return vals[nextIdx];
      });
    }, 2500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      el.removeEventListener("mousemove", handleMouse);
      clearInterval(dataInterval);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-ind-dark"
      aria-labelledby="hero-heading"
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes energyFlow {
          to { stroke-dashoffset: -40; }
        }
        .animate-energy-flow {
          animation: energyFlow 1.5s linear infinite;
        }
        .panel-tooltip {
          opacity: 0;
          transform: translate(-50%, calc(-50% + 10px));
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }
        .panel-tooltip.visible {
          opacity: 1;
          transform: translate(-50%, -50%);
        }
        .interactive-element {
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .interactive-element:hover {
          filter: drop-shadow(0 0 8px rgba(79, 209, 197, 0.6));
        }
        .glass-panel {
          background: rgba(10, 22, 40, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(79, 209, 197, 0.3);
        }
      `}} />

      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-40" aria-hidden="true" />

      {/* Waveform SVGs */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" fill="none">
          <path d="M0 300 Q50 200 100 300 T200 300 T300 300 T400 300 T500 300 T600 300 T700 300 T800 300" stroke="rgba(234,179,8,0.12)" strokeWidth="2" fill="none" className="animate-waveform" style={{ animationDuration: "3s" }} />
          <path d="M0 320 Q50 220 100 320 T200 320 T300 320 T400 320 T500 320 T600 320 T700 320 T800 320" stroke="rgba(79,209,197,0.08)" strokeWidth="1.5" fill="none" className="animate-waveform" style={{ animationDuration: "4s", animationDelay: "1s" }} />
          <path d="M0 280 Q50 380 100 280 T200 280 T300 280 T400 280 T500 280 T600 280 T700 280 T800 280" stroke="rgba(234,179,8,0.06)" strokeWidth="1" fill="none" className="animate-waveform" style={{ animationDuration: "5s", animationDelay: "0.5s" }} />
        </svg>
      </div>

      {/* Circuit trace SVGs */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" fill="none">
          <path d="M600 0 L600 120 L500 120 L500 250 L400 250" stroke="rgba(234,179,8,0.15)" strokeWidth="1.5" strokeDasharray="6 4" className="animate-circuit-dash" />
          <path d="M800 200 L700 200 L700 350 L620 350" stroke="rgba(79,209,197,0.12)" strokeWidth="1" strokeDasharray="4 6" className="animate-circuit-dash" style={{ animationDuration: "15s" }} />
          <path d="M650 600 L650 480 L550 480 L550 400 L480 400" stroke="rgba(234,179,8,0.1)" strokeWidth="1.5" strokeDasharray="8 4" className="animate-circuit-dash" style={{ animationDuration: "25s" }} />
          <circle cx="600" cy="120" r="3" fill="rgba(234,179,8,0.25)" />
          <circle cx="500" cy="250" r="3" fill="rgba(234,179,8,0.2)" />
          <circle cx="700" cy="200" r="3" fill="rgba(79,209,197,0.2)" />
          <circle cx="550" cy="480" r="3" fill="rgba(234,179,8,0.15)" />
          <rect x="540" y="110" width="20" height="8" rx="1" stroke="rgba(234,179,8,0.2)" strokeWidth="1" fill="none" />
          <rect x="690" y="190" width="20" height="8" rx="1" stroke="rgba(79,209,197,0.15)" strokeWidth="1" fill="none" />
          <rect x="640" y="470" width="20" height="8" rx="1" stroke="rgba(234,179,8,0.15)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Ambient glow */}
      <div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #eab308 0%, transparent 70%)",
          transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
          transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
        aria-hidden="true"
      />

      {/* Content — asymmetric split */}
      <div className="container-custom relative z-10 pt-28 pb-20 md:pt-36 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left column — text + CTA (7 cols) */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Flickering indicator dot */}
            <div className="flex items-center gap-3 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-haz-500 flicker-accent" aria-hidden="true" />
              <span className="text-haz-500/80 font-heading text-xs font-semibold tracking-[0.2em] uppercase">Panvel, Navi Mumbai</span>
              <span className="w-px h-3 bg-ind-600" aria-hidden="true" />
              <span className="text-ind-400 font-heading text-xs font-semibold tracking-[0.2em] uppercase">GST Registered</span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="font-heading text-[2.75rem] sm:text-[3.5rem] md:text-[4.25rem] lg:text-[4.75rem] xl:text-5xl font-bold text-white leading-[1.05] mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Smarter Power.<br />
              <span className="text-haz-500">Lower Consumption.</span>
              <br />
              <span className="text-ind-200">Greater Savings.</span>
            </h1>

            {/* Body */}
            <p
              className="text-ind-300 text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-xl animate-fade-in-up"
              style={{ animationDelay: "0.25s" }}
            >
              Custom LT, HT, VFD &amp; APFC panel manufacturing paired with
              professional energy auditing and electrical testing — all under
              one roof. Serving factories and commercial facilities across
              Navi Mumbai and the Mumbai industrial belt.
            </p>

            {/* CTA row */}
            <div
              className="flex flex-wrap gap-4 mb-12 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Link href="/contact" id="hero-get-quote-cta" className="btn-primary">
                Request a Quote
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link href="/contact" id="hero-call-cta" className="btn-secondary">
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call Us
              </Link>
              <Link
                href="/contact"
                id="hero-whatsapp-cta"
                className="btn-cir"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                WhatsApp
              </Link>
            </div>

            {/* Trust signals */}
            <div
              className="flex flex-wrap gap-x-8 gap-y-3 animate-fade-in-up border-t border-ind-700/50 pt-6"
              style={{ animationDelay: "0.55s" }}
            >
              {[
                "In-House Manufacturing",
                "Certified Engineers",
                "Pan-Mumbai Coverage",
              ].map((badge) => (
                <span key={badge} className="flex items-center gap-2 text-sm text-ind-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cir-500 pulse-glow" aria-hidden="true" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right column — panel schematic visual (5 cols) */}
          <div className="lg:col-span-5 xl:col-span-5 hero-visual will-change-transform hidden lg:block">
            <div className="relative">
              <div
                className="relative aspect-[4/5] rounded-sm overflow-hidden"
                style={{
                  transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -8}px)`,
                  transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                {/* Dark panel face */}
                <div className="absolute inset-0 bg-gradient-to-br from-ind-800/80 to-ind-950/90 border border-ind-700/30 rounded-sm">
                  {/* Panel grid lines */}
                  <div className="absolute inset-0" style={{
                    backgroundImage: "linear-gradient(rgba(79,209,197,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(79,209,197,0.06) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                  }} />

                  {/* Enhanced Panel components — stylized schematic */}
                  <svg className="absolute inset-0 w-full h-full p-6" viewBox="0 0 300 375" fill="none">
                    <defs>
                      <filter id="neon-glow-yellow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                      <filter id="neon-glow-teal" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    {/* Main busbar horizontal */}
                    <line x1="40" y1="60" x2="260" y2="60" stroke="rgba(234,179,8,0.5)" strokeWidth="3" strokeLinecap="round" />
                    <line x1="40" y1="75" x2="260" y2="75" stroke="rgba(234,179,8,0.3)" strokeWidth="2" strokeLinecap="round" />
                    <line x1="40" y1="87" x2="260" y2="87" stroke="rgba(79,209,197,0.3)" strokeWidth="1.5" strokeLinecap="round" />
                    
                    {/* Animated energy flow on busbar */}
                    <line x1="40" y1="60" x2="260" y2="60" stroke="rgba(234,179,8,0.8)" strokeWidth="2" strokeDasharray="10 30" strokeLinecap="round" className="animate-energy-flow" />

                    {/* Vertical feeders with interactive zones */}
                    {[110, 155, 200, 245, 290].map((x, i) => {
                      const isHovered = hoveredNode === `feeder-${i}`;
                      const strokeColor = i % 2 === 0 ? "234,179,8" : "79,209,197";
                      const filterUrl = i % 2 === 0 ? "url(#neon-glow-yellow)" : "url(#neon-glow-teal)";
                      return (
                        <g 
                          key={i} 
                          className="interactive-element"
                          onMouseEnter={() => setHoveredNode(`feeder-${i}`)}
                          onMouseLeave={() => setHoveredNode(null)}
                        >
                          {/* Invisible larger hit area for hover */}
                          <rect x={x - 15} y="75" width="30" height="100" fill="transparent" />
                          
                          <line x1={x} y1="75" x2={x} y2={String(130 + i * 15)} stroke={`rgba(${strokeColor},${isHovered ? '0.8' : '0.3'})`} strokeWidth="1.5" />
                          
                          {/* Animated flow down the feeder, only active on hover */}
                          {isHovered && (
                             <line x1={x} y1="75" x2={x} y2={String(130 + i * 15)} stroke={`rgba(${strokeColor},1)`} strokeWidth="2" strokeDasharray="5 15" className="animate-energy-flow" />
                          )}
                          
                          <rect x={String(x - 10)} y={String(125 + i * 15)} width="20" height="24" rx="2" stroke={`rgba(${strokeColor},${isHovered ? '1' : '0.4'})`} strokeWidth="1" fill={`rgba(${strokeColor},${isHovered ? '0.2' : '0.05'})`} filter={isHovered ? filterUrl : ""} />
                          <circle cx={x} cy={String(137 + i * 15)} r="3" fill={`rgba(${strokeColor},0.8)`} className={i === 0 && !isHovered ? "flicker-accent" : ""} filter={isHovered ? filterUrl : ""} />
                          <line x1={x} y1={String(149 + i * 15)} x2={x} y2={String(165 + i * 15)} stroke="rgba(226,228,232,0.1)" strokeWidth="1" strokeDasharray="2 2" />
                        </g>
                      );
                    })}

                    {/* Meter section - Interactive */}
                    <g 
                      className="interactive-element"
                      onMouseEnter={() => setHoveredNode('metering')}
                      onMouseLeave={() => setHoveredNode(null)}
                    >
                      <rect x="55" y="205" width="90" height="60" rx="4" fill="transparent" /> {/* Hit area */}
                      <rect x="60" y="210" width="80" height="50" rx="3" stroke={hoveredNode === 'metering' ? "rgba(79,209,197,0.8)" : "rgba(226,228,232,0.15)"} strokeWidth="1" fill={hoveredNode === 'metering' ? "rgba(79,209,197,0.15)" : "rgba(226,228,232,0.03)"} />
                      <text x="100" y="232" textAnchor="middle" fill={hoveredNode === 'metering' ? "rgba(79,209,197,1)" : "rgba(79,209,197,0.5)"} fontSize="8" fontFamily="var(--font-chakra)" fontWeight="600" letterSpacing="0.1em" filter={hoveredNode === 'metering' ? "url(#neon-glow-teal)" : ""}>METERING</text>
                      <text x="100" y="248" textAnchor="middle" fill={hoveredNode === 'metering' ? "rgba(234,179,8,1)" : "rgba(234,179,8,0.4)"} fontSize="10" fontFamily="var(--font-chakra)" fontWeight="700">{voltage}V / 50Hz</text>
                    </g>

                    {/* APFC section - Interactive */}
                    <g 
                      className="interactive-element"
                      onMouseEnter={() => setHoveredNode('apfc')}
                      onMouseLeave={() => setHoveredNode(null)}
                    >
                      <rect x="155" y="205" width="90" height="60" rx="4" fill="transparent" /> {/* Hit area */}
                      <rect x="160" y="210" width="80" height="50" rx="3" stroke={hoveredNode === 'apfc' ? "rgba(234,179,8,0.8)" : "rgba(234,179,8,0.2)"} strokeWidth="1" fill={hoveredNode === 'apfc' ? "rgba(234,179,8,0.15)" : "rgba(234,179,8,0.03)"} />
                      <text x="200" y="232" textAnchor="middle" fill={hoveredNode === 'apfc' ? "rgba(234,179,8,1)" : "rgba(234,179,8,0.5)"} fontSize="8" fontFamily="var(--font-chakra)" fontWeight="600" letterSpacing="0.1em" filter={hoveredNode === 'apfc' ? "url(#neon-glow-yellow)" : ""}>APFC</text>
                      <text x="200" y="248" textAnchor="middle" fill={hoveredNode === 'apfc' ? "rgba(79,209,197,1)" : "rgba(79,209,197,0.4)"} fontSize="10" fontFamily="var(--font-chakra)" fontWeight="700">PF: {pf}</text>
                    </g>

                    {/* Bottom terminal strip */}
                    <line x1="40" y1="290" x2="260" y2="290" stroke="rgba(226,228,232,0.1)" strokeWidth="1" />
                    {[60, 100, 140, 180, 220].map((x, i) => (
                      <circle key={i} cx={x} cy="305" r="4" stroke={i % 2 === 0 ? "rgba(234,179,8,0.3)" : "rgba(79,209,197,0.25)"} strokeWidth="1" fill="none" />
                    ))}

                    {/* Panel label */}
                    <text x="150" y="340" textAnchor="middle" fill="rgba(226,228,232,0.12)" fontSize="9" fontFamily="var(--font-chakra)" fontWeight="600" letterSpacing="0.15em">LT DISTRIBUTION PANEL</text>

                    {/* Voltage waveform overlay */}
                    <path d="M40 355 Q65 335 90 355 T140 355 T190 355 T240 355" stroke="rgba(234,179,8,0.15)" strokeWidth="1" fill="none" className="animate-waveform" />
                  </svg>
                  
                  {/* Interactive Tooltip Overlay inside Panel */}
                  <div className={`absolute top-[45%] left-1/2 glass-panel p-4 rounded-lg shadow-2xl z-20 w-44 panel-tooltip border ${hoveredNode ? 'visible' : ''}`}>
                    {hoveredNode?.startsWith('feeder') && (
                      <div className="text-center">
                        <div className="text-[11px] text-ind-300 font-heading tracking-widest uppercase mb-1.5">Feeder {parseInt(hoveredNode.split('-')[1]) + 1}</div>
                        <div className="text-xl font-bold text-white mb-1.5 drop-shadow-md">Load: {120 + parseInt(hoveredNode.split('-')[1]) * 15}A</div>
                        <div className="text-[10px] text-[#0D9488] font-bold uppercase tracking-wider">Status: OK</div>
                      </div>
                    )}
                    {hoveredNode === 'metering' && (
                      <div className="text-center">
                        <div className="text-[11px] text-ind-300 font-heading tracking-widest uppercase mb-1.5">Main Incomer</div>
                        <div className="text-xl font-bold text-[#F59E0B] mb-1.5 drop-shadow-md">{voltage}V</div>
                        <div className="text-[10px] text-[#0D9488] font-bold uppercase tracking-wider">Active Monitoring</div>
                      </div>
                    )}
                    {hoveredNode === 'apfc' && (
                      <div className="text-center">
                        <div className="text-[11px] text-ind-300 font-heading tracking-widest uppercase mb-1.5">Power Factor</div>
                        <div className="text-xl font-bold text-[#0D9488] mb-1.5 drop-shadow-md">{pf}</div>
                        <div className="text-[10px] text-[#F59E0B] font-bold uppercase tracking-wider">Auto Correction ON</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Hazard stripe accent — bottom edge */}
                <div className="absolute bottom-0 left-0 right-0 h-1 hazard-stripe opacity-60" />
              </div>

              {/* Floating data tag — top right */}
              <div className="absolute -top-3 -right-3 bg-ind-900 border border-ind-700/50 rounded-sm px-3 py-2 shadow-lg z-30" style={{ transform: `translate(${mousePos.x * 5}px, ${mousePos.y * 5}px)`, transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                <div className="text-haz-500 font-heading text-lg font-bold leading-none">{voltage}V</div>
                <div className="text-ind-400 text-[10px] font-heading tracking-widest uppercase">3-Phase Supply</div>
              </div>

              {/* Floating data tag — bottom left */}
              <div className="absolute -bottom-3 -left-3 bg-ind-900 border border-cir-500/20 rounded-sm px-3 py-2 shadow-lg z-30" style={{ transform: `translate(${mousePos.x * -4}px, ${mousePos.y * -4}px)`, transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                <div className="text-cir-400 font-heading text-lg font-bold leading-none">50Hz</div>
                <div className="text-ind-400 text-[10px] font-heading tracking-widest uppercase">Power Quality</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom edge — hazard stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-1 hazard-stripe opacity-40" aria-hidden="true" />
    </section>
  );
}
