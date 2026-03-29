# Implementation Documentation

## Implementation Overview for ICT Service Providers

Implementation followed the principle: **What causes immediate harm if not addressed?**

```
Q1 2025        Q2 2025        Q3 2025        Q4 2025        2026           2027
────┬──────────┬──────────────┬──────────────┬──────────────┬──────────────┬────►
    │          │              │              │              │              │
    │  ┌───────┴──────┐      │              │              │              │
    │  │ P2: Incident │      │              │              │              │
    │  │ reporting    │      │              │              │              │
    │  │ process set  │      │              │              │              │
    │  │ up           │      │              │              │              │
    │  └──────────────┘      │              │              │              │
    │          │              │              │              │              │
    │  ┌───────┴──────────────┴──────┐      │              │              │
    │  │ P4: Contracts adjusted,     │      │              │              │
    │  │ information register data   │      │              │              │
    │  │ provided (client deadline:  │      │              │              │
    │  │ 30.04.2025)                 │      │              │              │
    │  └─────────────────────────────┘      │              │              │
    │                         │              │              │              │
    │                 ┌───────┴──────────────┴──────┐      │              │
    │                 │ P1: ICT risk management      │      │              │
    │                 │ framework formalised,         │      │              │
    │                 │ asset inventory, policies     │      │              │
    │                 └────────────────────────────────┘    │              │
    │                                        │              │              │
    │                                ┌───────┴──────────────┴──────┐      │
    │                                │ P3: Test programme           │      │
    │                                │ established, automation      │      │
    │                                │ rolled out                   │      │
    │                                └─────────────────────────────┘      │
    │                                                       │              │
    │                                               ┌───────┴──────┐      │
    │                                               │ P5: Threat   │      │
    │                                               │ intelligence │      │
    │                                               │ integrated   │      │
    │                                               └──────────────┘      │
    │                                                              ┌──────┴──┐
    │                                                              │FinmadiG │
    │                                                              │Extension│
    │                                                              └─────────┘
```

## Phase 1: Immediate Actions (Q1 2025) ✅

### P2: Incident Reporting

| Measure | Deliverable | Status |
|---|---|---|
| Incident classification system introduced | Decision tree (7 criteria) | ✅ Implemented |
| Pre-filled XML reporting template created | Template with static data | ✅ Implemented |
| Internal reporting deadline defined (< 1h to clients) | SLA document | ✅ Implemented |
| Escalation chain documented | Escalation matrix | ✅ Implemented |
| SIEM alerting configured to DORA thresholds | Monitoring rules | ✅ Implemented |

### P4: Contractual Foundations

| Measure | Deliverable | Status |
|---|---|---|
| DORA contract clauses template created | Terms supplement / contract annex | ✅ Implemented |
| DORA fact sheet for clients created | Standardised information sheet | ✅ Implemented |
| Subcontracting register set up | CRM Custom Object | ✅ Implemented |
| Audit rights included in all contracts | Contractual clause | ✅ Implemented |

## Phase 2: Contract Adjustment (Q2 2025) ✅

### P4: Register & Contracts

| Measure | Deliverable | Completed |
|---|---|---|
| All financial sector clients identified | Client list | April 2025 |
| Affected contracts inventoried | Contract list + gap analysis | April 2025 |
| DORA info sheet provided to clients | Fact sheet | April 2025 |
| Contract adjustments negotiated | New contracts / amendments | June 2025 |
| Exit strategy template created | Standard document | May 2025 |

## Phase 3: Operational Implementation (Q3–Q4 2025) ✅

### P1: ICT Risk Management

| Measure | Deliverable | Completed |
|---|---|---|
| ICT risk management framework documented | Policy document | July 2025 |
| ICT asset inventory completed | CMDB fully populated | Aug 2025 |
| Criticality classification conducted | Asset classification | Aug 2025 |
| ICT security policy per RTS 2024/1774 | Policy update | Sep 2025 |
| BCP/DRP formalised with RPO/RTO | BCP + DRP documents | Sep 2025 |
| Awareness programme set up | LMS course + materials | Oct 2025 |
| Communication plan created | Communication strategy | Oct 2025 |
| Annual review process defined | Calendar entries + process description | Nov 2025 |

### P3: Test Programme

| Measure | Deliverable | Completed |
|---|---|---|
| Test programme policy created | Test programme document | Aug 2025 |
| Vulnerability scanning automated | Vulnerability Scanner pipeline | Aug 2025 |
| SAST integrated into CI/CD | SAST-Pipeline | Sep 2025 |
| Annual pentest commissioned | External provider | Q4 2025 |
| BCP/DRP test conducted | Test protocol | Q4 2025 |
| Performance baseline established | k6 benchmarks | Q4 2025 |

## Phase 4: Ongoing Operations (from 2026) ✅

| Cadence | Measure | Responsible |
|---|---|---|
| **Daily** | Dependency scanning (CI/CD) | Automated |
| **Weekly** | Vulnerability scan (infrastructure) | Automated |
| **Monthly** | Compliance status report | Automated + review |
| **Quarterly** | Network assessment, performance test | Automated |
| **Semi-annually** | Contract register review | Compliance |
| **Annually** | Pentest (external), BCP/DRP test, awareness training | Management |
| **Annually** | ICT risk management framework review | Management |
| **Annually** | Update information register data + inform clients | Compliance |
| **Every 3 years** | TLPT cooperation (upon client request) | External |

## Ongoing Effort (annually)

| Item | Effort (person-days/year) |
|---|---|
| Annual framework review | 2 |
| Contract register maintenance | 2 |
| Awareness training | 1 |
| BCP/DRP test | 2 |
| Pentest support | 2 |
| Compliance reporting | 1 |
| **Total ongoing** | **~10 person-days/year** |

::: tip Effort Reduction Through Automation
Without automation: ~25 person-days/year ongoing. With automation: ~10 person-days/year. Difference: ~15 person-days/year.
:::
