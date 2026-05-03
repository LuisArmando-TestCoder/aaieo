import styles from "./page.module.scss";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import MagneticButton from "@/components/MagneticButton";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <FadeIn>
            <h1>Agentic AI Errors & Omissions.</h1>
            <p>The definitive platform to register, audit, and insure Autonomous Artificial Intelligence deployments. The ultimate E&O infrastructure for autonomous action.</p>
            <div className={styles.actions}>
              <MagneticButton href="/assessment" variant="primary">Apply for Coverage</MagneticButton>
              <MagneticButton href="/insurance" variant="secondary">For Carriers</MagneticButton>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <FadeIn className={styles.sectionHeader}>
            <h2>The Infrastructure of Trust</h2>
            <p>We transform uninsurable algorithmic risk into programmable, audited, and indemnifiable deployments.</p>
          </FadeIn>

          <StaggerContainer className={styles.featuresGrid}>
            <StaggerItem className={styles.featureCard}>
              <h3>Registry</h3>
              <p>An immutable registry of each model version and its logs. Like a Cap Table, but for the liability of your AI Agents.</p>
            </StaggerItem>
            <StaggerItem className={styles.featureCard}>
              <h3>Audit & Troubleshoot</h3>
              <p>Real-time forensic analysis. We instantly differentiate between user malice, corrupted data, or model hallucination.</p>
            </StaggerItem>
            <StaggerItem className={styles.featureCard}>
              <h3>Insure</h3>
              <p>Direct connection to insurance pools. By using aaieo, your models are pre-qualified for automatic Errors and Omissions (E&O) policies.</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <FadeIn>
            <h2>Ready to deploy with certainty?</h2>
            <p>Don't let the Liability Gap pause your innovation. Integrate our read-only API and convert risk into an insurable asset.</p>
            <MagneticButton href="/assessment" variant="inverted">Apply to Waitlist</MagneticButton>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
