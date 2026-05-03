import styles from "./page.module.scss";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import MagneticButton from "@/components/MagneticButton";

export default function InsuranceLanding() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <FadeIn>
            <h1>The Underwriting Standard for the Agentic Era.</h1>
            <p>Forensic telemetry for automated AI claims settlement. Don't insure black boxes. Reduce investigation costs and control your loss ratio with the industry's first "Orange Box".</p>
            <MagneticButton href="/assessment" variant="primary">Request Technical Feasibility Report</MagneticButton>
          </FadeIn>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <StaggerContainer className={styles.grid}>
            <StaggerItem className={styles.textContent}>
              <h2>Loss Ratio Control</h2>
              <p>Current E&O policies cannot audit algorithmic failure, leaving you exposed to unquantifiable risk.</p>
              <p>aaieo.com provides the missing peritaje técnico (forensic audit). We ingest server logs, model states, and user prompts to instantly differentiate between data corruption, user malice, or true model hallucination.</p>
            </StaggerItem>
            <StaggerItem className={styles.statCard}>
              <div className={styles.statNumber}>90%</div>
              <div className={styles.statLabel}>Reduction in claims investigation costs</div>
            </StaggerItem>
          </StaggerContainer>
          
          <StaggerContainer className={styles.grid} style={{ marginTop: '6rem' }}>
            <StaggerItem className={styles.statCard} style={{ background: '#0a0a0a', color: '#fff', borderColor: '#0a0a0a' }}>
              <div className={styles.statNumber} style={{ color: '#fff' }}>0%</div>
              <div className={styles.statLabel} style={{ color: '#ccc' }}>Payouts for uncompliant architectures</div>
            </StaggerItem>
            <StaggerItem className={styles.textContent}>
              <h2>The Profitability Contingency</h2>
              <p>We don't just audit failures; we prevent them. Every client must implement our mandatory <strong>Deployment Safety Guidelines</strong> to be eligible for coverage.</p>
              <p>If an incident occurs and the telemetry proves they bypassed our architectural guidelines (making the AI inherently prone to errors), the claim is legally denied. This permanently shifts the burden of structural safety back to the developer, strictly protecting your insurance pool's loss ratio.</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <FadeIn>
            <h2>Transform Uncertainty into a Calculable Risk</h2>
            <p>Join the pool of carriers using aaieo to underwrite the next trillion-dollar market: Autonomous AI Agents.</p>
            <MagneticButton 
              href={`mailto:oriens@aiexecutions.com?subject=${encodeURIComponent("Insurance Partnership: MGA & E&O Underwriting")}&body=${encodeURIComponent("Hello aaieo Team,\n\nWe are interested in exploring how your forensic telemetry can help us underwrite Agentic AI risk safely. We would like to schedule a board briefing.\n\nRegards,\n[Your Name/Carrier]")}`} 
              variant="primary"
            >
              Schedule a Board Briefing
            </MagneticButton>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
