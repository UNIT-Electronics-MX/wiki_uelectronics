import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function WikiUnitElectronics() {
  return (
    <Layout
      title="Wiki Unit Electronics"
      description="Official documentation for Unit Electronics products">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Wiki Unit Electronics</h1>
          <p className="hero__subtitle">Explore technical resources and documentation for our products.</p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs/intro">
              Explore Documentation ⏱️
            </Link>
          </div>
        </div>
      </header>
      <main className="container">
        <section className={styles.gridSection}>
          <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
              <div className={styles.communityIcon}></div>
              <h3>Community Forum</h3>
              <p>Join discussions and connect with others.</p>
              <Link to="https://www.hackster.io/unit-electronics/discussion" className={styles.cardLink}>
                Join Now →
              </Link>
            </div>
            <div className={styles.gridItem}>
              <div className={styles.faqIcon}></div>
              <h3>FAQ</h3>
              <p>Find answers to common questions.</p>
              <Link to="/docs/FAQ" className={styles.cardLink}>
                View FAQ →
              </Link>
            </div>
            <div className={styles.gridItem}>
              <div className={styles.customIcon}></div>
              <h3>Custom Section</h3>
              <p>Explore new resources and tools.</p>
              <Link to="/docs/custom" className={styles.cardLink}>
                Discover More →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
