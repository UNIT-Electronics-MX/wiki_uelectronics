import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import styles from './HomePage.module.css';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';

// Lista de imágenes para el carrusel
const images = [
  'https://uelectronics.com/wp-content/uploads/2025/01/UNIT-DUAL-ONE-WEB--scaled.jpg',
  'https://uelectronics.com/wp-content/uploads/2024/10/COCKET-NOVA-web3-scaled.jpg',
  'https://uelectronics.com/wp-content/uploads/2024/08/03-MODULOS-UNIT.jpg'
];

// Lista de videos de YouTube
const youtubeVideos = [
  {
    title: "ESP32-S3 Development Board Overview",
    url: "https://www.youtube.com/embed/9DHy2TkKxhw"
  },
  {
    title: "Introduction to MicroPython",
    url: "https://www.youtube.com/embed/QV1FBynrJjo"
  },
];

// Sección de Información Adicional
const extraInfoItems = [
  {
    title: translate({ id: 'homepage.advancedTutorials', message: 'Advanced Tutorials' }),
    description: translate({ id: 'homepage.advancedTutorials.desc', message: 'Dive deeper into complex topics with advanced electronics guides.' }),
    link: '/docs/circuit-design',
    buttonText: translate({ id: 'homepage.learnMore', message: 'Learn More' }),
    icon: 'fas fa-microchip'
  },
  {
    title: translate({ id: 'homepage.communityForum', message: 'Community Forum' }),
    description: translate({ id: 'homepage.communityForum.desc', message: 'Join discussions and ask questions in our interactive community.' }),
    link: '/docs/custom',
    buttonText: translate({ id: 'homepage.visitForum', message: 'Visit Forum' }),
    icon: 'fas fa-users'
  },
  {
    title: translate({ id: 'homepage.openSourceProjects', message: 'Open-Source Projects' }),
    description: translate({ id: 'homepage.openSourceProjects.desc', message: 'Explore and contribute to open-source electronics projects.' }),
    link: 'https://github.com/UNIT-Electronics',
    buttonText: translate({ id: 'homepage.github', message: 'GitHub' }),
    icon: 'fab fa-github'
  }
];

function HomePage() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute('data-theme');
    setTheme(currentTheme || 'light');
  }, []);

  return (
    <Layout 
      title={translate({ id: 'homepage.title', message: 'Wiki Unit Electronics' })} 
      description={translate({ id: 'homepage.description', message: 'Explore electronics knowledge with our comprehensive platform.' })}
    >
      {/* Carrusel de Imágenes */}
      <section className={clsx(styles.carouselSection)}>
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
      </section>

      <main>
        {/* Sección de Videos de YouTube */}
        <section className={styles.videoSection}>
          <div className="container">
            <h2><Translate id="homepage.featuredVideos">Featured Videos</Translate></h2>
            <div className={styles.videoGrid}>
              {youtubeVideos.map((video, index) => (
                <div key={index} className={styles.videoCard}>
                  <iframe
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.videoIframe}
                  ></iframe>
                  <h3>{video.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de Información Adicional */}
        <section className={styles.extraInfo}>
          <div className="container">
            <h2><Translate id="homepage.discoverMore">Discover More</Translate></h2>
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

        <section className={styles.features}>
          <div className="container">
            <h2><Translate id="homepage.explorePlatform">Explore Our Platform</Translate></h2>
            <div className={styles.centeredRow}>
              <div className={clsx(styles.featureItem)}>
                <i className="fas fa-book" />
                <h3><Translate id="homepage.learn">Learn</Translate></h3>
                <p><Translate id="homepage.learn.desc">Access comprehensive guides and tutorials for all skill levels.</Translate></p>
              </div>
              <div className={clsx(styles.featureItem)}>
                <i className="fas fa-tools" />
                <h3><Translate id="homepage.build">Build</Translate></h3>
                <p><Translate id="homepage.build.desc">Hands-on projects to apply and solidify your knowledge.</Translate></p>
              </div>
              <div className={clsx(styles.featureItem)}>
                <i className="fas fa-users" />
                <h3><Translate id="homepage.collaborate">Collaborate</Translate></h3>
                <p><Translate id="homepage.collaborate.desc">Engage with the community and share your expertise.</Translate></p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default HomePage;
