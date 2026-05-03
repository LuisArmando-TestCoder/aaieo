"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./page.module.scss";
import { FadeIn } from "@/components/Animations";
import MagneticButton from "@/components/MagneticButton";

const formSchema = z.object({
  companyName: z.string().min(2, "Company Name must be at least 2 characters"),
  sector: z.string().min(1, "Please select a sector"),
  hallucinationImpact: z.string().min(10, "Please describe the impact (min 10 chars)"),
  funding: z.string().min(1, "Please indicate funding"),
  email: z.string().email("Valid corporate email required"),
});

type FormValues = z.infer<typeof formSchema>;

export default function AssessmentLanding() {
  const [step, setStep] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  const { register, handleSubmit, trigger, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onBlur"
  });

  const nextStep = async (fieldsToValidate: (keyof FormValues)[]) => {
    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) setStep((s) => s + 1);
  };

  const onSubmit = async (data: FormValues) => {
    setSubmittedData(data);
    setStep(3); // Moving to calculation step
    setIsCalculating(true);
    
    // Simulate backend risk assessment
    setTimeout(() => {
      setIsCalculating(false);
      setScore(Math.floor(Math.random() * 20) + 75); // Random score between 75 and 94
      setStep(4); // Moving to result step
    }, 2500);
  };

  const getMailtoLink = () => {
    if (!submittedData || !score) return "mailto:oriens@aiexecutions.com";
    
    const subject = encodeURIComponent(`Audit & Pricing Request: ${submittedData.companyName}`);
    const body = encodeURIComponent(`Hello aaieo team,

I would like to request a full audit and pricing for Agentic E&O coverage.

Here are our preliminary risk assessment details:
- Company Name: ${submittedData.companyName}
- Corporate Email: ${submittedData.email}
- AI Sector: ${submittedData.sector}
- Funding Stage: ${submittedData.funding}
- Hallucination Impact: ${submittedData.hallucinationImpact}

- Initial Liability Score: ${score}/100

Please let us know the next steps.

Best regards,
${submittedData.companyName} Team`);

    return `mailto:oriens@aiexecutions.com?subject=${subject}&body=${body}`;
  };

  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <FadeIn>
            <h1>Apply for Assessment</h1>
            <p>Join 3,000+ startups on the waiting list to evaluate their uninsurable risk. Get your free assessment to pre-qualify for Agentic E&O coverage.</p>
          </FadeIn>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className="container">
          <div className={styles.formContainer}>
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div 
                  key="step0"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className={styles.stepContent}
                >
                  <h2>Step 1: Company Profile</h2>
                  <div className={styles.formGroup}>
                    <label>Company Name</label>
                    <input {...register("companyName")} placeholder="e.g. Acme AI" className={errors.companyName ? styles.inputError : ""} />
                    {errors.companyName && <span className={styles.error}>{errors.companyName.message}</span>}
                  </div>
                  <div className={styles.formGroup}>
                    <label>Corporate Email</label>
                    <input type="email" {...register("email")} placeholder="founder@acme.ai" className={errors.email ? styles.inputError : ""} />
                    {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                  </div>
                  <MagneticButton onClick={() => nextStep(["companyName", "email"])} variant="primary">Continue</MagneticButton>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className={styles.stepContent}
                >
                  <h2>Step 2: Architecture & Sector</h2>
                  <div className={styles.formGroup}>
                    <label>What sector does your AI operate in?</label>
                    <select {...register("sector")} className={errors.sector ? styles.inputError : ""}>
                      <option value="">Select a sector...</option>
                      <option value="legal">Legal / Compliance</option>
                      <option value="finance">Finance / Trading</option>
                      <option value="healthcare">Healthcare / Medical</option>
                      <option value="autonomous">Autonomous Vehicles</option>
                      <option value="saas">General SaaS</option>
                    </select>
                    {errors.sector && <span className={styles.error}>{errors.sector.message}</span>}
                  </div>
                  <div className={styles.formGroup}>
                    <label>Total Funding Raised (USD)</label>
                    <select {...register("funding")} className={errors.funding ? styles.inputError : ""}>
                      <option value="">Select funding stage...</option>
                      <option value="bootstrapped">Bootstrapped / Pre-Seed</option>
                      <option value="seed">Seed ($1M - $5M)</option>
                      <option value="seriesA">Series A+ ($5M - $20M+)</option>
                    </select>
                    {errors.funding && <span className={styles.error}>{errors.funding.message}</span>}
                  </div>
                  <div className={styles.flexButtons}>
                    <MagneticButton onClick={() => setStep(0)} variant="secondary">Back</MagneticButton>
                    <MagneticButton onClick={() => nextStep(["sector", "funding"])} variant="primary">Continue</MagneticButton>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className={styles.stepContent}
                >
                  <h2>Step 3: Liability Exposure</h2>
                  <div className={styles.formGroup}>
                    <label>What happens if your Agent hallucinates?</label>
                    <textarea 
                      {...register("hallucinationImpact")} 
                      placeholder="Describe the potential financial or legal impact... (e.g., 'The AI signs a bad contract causing a $100k loss')"
                      className={errors.hallucinationImpact ? styles.inputError : ""}
                    ></textarea>
                    {errors.hallucinationImpact && <span className={styles.error}>{errors.hallucinationImpact.message}</span>}
                  </div>
                  <div className={styles.flexButtons}>
                    <MagneticButton onClick={() => setStep(1)} variant="secondary">Back</MagneticButton>
                    <MagneticButton onClick={handleSubmit(onSubmit)} variant="primary">Calculate Liability Score</MagneticButton>
                  </div>
                </motion.div>
              )}

              {step === 3 && isCalculating && (
                <motion.div 
                  key="calculating"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className={styles.calculatingState}
                >
                  <div className={styles.spinner}></div>
                  <h2>Analyzing Risk Parameters...</h2>
                  <p>Evaluating sector constraints, financial impact, and regulatory exposure through aaieo telemetry.</p>
                </motion.div>
              )}

              {step === 4 && score && (
                <motion.div 
                  key="result"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={styles.resultState}
                >
                  <h2>Your Initial Liability Score: <span className={styles.highlight}>{score}/100</span></h2>
                  <p>Your current architecture leaves you exposed to significant uninsurable risk. Traditional E&O policies will not cover this liability gap.</p>
                  
                  <div className={styles.nextSteps}>
                    <h3>Next Steps for Pre-Qualification:</h3>
                    <p>1. Integrate the aaieo.com Forensic Telemetry API.</p>
                    <p>2. Complete the Mandatory Deployment Safety Guidelines.</p>
                    <p>3. Secure your automatic coverage.</p>
                  </div>

                  <MagneticButton href={getMailtoLink()} variant="primary">Request Full Audit & Pricing</MagneticButton>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
}