import styles from "./page.module.scss";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import MagneticButton from "@/components/MagneticButton";

export default function IndustriesLanding() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <FadeIn>
            <h1>Industry-Specific Liability Ramifications</h1>
            <p>Every sector carries a unique risk profile. See how aaieo.com converts your specific algorithmic exposure into an insurable asset.</p>
          </FadeIn>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <StaggerContainer className={styles.grid}>
            <StaggerItem className={styles.industryCard} id="enterprise">
              <h2>Enterprise Agents</h2>
              <div className={styles.riskBox}>
                <strong>Legal Ramification:</strong> High probability of breach of contract due to hallucinated commitments.
              </div>
              <p>When autonomous agents negotiate vendor agreements or manage supply chains, an LLM hallucination can bind the corporation to millions in unapproved liabilities. Our "Orange Box" audits prompt parameters against corporate guardrails before execution.</p>
              <MagneticButton href="/assessment" variant="primary-small">Apply for Enterprise Audit</MagneticButton>
            </StaggerItem>

            <StaggerItem className={styles.industryCard} id="professional">
              <h2>Professional Automation</h2>
              <div className={styles.riskBox}>
                <strong>Legal Ramification:</strong> Revocation of professional licenses (Lawyers, CPAs, Engineers).
              </div>
              <p>We protect the Accredited Human. If an AI paralegal drafts a flawed brief, the human lawyer is disbarred. aaieo provides the forensic telemetry to prove algorithmic failure, protecting the individual's license and transferring the payout to the E&O policy.</p>
              <MagneticButton href="/assessment" variant="primary-small">Apply for Professional Audit</MagneticButton>
            </StaggerItem>

            <StaggerItem className={styles.industryCard} id="healthcare">
              <h2>Healthcare & Medical</h2>
              <div className={styles.riskBox}>
                <strong>Legal Ramification:</strong> Medical malpractice and severe HIPAA non-compliance.
              </div>
              <p>Diagnostic AI models carry extreme liability. Without an immutable log of the deterministic sanity checks (our Safety Guideline #04), hospitals cannot insure AI usage. We provide the cryptographic proof required for medical malpractice coverage.</p>
              <MagneticButton href="/assessment" variant="primary-small">Apply for Medical Audit</MagneticButton>
            </StaggerItem>

            <StaggerItem className={styles.industryCard} id="finance">
              <h2>Finance & Trading</h2>
              <div className={styles.riskBox}>
                <strong>Legal Ramification:</strong> SEC violations and algorithmic flash crashes.
              </div>
              <p>When automated trading agents execute outside of expected parameters, the losses are catastrophic. Our system mandates Human-in-the-Loop thresholds for high-value trades, ensuring compliance and indemnifying the trading desk.</p>
              <MagneticButton href="/assessment" variant="primary-small">Apply for Finance Audit</MagneticButton>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </main>
  );
}