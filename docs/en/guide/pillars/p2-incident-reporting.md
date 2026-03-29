# P2: Incident Management & Reporting

## Legal Basis

- **DORA:** Articles 17–23 (Chapter III)
- **RTS:** 2024/1772 (Classification), 2025/301 (Reporting deadlines/content)
- **ITS:** 2025/302 (Reporting forms/templates)
- **Guideline:** JC/GL/2024/34 (Cost and loss estimation)

## Classification of ICT Incidents (Art. 18)

### 7 Classification Criteria (RTS 2024/1772)

| No. | Criterion | Threshold for "major" |
|---|---|---|
| 1 | **Affected clients/counterparties** | > 10% of clients OR > 100,000 clients |
| 2 | **Reputational impact** | Media coverage, client complaints, regulatory attention |
| 3 | **Downtime** | > 2 hours (critical services) |
| 4 | **Geographic spread** | ≥ 2 Member States affected |
| 5 | **Data loss** | Confidentiality, integrity, or availability affected |
| 6 | **Criticality of services** | Critical or important functions affected |
| 7 | **Economic impact** | > EUR 100,000 direct/indirect loss |

An incident is classified as **major** if at least **2 of the 7 criteria** exceed the defined materiality thresholds OR a single criterion reaches the high materiality threshold. The precise thresholds are defined in RTS 2024/1772 – the values above are illustrative.

## Reporting Chain (Art. 19, RTS 2025/301)

### 3-Stage Reporting Process

```
Incident detected
     │
     ▼
Classification as "major"
     │
     ├── T+0h: Internal escalation
     │
     ├── T+4h ──► INITIAL NOTIFICATION
     │             BaFin Reporting Hub
     │             Minimum: Who, What, When, initial assessment
     │
     ├── T+72h ─► INTERMEDIATE REPORT
     │             Status update, impact analysis
     │             If unresolved: action plan with timeline
     │
     └── T+1M ──► FINAL REPORT
                   Root cause analysis
                   Lessons learned
                   Preventive measures
```

::: danger Reporting Deadlines (Art. 19(4))

- **4 hours** after classification as major → initial notification (no later than **24 hours** after detection)
- **72 hours** after initial notification → intermediate report
- **1 month** after initial notification → final report
- **Missing a deadline = DORA violation** → sanctions per Art. 50–52 DORA in conjunction with FinmadiG
:::

### Reporting Format (ITS 2025/302)

- **XML format** according to ITS template (standardised, machine-readable)
- Authentication via **qualified electronic certificates** (eIDAS)
- Automatic **acknowledgement of receipt** with unique incident number
- BaFin serves as the **central reporting hub** in Germany

### Voluntary Reporting of Cyber Threats (Art. 19(2))

- Dedicated reporting form
- Voluntary, but recommended
- Anonymised information may be shared by authorities

## Implementation for ICT Service Providers

### Obligations Towards Clients

As an ICT service provider, BAUER GROUP is not a direct reporting entity, but:

1. **Contractual reporting obligation** – Clients must report within 4h; BAUER GROUP must therefore inform them **faster**
2. **Support obligation** – Providing all relevant information for the client's report
3. **Cooperation obligation** – Full participation in root cause analysis

### Recommended SLA Structure

| Phase | BAUER GROUP internal | To client | Client to BaFin |
|---|---|---|---|
| Detection | T+0 | – | – |
| Assessment | T+30min | – | – |
| Initial info to client | – | T+1h | – |
| Initial notification BaFin | – | – | T+4h |
| Detail report to client | – | T+24h | – |
| Intermediate report BaFin | – | – | T+72h |
| RCA to client | – | T+2w | – |
| Final report BaFin | – | – | T+1M |

### Automation Potential

| Component | Tool/Approach | Status |
|---|---|---|
| Detection | SIEM (SIEM), monitoring stack | ✅ Automatable |
| Classification | Rule-based (7 criteria as decision tree) | ✅ Automatable |
| Initial notification template | Pre-filled XML with static data | ✅ Prepared |
| Escalation | Alerting-System/Custom webhook | ✅ Automatable |
| Client notification | Template + automated dispatch | ✅ Automatable |
| RCA documentation | Runbook-driven process | ⚠️ Semi-automated |
| BaFin XML submission | API integration (if available) | ⚠️ To be verified |

::: tip Practical Tip
Create a **pre-filled template** with static information (entity identification, contacts, standard text) to save valuable minutes in an emergency. The 4h deadline starts from classification – not from detection.
:::
