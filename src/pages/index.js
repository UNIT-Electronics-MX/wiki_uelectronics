import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import styles from './HomePage.module.css';
import Link from '@docusaurus/Link';

// Lista de imágenes para el carrusel
const images = [
  'https://uelectronics.com/wp-content/uploads/2025/01/UNIT-DUAL-ONE-WEB--scaled.jpg',
  'https://uelectronics.com/wp-content/uploads/2024/10/COCKET-NOVA-web3-scaled.jpg',
  'https://uelectronics.com/wp-content/uploads/2024/08/03-MODULOS-UNIT.jpg'
];

// Sección de Información Adicional
const extraInfoItems = [
  {
    title: 'Advanced Tutorials',
    description: 'Dive deeper into complex topics with advanced electronics guides.',
    link: '/docs/circuit-design',
    buttonText: 'Learn More',
    icon: 'fas fa-microchip'
  },
  {
    title: 'Community Forum',
    description: 'Join discussions and ask questions in our interactive community.',
    link: '/docs/custom',
    buttonText: 'Visit Forum',
    icon: 'fas fa-users'
  },
  {
    title: 'Open-Source Projects',
    description: 'Explore and contribute to open-source electronics projects.',
    link: 'https://github.com/UNIT-Electronics',
    buttonText: 'GitHub',
    icon: 'fab fa-github'
  }
];

// Carrusel de imágenes
const renderCarousel = () => (
  <div className={clsx(styles.carouselSection)}>
    <Swiper
      modules={[Autoplay, Pagination]}
      loop
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className={styles.carouselContainer}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index} className={styles.carouselSlide}>
          <div className={styles.imageContainer}>
            <img src={src} alt={`Slide ${index + 1}`} className={styles.carouselImage} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

// Sección de Información Adicional
const renderExtraInfo = () => (
  <section className={styles.extraInfo}>
    <div className="container">
      <h2>Discover More</h2>
      <div className={styles.infoGrid}>
        {extraInfoItems.map((item, index) => (
          <div key={index} className={styles.infoCard}>
            <div className={styles.iconContainer}>
              <i className={item.icon}></i>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link to={item.link} className="button button--primary">
              {item.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

function HomePage() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute('data-theme');
    setTheme(currentTheme || 'light');
  }, []);

  return (
    <Layout title="Wiki Unit Electronics" description="Explore electronics knowledge with our comprehensive platform.">

      {/* Carrusel de Imágenes - BANNER GRANDE */}
      {renderCarousel()}

      {/* Features Section */}
      <main>
        <section className={styles.features}>
          <div className="container">
            <h2>Explore Our Platform</h2>
            <div className={styles.centeredRow}>
              <div className={clsx(styles.featureItem)}>
                <i className="fas fa-book" />
                <h3>Learn</h3>
                <p>Access comprehensive guides and tutorials for all skill levels.</p>
              </div>
              <div className={clsx(styles.featureItem)}>
                <i className="fas fa-tools" />
                <h3>Build</h3>
                <p>Hands-on projects to apply and solidify your knowledge.</p>
              </div>
              <div className={clsx(styles.featureItem)}>
                <i className="fas fa-users" />
                <h3>Collaborate</h3>
                <p>Engage with the community and share your expertise.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Información Adicional */}
        {renderExtraInfo()}
      </main>
    </Layout>
  );
}

export default HomePage;
