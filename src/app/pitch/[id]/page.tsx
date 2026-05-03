import styles from "./page.module.scss";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import MagneticButton from "@/components/MagneticButton";

// This simulates a dynamic page that would fetch AI-generated personalized copy based on the ID.
export default async function PersonalizedPitch({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Simulated database of AI-generated personalized pitches
  const pitches: Record<string, any> = {
    sergio: {
      name: "Sergio",
      company: "Cross-Border Insurance Brokerage",
      inferredRisk: "High exposure in cross-border AI logistics and automated trading across USA and Mexico.",
      headline: "The AI Liability Solution for USA-Mexico Cross-Border Brokers.",
      subhead: "Sergio, your brokerage is uniquely positioned to capture the Agentic AI market. Let's discuss how aaieo's telemetry can secure your cross-border deployments.",
    },
    default: {
      name: "Valued Partner",
      company: "Enterprise AI",
      inferredRisk: "Significant unquantifiable risk in current autonomous deployments.",
      headline: "Your Exclusive AI Accountability Assessment.",
      subhead: "We have analyzed your public architecture. Here is how aaieo can convert your uninsurable risk into a competitive advantage.",
    }
  };

  const pitchData = pitches[id.toLowerCase()] || pitches.default;

  return (
    <main className={styles.pitchMain}>
      <section className={styles.hero}>
        <div className="container">
          <FadeIn>
            <div className={styles.confidentialBadge}>CONFIDENTIAL & PERSONALIZED FOR: {pitchData.name.toUpperCase()}</div>
            <h1>{pitchData.headline}</h1>
            <p>{pitchData.subhead}</p>
            <div className={styles.actions}>
              <MagneticButton href="/secure-demo" variant="inverted">Enter Secure Data Room</MagneticButton>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <StaggerContainer className={styles.analysisBox}>
            <StaggerItem>
              <h2>AI Inferred Risk Analysis for {pitchData.company}</h2>
              <p className={styles.riskText}><strong>Identified Exposure:</strong> {pitchData.inferredRisk}</p>
            </StaggerItem>
            <StaggerItem>
              <p>Based on our automated scraping and analysis of your digital footprint, traditional E&O policies will not cover your emerging Agentic AI liabilities.</p>
              <p>By partnering with aaieo.com, you can offer your clients an "Orange Box" audited solution, driving massive retention and opening new premium markets.</p>
            </StaggerItem>
            <StaggerItem className={styles.ctaWrapper}>
              <MagneticButton 
                href={`mailto:oriens@aiexecutions.com?subject=${encodeURIComponent(`Private Briefing Request: ${pitchData.name} - ${pitchData.company}`)}&body=${encodeURIComponent(`Hi aaieo Team,\n\nI reviewed the personalized liability risk analysis for ${pitchData.company}.\n\nI would like to schedule a private briefing to discuss integrating the 'Orange Box' telemetry.\n\nBest,\n${pitchData.name}`)}`} 
                variant="primary"
              >
                Schedule Private Briefing
              </MagneticButton>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </main>
  );
}