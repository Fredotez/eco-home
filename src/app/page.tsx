import Image from "next/image";
import styles from "./page.module.css";
import { ServiceCard } from "../components/ServiceCard";
import { HeroSection } from "../components/HeroSection";
import { WhySection } from "../components/WhySection";
import { ContactSection } from "../components/ContactSection";
import { contactSection, hero, services, stats, whyChoose } from "../lib/homeData";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#why-us" },
];

export default function Home() {
  return (
    <div id="top" className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="#top" className={styles.brandLink}>
            <div className={styles.brandMark}>
              <Image
                src="/img/Logo-Green.png"
                alt="EcoHome logo"
                width={64}
                height={64}
                className={styles.brandLogo}
              />
            </div>
            <div className={styles.brandText}>
              <p className={styles.brandName}>EcoHome</p>
              <p className={styles.brandTag}>Property care</p>
            </div>
          </a>

          <nav className={styles.mainNav}>
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className={styles.primaryCta}>
            Request a Quote
          </a>
        </div>
      </header>

      <main className={styles.wrapper}>
        <HeroSection hero={hero} stats={stats} />

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

        <WhySection whyChoose={whyChoose} />

        <ContactSection contact={contactSection} services={services} />
      </main>
    </div>
  );
}
