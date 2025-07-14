import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from './HomePage.module.css';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';

// Lista de imágenes para el carrusel con información adicional
const carouselSlides = [
  {
    image: 'https://raw.githubusercontent.com/UNIT-Electronics/DualMCU-ONE/refs/heads/main/Resources/IMG_3134.jpg',
    title: translate({ id: 'homepage.slide1.title', message: 'UNIT Dual ONE' }),
    subtitle: translate({ id: 'homepage.slide1.subtitle', message: 'Advanced dual-core development board' }),
    buttonText: translate({ id: 'homepage.slide1.button', message: 'Explore Dual ONE' }),
    buttonLink: '/docs/Development_boards/DualMCU',
    overlay: true
  },
  {
    image: 'https://uelectronics.com/wp-content/uploads/2024/10/COCKET-NOVA-web3-scaled.jpg',
    title: translate({ id: 'homepage.slide2.title', message: 'COCKET NOVA' }),
    subtitle: translate({ id: 'homepage.slide2.subtitle', message: 'Next-generation development platform' }),
    buttonText: translate({ id: 'homepage.slide2.button', message: 'Learn More' }),
    buttonLink: '/docs/category/unit---development-boards',
    overlay: true
  },
  {
    image: 'https://uelectronics.com/wp-content/uploads/2024/08/03-MODULOS-UNIT.jpg',
    title: translate({ id: 'homepage.slide3.title', message: 'UNIT Modules' }),
    subtitle: translate({ id: 'homepage.slide3.subtitle', message: 'Modular electronics ecosystem' }),
    buttonText: translate({ id: 'homepage.slide3.button', message: 'View Modules' }),
    buttonLink: '/docs/category/unit---modules',
    overlay: true
  }
];

// Lista de videos de YouTube
const youtubeVideos = [
  {
    title: "Brazo Robot",
    url: "https://www.youtube.com/embed/9DHy2TkKxhw"
  },
  {
    title: "Letrero electrónico",
    url: "https://www.youtube.com/embed/QV1FBynrJjo"
  },
];

// Lista de características principales
const mainFeatures = [
  {
    title: translate({ id: 'homepage.feature1.title', message: 'Comprehensive Documentation' }),
    description: translate({ id: 'homepage.feature1.desc', message: 'Detailed guides, tutorials, and API documentation for all UNIT Electronics products.' }),
    icon: 'fas fa-book-open',
    link: '/docs/intro'
  },
  {
    title: translate({ id: 'homepage.feature2.title', message: 'Hardware Ecosystem' }),
    description: translate({ id: 'homepage.feature2.desc', message: 'Explore our complete range of development boards, modules, and sensors.' }),
    icon: 'fas fa-microchip',
    link: '/docs/category/unit---development-boards'
  },
  {
    title: translate({ id: 'homepage.feature3.title', message: 'Code Examples' }),
    description: translate({ id: 'homepage.feature3.desc', message: 'Ready-to-use code samples for Arduino, ESP-IDF, and MicroPython.' }),
    icon: 'fas fa-code',
    link: '/docs/category/unit---libraries'
  },
  {
    title: translate({ id: 'homepage.feature4.title', message: 'Community Support' }),
    description: translate({ id: 'homepage.feature4.desc', message: 'Join our active community for help, discussions, and collaboration.' }),
    icon: 'fas fa-users',
    link: 'https://www.hackster.io/unit-electronics/discussion'
  }
];

