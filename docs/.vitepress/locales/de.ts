import type { LocaleSpecificConfig } from 'vitepress'
import type { ThemeConfig } from '../theme/types'

export const de: LocaleSpecificConfig<ThemeConfig> & { label: string; link: string } = {
  label: 'Deutsch',
  lang: 'de-DE',
  link: '/de/',
  description: 'Digital Operational Resilience Act – Compliance-Dokumentation | BAUER GROUP',

  themeConfig: {
    // -----------------------------------------------------------------
    // Announcement Banner
    // -----------------------------------------------------------------

    // announcement: {
    //   text: 'Dieses Dokument befindet sich in aktiver Entwicklung und ist noch nicht finalisiert.',
    //   type: 'warning',
    //   dismissible: true,
    // },

    // -----------------------------------------------------------------
    // Navigation
    // -----------------------------------------------------------------

    nav: [
      { text: 'Übersicht', link: '/de/guide/' },
      {
        text: 'DORA-Pillars',
        items: [
          { text: 'P1: IKT-Risikomanagement', link: '/de/guide/pillars/p1-risk-management' },
          { text: 'P2: Incident Reporting', link: '/de/guide/pillars/p2-incident-reporting' },
          { text: 'P3: Resilienztests', link: '/de/guide/pillars/p3-resilience-testing' },
          { text: 'P4: Drittparteienrisiko', link: '/de/guide/pillars/p4-third-party-risk' },
          { text: 'P5: Informationsaustausch', link: '/de/guide/pillars/p5-information-sharing' },
        ]
      },
      {
        text: 'Umsetzung',
        items: [
          { text: 'Gap-Analyse', link: '/de/guide/compliance/gap-analysis' },
          { text: 'Roadmap', link: '/de/guide/compliance/roadmap' },
          { text: 'IKT-Dienstleister', link: '/de/guide/compliance/ikt-provider' },
          { text: 'Automatisierung', link: '/de/guide/automation/' },
        ]
      },
      {
        text: 'Referenz',
        items: [
          { text: 'RTS/ITS-Verzeichnis', link: '/de/guide/rts-its/' },
          { text: 'Artikelindex', link: '/de/reference/article-index' },
          { text: 'Glossar', link: '/de/reference/glossary' },
          { text: 'Vorlagen', link: '/de/reference/templates' },
        ]
      },
    ],

    // -----------------------------------------------------------------
    // Sidebar
    // -----------------------------------------------------------------

    sidebar: {
      '/de/guide/': [
        {
          text: 'Einführung',
          items: [
            { text: 'DORA-Übersicht', link: '/de/guide/' },
            { text: 'Anwendungsbereich', link: '/de/guide/scope' },
            { text: 'Proportionalität', link: '/de/guide/proportionality' },
            { text: 'DORA vs. NIS2/CRA/AI Act', link: '/de/guide/dora-vs-nis2' },
            { text: 'FinmadiG', link: '/de/guide/finmadig' },
            { text: 'Zeitplan', link: '/de/guide/timeline' },
          ]
        },
        {
          text: 'Die 5 Pillars',
          items: [
            { text: 'Pillar-Übersicht', link: '/de/guide/pillars/' },
            { text: 'P1: IKT-Risikomanagement', link: '/de/guide/pillars/p1-risk-management' },
            { text: 'P2: Incident Reporting', link: '/de/guide/pillars/p2-incident-reporting' },
            { text: 'P3: Resilienztests', link: '/de/guide/pillars/p3-resilience-testing' },
            { text: 'P4: Drittparteienrisiko', link: '/de/guide/pillars/p4-third-party-risk' },
            { text: 'P5: Informationsaustausch', link: '/de/guide/pillars/p5-information-sharing' },
          ]
        },
        {
          text: 'RTS & ITS',
          collapsed: true,
          items: [
            { text: 'Verzeichnis', link: '/de/guide/rts-its/' },
            { text: 'RTS 2024/1774 (P1 RM)', link: '/de/guide/rts-its/rts-2024-1774' },
            { text: 'RTS 2024/1772 (P2 Klassif.)', link: '/de/guide/rts-its/rts-2024-1772' },
            { text: 'RTS 2025/301 (P2 Meldung)', link: '/de/guide/rts-its/rts-2025-301' },
            { text: 'ITS 2025/302 (P2 Templates)', link: '/de/guide/rts-its/its-2025-302' },
            { text: 'RTS 2024/1773 (P4 Verträge)', link: '/de/guide/rts-its/rts-2024-1773' },
            { text: 'ITS 2024/2956 (P4 Register)', link: '/de/guide/rts-its/its-2024-2956' },
            { text: 'RTS 2025/532 (P4 Subcontr.)', link: '/de/guide/rts-its/rts-2025-532' },
            { text: 'RTS 2025/1190 (P3 TLPT)', link: '/de/guide/rts-its/rts-2025-1190' },
            { text: 'RTS 2025/295 (Überwachung)', link: '/de/guide/rts-its/rts-2025-295' },
            { text: 'RTS 2025/420 (JET)', link: '/de/guide/rts-its/rts-2025-420' },
            { text: 'Leitlinien', link: '/de/guide/rts-its/guidelines' },
          ]
        },
        {
          text: 'Compliance & Umsetzung',
          collapsed: true,
          items: [
            { text: 'Gap-Analyse', link: '/de/guide/compliance/gap-analysis' },
            { text: 'Roadmap', link: '/de/guide/compliance/roadmap' },
            { text: 'IKT-Dienstleister', link: '/de/guide/compliance/ikt-provider' },
            { text: 'Informationsregister', link: '/de/guide/compliance/information-register' },
            { text: 'Vertragsmanagement', link: '/de/guide/compliance/contract-management' },
            { text: 'Incident Response', link: '/de/guide/compliance/incident-response' },
            { text: 'Sanktionen', link: '/de/guide/compliance/sanctions' },
          ]
        },
        {
          text: 'Automatisierung',
          collapsed: true,
          items: [
            { text: 'Strategie', link: '/de/guide/automation/' },
            { text: 'Compliance-as-Code', link: '/de/guide/automation/compliance-as-code' },
            { text: 'Monitoring', link: '/de/guide/automation/monitoring' },
            { text: 'Register-Automation', link: '/de/guide/automation/register-automation' },
            { text: 'Incident-Pipeline', link: '/de/guide/automation/incident-pipeline' },
            { text: 'Audit-Trail', link: '/de/guide/automation/audit-trail' },
          ]
        },
      ],
      '/de/reference/': [
        {
          text: 'Referenz',
          items: [
            { text: 'Rechtstext-Verzeichnis', link: '/de/reference/' },
            { text: 'Artikelindex', link: '/de/reference/article-index' },
            { text: 'Behörden & Aufsicht', link: '/de/reference/authorities' },
            { text: 'Glossar', link: '/de/reference/glossary' },
            { text: 'BAIT–DORA Mapping', link: '/de/reference/bait-dora-mapping' },
            { text: 'Vorlagen', link: '/de/reference/templates' },
          ]
        }
      ],
    },

    // -----------------------------------------------------------------
    // UI Translations
    // -----------------------------------------------------------------

    editLink: {
      pattern: 'https://github.com/bauer-group/SEC-DORACompliance/edit/main/docs/:path',
      text: 'Diese Seite bearbeiten'
    },
    lastUpdated: {
      text: 'Zuletzt aktualisiert',
      formatOptions: { dateStyle: 'long', timeStyle: 'short' }
    },
    outline: { label: 'Auf dieser Seite', level: [2, 3] },
    docFooter: { prev: 'Vorherige Seite', next: 'Nächste Seite' },
    returnToTopLabel: 'Zurück nach oben',
    sidebarMenuLabel: 'Menü',
    darkModeSwitchLabel: 'Erscheinungsbild',
    langMenuLabel: 'Sprache',

    footer: {
      message: 'Dokumentation lizenziert unter <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a> · Code lizenziert unter <a href="https://opensource.org/licenses/MIT" target="_blank">MIT</a>',
      copyright: `© ${new Date().getFullYear()} BAUER GROUP. Kommerzielle Nutzung der Dokumentation nicht gestattet.`
    },
  }
}
