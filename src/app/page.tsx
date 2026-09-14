"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
import { ContactSection } from "../components/ContactSection";
import { contactSection, hero, services, stats, whyChoose } from "../lib/homeData";

export default function Home() {
  const [selectedServiceTitle, setSelectedServiceTitle] = useState(services[0]?.title ?? "");

  return (
    <div id="top" className={styles.page}>
      <div className={styles.utilityBar}>
        <span>Serving Ottawa &amp; surrounding communities</span>
        <a href="tel:+13433140177">+1 (343) 314-0177</a>
        <a href="mailto:info@ecohomeservices.ca">info@ecohomeservices.ca</a>
      </div>

      <header className={styles.header}>
        <a href="#top" className={styles.brandLink} aria-label="Eco-Home Services home">
          <span className={styles.brandMark}>EH</span>
          <span className={styles.brandText}>
            <strong>ECO-HOME</strong>
            <small>SERVICES</small>
          </span>
        </a>
        <a href="#contact" className={styles.primaryCta}>Get a Free Quote</a>
      </header>

      <main>
        <section className={styles.heroSection}>
          <Image
            src="/img/Home.jpg"
            alt="Beautiful modern Ottawa home"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>Ottawa&apos;s all-in-one home service team</p>
            <h1>{hero.headline}</h1>
            <p className={styles.heroText}>{hero.description}</p>
            <div className={styles.heroActions}>
              <a href="#contact" className={styles.primaryButton}>Get a Free Quote</a>
              <a href="#services" className={styles.secondaryButton}>View Services &amp; Pricing</a>
            </div>
          </div>
        </section>

        <section className={styles.statsBand} aria-label="Eco-Home at a glance">
          {[
            ...stats,
            { value: "9", label: "Core services", detail: "One trusted team for your property." },
          ].map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
              <small>{"detail" in stat ? stat.detail : "Experience homeowners can rely on."}</small>
            </div>
          ))}
        </section>

        <section className={styles.introSection}>
          <div>
            <p className={styles.sectionEyebrow}>Your home. Our priority.</p>
            <h2>Trusted support for every home project, move and season.</h2>
            <p className={styles.sectionText}>
              Eco-Home brings together practical moving support, property improvements,
              installations and seasonal maintenance under one reliable local team.
            </p>
            <a href="#services" className={styles.textLink}>Explore what we can do <span>→</span></a>
          </div>
          <div className={styles.featureGrid}>
            {whyChoose.concat([
              { title: "Flexible support", description: "From one-time jobs to seasonal property needs." },
            ]).map((item, index) => (
              <article key={item.title} className={styles.feature}>
                <span className={styles.featureIcon}>{["✓", "⌂", "✦", "↗"][index]}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className={styles.servicesSection}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.sectionEyebrow}>Our services</p>
              <h2>Complete home services for every need.</h2>
            </div>
            <p>Choose a service below to learn more, see pricing where available, or request a tailored estimate.</p>
          </div>
          <div className={styles.servicesGrid}>
            {services.slice(0, 9).map((service) => (
              <article key={service.title} className={styles.serviceCard}>
                <div className={styles.serviceImage}>
                  <Image src={service.image} alt={service.alt} fill sizes="(max-width: 700px) 100vw, 33vw" style={{ objectPosition: service.imagePosition ?? "center" }} />
                </div>
                <div className={styles.serviceBody}>
                  <div className={styles.serviceTitleRow}>
                    <h3>{service.title}</h3>
                    {service.priceEstimate && <span>{service.priceEstimate}</span>}
                  </div>
                  <p>{service.description}</p>
                  <a
                    href="#contact"
                    onClick={() => setSelectedServiceTitle(service.title)}
                  >
                    Learn more <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <ContactSection
          contact={contactSection}
          services={services}
          selectedServiceTitle={selectedServiceTitle}
          onSelectedServiceChange={setSelectedServiceTitle}
        />
      </main>

      <footer className={styles.footer}>
        <strong>ECO-HOME <span>SERVICES</span></strong>
        <span>Reliable help for the place you call home.</span>
      </footer>
    </div>
  );
}
