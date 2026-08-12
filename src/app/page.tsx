import Image from "next/image";
import styles from "./page.module.css";
import { ContactForm } from "../components/ContactForm";
import { ServiceCard } from "../components/ServiceCard";
import { contactSection, hero, services, stats, whyChoose } from "../lib/homeData";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.wrapper}>
        <section className={styles.heroSection}>
          <div className="space-y-6">
            <div className={styles.heroBadge}>{hero.badge}</div>
            <div className={styles.heroCopy}>
              <h1 className={styles.heroHeading}>{hero.headline}</h1>
              <p className={styles.heroText}>{hero.description}</p>
            </div>
            <div className={styles.heroActions}>
              <a href="#services" className={styles.primaryButton}>
                {hero.primaryAction}
              </a>
              <a href="#contact" className={styles.secondaryButton}>
                {hero.secondaryAction}
              </a>
            </div>
            <div className={styles.statsGrid}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.statCard}>
                  <p className="text-3xl font-semibold text-emerald-900 dark:text-emerald-400">{stat.value}</p>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/img/DrivewayLay.jpeg"
              alt="Finished driveway hardscaping"
              width={900}
              height={700}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </section>

        <section id="services" className={styles.servicesSection}>
          <div className={styles.servicesIntro}>
            <p className={styles.serviceBadge}>Our services</p>
            <h2 className={styles.servicesTitle}>
              Comprehensive support for homes, rentals, and property transitions.
            </h2>
            <p className={styles.servicesText}>
              From moving and repairs to organization, property prep, and seasonal upkeep, Eco-Home delivers
              dependable, professional support tailored to the way you live and work.
            </p>
          </div>

          <ServiceCard services={services} />
        </section>

        <section className={styles.whySection}>
          <div className={styles.whyIntro}>
            <p className={styles.whyTitle}>Why choose us</p>
            <h2 className={styles.whyHeading}>
              Trusted, local craftsmanship for every season.
            </h2>
            <p className={styles.whyText}>
              Eco-Home combines high-quality materials with eco-conscious practices to deliver modern lawn,
              driveway, and winter services that stand up to changing weather and keep your home safe and polished.
            </p>
          </div>
          <div className={styles.whyGrid}>
            {whyChoose.map((item) => (
              <div key={item.title} className={styles.whyCard}>
                <p className="text-sm font-semibold uppercase tracking-[.2em] text-emerald-300">{item.title}</p>
                <p className="mt-2 text-base leading-7 text-zinc-100/85">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.contactSection}>
          <ContactForm contact={contactSection} services={services} />
          <div className={styles.contactMediaGrid}>
            <div className={styles.contactImage}>
              <Image
                src={contactSection.imageA}
                alt="Lawn care maintenance"
                width={640}
                height={520}
                className="h-full w-full object-cover"
              />
            </div>
            <div className={styles.contactImage}>
              <Image
                src={contactSection.imageB}
                alt="Asphalt driveway service"
                width={640}
                height={520}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
