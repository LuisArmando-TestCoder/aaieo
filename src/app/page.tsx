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
            <p>La plataforma única para registrar, auditar y asegurar despliegues de Inteligencia Artificial Autónoma. The definitive E&O infrastructure for autonomous action.</p>
            <div className={styles.actions}>
              <MagneticButton href="/assessment" variant="primary">Get Started</MagneticButton>
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
              <p>Un registro inmutable de cada versión del modelo y sus logs. Como un Cap Table, pero para la responsabilidad de tus Agentes de IA.</p>
            </StaggerItem>
            <StaggerItem className={styles.featureCard}>
              <h3>Audit & Troubleshoot</h3>
              <p>Análisis forense en tiempo real. Diferenciamos instantáneamente entre malicia del usuario, datos corruptos, o alucinación del modelo.</p>
            </StaggerItem>
            <StaggerItem className={styles.featureCard}>
              <h3>Insure</h3>
              <p>Conexión directa con pools de seguros. Al usar aaieo, tus modelos están pre-calificados para pólizas automáticas de Errores y Omisiones (E&O).</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <FadeIn>
            <h2>Ready to deploy with certainty?</h2>
            <p>Don't let the Liability Gap pause your innovation. Integrate our read-only API and convert risk into an insurable asset.</p>
            <MagneticButton href="/assessment" variant="inverted">Request Technical Report</MagneticButton>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
