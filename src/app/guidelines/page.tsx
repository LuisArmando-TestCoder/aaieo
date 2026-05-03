import styles from "./page.module.scss";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";

export default function GuidelinesLanding() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <FadeIn>
            <h1>Mandatory Deployment Safety Guidelines</h1>
            <p>The structural prerequisites required to pre-qualify for Agentic E&O Insurance. We protect the insurance pool by enforcing algorithmic safety.</p>
          </FadeIn>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <StaggerContainer className={styles.guidelinesList}>
            <StaggerItem className={styles.guidelineCard}>
              <div className={styles.number}>01</div>
              <div>
                <h3>Isolated Prompt Execution</h3>
                <p>Agents must execute state-changing actions in isolated, sandboxed environments with strict parameter validation before API execution.</p>
              </div>
            </StaggerItem>
            <StaggerItem className={styles.guidelineCard}>
              <div className={styles.number}>02</div>
              <div>
                <h3>Immutable Telemetry Logging</h3>
                <p>Every decision node must stream logs directly to the aaieo "Orange Box" via read-only API. Local, alterable logs will void coverage.</p>
              </div>
            </StaggerItem>
            <StaggerItem className={styles.guidelineCard}>
              <div className={styles.number}>03</div>
              <div>
                <h3>Human-in-the-Loop Thresholds</h3>
                <p>Financial transactions or legal communications exceeding the designated Risk Threshold ($1,000+) must require an Accredited Human sign-off.</p>
              </div>
            </StaggerItem>
            <StaggerItem className={styles.guidelineCard}>
              <div className={styles.number}>04</div>
              <div>
                <h3>Continuous Hallucination Monitoring</h3>
                <p>Models must run parallel sanity checks against deterministic rule-engines. Output that violates deterministic logic must be flagged and halted.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
          
          <FadeIn className={styles.contingencyNotice}>
            <h3>The Profitability Contingency</h3>
            <p>If an incident occurs and the telemetry proves these guidelines were followed, the insurance triggers an automatic payout.</p>
            <p>If the telemetry proves these guidelines were bypassed, <strong>the claim is legally denied</strong>.</p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
