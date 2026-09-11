"use client";

import { useState } from "react";
import { ContactForm } from "./ContactForm";
import type { ContactSection as ContactSectionType } from "../types/home";
import styles from "../app/page.module.css";
import type { ServiceItem } from "../types/home";

export function ContactSection({ contact, services }: { contact: ContactSectionType; services: ServiceItem[] }) {
  const [selectedTitle, setSelectedTitle] = useState(services[0]?.title ?? "");
  const selectedService = services.find((service) => service.title === selectedTitle) ?? services[0];

  return (
    <section id="contact" className={styles.contactSection}>
      <ContactForm
        contact={contact}
        services={services}
        selectedService={selectedService}
        onSelectedServiceChange={setSelectedTitle}
      />
    </section>
  );
}
