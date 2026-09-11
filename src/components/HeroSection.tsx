import Image from "next/image";
import type { HeroSection as HeroSectionType, StatItem } from "../types/home";
import styles from "../app/page.module.css";

export function HeroSection({ hero, stats }: { hero: HeroSectionType; stats: StatItem[] }) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroPanel}>
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
          <div className={styles.heroTrustBar}>
            <div className={styles.heroTrustItem}>
              <span className={styles.heroTrustDot}>✓</span>
              Free estimates
            </div>
            <div className={styles.heroTrustItem}>
              <span className={styles.heroTrustDot}>★</span>
              Local experts
            </div>
            <div className={styles.heroTrustItem}>
              <span className={styles.heroTrustDot}>⏱</span>
              Fast response
            </div>
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
          <div className={styles.heroImageBadge}>
            The Solution for Every Home Project, Move, and Season.
          </div>
          <Image
            src="/img/Home.jpg"
            alt="Fresh sod being installed"
            width={900}
            height={700}
            className={styles.heroImageAsset}
            priority
          />
        </div>
      </div>
    </section>
  );
}