// Sección de Información Adicional
const extraInfoItems = [
  {
    title: translate({ id: 'homepage.advancedTutorials', message: 'Advanced Tutorials' }),
    description: translate({ id: 'homepage.advancedTutorials.desc', message: 'Dive deeper into complex topics with advanced electronics guides.' }),
    link: '/docs/intro',
    buttonText: translate({ id: 'homepage.learnMore', message: 'Learn More' }),
    icon: 'fas fa-graduation-cap'
  },
  {
    title: translate({ id: 'homepage.communityForum', message: 'Community Forum' }),
    description: translate({ id: 'homepage.communityForum.desc', message: 'Join discussions and ask questions in our interactive community.' }),
    link: 'https://www.hackster.io/unit-electronics/discussion',
    buttonText: translate({ id: 'homepage.visitForum', message: 'Visit Forum' }),
    icon: 'fas fa-comments'
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
      title={translate({ id: 'homepage.title', message: 'UNIT Electronics Wiki' })} 
      description={translate({ id: 'homepage.description', message: 'Comprehensive documentation and guides for UNIT Electronics products - Development boards, modules, sensors, and more.' })}
    >
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <Translate id="homepage.hero.title">UNIT Electronics Wiki</Translate>
            </h1>
            <p className={styles.heroSubtitle}>
              <Translate id="homepage.hero.subtitle">
                Your comprehensive guide to electronics development with cutting-edge hardware and software solutions
              </Translate>
            </p>
            <div className={styles.heroButtons}>
              <Link to="/docs/intro" className="button button--primary button--lg">
                <Translate id="homepage.hero.getStarted">Get Started</Translate>
              </Link>
              <Link to="/blog" className="button button--secondary button--lg">
                <Translate id="homepage.hero.readBlog">Read Blog</Translate>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Carrusel de Productos */}
      <section className={styles.carouselSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            <Translate id="homepage.featuredProducts">Featured Products</Translate>
          </h2>
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            loop
            autoplay={{ 
              delay: 6000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true 
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              dynamicBullets: true 
            }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            className={styles.carouselContainer}
          >
            {carouselSlides.map((slide, index) => (
              <SwiperSlide key={index} className={styles.carouselSlide}>
                <div className={styles.slideContent}>
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className={styles.carouselImage} 
                  />
                  {slide.overlay && (
                    <div className={styles.slideOverlay}>
                      <div className={styles.slideText}>
                        <h3 className={styles.slideTitle}>{slide.title}</h3>
                        <p className={styles.slideSubtitle}>{slide.subtitle}</p>
                        <Link to={slide.buttonLink} className="button button--primary">
                          {slide.buttonText}
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
            
            {/* Navigation buttons */}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </Swiper>
        </div>
      </section>

      <main>
        {/* Sección de Características Principales */}
        <section className={styles.featuresSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <Translate id="homepage.whyChooseUnit">Why Choose UNIT Electronics?</Translate>
            </h2>
            <div className={styles.featuresGrid}>
              {mainFeatures.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <div className={styles.featureIcon}>
                    <i className={feature.icon}></i>
                  </div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                  <Link to={feature.link} className="button button--outline button--primary">
                    <Translate id="homepage.exploreMore">Explore More</Translate>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de Videos de YouTube */}
        <section className={styles.videoSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <Translate id="homepage.featuredVideos">Featured Videos</Translate>
            </h2>
            <div className={styles.videoGrid}>
              {youtubeVideos.map((video, index) => (
                <div key={index} className={styles.videoCard}>
                  <div className={styles.videoWrapper}>
                    <iframe
                      src={video.url}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className={styles.videoIframe}
                    ></iframe>
                  </div>
                  <h3 className={styles.videoTitle}>{video.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de Información Adicional */}
        <section className={styles.extraInfoSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <Translate id="homepage.exploreMore">Explore More</Translate>
            </h2>
            <div className={styles.extraInfoGrid}>
              {extraInfoItems.map((item, index) => (
                <div key={index} className={styles.extraInfoCard}>
                  <div className={styles.extraInfoIcon}>
                    <i className={item.icon}></i>
                  </div>
                  <h3 className={styles.extraInfoTitle}>{item.title}</h3>
                  <p className={styles.extraInfoDescription}>{item.description}</p>
                  <Link to={item.link} className="button button--primary">
                    {item.buttonText}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default HomePage;
