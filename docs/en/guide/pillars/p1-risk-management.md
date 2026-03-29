# P1: ICT Risk Management

## Legal Basis

- **DORA:** Articles 5–16 (Chapter II)
- **RTS:** Delegated Regulation (EU) 2024/1774
- **Simplified framework:** Article 16 DORA (microenterprises)

## Core Requirements

### Governance (Art. 5)

The management body bears **personal responsibility** for:

- Defining, approving, overseeing, and being accountable for the implementation of all ICT risk management measures
- Setting the risk tolerance for ICT risks
- Approving and periodically reviewing the ICT business continuity policy and plans
- Approving and reviewing ICT audit plans and results
- Allocating adequate budget resources

::: danger Liability
DORA introduces **direct personal liability of management**. Periodic penalty payments of up to **EUR 2.5 million**, fines, and removal from office are possible (FinmadiG).
:::

### ICT Risk Management Framework (Art. 6)

Financial entities must establish a comprehensive ICT risk management framework that includes at a minimum:

1. **Strategies, policies, procedures** – ICT protocols and tools for the protection of all information and ICT assets
2. **Independent control function** – Dedicated function for ICT risk management
3. **Annual review** – Documented review process
4. **Lessons learned** – Integration of findings from incidents and tests

### Identification (Art. 8)

- Complete **ICT asset inventory** (hardware, software, network)
- Identification of all **ICT-supported business functions**
- Mapping of **dependencies** (internal/external)
- Classification by **criticality**

### Protection & Prevention (Art. 9)

- Appropriate ICT security policies
- Network security, encryption, access control
- Patch management
- Change management
- **Security objectives:** Availability, authenticity, integrity, confidentiality

### Detection (Art. 10)

- Mechanisms for **timely detection** of anomalous activities
- Multiple lines of defence
- Automated detection systems

### Response & Recovery (Art. 11–12)

- ICT business continuity policy (**BCP**)
- Disaster recovery plans (**DRP**)
- Backup policies with defined **RPO/RTO**
- Regular testing of recovery plans

### Awareness & Training (Art. 13)

- **Mandatory awareness programmes** for all staff and management
- Regular training on ICT security
- Specific programmes for ICT personnel

### Communication (Art. 14)

- Internal and external **communication plans**
- At least one designated **media spokesperson** for ICT incidents
- Communication strategies for different audiences

## RTS 2024/1774 – Detailed Requirements

The RTS specifies the ICT risk management framework with:

- **ICT security policies** – Minimum content defined
- **Access control policies** – Least privilege, MFA, privileged access management
- **Cryptography policies** – Encryption standards
- **ICT project management** – Security in the SDLC
- **ICT procurement** – Security requirements in procurement
- **Physical security** – Access controls, environmental monitoring
- **Capacity management** – Resource planning and monitoring

## Implementation Strategy for ICT Service Providers

### Minimum Viable Compliance

For BAUER GROUP as an ICT service provider, the key deliverables are:

| Deliverable | Source | Automatable |
|---|---|---|
| ICT security policy | Art. 9 + RTS 2024/1774 | Template-based ✅ |
| Asset inventory | Art. 8 | Fully automated (CMDB) ✅ |
| BCP/DRP | Art. 11–12 | Template + annual review |
| Awareness programme | Art. 13 | LMS-supported ✅ |
| Communication plan | Art. 14 | Template-based ✅ |
| Risk assessment | Art. 6 | Tool-supported (risk register) |
| Incident detection | Art. 10 | SIEM/monitoring fully automated ✅ |

### Mapping BAIT → DORA

| BAIT Module | DORA Article | Delta |
|---|---|---|
| AT 7 Resources | Art. 5, 6 | Governance more formalised |
| AT 9 Outsourcing | Art. 28–30 | Significantly expanded → P4 |
| BT 1 Information risk management | Art. 6–8 | Asset inventory more detailed |
| BT 2 Information security management | Art. 9 | Largely congruent |
| BT 3 Operational IT security | Art. 9–10 | Detection more emphasised |
| BT 4 Identity and access management | RTS 2024/1774 | MFA, PAM explicit |
| BT 5 IT projects/application development | RTS 2024/1774 | SDLC requirements |
| BT 6 IT operations | Art. 9, 11 | Capacity management new |
| BT 7 IT emergency management | Art. 11–12 | RPO/RTO explicit |
