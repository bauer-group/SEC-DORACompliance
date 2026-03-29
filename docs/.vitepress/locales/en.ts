import type { LocaleSpecificConfig } from 'vitepress'
import type { ThemeConfig } from '../theme/types'

export const en: LocaleSpecificConfig<ThemeConfig> & { label: string; link: string } = {
  label: 'English',
  lang: 'en',
  link: '/en/',
  description: 'Digital Operational Resilience Act – Compliance Documentation | BAUER GROUP',

  themeConfig: {
    // -----------------------------------------------------------------
    // Announcement Banner
    // -----------------------------------------------------------------

    // announcement: {
    //   text: 'This document is under active development and has not been finalised.',
    //   type: 'warning',
    //   dismissible: true,
    // },

    // -----------------------------------------------------------------
    // Navigation
    // -----------------------------------------------------------------

    nav: [
      { text: 'Overview', link: '/en/guide/' },
      {
        text: 'DORA Pillars',
        items: [
          { text: 'P1: ICT Risk Management', link: '/en/guide/pillars/p1-risk-management' },
          { text: 'P2: Incident Reporting', link: '/en/guide/pillars/p2-incident-reporting' },
          { text: 'P3: Resilience Testing', link: '/en/guide/pillars/p3-resilience-testing' },
          { text: 'P4: Third-Party Risk', link: '/en/guide/pillars/p4-third-party-risk' },
          { text: 'P5: Information Sharing', link: '/en/guide/pillars/p5-information-sharing' },
        ]
      },
      {
        text: 'Implementation',
        items: [
          { text: 'Gap Analysis', link: '/en/guide/compliance/gap-analysis' },
          { text: 'Roadmap', link: '/en/guide/compliance/roadmap' },
          { text: 'ICT Provider', link: '/en/guide/compliance/ikt-provider' },
          { text: 'Automation', link: '/en/guide/automation/' },
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'RTS/ITS Registry', link: '/en/guide/rts-its/' },
          { text: 'Article Index', link: '/en/reference/article-index' },
          { text: 'Glossary', link: '/en/reference/glossary' },
          { text: 'Templates', link: '/en/reference/templates' },
        ]
      },
    ],

    // -----------------------------------------------------------------
    // Sidebar
    // -----------------------------------------------------------------

    sidebar: {
      '/en/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'DORA Overview', link: '/en/guide/' },
            { text: 'Scope', link: '/en/guide/scope' },
            { text: 'Proportionality', link: '/en/guide/proportionality' },
            { text: 'DORA vs. NIS2/CRA/AI Act', link: '/en/guide/dora-vs-nis2' },
            { text: 'FinmadiG', link: '/en/guide/finmadig' },
            { text: 'Timeline', link: '/en/guide/timeline' },
          ]
        },
        {
          text: 'The 5 Pillars',
          items: [
            { text: 'Pillar Overview', link: '/en/guide/pillars/' },
            { text: 'P1: ICT Risk Management', link: '/en/guide/pillars/p1-risk-management' },
            { text: 'P2: Incident Reporting', link: '/en/guide/pillars/p2-incident-reporting' },
            { text: 'P3: Resilience Testing', link: '/en/guide/pillars/p3-resilience-testing' },
            { text: 'P4: Third-Party Risk', link: '/en/guide/pillars/p4-third-party-risk' },
            { text: 'P5: Information Sharing', link: '/en/guide/pillars/p5-information-sharing' },
          ]
        },
        {
          text: 'RTS & ITS',
          collapsed: true,
          items: [
            { text: 'Registry', link: '/en/guide/rts-its/' },
            { text: 'RTS 2024/1774 (P1 RM)', link: '/en/guide/rts-its/rts-2024-1774' },
            { text: 'RTS 2024/1772 (P2 Classif.)', link: '/en/guide/rts-its/rts-2024-1772' },
            { text: 'RTS 2025/301 (P2 Reporting)', link: '/en/guide/rts-its/rts-2025-301' },
            { text: 'ITS 2025/302 (P2 Templates)', link: '/en/guide/rts-its/its-2025-302' },
            { text: 'RTS 2024/1773 (P4 Contracts)', link: '/en/guide/rts-its/rts-2024-1773' },
            { text: 'ITS 2024/2956 (P4 Register)', link: '/en/guide/rts-its/its-2024-2956' },
            { text: 'RTS 2025/532 (P4 Subcontr.)', link: '/en/guide/rts-its/rts-2025-532' },
            { text: 'RTS 2025/1190 (P3 TLPT)', link: '/en/guide/rts-its/rts-2025-1190' },
            { text: 'RTS 2025/295 (Oversight)', link: '/en/guide/rts-its/rts-2025-295' },
            { text: 'RTS 2025/420 (JET)', link: '/en/guide/rts-its/rts-2025-420' },
            { text: 'Guidelines', link: '/en/guide/rts-its/guidelines' },
          ]
        },
        {
          text: 'Compliance & Implementation',
          collapsed: true,
          items: [
            { text: 'Gap Analysis', link: '/en/guide/compliance/gap-analysis' },
            { text: 'Roadmap', link: '/en/guide/compliance/roadmap' },
            { text: 'ICT Provider', link: '/en/guide/compliance/ikt-provider' },
            { text: 'Information Register', link: '/en/guide/compliance/information-register' },
            { text: 'Contract Management', link: '/en/guide/compliance/contract-management' },
            { text: 'Incident Response', link: '/en/guide/compliance/incident-response' },
            { text: 'Sanctions', link: '/en/guide/compliance/sanctions' },
          ]
        },
        {
          text: 'Automation',
          collapsed: true,
          items: [
            { text: 'Strategy', link: '/en/guide/automation/' },
            { text: 'Compliance-as-Code', link: '/en/guide/automation/compliance-as-code' },
            { text: 'Monitoring', link: '/en/guide/automation/monitoring' },
            { text: 'Register Automation', link: '/en/guide/automation/register-automation' },
            { text: 'Incident Pipeline', link: '/en/guide/automation/incident-pipeline' },
            { text: 'Audit Trail', link: '/en/guide/automation/audit-trail' },
          ]
        },
      ],
      '/en/reference/': [
        {
          text: 'Reference',
          items: [
            { text: 'Legal Texts', link: '/en/reference/' },
            { text: 'Article Index', link: '/en/reference/article-index' },
            { text: 'Authorities & Supervision', link: '/en/reference/authorities' },
            { text: 'Glossary', link: '/en/reference/glossary' },
            { text: 'BAIT–DORA Mapping', link: '/en/reference/bait-dora-mapping' },
            { text: 'Templates', link: '/en/reference/templates' },
          ]
        }
      ],
    },

    // -----------------------------------------------------------------
    // UI Translations
    // -----------------------------------------------------------------

    editLink: {
      pattern: 'https://github.com/bauer-group/SEC-DORACompliance/edit/main/docs/:path',
      text: 'Edit this page'
    },
    lastUpdated: {
      text: 'Last updated',
      formatOptions: { dateStyle: 'long', timeStyle: 'short' }
    },
    outline: { label: 'On this page', level: [2, 3] },
    docFooter: { prev: 'Previous', next: 'Next' },
    returnToTopLabel: 'Back to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Appearance',
    langMenuLabel: 'Language',

    footer: {
      message: 'Documentation licensed under <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a> · Code licensed under <a href="https://opensource.org/licenses/MIT" target="_blank">MIT</a>',
      copyright: `© ${new Date().getFullYear()} BAUER GROUP. Commercial use of the documentation is not permitted.`
    },
  }
}
