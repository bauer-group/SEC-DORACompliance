# P3: Resilience Testing

## Legal Basis

- **DORA:** Articles 24–27 (Chapter IV)
- **RTS:** 2025/1190 (TLPT – entry into force 08.07.2025)
- **Framework:** TIBER-EU (Threat Intelligence-based Ethical Red Teaming)

## Two Test Categories

### Baseline Tests (Art. 25) – Mandatory for All

All financial entities must establish a test programme as an integral part of the ICT risk management framework:

| Test Type | Description | Frequency |
|---|---|---|
| **Vulnerability scans** | Automated scans for known vulnerabilities | At least annually |
| **Open-source analyses** | Review of deployed OSS components | At least annually |
| **Network security assessments** | Network architecture and segmentation | At least annually |
| **Gap analyses** | Comparison of target vs. actual security posture | At least annually |
| **Physical security reviews** | Access control, environmental security | Risk-based |
| **Source code reviews** | Static and dynamic code analysis | For critical systems |
| **Scenario-based tests** | Business continuity, disaster recovery | At least annually |
| **Compatibility tests** | Software/hardware interoperability | Upon changes |
| **Performance tests** | Load and stress tests | At least annually |
| **End-to-end tests** | Complete process chain testing | Risk-based |
| **Penetration tests** | Active exploitation of vulnerabilities | At least annually |

### Advanced Tests – TLPT (Art. 26–27)

**Threat Led Penetration Tests** are only required for **systemically important financial entities** with a high ICT maturity level.

| Aspect | Requirement |
|---|---|
| **Who** | Only systemically important financial entities (designated by supervisor) |
| **Frequency** | Every 3 years |
| **Framework** | TIBER-EU methodology |
| **Phases** | 8 phases, 9–14 months execution |
| **Teams** | Red team (external), blue team (internal), white team (coordination) |
| **Budget** | Typically EUR 150,000–500,000 |
| **Providers** | Must meet TLPT certification criteria |
| **Deadline** | First TLPT before 17.01.2028 |

::: info BAUER GROUP Relevance
BAUER GROUP as an ICT service provider is **not directly subject to TLPT obligations**, but must:

- **Participate in** and fully **cooperate with** TLPT tests of clients (Art. 26(4))
- Be able to demonstrate own **baseline tests** (contractual requirement)
- **Make test results available** to the client
:::

## Test Programme – Minimum for ICT Service Providers

### Automatable Baseline Test Programme

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

Each test must be documented with:

- Test date, scope, methodology
- Findings (categorised by criticality)
- Remediation plan with deadlines
- Proof of remediation (retest)
- Management sign-off

→ See [Audit Trail & Evidence](../automation/audit-trail) for automated evidence collection.
