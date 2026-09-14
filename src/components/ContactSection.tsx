import { ContactForm } from "./ContactForm";
import type { ContactSection as ContactSectionType } from "../types/home";
import styles from "../app/page.module.css";
import type { ServiceItem } from "../types/home";

export function ContactSection({
  contact,
  services,
  selectedServiceTitle,
  onSelectedServiceChange,
}: {
  contact: ContactSectionType;
  services: ServiceItem[];
  selectedServiceTitle: string;
  onSelectedServiceChange: (title: string) => void;
}) {
  const selectedService = services.find((service) => service.title === selectedServiceTitle) ?? services[0];

  return (
    <section id="contact" className={styles.contactSection}>
      <ContactForm
        contact={contact}
        services={services}
        selectedService={selectedService}
        onSelectedServiceChange={onSelectedServiceChange}
      />
    </section>
  );
}
