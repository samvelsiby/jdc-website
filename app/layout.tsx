import type { Metadata } from "next";
import { Titan_One, Permanent_Marker, Caveat, Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const titan = Titan_One({ weight: "400", subsets: ["latin"], variable: "--font-titan", display: "swap" });
const marker = Permanent_Marker({ weight: "400", subsets: ["latin"], variable: "--font-marker", display: "swap" });
const caveat = Caveat({ weight: ["500", "700"], subsets: ["latin"], variable: "--font-caveat", display: "swap" });
const poppins = Poppins({ weight: ["400", "500", "800"], subsets: ["latin"], variable: "--font-poppins", display: "swap" });

export const metadata: Metadata = {
  title: "Team Winnie — UWinnipeg JDC West 26/27",
  description:
    "The University of Winnipeg delegation to JDC West, Western Canada's biggest business school competition. Meet the team, see what we compete in, and apply.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${titan.variable} ${marker.variable} ${caveat.variable} ${poppins.variable}`}>
      <body className="tx-paper">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SmoothScroll />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
