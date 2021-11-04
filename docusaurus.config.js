// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Raj Lang",
  tagline: "A modern compiled Programming language",
  url: "https://rajlang.github.io",

  baseUrl: "/",
  baseUrlIssueBanner: true,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  favicon: "img/favicon.ico",
  
  organizationName: "rajlang", 
  projectName: "rajlang.github.io", // Repo name.
  deploymentBranch: "gh-pages",
  
  customFields: {
    description:
      "A modern, easy-to-use multi-purpose programming language that can be compiled to many languages",
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/rajlang/rajlang.github.io/edit/main/website/",
        },

        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/rajlang/rajlang.github.io/edit/main/website/blog/",
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      zoomSelector: '.markdown img',
      navbar: {
        hideOnScroll: true,
        title: "Raj Lang",
        logo: {
          alt: "Raj Lang Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },
          // {
          //   to: "/blog",
          //   label: "Blog",
          //   position: "left"
          // },
          {
            type: "docsVersionDropdown",
            dropdownActiveClassDisabled: true,
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/rajlang/",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
              {
                label: "Gitter",
                href: "https://gitter.im/rajlang/community",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/rajlang/",
              },
            ],
          },
        ],

        logo: {
          alt: "Raj Lang Logo",
          src: "img/logo.svg",
          href: "https://github.com/rajlang",
        },

        copyright: `Copyright © ${new Date().getFullYear()} Raj Lang.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
