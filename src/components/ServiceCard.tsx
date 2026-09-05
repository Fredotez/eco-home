"use client";

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
          <div className={styles.serviceSelectorHeader}>
            <h4 className={styles.serviceSelectLabel}>Our services</h4>
            <span className={styles.serviceSelectorSub}>Pick a service to view details</span>
          </div>

          <div className={styles.serviceGrid}>
            {services.map((service) => {
              const active = service.title === selectedTitle;
              return (
                <button
                  key={service.title}
                  onClick={() => setSelectedTitle(service.title)}
                  className={active ? `${styles.serviceItem} ${styles.serviceItemActive}` : styles.serviceItem}
                  aria-pressed={active}
                >
                  <div
                    className={styles.serviceItemThumb}
                    style={{ backgroundImage: `url(${service.image})` }}
                    aria-hidden
                  />
                  <div className={styles.serviceItemContent}>
                    <div className={styles.serviceItemTitle}>{service.title}</div>
                    <div className={styles.serviceItemMeta}>{service.priceEstimate}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.serviceOverviewCard}>
          <p className={styles.serviceOverviewEyebrow}>Service overview</p>
          <h3 className={styles.serviceOverviewTitle}>{selectedService?.title}</h3>
          <p className={styles.serviceOverviewDescription}>{selectedService?.description}</p>
        </div>
      </div>

      <article
        className={styles.servicePanel}
        style={
          selectedService
            ? {
                backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.18), rgba(15, 23, 42, 0.7)), url(${selectedService.image})`,
              }
            : undefined
        }
      >
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
