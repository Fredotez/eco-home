import Image from "next/image";
import type { HeroSection as HeroSectionType, StatItem } from "../types/home";
import styles from "../app/page.module.css";

export function HeroSection({ hero, stats }: { hero: HeroSectionType; stats: StatItem[] }) {
    return (
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
    );
}
