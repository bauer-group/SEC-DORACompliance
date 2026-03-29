# Automatisierungsstrategie

## Prinzip: Minimal Effort, Maximum Compliance

Die DORA-Umsetzung bei BAUER GROUP folgt dem Prinzip **"Compliance-as-Code"**: Jede Anforderung wird so weit wie möglich automatisiert, Templates statt Prosa, Monitoring statt manuellem Reporting.

```
┌────────────────────────────────────────────────────┐
│              DORA Automation Stack                   │
├────────────────────────────────────────────────────┤
│  Layer 4: Reporting & Evidence                      │
│  ├── Automatisierte Compliance-Reports              │
│  ├── Audit-Trail (Git-basiert)                      │
│  └── Dashboard (Dashboard/Custom)                     │
├────────────────────────────────────────────────────┤
│  Layer 3: Detection & Response                      │
│  ├── SIEM (SIEM)                          │
│  ├── Incident Pipeline (Webhook → Classify → Alert)│
│  └── Pre-filled Meldetemplates (XML)               │
├────────────────────────────────────────────────────┤
│  Layer 2: Continuous Testing                        │
│  ├── Vulnerability Scanning (Vulnerability Scanner)      │
│  ├── SAST/DAST (SAST/DAST)                      │
│  ├── Dependency Scanning (Dependency-Scanner)                   │
│  └── Performance Testing (k6)                      │
├────────────────────────────────────────────────────┤
│  Layer 1: Asset & Risk Foundation                   │
│  ├── CMDB (CMDB/Custom)                          │
│  ├── IKT-Asset-Inventar (auto-discovered)          │
│  ├── Risk Register (Notion/Custom)                 │
│  └── Contract Register (CRM + Custom)          │
└────────────────────────────────────────────────────┘
```

## Mapping: DORA-Anforderung → Automation

| DORA-Anforderung | Art. | Automation-Level | Tool/Ansatz |
|---|---|---|---|
| IKT-Asset-Inventar | 8 | 🟢 Voll | CMDB + Auto-Discovery (Ansible/Nmap) |
| Schwachstellenscans | 25 | 🟢 Voll | Vulnerability Scanner, Container-Scanner (Container) |
| Dependency Scanning | 25 | 🟢 Voll | Dependency-Scanner/Container-Scanner in CI/CD Pipeline |
| SAST Code Review | 25 | 🟢 Voll | SAST-Tool in Pre-commit/CI |
| Incident Detection | 10 | 🟢 Voll | SIEM + Custom Rules |
| Incident Classification | 18 | 🟡 Semi | Decision Tree (6 Kriterien) → Webhook |
| Incident Notification | 19 | 🟡 Semi | Pre-filled XML Template + Manual Review |
| Informationsregister | 28 | 🟡 Semi | CRM Custom Objects + Export Script |
| Vertragsprüfung | 30 | 🔴 Manual | Template-Checkliste, jährlicher Review |
| BCP/DRP Testing | 11-12 | 🔴 Manual | Jährlicher Tabletop + DR-Drill |
| Awareness Training | 13 | 🟢 Voll | LMS (Moodle/Custom) mit Auto-Enrollment |
| TLPT-Kooperation | 26 | 🔴 Manual | Bei Kundenanfrage, extern durchgeführt |
| Audit-Trail | Übergreifend | 🟢 Voll | Git-basierte Policy-Versionierung |
| Compliance Reporting | Übergreifend | 🟢 Voll | Automatisierte Reports aus Tooling |

## Komponenten im Detail

### 1. Asset Management (Layer 1)

```yaml
# netbox-auto-discovery.yaml
# Cronjob: Wöchentlich
sources:
  - type: nmap
    scope: "10.0.0.0/8"
    frequency: weekly
  - type: ansible_facts
    scope: all_managed_hosts
    frequency: daily
  - type: kubernetes_api
    scope: all_clusters
    frequency: hourly
  - type: cloud_api
    provider: [hetzner, aws]
    frequency: daily

output:
  target: netbox
  create_missing: true
  update_existing: true
  tag: "auto-discovered"
  
classification:
  critical_functions:
    - tag: "dora:critical"
      criteria: "customer_facing OR financial_data"
    - tag: "dora:important"
      criteria: "internal_infrastructure"
```

