import styles from "./page.module.scss";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import MagneticButton from "@/components/MagneticButton";

export default function AgenciesLanding() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <FadeIn>
            <h1>Stop selling projects. Start selling Liability SLAs.</h1>
            <p>The audit stack that converts your AI deployments into $10k+ monthly recurring retainers. Give your enterprise clients the legal confidence to deploy.</p>
            <MagneticButton href="/assessment" variant="primary">Join the Partner Program</MagneticButton>
          </FadeIn>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <StaggerContainer className={styles.grid}>
            <StaggerItem className={styles.textContent}>
              <h2>The Retainer Enabler</h2>
              <p>Your clients are afraid to turn the AI on because no one knows who pays when it hallucinates or fails. We solve the "Blame Gap".</p>
              <p>By installing the aaieo Blame Tester, you offer an Insured AI Deployment. If something goes wrong, our system determines the root cause in seconds and triggers the indemnification protocol.</p>
            </StaggerItem>
            <StaggerItem className={styles.featureList}>
              <div className={styles.featureItem}>
                <h3>Churn Reduction</h3>
                <p>Clients stay because your audit and liability monitoring is essential to their legal safety.</p>
              </div>
              <div className={styles.featureItem}>
                <h3>White-label Ready</h3>
                <p>Offer our "Riskmai" diagnostic interface directly to your enterprise clients under your brand.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <FadeIn>
            <h2>Secure your deployments today</h2>
            <p>Don't deliver code without liability coverage. Integrate aaieo and guarantee peace of mind.</p>
            <MagneticButton href="/assessment" variant="primary">Get your Liability Score</MagneticButton>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
