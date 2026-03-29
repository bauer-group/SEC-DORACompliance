# P4: Third-Party Risk

## Legal Basis

- **DORA:** Articles 28–44 (Chapter V)
- **RTS:** 2024/1773 (Contractual policy), 2025/532 (Subcontracting)
- **ITS:** 2024/2956 (Information register templates)
- **Delegated acts:** 2024/1502 (CTPP designation criteria), 2024/1505 (Oversight fees)
- **Guideline:** JC/GL/2024/36 (ESA cooperation)

::: danger Highest Priority for BAUER GROUP
P4 is the pillar with the **greatest direct impact** on BAUER GROUP as an ICT service provider. Financial entities **may** under Art. 28(5) only enter into contracts with ICT service providers that maintain **adequate information security standards**. Lack of DORA compliance = **loss of contract**.
:::

## Two Levels of P4

### Level 1: General Principles (Art. 28–30)

Apply to **all** ICT third-party service provider relationships.

### Level 2: EU Oversight Framework (Art. 31–44)

Applies only to **CTPPs** (Critical Third-Party Providers) – the 19 critical ICT third-party service providers designated by the ESAs (including AWS, Google Cloud, Microsoft Azure).

## Information Register (Art. 28(3))

Every financial entity must maintain a **complete register** of all ICT third-party service provider contracts and update it regularly.

### Mandatory Content (ITS 2024/2956)

| Field | Description |
|---|---|
| **Entity identifier** | LEI or EUID of the provider |
| **Service description** | Type of ICT services, functional mapping |
| **Criticality** | Classification as critical/important or not |
| **Contract duration** | Start, end, notice periods |
| **Data locations** | Countries of data processing and storage |
| **Subcontracting** | Sub-outsourcing, chain of subcontractors |
| **Exit strategy** | Defined exit plan |
| **Audit rights** | Agreed inspection rights |

### Submission to BaFin

- **First-time submission:** 30.04.2025 (completed)
- **Regular updates:** At least annually + upon material changes
- **Format:** Standardised templates per ITS 2024/2956

## 8 Minimum Contractual Requirements (Art. 30)

Contracts with ICT third-party service providers must contain at a minimum:

| No. | Contractual Content | Details |
|---|---|---|
| 1 | **Service description** | Clear functional and technical description |
| 2 | **Locations** | Processing and storage, including subcontracting |
| 3 | **Availability & quality** | SLA with measurable KPIs |
| 4 | **Data access & return** | Access, return, and deletion upon contract termination |
| 5 | **Incident support** | Cooperation obligation, reporting deadlines |
| 6 | **Audit rights** | Unrestricted access, inspection, and audit rights |
| 7 | **Termination rights** | Extraordinary termination for compliance violations |
| 8 | **Exit strategy** | Transition periods, data migration, handover plan |

### Additional Requirements for Critical/Important Functions

- Disclose complete subcontracting chain
- Obtain prior approval for location changes
- Business impact analysis of outage
- Emergency and continuity planning

## RTS 2025/532 – Subcontracting

Since entry into force on 22.07.2025, stricter requirements apply to sub-outsourcing:

- **Due diligence** before engaging subcontractors
- **Risk assessment** of the entire subcontracting chain
- **Contractual pass-through rights** to subcontractors
- **Approval and change processes** defined
- **Termination procedures** with transition arrangements

## CTPPs – EU Oversight Framework (Art. 31–44)

### Designation Criteria (EU 2024/1502)

The ESAs designate ICT third-party service providers as critical based on:

- Systemic importance for the financial sector
- Substitutability of services
- Number and significance of served financial entities
- Degree of dependency

### Designated CTPPs (as of November 2025)

19 technology companies have been designated as CTPPs, including global cloud platforms (AWS, Google Cloud, Microsoft Azure).

### CTPP Obligations

- Direct supervision by **Lead Overseer** (one of the ESAs)
- **Joint Examination Teams** (JETs) for on-site inspections
- Regular **reporting obligations** to the Lead Overseer
- **Oversight fees** per EU 2024/1505

## BAUER GROUP as ICT Service Provider – Action Items

### Contract Adjustment (Priority 1)

Existing and new contracts with financial entities must cover **all 8 minimum contractual requirements**:

```markdown
## DORA-Compliant Contract Clauses (Checklist)

- [ ] Complete service description with functional mapping
- [ ] Processing locations (incl. backup, DR sites)
- [ ] SLA with measurable KPIs (availability, response time, MTTR)
- [ ] Data access and return upon contract termination (format, deadline, deletion)
- [ ] Incident cooperation clause (internal reporting deadline < 1h)
- [ ] Unrestricted audit rights (on-site + remote, including by supervisory authority)
- [ ] Extraordinary termination right for compliance violations
- [ ] Exit strategy with transition plan (min. 6 months)
- [ ] Subcontracting clause (approval requirement, transparency)
- [ ] Location changes only with prior approval
```

### Information Provision (Priority 2)

BAUER GROUP must provide clients with all information they need for their information register:

- LEI/EUID of BAUER GROUP
- Complete service classification
- Data processing locations
- Subcontracting chain (if applicable)
- Certification evidence (ISO 27001, SOC 2, etc.)

### DORA Readiness Evidence (Priority 3)

Proactive demonstration of DORA compliance to clients:

- **Standardised fact sheet** with all register-relevant information
- **DORA compliance statement** (updated annually)
- **Audit report** or certification
- **Incident response SLA** per DORA deadlines
