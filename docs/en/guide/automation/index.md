# Automation Strategy

## Principle: Minimal Effort, Maximum Compliance

BAUER GROUP's DORA implementation follows the principle of **"compliance-as-code"**: every requirement is automated as far as possible, templates instead of prose, monitoring instead of manual reporting.

```
┌────────────────────────────────────────────────────┐
│              DORA Automation Stack                   │
├────────────────────────────────────────────────────┤
│  Layer 4: Reporting & Evidence                      │
│  ├── Automated compliance reports                   │
│  ├── Audit trail (Git-based)                        │
│  └── Dashboard (Dashboard/custom)                     │
├────────────────────────────────────────────────────┤
│  Layer 3: Detection & Response                      │
│  ├── SIEM (SIEM)                          │
│  ├── Incident pipeline (webhook → classify → alert)│
│  └── Pre-filled reporting templates (XML)          │
├────────────────────────────────────────────────────┤
│  Layer 2: Continuous Testing                        │
│  ├── Vulnerability scanning (Vulnerability Scanner)      │
│  ├── SAST/DAST (SAST/DAST)                      │
│  ├── Dependency scanning (Dependency-Scanner)                   │
│  └── Performance testing (k6)                      │
├────────────────────────────────────────────────────┤
│  Layer 1: Asset & Risk Foundation                   │
│  ├── CMDB (CMDB/custom)                          │
│  ├── ICT asset inventory (auto-discovered)         │
│  ├── Risk register (Notion/custom)                 │
│  └── Contract register (CRM + custom)          │
└────────────────────────────────────────────────────┘
```

## Mapping: DORA Requirement → Automation

| DORA Requirement | Art. | Automation Level | Tool/Approach |
|---|---|---|---|
| ICT asset inventory | 8 | 🟢 Full | CMDB + auto-discovery (Ansible/Nmap) |
| Vulnerability scans | 25 | 🟢 Full | Vulnerability Scanner, Container-Scanner |
| Dependency scanning | 25 | 🟢 Full | Dependency-Scanner/Container-Scanner in CI/CD pipeline |
| SAST code review | 25 | 🟢 Full | SAST in Pre-Commit/CI |
| Incident detection | 10 | 🟢 Full | SIEM + custom rules |
| Incident classification | 18 | 🟡 Semi | Decision tree (6 criteria) → webhook |
| Incident notification | 19 | 🟡 Semi | Pre-filled XML template + manual review |
| Information register | 28 | 🟡 Semi | CRM Custom Objects + export script |
| Contract review | 30 | 🔴 Manual | Template checklist, annual review |
| BCP/DRP testing | 11-12 | 🔴 Manual | Annual tabletop + DR drill |
| Awareness training | 13 | 🟢 Full | LMS (Moodle/custom) with auto-enrollment |
| TLPT cooperation | 26 | 🔴 Manual | Upon client request, externally conducted |
| Audit trail | Cross-cutting | 🟢 Full | Git-based policy versioning |
| Compliance reporting | Cross-cutting | 🟢 Full | Automated reports from tooling |

## Components in Detail

### 1. Asset Management (Layer 1)

```yaml
# netbox-auto-discovery.yaml
# Cron job: weekly
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
# CI/CD pipeline extension
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
# Pseudocode – conceptual representation
# incident_classifier.py (pseudocode)
DORA_THRESHOLDS = {
    "affected_customers_pct": 10,    # > 10% = major
    "affected_customers_abs": 100000, # > 100k = major
    "downtime_hours": 2,              # > 2h critical services
    "geo_spread": 2,                  # >= 2 Member States
    "data_loss": True,                # CIA affected
    "critical_service": True,         # Critical function
    "economic_impact_eur": 100000,    # > EUR 100k
}

def classify_incident(incident) -> str:
    """Classifies according to 6 DORA criteria."""
    criteria_met = 0
    for criterion, threshold in DORA_THRESHOLDS.items():
        if incident.get(criterion) >= threshold:
            criteria_met += 1

    if criteria_met >= 2:
        return "MAJOR"  # → reporting obligation
    elif criteria_met == 1:
        return "SIGNIFICANT"  # → monitoring
    else:
        return "MINOR"  # → logging
```

### 4. Reporting & Evidence (Layer 4)

```yaml
# compliance-report.yaml
# Generates automated DORA compliance report
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
    recipients: [management, compliance]

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
    recipients: [management, clients]
```

## Git-Based Policy Management

All DORA-relevant policies are maintained as **Markdown in the Git repository**:

```
policies/
├── ICT-Security-Policy.md                # Art. 9
├── ICT-Risk-Management-Framework.md      # Art. 6
├── Incident-Response-Policy.md           # Art. 17-19
├── Business-Continuity-Plan.md           # Art. 11
├── Disaster-Recovery-Plan.md             # Art. 12
├── Communication-Plan.md                 # Art. 14
├── Third-Party-Management-Policy.md      # Art. 28-30
├── Awareness-Training-Plan.md            # Art. 13
├── Test-Programme.md                     # Art. 25
└── CHANGELOG.md                          # Audit trail
```

**Benefits:**

- Complete **audit trail** (Git history)
- **Review process** via merge requests
- **Automatic versioning** (SemVer)
- **Automatic build** → documentation deployment
- **Diff-based annual review** (what has changed?)

## Effort Comparison

| Approach | Initial Effort | Ongoing Effort (p.a.) | Evidence Quality |
|---|---|---|---|
| **Manual** (Word/Excel) | 2 weeks | 4–6 weeks/year | ⚠️ Medium |
| **Semi-automated** (Git + tools) | 4 weeks | 1–2 weeks/year | ✅ High |
| **Fully automated** (pipeline) | 6 weeks | 2–3 days/year | ✅✅ Very high |

::: tip Implementation
BAUER GROUP follows a phased approach: starting with **semi-automated** processes, progressively expanding to **full automation**. Git-based policy management serves as the foundation.
:::
