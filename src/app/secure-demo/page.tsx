"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import MagneticButton from "@/components/MagneticButton";

export default function SecureDemo() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [sessionTime, setSessionTime] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [cookieId, setCookieId] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      const generatedCookie = `sid_${Math.random().toString(36).substr(2, 9)}_${Date.now()}`;
      setCookieId(generatedCookie);
      setIsAuthenticated(true);
      setLogs([
        `[AUTH] Login successful for: ${email}`,
        `[TRACKING] Identity verified. Tracking cookie injected: ${generatedCookie}`,
        `[LEGAL] User acknowledged NDA and IP terms.`,
        `[SYSTEM] Connecting to backend telemetry...`
      ]);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return;

    // Simulated Honey Pot tracking script
    const startTime = Date.now();
    
    const interval = setInterval(() => {
      setSessionTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    // Simulate sending tracking ping to backend
    const logInterval = setInterval(() => {
      const newLog = `[SYSTEM PING] Identity: ${email} | Cookie: ${cookieId} | Active Session: Verified.`;
      setLogs((prev) => [...prev, newLog]);
    }, 6000);

    return () => {
      clearInterval(interval);
      clearInterval(logInterval);
    };
  }, [isAuthenticated, email, cookieId]);

  if (!isAuthenticated) {
    return (
      <main className={styles.secureMain}>
        <div className={styles.loginWall}>
          <div className={styles.loginBox}>
            <h2>Restricted Access</h2>
            <p>This environment contains proprietary architecture regarding aaieo's Stress Testing and Forensic algorithms.</p>
            <p className={styles.warningText}>By entering your email, you consent to session tracking and acknowledge our IP ownership.</p>
            <form onSubmit={handleLogin}>
              <input 
                type="email" 
                placeholder="Corporate Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <MagneticButton type="submit" variant="inverted" className={styles.loginBtn}>Acknowledge & Enter</MagneticButton>
            </form>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.secureMain}>
      <div className={styles.secureHeader}>
        <div className="container">
          <h2>aaieo.com, Secure Data Room</h2>
          <div className={styles.warningBadge}>Confidential IP Access</div>
        </div>
      </div>

      <div className="container">
        <section className={styles.dashboard}>
          <div className={styles.sidebar}>
            <h3>Session Info</h3>
            <div className={styles.statBox}>
              <span className={styles.label}>Identity Logged</span>
              <span className={styles.value} style={{fontSize: "1rem", wordBreak: "break-all"}}>{email}</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.label}>Cookie / Session ID</span>
              <span className={styles.value} style={{fontSize: "1rem", wordBreak: "break-all"}}>{cookieId}</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.label}>Time in Data Room</span>
              <span className={styles.value}>{sessionTime}s</span>
            </div>
            <div className={styles.legalNotice}>
              <strong>LEGAL NOTICE:</strong> All interactions (clicks, scroll depth, session duration) tied to identity <em>{email}</em> are permanently logged. This serves as cryptographic proof of IP disclosure for settlement purposes.
            </div>
          </div>

          <div className={styles.mainContent}>
            <h1>Agentic Stress Testing & Audit Flow</h1>
            <p className={styles.subtitle}>Below is the proprietary methodology for injecting extreme edge cases into Agentic models to preemptively calculate the Liability Score before offering E&O coverage.</p>
            
            <div className={styles.flowchartMock}>
              <div className={styles.node}>1. Ingest Agentic Logs & Environment</div>
              <div className={styles.arrow}>↓</div>
              <div className={styles.node}>2. Proprietary Stress Testing Engine</div>
              <div className={styles.arrow}>↓</div>
              <div className={styles.split}>
                <div className={styles.subNode}>Inject Malicious Prompts (Fraud Test)</div>
                <div className={styles.subNode}>Corrupt Data Ingestion (Validation Test)</div>
                <div className={styles.subNode}>Context Deprivation (Hallucination Test)</div>
              </div>
              <div className={styles.arrow}>↓</div>
              <div className={styles.node}>3. Safety Guidelines Verification</div>
              <div className={styles.arrow}>↓</div>
              <div className={styles.split}>
                <div className={styles.subNode} style={{borderColor: '#0f0', color: '#0f0'}}>Compliant: Trigger Payout</div>
                <div className={styles.subNode} style={{borderColor: '#f00', color: '#f00'}}>Ignored: Deny Claim</div>
              </div>
              <div className={styles.arrow}>↓</div>
              <div className={styles.finalNode}>4. Generate Cryptographic Liability Certificate</div>
            </div>

            <div className={styles.trackingConsole}>
              <h3>Security & Tracking Logs</h3>
              <div className={styles.consoleWindow}>
                {logs.map((log, i) => (
                  <p key={i} className={styles.newLog}>{log}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}