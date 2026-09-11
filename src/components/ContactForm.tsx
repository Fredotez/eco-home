"use client";

import { useState } from "react";
import styles from "../app/page.module.css";
import type { ContactSection } from "../types/home";
import type { ServiceItem } from "../types/home";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  services: string[];
  message: string;
};

export function ContactForm({
  contact,
  services,
  selectedService,
  onSelectedServiceChange,
}: {
  contact: ContactSection;
  services: ServiceItem[];
  selectedService?: ServiceItem;
  onSelectedServiceChange: (title: string) => void;
}) {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    services: [],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, service: selectedService?.title ?? "" }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setError(data?.error || "Failed to send request.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={styles.contactFormCard}>
      <div className={styles.formHeader}>
        <p className={styles.contactEyebrow}>Get in touch</p>
        <h2 className={styles.contactHeading}>{contact.heading}</h2>
        <p className={styles.contactDescription}>{contact.description}</p>
        <p>{contact.phone} &middot; {contact.email}</p>
      </div>

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGrid}>
          <label className={styles.formField}>
            First Name
            <input className={styles.formInput} type="text" required value={form.firstName}
              onChange={(event) => setForm({ ...form, firstName: event.target.value })} />
          </label>
          <label className={styles.formField}>
            Last Name
            <input className={styles.formInput} type="text" required value={form.lastName}
              onChange={(event) => setForm({ ...form, lastName: event.target.value })} />
          </label>
          <label className={styles.formField}>
            Email
            <input className={styles.formInput} type="email" required value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })} />
          </label>
          <label className={styles.formField}>
            Phone
            <input className={styles.formInput} type="tel" required value={form.phone}
              onChange={(event) => setForm({ ...form, phone: event.target.value })} />
          </label>
        </div>

        <fieldset className={styles.formFieldSet}>
          <legend className={styles.formFieldSetLegend}>Requested services</legend>
          <select id="service-select" value={selectedService?.title ?? ""}
            onChange={(event) => onSelectedServiceChange(event.target.value)} className={styles.formSelect}>
            {services.map((service) => <option key={service.title} value={service.title}>{service.title}</option>)}
          </select>
        </fieldset>

        <label className={styles.formLabel}>
          Additional details (optional)
          <textarea className={styles.formTextarea} value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })} />
        </label>

        <button type="submit" disabled={isSending} aria-busy={isSending} className={styles.submitButton}>
          {isSending ? "Sending..." : "Submit request"}
        </button>
      </form>

      {error ? <div className={styles.formError}>{error}</div> : null}
      {submitted ? <div className={styles.formSuccess}>Thanks! Your quote request was received.</div> : null}
    </div>
  );
}
