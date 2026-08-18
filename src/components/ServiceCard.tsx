"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "../app/page.module.css";
import type { ServiceItem } from "../types/home";

export function ServiceCard({ services }: { services: ServiceItem[] }) {
  const [selectedTitle, setSelectedTitle] = useState(services[0]?.title ?? "");

  const selectedService = services.find((service) => service.title === selectedTitle) ?? services[0];

  return (
    <div className={styles.serviceCardLayout}>
      <div className={styles.serviceControls}>
        <div className={styles.serviceSelectorCard}>
          <label htmlFor="service-select" className={styles.serviceSelectLabel}>
            Select a service
          </label>
          <div className={styles.serviceSelectWrap}>
            <select
              id="service-select"
              value={selectedService?.title ?? ""}
              onChange={(event) => setSelectedTitle(event.target.value)}
              className={styles.serviceSelect}
            >
              {services.map((service) => (
                <option key={service.title} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
            <div className={styles.serviceSelectIcon}>
              <svg viewBox="0 0 20 20" fill="currentColor" className={styles.serviceSelectIconSvg} aria-hidden="true">
                <path d="M5.25 7.25a.75.75 0 0 1 1.06 0L10 11.94l3.69-4.69a.75.75 0 1 1 1.06 1.06l-4.22 5.36a.75.75 0 0 1-1.06 0l-4.22-5.36a.75.75 0 0 1 0-1.06Z" />
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.serviceOverviewCard}>
          <p className={styles.serviceOverviewEyebrow}>Service overview</p>
          <h3 className={styles.serviceOverviewTitle}>{selectedService?.title}</h3>
          <p className={styles.serviceOverviewDescription}>{selectedService?.description}</p>
        </div>
      </div>

      <article className={styles.servicePanel}>
        <div className={styles.serviceImageWrap}>
          {selectedService ? (
            <Image
              src={selectedService.image}
              alt={selectedService.alt}
              width={900}
              height={700}
              className={styles.serviceImageAsset}
            />
          ) : null}
        </div>
        <div className={styles.servicePanelBody}>
          <div className={styles.servicePill}>Tailored support</div>
          <div className={styles.serviceInfoGroup}>
            <div className={styles.serviceTitleRow}>
              <h3 className={styles.serviceTitle}>{selectedService?.title}</h3>
              {selectedService?.priceEstimate ? (
                <span className={styles.servicePriceBadge}>{selectedService.priceEstimate}</span>
              ) : null}
            </div>
            <p className={styles.serviceDescription}>{selectedService?.description}</p>
          </div>
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
        </div>
      </article>
    </div>
  );
}
