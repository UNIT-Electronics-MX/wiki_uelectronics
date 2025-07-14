// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UNIT Electronics Wiki',
  tagline: 'Innovative Electronics Solutions for Modern Development',
  favicon: 'img/1.png',

  url: 'https://UNIT-Electronics-MX.github.io', // Dirección de tu sitio
  baseUrl: '/wiki_uelectronics/', // Subdirectorio del repositorio
  organizationName: 'UNIT-Electronics-MX', // Nombre del usuario/organización
  projectName: 'wiki_uelectronics', // Nombre del repositorio
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',  // Idioma por defecto
    locales: ['en', 'es'],  // Idiomas disponibles
    localeConfigs: {
      en: {
        label: 'English',
      },
      es: {
        label: 'Español',
      },
    },
  },
  

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/UNIT-Electronics',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/UNIT-Electronics',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: "/docs",
        language: ["en", "es"],  // Idiomas de búsqueda
      },
    ],
  ],
  

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/1.png',
      metadata: [
        {name: 'keywords', content: 'electronics, development, arduino, esp32, modules, sensors, iot'},
        {name: 'description', content: 'Comprehensive documentation for UNIT Electronics products - Development boards, modules, sensors, and IoT solutions'},
      ],
      headTags: [
        {
          tagName: 'link',
          attributes: {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
            crossorigin: 'anonymous',
          },
        },
      ],
      navbar: {
        title: 'UNIT Electronics',
        hideOnScroll: true,

        logo: {
          alt: 'UNIT Electronics Logo',
          src: 'img/1.png',
          width: 32,
          height: 32,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '📚 Documentation',
          },
          {to: '/blog', label: '📰 Blog', position: 'left'},
          {to: 'https://uelectronics.com/', label: '🛒 Shop', position: 'left'},
          {to: 'https://www.hackster.io/unit-electronics/discussion', label: '💬 Community', position: 'right'},
         

          {
            href: 'https://github.com/UNIT-Electronics-MX/wiki_uelectronics?tab=readme-ov-file',
            label: 'GitHub',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
         

          {
            type: 'localeDropdown',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'Development Boards',
                to: '/docs/Development_boards',
              },
              {
                label: 'Modules & Sensors',
                to: '/docs/Modules',
              },
              {
                label: 'Code Examples',
                to: '/docs/Code',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Hackster.io Forum',
                href: 'https://www.hackster.io/unit-electronics/discussion',
              },
              {
                label: 'YouTube Channel',
                href: 'https://www.youtube.com/@UNITElectronics',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/unit_electronics/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/unit-electronics',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Shop',
                href: 'https://uelectronics.com/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/UNIT-Electronics-MX',
              },
              {
                label: 'Support',
                href: 'mailto:contacto@uelectronics.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UNIT Electronics. Built with 💙 by the UNIT team.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

        
    }),
};

export default config;
