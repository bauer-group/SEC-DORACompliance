import { defineConfig } from 'vitepress'
import { RssPlugin } from 'vitepress-plugin-rss'
import { de } from './locales/de'
import { en } from './locales/en'

const baseUrl = 'https://dora.docs.bauer-group.com'

export default defineConfig({
  title: 'DORA Compliance',
  titleTemplate: ':title | BAUER GROUP',
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    image: { lazyLoading: true },
  },
  sitemap: {
    hostname: baseUrl,
  },
  vite: {
    plugins: [
      RssPlugin({
        title: 'DORA Compliance – BAUER GROUP (Deutsch)',
        baseUrl,
        copyright: `© ${new Date().getFullYear()} BAUER GROUP`,
        description: 'Digital Operational Resilience Act – Compliance-Dokumentation Updates',
        language: 'de',
        author: { name: 'BAUER GROUP', link: baseUrl },
        filename: 'feed-de.xml',
        icon: false,
        ignoreHome: true,
        ignorePublish: true,
        log: true,
        filter: (post) => post.url.startsWith('/de/'),
      }),
      RssPlugin({
        title: 'DORA Compliance – BAUER GROUP (English)',
        baseUrl,
        copyright: `© ${new Date().getFullYear()} BAUER GROUP`,
        description: 'Digital Operational Resilience Act – Compliance Documentation Updates',
        language: 'en',
        author: { name: 'BAUER GROUP', link: baseUrl },
        filename: 'feed-en.xml',
        icon: false,
        ignoreHome: true,
        ignorePublish: true,
        log: true,
        filter: (post) => post.url.startsWith('/en/'),
      }),
    ],
  },

  head: [
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'DORA Compliance (DE)', href: `${baseUrl}/feed-de.xml`, hreflang: 'de' }],
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'DORA Compliance (EN)', href: `${baseUrl}/feed-en.xml`, hreflang: 'en' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#FF8500' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'DORA Compliance – BAUER GROUP' }],
    ['meta', { name: 'og:description', content: 'Digital Operational Resilience Act – Compliance Documentation' }],
  ],

  // ---------------------------------------------------------------------------
  // Locales (see ./locales/ for nav, sidebar, translations)
  // ---------------------------------------------------------------------------

  locales: { de, en },

  // ---------------------------------------------------------------------------
  // Shared Theme Config
  // ---------------------------------------------------------------------------

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'DORA Compliance',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bauer-group/SEC-DORACompliance' },
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>' }, link: 'https://go.bauer-group.com/dora-compliance', ariaLabel: 'Homepage' },
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          de: {
            translations: {
              button: { buttonText: 'Suchen', buttonAriaLabel: 'Suchen' },
              modal: {
                noResultsText: 'Keine Ergebnisse für',
                resetButtonTitle: 'Suche zurücksetzen',
                footer: { selectText: 'Auswählen', navigateText: 'Navigieren', closeText: 'Schließen' }
              }
            }
          },
          en: {
            translations: {
              button: { buttonText: 'Search', buttonAriaLabel: 'Search' },
              modal: {
                noResultsText: 'No results for',
                resetButtonTitle: 'Reset search',
                footer: { selectText: 'Select', navigateText: 'Navigate', closeText: 'Close' }
              }
            }
          },
        }
      }
    },
  }
})
