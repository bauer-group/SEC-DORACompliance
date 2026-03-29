# Audit Trail & Evidence

## Evidence Collection Strategy

Every DORA-relevant activity is documented with verifiable evidence. The retention period is at least **5 years** (Art. 19(6) DORA).

## Automatic Evidence Collection

| Source | Evidence Type | Storage Location | Retention |
|---|---|---|---|
| Git repository | Policy changes, reviews, approvals | Git history | Unlimited |
| CI/CD pipeline | Scan reports (vulnerability, SAST, dependency, IaC) | Object storage | 5 years |
| SIEM | Security events, incident logs | Log storage | 5 years |
| Monitoring | Availability metrics, SLA evidence | Object storage | 5 years |
| LMS | Training certificates, attendance lists | LMS DB + export | 5 years |
| CRM | Contract status, DORA compliance flags | CRM + export | 5 years |
| Pentest reports | External audit reports | Encrypted object storage | 5 years |
| BCP/DRP tests | Test protocols, results | Git + object storage | 5 years |

## Automated Compliance Report (Pseudocode)

::: info Note
The following code is **conceptual pseudocode** describing the structure of the monthly compliance report. The actual implementation is adapted to the respective system landscape.
:::

```python
# Pseudocode – Conceptual structure of the monthly DORA compliance report

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

## Audit Readiness Package

For audits by clients, audit firms, or BaFin, BAUER GROUP provides a standardised, DORA-article-referenced audit package. The package is structured so that each audit area maps directly to the applicable regulatory requirements.

### Package Structure

```
audit-package-[YYYY-MM]/
│
├── 00-management-summary/
│   ├── DORA-Compliance-Statement.pdf
│   ├── Scope-and-Applicability.pdf
│   └── Audit-Coordination-Contacts.pdf
│
├── 01-governance/                              ── Art. 5 DORA
│   ├── ICT-Risk-Management-Framework.pdf
│   ├── Governance-Structure-Orgchart.pdf
│   ├── Management-Board-Resolutions.pdf
│   ├── Role-Matrix-ICT-Responsibilities.pdf
│   └── Annual-Review-Evidence-[Year].pdf
│
├── 02-risk-management/                         ── Art. 6–16 DORA, RTS 2024/1774
│   ├── ICT-Risk-Analysis-[Year].pdf
│   ├── Asset-Inventory-Extract.csv
│   ├── Criticality-Classification.pdf
│   ├── ICT-Security-Policy.pdf
│   ├── Access-Control-Policy.pdf
│   ├── Cryptography-and-Encryption-Policy.pdf
│   ├── Backup-and-Recovery-Policy.pdf
│   ├── Patch-Management-Policy.pdf
│   ├── BCP-Plan.pdf
│   ├── DRP-Plan.pdf
│   └── Communication-Plan.pdf
│
├── 03-incident-management/                     ── Art. 17–23 DORA, RTS 2024/1772, RTS 2025/301
│   ├── Incident-Response-Playbook.pdf
│   ├── Classification-Schema-7-Criteria.pdf
│   ├── Escalation-Matrix.pdf
│   ├── SLA-Reporting-Deadlines-Documentation.pdf
│   ├── Pre-filled-XML-Template.xml
│   ├── Incident-Log-[Period].csv
│   └── Major-Incident-Reports/
│       └── [Incident-ID]-RCA-Report.pdf
│
├── 04-resilience-testing/                      ── Art. 24–27 DORA, RTS 2025/1190
│   ├── Test-Programme-Policy.pdf
│   ├── Vulnerability-Scan-Reports/
│   │   ├── Infrastructure-Scan-[Month].pdf
│   │   └── Container-Scan-[Month].pdf
│   ├── SAST-Reports/
│   │   └── SAST-Summary-[Quarter].pdf
│   ├── Pentest-Report-[Year].pdf
│   ├── BCP-DRP-Test-Protocol-[Year].pdf
│   └── Performance-Baseline-[Year].pdf
│
├── 05-third-party-risk/                        ── Art. 28–44 DORA, RTS 2024/1773, ITS 2024/2956
│   ├── DORA-Contract-Clauses-Template.pdf
│   ├── Contract-Compliance-Status-Matrix.csv
│   ├── Information-Register-Data-Package.json
│   ├── Subcontracting-Register.csv
│   ├── Exit-Strategy-Template.pdf
│   ├── Fact-Sheet-Template.pdf
│   └── Audit-Rights-Evidence.pdf
│
├── 06-awareness-and-communication/             ── Art. 13–14 DORA
│   ├── Awareness-Programme-Overview.pdf
│   ├── Training-Plan-[Year].pdf
│   ├── Attendance-Records-and-Certificates/
│   │   └── [Training]-Attendance-Confirmation.pdf
│   └── Communication-Plan-ICT-Incidents.pdf
│
├── 07-certifications-and-evidence/
│   ├── ISO-27001-Certificate.pdf
│   ├── SOC-2-Report.pdf (if applicable)
│   └── [Additional-Certificates].pdf
│
└── 08-appendix/
    ├── DORA-Article-Index-Mapping.pdf
    ├── Glossary.pdf
    └── Audit-Package-Change-History.pdf
```

### Article Mapping per Audit Area

| Audit Area | DORA Articles | RTS/ITS | Evidence |
|---|---|---|---|
| Governance | Art. 5 | – | Framework, board resolutions, role matrix |
| ICT Risk Management | Art. 6–16 | RTS 2024/1774 | Risk analysis, policies, asset inventory, BCP/DRP |
| Incident Management | Art. 17–23 | RTS 2024/1772, RTS 2025/301, ITS 2025/302 | Playbook, classification, reporting deadlines, incident log |
| Resilience Testing | Art. 24–27 | RTS 2025/1190 | Test programme, scan reports, pentest, BCP test |
| Third-Party Risk | Art. 28–44 | RTS 2024/1773, ITS 2024/2956, RTS 2025/532 | Contracts, register, subcontracting, exit strategy |
| Awareness | Art. 13–14 | – | Training plan, attendance records |
| Information Sharing | Art. 45 | – | Participation records (if applicable) |

### Provision Process

| Step | Description | Cadence |
|---|---|---|
| 1. Automatic evidence collection | CI/CD, SIEM, monitoring, CRM exports | Continuous |
| 2. Consolidation | Assembly into package structure | Monthly |
| 3. Quality review | Review by compliance officer | Quarterly |
| 4. Versioning | Audit package as versioned release | Semi-annually |
| 5. Provision upon request | Client-specific compilation within **5 business days** | On request |

::: warning Confidentiality
The audit package contains security-sensitive information. Provision is exclusively via encrypted channels. Recipients are documented. Pentest reports and vulnerability scans are only shared with third parties in redacted form.
:::
