import React from 'react';
import DocPageLayout from '@theme-original/DocPage/Layout';
import DocProductAds from '@site/src/components/DocProductAds';
import {useWindowSize} from '@docusaurus/theme-common';
import styles from './Layout.module.css';

export default function DocPageLayoutWrapper(props) {
  const windowSize = useWindowSize();
  const isDesktop = windowSize === 'desktop';

  return (
    <div className={styles.docPageWrapper}>
      <div className={styles.docContentWrapper}>
        <DocPageLayout {...props} />
      </div>
      
      {/* Publicidad del lado derecho solo en desktop */}
      {isDesktop && (
        <div className={styles.docAdsSidebar}>
          <DocProductAds />
        </div>
      )}
    </div>
  );
}
