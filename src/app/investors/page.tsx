import styles from "./page.module.scss";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import MagneticButton from "@/components/MagneticButton";

export default function InvestorsLanding() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <FadeIn>
            <h1>Building the Accountability Layer for the AI Economy.</h1>
            <p>What Carta did for Equity, we are doing for Liability. We are establishing the global standard of AI-Audit-as-a-Service.</p>
            <MagneticButton href="/assessment" variant="primary">View Pitch Deck & Data Room</MagneticButton>
          </FadeIn>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <StaggerContainer className={styles.grid}>
            <StaggerItem className={styles.textContent}>
              <h2>The Standard Play</h2>
              <p>AI is not replacing humans because nobody wants to be legally responsible. By creating the bridge of trust between code and the insurance carrier, we are unlocking a multi-trillion-dollar market.</p>
              <p>Our key metric is <strong>TREA (Total Risk Exposure Audited)</strong>. We aim to capture the telemetry of every autonomous decision made in critical enterprise sectors.</p>
            </StaggerItem>
            <StaggerItem className={styles.featureList}>
              <div className={styles.featureItem}>
                <h3>Regulatory Moat</h3>
                <p>Designed for the requirements of the EU AI Act and the US Executive Order on AI. Compliance becomes our barrier to entry.</p>
              </div>
              <div className={styles.featureItem}>
                <h3>Network Effects</h3>
                <p>As more agencies use Riskmai to diagnose models, more carriers use EOSilicon to underwrite, creating an inescapable data network.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <FadeIn>
            <h2>Partner with the category definer</h2>
            <p>We are raising capital to accelerate the deployment of our "Orange Box" standard across the Fortune 500.</p>
            <MagneticButton 
              href={`mailto:oriens@aiexecutions.com?subject=${encodeURIComponent("VC Inquiry: aaieo.com Funding")}&body=${encodeURIComponent("Hi aaieo Founders,\n\nWe are interested in discussing the 'Orange Box' standard and your vision for Agentic Liability. Please let us know your availability for a private briefing.\n\nBest,\n[Your Name/Fund]")}`} 
              variant="primary"
            >
              Contact the Founders
            </MagneticButton>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
