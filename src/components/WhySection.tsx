import type { WhyChooseItem } from "../types/home";
import styles from "../app/page.module.css";

export function WhySection({ whyChoose }: { whyChoose: WhyChooseItem[] }) {
  return (
    <section className={styles.whySection}>
      <div className={styles.whyIntro}>
        <p className={styles.whyTitle}>Why choose us</p>
        <h2 className={styles.whyHeading}>Trusted, local craftsmanship for every season.</h2>
        <p className={styles.whyText}>
          Eco-Home combines high-quality materials with eco-conscious practices to deliver modern lawn,
          driveway, and winter services that stand up to changing weather and keep your home safe and polished.
        </p>
      </div>
      <div className={styles.whyGrid}>
        {whyChoose.map((item) => (
          <div key={item.title} className={styles.whyCard}>
            <p className={styles.whyCardTitle}>{item.title}</p>
            <p className={styles.whyCardDescription}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
