import Image from "next/image";
import type { HeroSection as HeroSectionType, StatItem } from "../types/home";
import styles from "../app/page.module.css";

export function HeroSection({ hero, stats }: { hero: HeroSectionType; stats: StatItem[] }) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
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
              <p className={styles.statValue}>{stat.value}</p>
              <p className={styles.statLabel}>{stat.label}</p>
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
          className={styles.heroImageAsset}
          priority
        />
      </div>
    </section>
  );
}
