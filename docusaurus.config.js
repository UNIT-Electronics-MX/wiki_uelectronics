// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wiki',
  tagline: 'Dinosaurs are cool',
  // favicon: 'img/favicon.ico',

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
    defaultLocale: 'en',
    locales: ['en'],
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/Logo-UNIT_Web-04-800x182.png',
      navbar: {
        title: '',

        logo: {
          alt: 'My Site Logo',
          src: 'img/Logo-UNIT_Web-04-800x182.png',

        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Development',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: 'https://uelectronics.com/', label: 'UNIT Shop', position: 'left'},
          {to: 'https://www.hackster.io/unit-electronics/discussion', label: 'Forums', position: 'right'},
         

          {
            href: 'https://github.com/UNIT-Electronics',
            label: 'GitHub',
            position: 'right',
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
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
              //   label: 'X',
              //   href: 'https://x.com/docusaurus',
              // },
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
                label: 'GitHub',
                href: 'https://github.com/UNIT-Electronics',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UNIT Electronics`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

        
    }),
};

export default config;
