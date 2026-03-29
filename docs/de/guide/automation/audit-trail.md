# Audit-Trail & Evidenz

## Strategie zur Evidenz-Sicherung

Jede DORA-relevante Aktivität wird nachweisbar dokumentiert. Die Aufbewahrungsfrist beträgt mindestens **5 Jahre** (Art. 19 Abs. 6 DORA).

## Automatische Evidenz-Erhebung

| Quelle | Evidenz-Typ | Speicherort | Aufbewahrung |
|---|---|---|---|
| Git Repository | Policy-Änderungen, Reviews, Genehmigungen | Git History | Unbegrenzt |
| CI/CD Pipeline | Scan-Reports (Vulnerability, SAST, Dependency, IaC) | Object-Storage | 5 Jahre |
| SIEM | Security Events, Incident Logs | Log-Storage | 5 Jahre |
| Monitoring | Verfügbarkeits-Metriken, SLA-Nachweise | Object-Storage | 5 Jahre |
| LMS | Schulungsnachweise, Teilnehmerlisten | LMS-DB + Export | 5 Jahre |
| CRM | Vertragsstatus, DORA-Compliance-Flags | CRM + Export | 5 Jahre |
| Pentest-Reports | Externe Prüfberichte | Verschlüsselter Object-Storage | 5 Jahre |
| BCP/DRP Tests | Testprotokolle, Ergebnisse | Git + Object-Storage | 5 Jahre |

## Automatisierter Compliance-Report (Pseudocode)

::: info Hinweis
Der folgende Code ist ein **konzeptioneller Pseudocode**, der die Struktur des monatlichen Compliance-Reports beschreibt. Die konkrete Implementierung erfolgt angepasst an die jeweilige Systemlandschaft.
:::

```python
# Pseudocode – Konzeptionelle Darstellung des monatlichen DORA Compliance Reports

def generate_monthly_report():
    report = {
        "period": current_month(),
        "sections": {
            "asset_inventory": {
                "total_assets": cmdb.count_assets(),
                "classified_critical": cmdb.count_assets(tag="dora:critical"),
                "completeness_pct": cmdb.completeness_score()
            },
            "vulnerabilities": {
                "critical": vuln_scanner.count("critical"),
                "high": vuln_scanner.count("high"),
                "remediation_rate": vuln_scanner.remediation_rate(),
                "mean_time_to_remediate": vuln_scanner.mttr()
            },
            "incidents": {
                "total": siem.count_incidents(),
                "major": siem.count_incidents(classification="MAJOR"),
                "mean_detection_time": siem.mean_detection_time(),
                "sla_compliance": siem.sla_compliance_rate()
            },
            "testing": {
                "vuln_scans_executed": ci.count_scans("vulnerability"),
                "sast_scans_executed": ci.count_scans("sast"),
                "pentest_status": pentest.status(),
                "bcp_test_status": bcp.last_test_status()
            },
            "contracts": {
                "total_financial_customers": crm.count_financial_customers(),
                "dora_compliant_contracts": crm.count_dora_compliant(),
                "compliance_rate_pct": crm.dora_compliance_rate()
            },
            "awareness": {
                "training_completion_pct": lms.completion_rate(),
                "overdue_trainings": lms.count_overdue()
            }
        }
    }

    render_report(report, format=["markdown", "pdf"])
    distribute(report, recipients=["management", "compliance"])
```

## Audit-Readiness-Paket

Für Audits durch Kunden, Wirtschaftsprüfer oder BaFin stellt BAUER GROUP ein standardisiertes, DORA-artikelbezogenes Audit-Paket bereit. Das Paket ist so strukturiert, dass jeder Prüfungsbereich direkt den regulatorischen Anforderungen zugeordnet werden kann.

### Paketstruktur

