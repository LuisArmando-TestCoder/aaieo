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
            
            <StaggerItem className={styles.industryCard} id="mobility">
              <h2>1. Autonomous Mobility & Transport</h2>
              <div className={styles.riskBox}>
                <strong>Legal Ramification:</strong> Physical harm, property damage, and kinetic impact liabilities.
              </div>
              <p>Massive capital investment and direct physical consequences of autonomous logic failures. When autonomous driving decisions lead to accidents, traditional policies fall short without forensic algorithmic auditing.</p>
              <MagneticButton href="/assessment?sector=mobility" variant="primary-small">Apply for Mobility Audit</MagneticButton>
            </StaggerItem>

            <StaggerItem className={styles.industryCard} id="finance">
              <h2>2. Finance & Algorithmic Trading</h2>
              <div className={styles.riskBox}>
                <strong>Legal Ramification:</strong> Flash crashes, fiscal errors, unauthorized trades, and hallucinated credit scoring.
              </div>
              <p>In a high-frequency, high-stakes environment where agents control and execute vast amounts of capital, instantaneous financial loss requires immediate root-cause attribution for indemnification.</p>
              <MagneticButton href="/assessment?sector=finance" variant="primary-small">Apply for Finance Audit</MagneticButton>
            </StaggerItem>

            <StaggerItem className={styles.industryCard} id="healthcare">
              <h2>3. Healthcare & Medical AI</h2>
              <div className={styles.riskBox}>
                <strong>Legal Ramification:</strong> Medical malpractice, missed diagnoses, and autonomous modifications to patient treatment plans.
              </div>
              <p>Strict regulatory environments where AI decisions directly impact human lives. Standard medical malpractice does not cover algorithmic autonomy without cryptographic audit logs.</p>
              <MagneticButton href="/assessment?sector=healthcare" variant="primary-small">Apply for Healthcare Audit</MagneticButton>
            </StaggerItem>

            <StaggerItem className={styles.industryCard} id="cybersecurity">
              <h2>4. Cybersecurity & IT Operations</h2>
              <div className={styles.riskBox}>
                <strong>Legal Ramification:</strong> Systemic downtime, accidental shutdown of production servers, and business interruption costs.
              </div>
              <p>DevSecOps security agents are granted root access to critical enterprise infrastructure. Misidentifying legitimate traffic as an attack can paralyze business operations.</p>
              <MagneticButton href="/assessment?sector=cybersecurity" variant="primary-small">Apply for Cyber Audit</MagneticButton>
            </StaggerItem>

            <StaggerItem className={styles.industryCard} id="professional">
              <h2>5. Professional Services: Legal & Tax</h2>
              <div className={styles.riskBox}>
                <strong>Legal Ramification:</strong> Fiduciary breaches, professional negligence claims, incorrect legal filings, and automated accounting errors.
              </div>
              <p>Industries built entirely on precision, compliance, and fiduciary duty. They are highly exposed to E&O claims if autonomous assistants hallucinate precedents or miscalculate taxes.</p>
              <MagneticButton href="/assessment?sector=professional" variant="primary-small">Apply for Professional Audit</MagneticButton>
            </StaggerItem>

            <StaggerItem className={styles.industryCard} id="hr">
              <h2>6. HR Tech & Human Capital Management</h2>
              <div className={styles.riskBox}>
                <strong>Legal Ramification:</strong> Algorithmic bias, automated discriminatory hiring or compensation decisions, and strict regulatory fines.
              </div>
              <p>Rapid adoption of autonomous resume screening and scheduling combined with high exposure to class-action lawsuits requires transparent logic auditing.</p>
              <MagneticButton href="/assessment?sector=hr" variant="primary-small">Apply for HR Audit</MagneticButton>
            </StaggerItem>

            <StaggerItem className={styles.industryCard} id="enterprise">
              <h2>7. Enterprise Operations & Procurement</h2>
              <div className={styles.riskBox}>
                <strong>Legal Ramification:</strong> Contractual errors, massive over-ordering, and paying fraudulent invoices.
              </div>
              <p>Agents are being granted direct access to corporate bank accounts, supplier portals, and vendor networks. Logic drift or prompt-injection attacks can drain corporate liquidity instantly.</p>
              <MagneticButton href="/assessment?sector=enterprise" variant="primary-small">Apply for Enterprise Audit</MagneticButton>
            </StaggerItem>

            <StaggerItem className={styles.industryCard} id="customer-service">
              <h2>8. Customer Service & Autonomous E-Commerce</h2>
              <div className={styles.riskBox}>
                <strong>Legal Ramification:</strong> Unintended legal obligations, hallucinated refund policies, and mass unauthorized discounts.
              </div>
              <p>Bots are evolving from simply answering FAQs to altering customer accounts and executing transactions in real-time, causing severe revenue loss when hallucinations occur.</p>
              <MagneticButton href="/assessment?sector=customer-service" variant="primary-small">Apply for E-Commerce Audit</MagneticButton>
            </StaggerItem>

            <StaggerItem className={styles.industryCard} id="supply-chain">
              <h2>9. Supply Chain & Logistics</h2>
              <div className={styles.riskBox}>
                <strong>Legal Ramification:</strong> Massive inventory waste, catastrophic over-ordering of perishable goods, and misrouted global shipments.
              </div>
              <p>The sector operates on thin margins where predictive accuracy and autonomous routing dictate profitability. Predictive execution errors require immediate E&O payouts.</p>
              <MagneticButton href="/assessment?sector=supply-chain" variant="primary-small">Apply for Logistics Audit</MagneticButton>
            </StaggerItem>

            <StaggerItem className={styles.industryCard} id="advertising">
              <h2>10. Advertising & Creative AdTech</h2>
              <div className={styles.riskBox}>
                <strong>Legal Ramification:</strong> Budget burn and immediate IP infringement from generated creative assets.
              </div>
              <p>High-speed programmatic bidding and generative content creation operate simultaneously without human oversight. A bidding glitch can burn a month's advertising budget in minutes.</p>
              <MagneticButton href="/assessment?sector=advertising" variant="primary-small">Apply for AdTech Audit</MagneticButton>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </section>
    </main>
  );
}