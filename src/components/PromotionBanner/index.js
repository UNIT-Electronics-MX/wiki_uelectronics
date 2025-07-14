import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import styles from './PromotionBanner.module.css';

export default function PromotionBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Solo mostrar en desktop
    const checkDevice = () => {
      setIsDesktop(window.innerWidth > 996);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    // Mostrar después de 3 segundos
    const timer = setTimeout(() => {
      if (window.innerWidth > 996) {
        setIsVisible(true);
      }
    }, 3000);

    return () => {
      window.removeEventListener('resize', checkDevice);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible || !isDesktop) return null;

  return (
    <div className={styles.floatingBanner}>
      <div className={styles.bannerContent}>
        <div className={styles.text}>
          <strong>¡Productos UNIT Electronics!</strong>
          <br />
          <small>Descubre nuestra gama completa</small>
        </div>
        <Link to="https://uelectronics.com/" className={styles.ctaButton}>
          Ver Tienda
        </Link>
        <button 
          className={styles.closeButton}
          onClick={() => setIsVisible(false)}
          aria-label="Cerrar banner"
        >
          ×
        </button>
      </div>
    </div>
  );
}
