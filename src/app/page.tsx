import styles from "./page.module.scss";
import { FadeIn } from "@/components/Animations";
import MagneticButton from "@/components/MagneticButton";
import {
  ScrollProgress,
  HeroParallax,
  PointerGlow,
  ScrubReveal,
  TextReveal,
  VelocityMarquee,
  SpotlightCard,
} from "@/components/Motion";

export default function Home() {
  return (
    <main className={styles.main}>
      <ScrollProgress className={styles.scrollProgress} />

      {/* ── HERO, the declaration ─────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <PointerGlow className={styles.glow} />
          <div className={styles.grid} />
        </div>

        <HeroParallax className={styles.heroInner}>
          <div className="container">
            <span className={styles.eyebrow}>The Standard for Agentic Liability</span>
            <TextReveal
              as="h1"
              className={styles.heroTitle}
              text="When AI decides, someone must answer."
            />
            <FadeIn delay={0.35}>
              <p className={styles.subtitle}>
                aaieo is the accountability layer for autonomous artificial
                intelligence, the Errors &amp; Omissions infrastructure that lets
                any business deploy agents with confidence. Because when an
                algorithm makes the wrong call, we have you covered.
              </p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className={styles.actions}>
                <MagneticButton href="/assessment" variant="primary">
                  Apply for Coverage
                </MagneticButton>
                <MagneticButton href="/insurance" variant="secondary">
                  For Carriers
                </MagneticButton>
              </div>
            </FadeIn>
          </div>
        </HeroParallax>

        <div className={styles.scrollHint} aria-hidden="true">
          Scroll
        </div>
      </section>

      {/* ── Scroll-reactive manifesto ticker ───────────────────────── */}
      <VelocityMarquee baseVelocity={2.5}>
        Accountable Silicon &nbsp;&mdash;&nbsp; Agentic E&amp;O
        &nbsp;&mdash;&nbsp; AI Blame Tester &nbsp;&mdash;&nbsp; Dynamic
        Accountability &nbsp;&mdash;&nbsp; The Equity of Risk &nbsp;&mdash;&nbsp;{" "}
      </VelocityMarquee>

      {/* ── The Panorama, the problem, stated as purpose ──────────── */}
      <section className={styles.statementSection}>
        <div className="container">
          <span className={styles.eyebrow}>The Panorama</span>
          <ScrubReveal
            className={styles.statement}
            text="The future of work already arrived. What stalled was the courage to trust it, because when an autonomous agent makes the wrong call, no one can say who answers for it."
          />
        </div>
      </section>

      {/* ── The Answer ─────────────────────────────────────────────── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>The Answer</span>
            <TextReveal as="h2" text="Someone to Answer To" />
            <FadeIn delay={0.1}>
              <p>Accountability, delivered as infrastructure.</p>
            </FadeIn>
          </div>

          <div className={styles.featuresGrid}>
            <SpotlightCard className={styles.spotlightCard} delay={0}>
              <span className={styles.cardIndex}>01, The Blame Gap</span>
              <h3>Who pays when it fails?</h3>
              <p>
                When an agent errs, its builder cannot absorb the loss and its
                operator cannot undo it. Adoption freezes on a single unanswered
                question, and fear wins by default.
              </p>
            </SpotlightCard>
            <SpotlightCard className={styles.spotlightCard} delay={0.08}>
              <span className={styles.cardIndex}>02, The Third Party</span>
              <h3>We stand in the gap.</h3>
              <p>
                aaieo sits between the promise of autonomy and the cost of its
                mistakes, so a wrong call becomes a covered claim, not a
                catastrophe, and never a bankruptcy.
              </p>
            </SpotlightCard>
            <SpotlightCard className={styles.spotlightCard} delay={0.16}>
              <span className={styles.cardIndex}>03, The Green Light</span>
              <h3>Permission to build.</h3>
              <p>
                With a safety net in place, hesitation turns into deployment.
                Digitalization stops waiting for permission, and progress starts
                moving again.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* ── Dynamic Accountability, the living standard ───────────── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Dynamic Accountability</span>
            <TextReveal as="h2" text="Certified continuously, never once." />
            <FadeIn delay={0.1}>
              <p>
                A certificate that expires the instant it stops being state of the
                art.
              </p>
            </FadeIn>
          </div>

          <div className={styles.featuresGrid}>
            <SpotlightCard className={styles.spotlightCard} delay={0}>
              <span className={styles.cardIndex}>01, The Discipline</span>
              <h3>Safety as a Standard</h3>
              <p>
                Coverage begins with discipline, a living set of safety guidelines
                your orchestration must embody. Meet them and you are certified;
                follow them and you are protected.
              </p>
            </SpotlightCard>
            <SpotlightCard className={styles.spotlightCard} delay={0.08}>
              <span className={styles.cardIndex}>02, The Living Certificate</span>
              <h3>Avant-Garde, Not Evergreen</h3>
              <p>
                Static, annual audits belong to a slower era. We benchmark, revise,
                and re-issue, so your standing is never evergreen, always the
                current state of the art.
              </p>
            </SpotlightCard>
            <SpotlightCard className={styles.spotlightCard} delay={0.16}>
              <span className={styles.cardIndex}>03, The Compounding Standard</span>
              <h3>The Network Learns</h3>
              <p>
                Every honest failure teaches the network. New guidance reaches every
                member, and the whole ecosystem grows safer with each claim we
                honor.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* ── The Equity of Risk, integrity / anti-fraud (hint only) ── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>The Equity of Risk</span>
            <TextReveal as="h2" text="Legitimacy before liability." />
            <FadeIn delay={0.1}>
              <p>
                Before we ask whether your agent failed, we prove your record is
                true.
              </p>
            </FadeIn>
          </div>

          <div className={styles.featuresGrid}>
            <SpotlightCard className={styles.spotlightCard} delay={0}>
              <span className={styles.cardIndex}>01, Provenance</span>
              <h3>An Immutable Lineage</h3>
              <p>
                Every change you ship is preserved in a record no one can quietly
                rewrite. Provenance here is not a promise, it is mathematics.
              </p>
            </SpotlightCard>
            <SpotlightCard className={styles.spotlightCard} delay={0.08}>
              <span className={styles.cardIndex}>02, Solvency</span>
              <h3>Fraud, Excluded by Design</h3>
              <p>
                The oldest trick in insurance is to break something on purpose and
                blame the machine. Here, tampering reveals itself, and the pool
                stays solvent for everyone who plays fair.
              </p>
            </SpotlightCard>
            <SpotlightCard className={styles.spotlightCard} delay={0.16}>
              <span className={styles.cardIndex}>03, The Moat</span>
              <h3>The Part We Keep</h3>
              <p>
                This is the piece we keep off the slide. The engine that tells
                honest failure from manufactured fraud is why this can be built once
               , and trusted always.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* ── Ecosystem ──────────────────────────────────────────────── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Ecosystem Architecture</span>
            <TextReveal as="h2" text="One registry, end to end." />
            <FadeIn delay={0.1}>
              <p>We separate the proof from the pricing, so trust can scale.</p>
            </FadeIn>
          </div>

          <div className={styles.featuresGrid}>
            <SpotlightCard className={styles.spotlightCard} delay={0}>
              <span className={styles.cardIndex}>Protocol &amp; Registry</span>
              <h3>aaieo</h3>
              <p>
                The governance framework and root of trust, the continuous standard
                every autonomous agent is measured against.
              </p>
            </SpotlightCard>
            <SpotlightCard className={styles.spotlightCard} delay={0.08}>
              <span className={styles.cardIndex}>Pre-Deployment &amp; QA</span>
              <h3>Riskmai</h3>
              <p>
                The proving ground. Builders run adversarial simulations against
                their agents until they meet the standard, long before they seek
                coverage.
              </p>
            </SpotlightCard>
            <SpotlightCard className={styles.spotlightCard} delay={0.16}>
              <span className={styles.cardIndex}>Underwriting Engine</span>
              <h3>EOSilicon</h3>
              <p>
                The underwriting engine. It translates forensic proof into actuarial
                reality, so carriers can price, model, and write E&amp;O policies at
                scale.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* ── The Institutional Value, closing manifesto ────────────── */}
      <section className={styles.statementSection}>
        <div className="container">
          <span className={styles.eyebrow}>The Institutional Value</span>
          <ScrubReveal
            className={styles.statement}
            text="aaieo does not build the intelligence. We make it accountable, the rails that let the world say yes to autonomy. When machines can be trusted, progress stops asking permission."
          />
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <PointerGlow className={styles.ctaGlow} />
        <div className="container">
          <TextReveal as="h2" text="Deploy with certainty." />
          <FadeIn delay={0.15}>
            <p>
              Do not let the Liability Gap pause your innovation. Register your
              agents, earn the standard, and convert algorithmic risk into an
              insurable asset.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className={styles.actions}>
              <MagneticButton href="/assessment" variant="inverted">
                Apply to Waitlist
              </MagneticButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
