import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import "./globals.scss";
import Link from "next/link";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "aaieo - The Standard for Agentic Liability",
  description: "Auditing the future of autonomous action. The Carta for AI Accountability.",
  openGraph: {
    title: "aaieo - The Standard for Agentic Liability",
    description: "Accountability-as-a-Service. Converting uninsurable algorithmic risk into programmable, audited deployments.",
    type: "website",
  },
};

import SmoothScroll from "@/components/SmoothScroll";
import MagneticButton from "@/components/MagneticButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lora.variable}`}>
      <body>
        <SmoothScroll>
        <nav className="global-nav">
          <div className="nav-container">
            <Link href="/" className="logo">aaieo.com</Link>
            <div className="nav-links">
              <Link href="/agencies">Agencies</Link>
              <Link href="/insurance">Insurance</Link>
              <Link href="/investors">Investors</Link>
              <div className="dropdown">
                <span className="dropbtn">Industries</span>
                <div className="dropdown-content">
                  <Link href="/industries#enterprise">Enterprise Agents</Link>
                  <Link href="/industries#professional">Professional Automation</Link>
                  <Link href="/industries#healthcare">Healthcare & Medical</Link>
                  <Link href="/industries#finance">Finance & Trading</Link>
                </div>
              </div>
            </div>
            <MagneticButton href="/assessment" variant="primary-small">Apply for Assessment</MagneticButton>
          </div>
        </nav>
        
        {children}

        <footer className="global-footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-brand">
                <div className="logo">aaieo.com</div>
                <p>The Standard for Agentic Liability. Auditing the future of autonomous action.</p>
              </div>
              <div className="footer-links">
                <div className="link-col">
                  <h4>Ecosystem</h4>
                  <Link href="/agencies">Riskmai for Agencies</Link>
                  <Link href="/insurance">EOSilicon for Carriers</Link>
                  <Link href="/investors">Investors & Data Room</Link>
                </div>
                <div className="link-col">
                  <h4>Legal & Compliance</h4>
                  <Link href="/guidelines">Safety Guidelines</Link>
                  <Link href="/secure-demo">IP Honey Pot Demo</Link>
                  <a href={`mailto:oriens@aiexecutions.com?subject=${encodeURIComponent("Legal / Compliance Inquiry")}`}>Contact Legal</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} aaieo.com. All Rights Reserved. Accountable Silicon.</p>
            </div>
          </div>
        </footer>
        </SmoothScroll>
      </body>
    </html>
  );
}
