# Umsetzungsdokumentation

## Umsetzungsübersicht für IKT-Dienstleister

Die Umsetzung folgte dem Prinzip: **Was verursacht sofortigen Schaden bei Nichtbeachtung?**

```
Q1 2025        Q2 2025        Q3 2025        Q4 2025        2026           2027
────┬──────────┬──────────────┬──────────────┬──────────────┬──────────────┬────►
    │          │              │              │              │              │
    │  ┌───────┴──────┐      │              │              │              │
    │  │ P2: Incident │      │              │              │              │
    │  │ Melde-Prozess│      │              │              │              │
    │  │ aufgesetzt   │      │              │              │              │
    │  └──────────────┘      │              │              │              │
    │          │              │              │              │              │
    │  ┌───────┴──────────────┴──────┐      │              │              │
    │  │ P4: Verträge angepasst,     │      │              │              │
    │  │ Informationsregister-Daten  │      │              │              │
    │  │ bereitgestellt (Deadline    │      │              │              │
    │  │ Kunden: 30.04.2025)         │      │              │              │
    │  └─────────────────────────────┘      │              │              │
    │                         │              │              │              │
    │                 ┌───────┴──────────────┴──────┐      │              │
    │                 │ P1: IKT-Risikomanagement-   │      │              │
    │                 │ Rahmen formalisiert,         │      │              │
    │                 │ Asset-Inventar, Policies     │      │              │
    │                 └────────────────────────────────┘    │              │
    │                                        │              │              │
    │                                ┌───────┴──────────────┴──────┐      │
    │                                │ P3: Testprogramm etabliert, │      │
    │                                │ Automatisierung ausgerollt  │      │
    │                                └─────────────────────────────┘      │
    │                                                       │              │
    │                                               ┌───────┴──────┐      │
    │                                               │ P5: Threat   │      │
    │                                               │ Intelligence │      │
    │                                               │ integriert   │      │
    │                                               └──────────────┘      │
    │                                                              ┌──────┴──┐
    │                                                              │FinmadiG │
    │                                                              │Erweiter.│
    │                                                              └─────────┘
```

## Phase 1: Sofortmaßnahmen (Q1 2025) ✅

### P2: Incident-Meldewesen

| Maßnahme | Deliverable | Status |
|---|---|---|
| Incident-Klassifizierungssystematik eingeführt | Decision Tree (7 Kriterien) | ✅ Umgesetzt |
| Pre-filled XML-Meldevorlage erstellt | Template mit statischen Daten | ✅ Umgesetzt |
| Interne Meldefrist definiert (< 1h an Kunden) | SLA-Dokument | ✅ Umgesetzt |
| Eskalationskette dokumentiert | Eskalationsmatrix | ✅ Umgesetzt |
| SIEM-Alerting auf DORA-Schwellwerte konfiguriert | Monitoring Rules | ✅ Umgesetzt |

### P4: Vertragliche Grundlagen

| Maßnahme | Deliverable | Status |
|---|---|---|
| DORA-Vertragsklauseln-Template erstellt | AGB-Ergänzung / Vertragsanhang | ✅ Umgesetzt |
| DORA Fact Sheet für Kunden erstellt | Standardisiertes Infoblatt | ✅ Umgesetzt |
| Subcontracting-Register angelegt | CRM Custom Object | ✅ Umgesetzt |
| Audit-Rechte in alle Verträge aufgenommen | Vertragliche Klausel | ✅ Umgesetzt |

## Phase 2: Vertragliche Anpassung (Q2 2025) ✅

### P4: Register & Verträge

| Maßnahme | Deliverable | Abschluss |
|---|---|---|
| Alle Finanzsektor-Kunden identifiziert | Kundenliste | April 2025 |
| Betroffene Verträge inventarisiert | Vertragsliste + Gap-Analyse | April 2025 |
| Kunden DORA-Infoblatt bereitgestellt | Fact Sheet | April 2025 |
| Vertragsanpassungen verhandelt | Neue Verträge / Nachträge | Juni 2025 |
| Exit-Strategie-Template erstellt | Standard-Dokument | Mai 2025 |

## Phase 3: Operative Umsetzung (Q3–Q4 2025) ✅

### P1: IKT-Risikomanagement

| Maßnahme | Deliverable | Abschluss |
|---|---|---|
| IKT-Risikomanagement-Framework dokumentiert | Policy-Dokument | Juli 2025 |
| IKT-Asset-Inventar vervollständigt | CMDB vollständig | Aug 2025 |
| Kritikalitätsklassifizierung durchgeführt | Asset-Klassifizierung | Aug 2025 |
| IKT-Sicherheitsrichtlinie nach RTS 2024/1774 | Policy-Update | Sep 2025 |
| BCP/DRP formalisiert mit RPO/RTO | BCP + DRP Dokumente | Sep 2025 |
| Awareness-Programm aufgesetzt | LMS-Kurs + Materialien | Okt 2025 |
| Kommunikationsplan erstellt | Kommunikationsstrategie | Okt 2025 |
| Jährlicher Review-Prozess definiert | Kalendereinträge + Prozessbeschreibung | Nov 2025 |

### P3: Testprogramm

| Maßnahme | Deliverable | Abschluss |
|---|---|---|
| Testprogramm-Policy erstellt | Testprogramm-Dokument | Aug 2025 |
| Vulnerability Scanning automatisiert | Vulnerability Scanner Pipeline | Aug 2025 |
| SAST in CI/CD integriert | SAST-Pipeline | Sep 2025 |
| Jährlicher Pentest beauftragt | Externer Dienstleister | Q4 2025 |
| BCP/DRP-Test durchgeführt | Testprotokoll | Q4 2025 |
| Performance-Baseline erstellt | k6 Benchmarks | Q4 2025 |

## Phase 4: Laufender Betrieb (ab 2026) ✅

| Kadenz | Maßnahme | Verantwortlich |
|---|---|---|
| **Täglich** | Dependency Scanning (CI/CD) | Automatisch |
| **Wöchentlich** | Vulnerability Scan (Infrastruktur) | Automatisch |
| **Monatlich** | Compliance-Status-Report | Automatisch + Review |
| **Quartalsweise** | Netzwerk-Assessment, Performance-Test | Automatisch |
| **Halbjährlich** | Vertragsregister-Review | Compliance |
| **Jährlich** | Pentest (extern), BCP/DRP-Test, Awareness-Schulung | Management |
| **Jährlich** | IKT-Risikomanagement-Framework Review | Geschäftsführung |
| **Jährlich** | Informationsregister-Daten aktualisieren + Kunden informieren | Compliance |
| **Alle 3 Jahre** | TLPT-Kooperation (auf Kundenanfrage) | Extern |

## Laufende Aufwände (jährlich)

| Posten | Aufwand (PT/Jahr) |
|---|---|
| Jährlicher Framework-Review | 2 |
| Vertragsregister-Pflege | 2 |
| Awareness-Schulung | 1 |
| BCP/DRP-Test | 2 |
| Pentest-Begleitung | 2 |
| Compliance-Reporting | 1 |
| **Gesamt laufend** | **~10 PT/Jahr** |

::: tip Aufwandsreduktion durch Automatisierung
Ohne Automatisierung: ~25 PT/Jahr laufend. Mit Automatisierung: ~10 PT/Jahr. Differenz: ~15 PT/Jahr.
:::
