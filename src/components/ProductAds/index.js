import React from 'react';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import styles from './ProductAds.module.css';

function ProductAd({ product }) {
  return (
    <div className={styles.productAd}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.title} className={styles.productImage} />
        <div className={`${styles.badge} ${styles[`badge${product.badge}`]}`}>
          {product.badge}
        </div>
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{product.title}</h4>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>{product.price}</span>
          <Link to={product.link} className={`button button--primary button--sm ${styles.learnMore}`}>
            {translate({ id: 'products.viewMore', message: 'Ver Más' })}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProductAds() {
  const productAds = [
    {
      id: 1,
      title: translate({ id: 'products.dualOne.title', message: 'UNIT Dual ONE' }),
      description: translate({ id: 'products.dualOne.description', message: 'Nuevo board de desarrollo dual-core ESP32' }),
      image: 'https://raw.githubusercontent.com/UNIT-Electronics/DualMCU-ONE/refs/heads/main/Resources/IMG_3134.jpg',
      link: '/docs/Development_boards/DualMCU',
      badge: translate({ id: 'products.badge.new', message: 'NUEVO' }),
      price: '$272.00MXN'
    },
    {
      id: 2,
      title: translate({ id: 'products.cocketNova.title', message: 'COCKET NOVA' }),
      description: translate({ id: 'products.cocketNova.description', message: 'Plataforma de desarrollo de próxima generación' }),
      image: 'https://uelectronics.com/wp-content/uploads/2024/10/COCKET-NOVA-web3-scaled.jpg',
      link: '/docs/Development_boards/devlab/cocket_nova',
      badge: translate({ id: 'products.badge.featured', message: 'DESTACADO' }),
      price: '$100.MXN'
    },
    {
      id: 3,
      title: translate({ id: 'products.modules.title', message: 'Módulos UNIT' }),
      description: translate({ id: 'products.modules.description', message: 'Ecosistema modular completo para proyectos' }),
      image: 'https://uelectronics.com/wp-content/uploads/2024/08/03-MODULOS-UNIT.jpg',
      link: '/docs/category/unit---modules',
      badge: translate({ id: 'products.badge.popular', message: 'POPULAR' }),
      price: translate({ id: 'products.modules.price', message: 'Desde $30.00MXN' })
    }
  ];
  return (
    <div className={styles.productAdsContainer}>
      <div className={styles.header}>
        <h3 className={styles.sectionTitle}>
          {translate({ id: 'products.featured.title', message: 'Productos Destacados' })}
        </h3>
        <p className={styles.subtitle}>
          {translate({ id: 'products.featured.subtitle', message: 'Descubre nuestras últimas innovaciones' })}
        </p>
      </div>
      <div className={styles.adsWrapper}>
        {productAds.map((product) => (
          <ProductAd key={product.id} product={product} />
        ))}
      </div>
      <div className={styles.shopLink}>
        <Link to="https://uelectronics.com/" className="button button--secondary button--outline">
          {translate({ id: 'products.viewFullStore', message: 'Ver Tienda Completa' })}
        </Link>
      </div>
    </div>
  );
}
