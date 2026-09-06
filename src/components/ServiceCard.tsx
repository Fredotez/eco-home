"use client";

import { useState } from "react";
import styles from "../app/page.module.css";
import type { ServiceItem } from "../types/home";

export function ServiceCard({ services }: { services: ServiceItem[] }) {
  const [selectedTitle, setSelectedTitle] = useState(services[0]?.title ?? "");

  const selectedService = services.find((service) => service.title === selectedTitle) ?? services[0];

  return (
    <article className={styles.serviceCard}>
      <div className={styles.serviceIntro}>
        <p className={styles.serviceSelectLabel}>Our services</p>
        <h2 className={styles.serviceHeading}>One trusted partner for the work in between.</h2>
        <p className={styles.serviceIntroText}>
          Select a service to see how EcoHome can make your next project simpler.
        </p>
      </div>
      <div className={styles.serviceLayout}>
        <div className={styles.serviceGrid}>
          {services.map((service, index) => {
            const active = service.title === selectedTitle;
            return (
              <button
                key={service.title}
                onClick={() => setSelectedTitle(service.title)}
                className={active ? `${styles.serviceItem} ${styles.serviceItemActive}` : styles.serviceItem}
                aria-pressed={active}
              >
                <span className={styles.serviceItemNumber}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.serviceItemContent}>
                  <span className={styles.serviceItemTitle}>{service.title}</span>
                  <span className={styles.serviceItemMeta}>{service.priceEstimate}</span>
                </span>
                <span className={styles.serviceItemArrow} aria-hidden="true">↗</span>
              </button>
            );
          })}
        </div>
        <div className={styles.servicePanel}>
          {selectedService ? (
            <div className={styles.servicePanelImage} style={{ backgroundImage: `url(${selectedService.image})` }} />
          ) : null}
          <div className={styles.servicePanelBody}>
            <div className={styles.servicePill}>Tailored support</div>
            <div className={styles.serviceTitleRow}>
              <h3 className={styles.serviceTitle}>{selectedService?.title}</h3>
              {selectedService?.priceEstimate ? <span className={styles.servicePriceBadge}>{selectedService.priceEstimate}</span> : null}
            </div>
            <p className={styles.serviceDescription}>{selectedService?.description}</p>
            <div className={styles.serviceDetailsGroup}>
              <p className={styles.serviceDetailsHeader}>What&apos;s included</p>
              <ul className={styles.serviceOfferingsList}>
                {selectedService?.offerings.map((item) => (
                  <li key={item} className={styles.serviceOfferingItem}>
                    <span className={styles.serviceBullet} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href="#contact" className={styles.serviceLink}>Talk to us about this <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </article>
  );
}
