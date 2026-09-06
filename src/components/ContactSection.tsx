import Image from "next/image";
import { ContactForm } from "./ContactForm";
import type { ContactSection as ContactSectionType } from "../types/home";
import styles from "../app/page.module.css";
import type { ServiceItem } from "../types/home";

export function ContactSection({ contact, services }: { contact: ContactSectionType; services: ServiceItem[] }) {
  return (
    <section id="contact" className={styles.contactSection}>
      <ContactForm contact={contact} services={services} />
      <div className={styles.contactMediaGrid}>
        <div className={`${styles.contactImage} ${styles.contactImageA}`}>
          <Image
            src={contact.imageA}
            alt="Lawn care maintenance"
            width={640}
            height={520}
            className={styles.contactImageAsset}
          />
        </div>
        <div className={`${styles.contactImage} ${styles.contactImageB}`}>
          <Image
            src={contact.imageB}
            alt="Asphalt driveway service"
            width={640}
            height={520}
            className={styles.contactImageAsset}
          />
        </div>
      </div>
    </section>
  );
}
