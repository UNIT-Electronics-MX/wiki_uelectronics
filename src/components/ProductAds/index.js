import React from 'react';
import Link from '@docusaurus/Link';
import styles from './ProductAds.module.css';

const productAds = [
  {
    id: 1,
    title: 'UNIT Dual ONE',
    description: 'Nuevo board de desarrollo dual-core ESP32',
    image: 'https://raw.githubusercontent.com/UNIT-Electronics/DualMCU-ONE/refs/heads/main/Resources/IMG_3134.jpg',
    link: '/docs/Development_boards/DualMCU',
    badge: 'NUEVO',
    price: '$272.00MXN'
  },
  {
    id: 2,
    title: 'COCKET NOVA',
    description: 'Plataforma de desarrollo de próxima generación',
    image: 'https://uelectronics.com/wp-content/uploads/2024/10/COCKET-NOVA-web3-scaled.jpg',
    link: '/docs/Development_boards/develab/cocket_nova',
    badge: 'DESTACADO',
    price: '$34.99'
  },
  {
    id: 3,
    title: 'Módulos UNIT',
    description: 'Ecosistema modular completo para proyectos',
    image: 'https://uelectronics.com/wp-content/uploads/2024/08/03-MODULOS-UNIT.jpg',
    link: '/docs/category/unit---modules',
    badge: 'POPULAR',
    price: 'Desde $9.99'
  }
];

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
            Ver Más
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProductAds() {
  return (
    <div className={styles.productAdsContainer}>
      <div className={styles.header}>
        <h3 className={styles.sectionTitle}>Productos Destacados</h3>
        <p className={styles.subtitle}>Descubre nuestras últimas innovaciones</p>
      </div>
      <div className={styles.adsWrapper}>
        {productAds.map((product) => (
          <ProductAd key={product.id} product={product} />
        ))}
      </div>
      <div className={styles.shopLink}>
        <Link to="https://uelectronics.com/" className="button button--secondary button--outline">
          Ver Tienda Completa
        </Link>
      </div>
    </div>
  );
}
