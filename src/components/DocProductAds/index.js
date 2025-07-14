import React from 'react';
import Link from '@docusaurus/Link';
import styles from './DocProductAds.module.css';

const relatedProducts = [
  {
    id: 1,
    title: 'UNIT Dual ONE',
    description: 'Plataforma de desarrollo dual-core',
    image: 'https://uelectronics.com/wp-content/uploads/2025/01/UNIT-DUAL-ONE-WEB--scaled.jpg',
    link: '/docs/Development_boards/DualMCU',
    shopLink: 'https://uelectronics.com/producto/unit-dual-one/',
    price: '$29.99'
  },
  {
    id: 2,
    title: 'COCKET NOVA',
    description: 'Desarrollo con CH552G',
    image: 'https://uelectronics.com/wp-content/uploads/2024/10/COCKET-NOVA-web3-scaled.jpg',
    link: '/docs/Development_boards/develab/cocket_nova',
    shopLink: 'https://uelectronics.com/producto/unit-cocket-nova-ch552g-tarjeta-de-desarrollo/',
    price: '$34.99'
  },
  {
    id: 3,
    title: 'Módulos UNIT',
    description: 'Sensores y módulos compatibles',
    image: 'https://uelectronics.com/wp-content/uploads/2024/08/03-MODULOS-UNIT.jpg',
    link: '/docs/category/unit---modules',
    shopLink: 'https://uelectronics.com/categoria-producto/unit-products/',
    price: 'Desde $9.99'
  }
];

function ProductCard({ product }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.title} className={styles.productImage} />
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{product.title}</h4>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.price}>{product.price}</div>
        <div className={styles.actions}>
          <Link to={product.link} className={`button button--sm button--outline ${styles.docsButton}`}>
            Documentación
          </Link>
          <Link to={product.shopLink} className={`button button--sm button--primary ${styles.shopButton}`} target="_blank">
            Comprar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function DocProductAds() {
  return (
    <div className={styles.adsContainer}>
      <div className={styles.header}>
        <h3 className={styles.sectionTitle}>Productos Relacionados</h3>
        <p className={styles.subtitle}>Explora nuestro ecosistema</p>
      </div>
      <div className={styles.productsList}>
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