```
audit-package-[YYYY-MM]/
│
├── 00-management-summary/
│   ├── DORA-Compliance-Statement.pdf
│   ├── Scope-und-Anwendbarkeit.pdf
│   └── Kontaktdaten-Audit-Koordination.pdf
│
├── 01-governance/                              ── Art. 5 DORA
│   ├── IKT-Risikomanagement-Framework.pdf
│   ├── Governance-Struktur-Organigramm.pdf
│   ├── Beschlussprotokoll-Geschäftsleitung.pdf
│   ├── Rollenmatrix-IKT-Verantwortlichkeiten.pdf
│   └── Jährlicher-Review-Nachweis-[Jahr].pdf
│
├── 02-risikomanagement/                        ── Art. 6–16 DORA, RTS 2024/1774
│   ├── IKT-Risikoanalyse-[Jahr].pdf
│   ├── Asset-Inventar-Auszug.csv
│   ├── Kritikalitätsklassifizierung.pdf
│   ├── IKT-Sicherheitsrichtlinie.pdf
│   ├── Zugangskontrollrichtlinie.pdf
│   ├── Kryptografie-und-Verschlüsselungsrichtlinie.pdf
│   ├── Backup-und-Recovery-Richtlinie.pdf
│   ├── Patch-Management-Richtlinie.pdf
│   ├── BCP-Plan.pdf
│   ├── DRP-Plan.pdf
│   └── Kommunikationsplan.pdf
│
├── 03-incident-management/                     ── Art. 17–23 DORA, RTS 2024/1772, RTS 2025/301
│   ├── Incident-Response-Playbook.pdf
│   ├── Klassifizierungsschema-7-Kriterien.pdf
│   ├── Eskalationsmatrix.pdf
│   ├── SLA-Meldefristen-Dokumentation.pdf
│   ├── Pre-filled-XML-Template.xml
│   ├── Incident-Log-[Zeitraum].csv
│   └── Major-Incident-Reports/
│       └── [Incident-ID]-RCA-Report.pdf
│
├── 04-resilience-testing/                      ── Art. 24–27 DORA, RTS 2025/1190
│   ├── Testprogramm-Policy.pdf
│   ├── Vulnerability-Scan-Reports/
│   │   ├── Infrastruktur-Scan-[Monat].pdf
│   │   └── Container-Scan-[Monat].pdf
│   ├── SAST-Reports/
│   │   └── SAST-Summary-[Quartal].pdf
│   ├── Pentest-Report-[Jahr].pdf
│   ├── BCP-DRP-Testprotokoll-[Jahr].pdf
│   └── Performance-Baseline-[Jahr].pdf
│
├── 05-third-party-risk/                        ── Art. 28–44 DORA, RTS 2024/1773, ITS 2024/2956
│   ├── DORA-Vertragsklauseln-Template.pdf
│   ├── Vertragscompliance-Status-Matrix.csv
│   ├── Informationsregister-Datenpaket.json
│   ├── Subcontracting-Register.csv
│   ├── Exit-Strategie-Template.pdf
│   ├── Fact-Sheet-Template.pdf
│   └── Audit-Rechte-Nachweis.pdf
│
├── 06-awareness-und-kommunikation/             ── Art. 13–14 DORA
│   ├── Awareness-Programm-Übersicht.pdf
│   ├── Schulungsplan-[Jahr].pdf
│   ├── Teilnehmerlisten-und-Nachweise/
│   │   └── [Schulung]-Teilnahmebestätigung.pdf
│   └── Kommunikationsplan-IKT-Vorfälle.pdf
│
├── 07-zertifizierungen-und-nachweise/
│   ├── ISO-27001-Zertifikat.pdf
│   ├── SOC-2-Report.pdf (falls vorhanden)
│   └── [Weitere-Zertifikate].pdf
│
└── 08-anhang/
    ├── DORA-Artikelindex-Zuordnung.pdf
    ├── Glossar.pdf
    └── Änderungshistorie-Audit-Paket.pdf
```

### Artikelzuordnung je Prüfungsbereich

| Audit-Bereich | DORA-Artikel | RTS/ITS | Evidenz |
|---|---|---|---|
| Governance | Art. 5 | – | Framework, Beschlussprotokolle, Rollenmatrix |
| IKT-Risikomanagement | Art. 6–16 | RTS 2024/1774 | Risikoanalyse, Policies, Asset-Inventar, BCP/DRP |
| Incident Management | Art. 17–23 | RTS 2024/1772, RTS 2025/301, ITS 2025/302 | Playbook, Klassifizierung, Meldefristen, Incident-Log |
| Resilience Testing | Art. 24–27 | RTS 2025/1190 | Testprogramm, Scan-Reports, Pentest, BCP-Test |
| Third-Party Risk | Art. 28–44 | RTS 2024/1773, ITS 2024/2956, RTS 2025/532 | Verträge, Register, Subcontracting, Exit-Strategie |
| Awareness | Art. 13–14 | – | Schulungsplan, Teilnahmenachweise |
| Information Sharing | Art. 45 | – | Teilnahmenachweise (falls zutreffend) |

### Bereitstellungsprozess

| Schritt | Beschreibung | Kadenz |
|---|---|---|
| 1. Automatische Evidenz-Sammlung | CI/CD, SIEM, Monitoring, CRM-Exporte | Fortlaufend |
| 2. Konsolidierung | Zusammenführung in Paketstruktur | Monatlich |
| 3. Qualitätsprüfung | Review durch Compliance-Verantwortliche | Quartalsweise |
| 4. Versionierung | Audit-Paket als versioniertes Release | Halbjährlich |
| 5. Bereitstellung auf Anfrage | Kundenspezifische Zusammenstellung innerhalb **5 Werktagen** | Auf Anfrage |

::: warning Vertraulichkeit
Das Audit-Paket enthält sicherheitsrelevante Informationen. Die Bereitstellung erfolgt ausschließlich über verschlüsselte Kanäle. Empfänger werden dokumentiert. Pentest-Reports und Vulnerability-Scans werden nur in redaktionierter Form an Dritte weitergegeben.
:::
