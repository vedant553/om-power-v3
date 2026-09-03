import type { Metadata } from "next";
import { Chakra_Petch, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import JsonLd from "@/components/JsonLd";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-chakra",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ompowerconsultant.com"),
  title: {
    default:
      "Om Power Consultant and Engineers | Electrical Panel Manufacturing & Energy Audit — Panvel, Navi Mumbai",
    template: "%s | Om Power Consultant and Engineers",
  },
  description:
    "Om Power Consultant and Engineers, Panvel — specialists in custom LT, HT, VFD & APFC panel manufacturing, energy auditing, power quality audits, electrical safety audits and thermographic testing. Serving Navi Mumbai, Taloja, Uran, Ulwe and the Mumbai industrial belt.",
  keywords: [
    "LT panel manufacturer Panvel",
    "HT panel Navi Mumbai",
    "VFD panel manufacturer",
    "APFC panel",
    "energy audit Navi Mumbai",
    "electrical safety audit",
    "power quality audit",
    "thermographic testing Mumbai",
    "electrical panel manufacturer",
    "Om Power Consultant",
    "Panvel electrical engineer",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ompowerconsultant.com",
    siteName: "Om Power Consultant and Engineers",
    title:
      "Om Power Consultant and Engineers | Electrical Panel Manufacturing & Energy Audit",
    description:
      "Custom LT, HT, VFD & APFC panel manufacturing + energy auditing, power quality, safety audit & thermographic testing — Panvel, Navi Mumbai.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Om Power Consultant and Engineers — Panvel, Navi Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Power Consultant and Engineers | Panel Manufacturing & Energy Audit",
    description:
      "LT, HT, VFD & APFC panels + energy audit & testing services — Panvel, Navi Mumbai.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${chakraPetch.variable}`}>
      <body>
        <JsonLd />
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
