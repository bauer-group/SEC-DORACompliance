# P3: Resilienztests

## Rechtsgrundlage

- **DORA:** Artikel 24–27 (Kapitel IV)
- **RTS:** 2025/1190 (TLPT – Inkrafttreten 08.07.2025)
- **Rahmenwerk:** TIBER-EU (Threat Intelligence-based Ethical Red Teaming)

## Zwei Testkategorien

### Basistests (Art. 25) – Obligatorisch für alle

Alle Finanzunternehmen müssen ein Testprogramm als integralen Bestandteil des IKT-Risikomanagementrahmens etablieren:

| Testtyp | Beschreibung | Häufigkeit |
|---|---|---|
| **Schwachstellenscans** | Automatisierte Scans auf bekannte Schwachstellen | Mindestens jährlich |
| **Open-Source-Analysen** | Prüfung eingesetzter OSS-Komponenten | Mindestens jährlich |
| **Netzwerksicherheitsbewertungen** | Netzwerkarchitektur und -segmentierung | Mindestens jährlich |
| **Lückenanalysen (Gap Analysis)** | Abgleich Soll/Ist Sicherheitsniveau | Mindestens jährlich |
| **Physische Sicherheitsüberprüfungen** | Zugangskontrolle, Umgebungssicherheit | Nach Risiko |
| **Quellcode-Reviews** | Statische und dynamische Code-Analyse | Bei kritischen Systemen |
| **Szenariobasierte Tests** | Business Continuity, Disaster Recovery | Mindestens jährlich |
| **Kompatibilitätstests** | Software-/Hardware-Interoperabilität | Bei Änderungen |
| **Performancetests** | Last- und Stresstests | Mindestens jährlich |
| **End-to-End-Tests** | Vollständige Prozesskettentests | Nach Risiko |
| **Penetrationstests** | Aktive Ausnutzung von Schwachstellen | Mindestens jährlich |

### Fortgeschrittene Tests – TLPT (Art. 26–27)

**Threat Led Penetration Tests** sind nur für **systemrelevante Finanzunternehmen** mit hohem IKT-Reifegrad vorgesehen.

| Aspekt | Anforderung |
|---|---|
| **Wer** | Nur systemrelevante FU (von Aufsicht bestimmt) |
| **Frequenz** | Alle 3 Jahre |
| **Framework** | TIBER-EU Methodik |
| **Phasen** | 8 Phasen, 9–14 Monate Durchführung |
| **Teams** | Red Team (extern), Blue Team (intern), White Team (Koordination) |
| **Budget** | Typisch 150.000–500.000 EUR |
| **Dienstleister** | Müssen TLPT-Zertifizierungskriterien erfüllen |
| **Frist** | Erstmalige TLPT vor 17.01.2028 |

::: info BAUER GROUP-Relevanz
BAUER GROUP als IKT-Dienstleister ist **nicht direkt TLPT-pflichtig**, muss aber:

- An TLPT-Tests von Kunden **mitwirken** und vollständig **kooperieren** (Art. 26 Abs. 4)
- Eigene **Basistests** nachweisen können (Vertragsanforderung)
- Testergebnisse dem Kunden **zur Verfügung stellen**
:::

## Testprogramm – Minimum für IKT-Dienstleister

### Automatisierbares Basistestprogramm

```yaml
# dora-test-schedule.yaml
test_program:
  vulnerability_scanning:
    tool: "OpenVAS/Vulnerability Scanner"
    frequency: "weekly"
    scope: "all_production_systems"
    automated: true
    
  dependency_scanning:
    tool: "Container Scanner"
    frequency: "daily"
    scope: "all_containers_and_packages"
    automated: true
    
  sast_scanning:
    tool: "SAST-Tool"
    frequency: "on_commit"
    scope: "all_repositories"
    automated: true
    
  penetration_testing:
    provider: "external"
    frequency: "annually"
    scope: "critical_systems"
    automated: false
    
  bcp_dr_testing:
    frequency: "annually"
    scope: "all_critical_services"
    automated: false
    last_test: null
    next_test: null
    
  network_assessment:
    tool: "Nmap/custom"
    frequency: "quarterly"
    scope: "all_network_segments"
    automated: true
    
  performance_testing:
    tool: "k6/Locust"
    frequency: "quarterly"
    scope: "customer_facing_services"
    automated: true
```

### Evidence Collection

Jeder Test muss dokumentiert werden mit:

- Testdatum, -umfang, -methodik
- Findings (kategorisiert nach Kritikalität)
- Remediation Plan mit Fristen
- Nachweis der Behebung (Retest)
- Management Sign-off

→ Siehe [Audit-Trail & Evidence](../automation/audit-trail) für automatisierte Evidence Collection.
