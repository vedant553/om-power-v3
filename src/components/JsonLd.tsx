export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://ompowerconsultant.com/#business",
    "name": "Om Power Consultant and Engineers",
    "alternateName": "Om Power Consultants",
    "description":
      "Full-service electrical engineering firm offering custom LT, HT, VFD and APFC panel manufacturing, and professional energy auditing, power quality audit, electrical safety audit and thermographic testing services in Panvel, Navi Mumbai and the greater Mumbai industrial belt.",
    "url": "https://ompowerconsultant.com",
    "logo": "https://ompowerconsultant.com/logo.png",
    "email": "ompowerconsultancy2017@gmail.com",
    "telephone": "+919168029393",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Panvel",
      "addressRegion": "Navi Mumbai",
      "postalCode": "410206",
      "addressCountry": "IN",
    },
    "areaServed": [
      "Panvel", "Taloja", "Uran", "Ulwe",
      "Navi Mumbai", "Kharghar", "Belapur", "Mumbai",
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "09:00",
        "closes": "19:00",
      },
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Electrical Panel Manufacturing & Testing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "LT Panel (Low Tension Electrical Panel)",
            "description": "Custom-built Low Tension distribution panels for industrial and commercial applications.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "HT Panel (High Tension Electrical Panel)",
            "description": "High Tension switchgear and panels for industrial power distribution.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "VFD Panel (Variable Frequency Drive Panel)",
            "description": "Variable Frequency Drive panels for motor speed control and energy savings.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Control & APFC Panel (Automatic Power Factor Correction)",
            "description": "APFC and control panels for power factor improvement and motor control.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Energy Audit Services",
            "description": "Comprehensive energy auditing to identify savings opportunities in industrial and commercial facilities.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Power Quality Audit / Harmonics Measurement",
            "description": "Power quality analysis and harmonics measurement to protect equipment and improve efficiency.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Electrical Safety Audit",
            "description": "Comprehensive electrical safety inspections and compliance audits for factories, plants and buildings.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Electrical Testing & Thermographic Testing",
            "description": "Electrical testing services including thermographic (thermal imaging) inspection of electrical equipment to detect faults.",
          },
        },
      ],
    },
    "founder": {
      "@type": "Person",
      "name": "S. Parange",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