### 2. Continuous Security Testing (Layer 2)

```yaml
# CI/CD Pipeline Extension
stages:
  - name: dora-security-gate
    steps:
      - trivy image scan (CRITICAL/HIGH = block)
      - semgrep SAST (security rules)
      - grype SCA (CVE database)
      - checkov IaC scan (misconfig)
    evidence:
      store: s3://compliance-evidence/
      format: SARIF
      retention: 5y
```

### 3. Incident Pipeline (Layer 3)

```python
# Pseudocode – konzeptionelle Darstellung
# incident_classifier.py (Pseudocode)
DORA_THRESHOLDS = {
    "affected_customers_pct": 10,    # > 10% = schwerwiegend
    "affected_customers_abs": 100000, # > 100k = schwerwiegend
    "downtime_hours": 2,              # > 2h kritische Dienste
    "geo_spread": 2,                  # >= 2 Mitgliedstaaten
    "data_loss": True,                # CIA betroffen
    "critical_service": True,         # Kritische Funktion
    "economic_impact_eur": 100000,    # > 100k EUR
}

def classify_incident(incident) -> str:
    """Klassifiziert nach 6 DORA-Kriterien."""
    criteria_met = 0
    for criterion, threshold in DORA_THRESHOLDS.items():
        if incident.get(criterion) >= threshold:
            criteria_met += 1
    
    if criteria_met >= 2:
        return "MAJOR"  # → Meldepflicht
    elif criteria_met == 1:
        return "SIGNIFICANT"  # → Monitoring
    else:
        return "MINOR"  # → Logging
```

### 4. Reporting & Evidence (Layer 4)

```yaml
# compliance-report.yaml
# Generiert automatischen DORA-Compliance-Report
reports:
  - name: "monthly_compliance_status"
    frequency: monthly
    sections:
      - asset_inventory_completeness
      - open_vulnerabilities_by_severity
      - incident_statistics
      - test_execution_status
      - contract_compliance_status
    output: [markdown, pdf]
    recipients: [geschaeftsleitung, compliance]
    
  - name: "annual_dora_review"
    frequency: annually
    sections:
      - full_gap_analysis
      - risk_assessment_update
      - test_program_results
      - contract_register_summary
      - awareness_training_completion
      - improvement_roadmap
    output: [docx, pdf]
    recipients: [geschaeftsleitung, kunden]
```

## Git-basiertes Policy Management

Alle DORA-relevanten Policies werden als **Markdown im Git-Repository** gepflegt:

```
policies/
├── IKT-Sicherheitsrichtlinie.md          # Art. 9
├── IKT-Risikomanagement-Framework.md     # Art. 6
├── Incident-Response-Policy.md           # Art. 17-19
├── Business-Continuity-Plan.md           # Art. 11
├── Disaster-Recovery-Plan.md             # Art. 12
├── Kommunikationsplan.md                 # Art. 14
├── Drittanbieter-Management-Policy.md    # Art. 28-30
├── Awareness-Schulungsplan.md            # Art. 13
├── Test-Programm.md                      # Art. 25
└── CHANGELOG.md                          # Audit-Trail
```

**Vorteile:**

- Vollständiger **Audit-Trail** (Git History)
- **Review-Prozess** über Merge Requests
- **Automatische Versionierung** (SemVer)
- **Automatischer Build** → Dokumentations-Deployment
- **Diff-basierter jährlicher Review** (was hat sich geändert?)

## Aufwandsvergleich

| Ansatz | Aufwand Initial | Aufwand Laufend (p.a.) | Evidenz-Qualität |
|---|---|---|---|
| **Manuell** (Word/Excel) | 2 Wochen | 4–6 Wochen/Jahr | ⚠️ Mittel |
| **Semi-Automatisiert** (Git + Tools) | 4 Wochen | 1–2 Wochen/Jahr | ✅ Hoch |
| **Voll-Automatisiert** (Pipeline) | 6 Wochen | 2–3 Tage/Jahr | ✅✅ Sehr hoch |

::: tip Umsetzung
BAUER GROUP setzt auf einen stufenweisen Ansatz: Beginn mit **semi-automatisierten** Prozessen, sukzessive Erweiterung zur **vollständigen Automatisierung**. Die Git-basierte Policy-Verwaltung bildet dabei den Ausgangspunkt.
:::
