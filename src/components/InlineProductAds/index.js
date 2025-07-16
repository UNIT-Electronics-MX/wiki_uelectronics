import React from 'react';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const SimpleProductAd = ({ title, description, image, docLink, shopLink, price }) => (
  <div style={{
    background: 'var(--ifm-background-color)',
    border: '1px solid var(--ifm-color-emphasis-200)',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease'
  }}>
    <div style={{
      display: 'flex',
      gap: '1rem',
      alignItems: 'center'
    }}>
      <img 
        src={image} 
        alt={title}
        style={{
          width: '60px',
          height: '60px',
          objectFit: 'cover',
          borderRadius: '4px'
        }}
      />
      <div style={{ flex: 1 }}>
        <h4 style={{ 
          margin: '0 0 0.5rem 0', 
          fontSize: '0.9rem',
          color: 'var(--ifm-color-primary)'
        }}>
          {title}
        </h4>
        <p style={{ 
          margin: '0 0 0.5rem 0', 
          fontSize: '0.8rem',
          color: 'var(--ifm-color-emphasis-600)'
        }}>
          {description}
        </p>
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          fontSize: '0.75rem'
        }}>
          <Link to={docLink} className="button button--sm button--outline">
            {translate({
              message: 'Docs',
              id: 'productAds.docs.button'
            })}
          </Link>
          <Link to={shopLink} className="button button--sm button--primary" target="_blank">
            {price}
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default function InlineProductAds() {
  const { i18n } = useDocusaurusContext();
  const isSpanish = i18n.currentLocale === 'es';
  
  const products = [
    {
      title: 'UNIT Dual ONE',
      description: isSpanish ? 'Plataforma dual-core ESP32' : 'Dual-core ESP32 development platform',
      image: 'https://uelectronics.com/wp-content/uploads/2025/01/UNIT-DUAL-ONE-WEB--scaled.jpg',
      docLink: '/docs/Development_boards/DualMCU',
      shopLink: 'https://uelectronics.com/producto/unit-dual-one/',
      price: '$29.99'
    },
    {
      title: 'COCKET NOVA',
      description: isSpanish ? 'Desarrollo CH552G' : 'CH552G development board',
      image: 'https://uelectronics.com/wp-content/uploads/2024/10/COCKET-NOVA-web3-scaled.jpg',
      docLink: '/docs/Development_boards/devlab/cocket_nova',
      shopLink: 'https://uelectronics.com/producto/unit-cocket-nova-ch552g-tarjeta-de-desarrollo/',
      price: '$34.99'
    }
  ];

  return (
    <div style={{
      background: 'var(--ifm-background-color-light)',
      padding: '1.5rem',
      borderRadius: '8px',
      margin: '2rem 0',
      border: '2px solid var(--ifm-color-primary-lightest)'
    }}>
      <h3 style={{
        textAlign: 'center',
        margin: '0 0 1rem 0',
        fontSize: '1.1rem',
        color: 'var(--ifm-color-primary)'
      }}>
        📦 {translate({
          message: isSpanish ? 'Productos Relacionados' : 'Related Products',
          id: 'productAds.title'
        })}
      </h3>
      {products.map((product, index) => (
        <SimpleProductAd key={index} {...product} />
      ))}
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <Link to="https://uelectronics.com/" className="button button--secondary" target="_blank">
          {translate({
            message: isSpanish ? 'Ver Tienda Completa' : 'View Complete Store',
            id: 'productAds.store.button'
          })}
        </Link>
      </div>
    </div>
  );
}
