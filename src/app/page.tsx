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
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-12">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-emerald-200 bg-emerald-50 shadow-sm dark:border-emerald-800 dark:bg-emerald-950/40">
              <Image
                src="/img/Logo-Green.png"
                alt="EcoHome logo"
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">EcoHome</p>
              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                Property care
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-2 py-2 shadow-sm md:flex dark:border-zinc-700 dark:bg-zinc-900/80">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-white hover:text-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-emerald-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
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
