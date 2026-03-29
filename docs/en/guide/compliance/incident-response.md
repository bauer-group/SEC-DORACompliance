# Incident Response Playbook

## DORA-Compliant Incident Response Process

### Phases

```
┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐
│1. Detect │──►│2. Classify│──►│3. Contain│──►│4. Report │──►│5. Recover│
│          │   │& Escalate│   │& Mitigate│   │& Notify  │   │& Review  │
└──────────┘   └──────────┘   └──────────┘   └──────────┘   └──────────┘
  T+0            T+30min        T+1h           T+1h (client)  Ongoing
                                               T+4h (BaFin)
```

### Phase 1: Detection (T+0)

**Automated via SIEM/monitoring:**

- SIEM-Alerts → incident queue
- Anomaly detection (ML-based or rule-based)
- External reports (clients, partners, authorities)

**Responsible:** On-call engineer / SOC

### Phase 2: Classify & Escalate (T+30min)

**DORA classification (6 criteria):**

| Criterion | Verification Question | Threshold |
|---|---|---|
| Clients affected? | How many clients/end users are affected? | > 10% or > 100,000 |
| Downtime? | Has a critical service failed? How long? | > 2h |
| Geographic? | Are clients in ≥ 2 EU states affected? | ≥ 2 states |
| Data loss? | Is CIA of data affected? | Yes/No |
| Critical service? | Is a critical/important function affected? | Yes/No |
| Economic damage? | Estimated direct/indirect damage? | > EUR 100,000 |

**Result:** ≥ 2 criteria = **MAJOR** → reporting obligation

**Escalation matrix:**

| Classification | Escalate to | Action |
|---|---|---|
| MINOR | Team lead | Logging, monitoring |
| SIGNIFICANT | IT management | Monitoring, optional client notification |
| **MAJOR** | **Management + all affected clients** | **Activate reporting chain** |

### Phase 3: Contain & Mitigate (T+1h)

- Immediate measures to limit damage
- Isolation of affected systems
- Activation of workarounds/redundancies
- Forensic preservation (evidence)

### Phase 4: Report & Notify

**To clients (T+1h after MAJOR classification):**

```
Subject: [DORA Notification] ICT Incident – [Brief Description]

Dear [contact person],

we hereby inform you pursuant to our contractual DORA cooperation obligation
about an ICT-related incident:

Time of detection: [date/time]
Affected services: [list]
Current assessment: [MAJOR/SIGNIFICANT]
Criteria affected: [listing of 6 criteria with status]
Immediate measures: [description]
Next steps: [timeline]
Contact person: [name, phone, email]

A detailed interim report will follow within 24 hours.
```

**Client to BaFin (T+4h):**

- Client uses BaFin portal with XML template (ITS 2025/302)
- BAUER GROUP provides all technical details

### Phase 5: Recover & Review

- Restore affected services
- Interim report to clients (T+24h)
- Root cause analysis (T+2w)
- Final report to clients (T+2–4w)
- Incorporate lessons learned into ICT risk management framework
- Adjust detection rules if necessary

## Runbook Template

```yaml
# incident-runbook.yaml
runbook:
  id: "INC-TEMPLATE-001"
  version: "1.0"

  triggers:
    - siem_alert_critical
    - customer_report
    - external_notification

  steps:
    - name: "Triage"
      timeout: "30min"
      actions:
        - "Confirm incident is real (not false positive)"
        - "Identify affected systems and services"
        - "Run DORA classification checklist"
      decision:
        major: "goto escalation"
        significant: "goto monitoring"
        minor: "goto logging"

    - name: "Escalation"
      timeout: "15min"
      notifications:
        - channel: "pagerduty"
          target: "on-call-manager"
        - channel: "email"
          target: "management"
          template: "dora-escalation"

    - name: "Customer Notification"
      timeout: "60min"
      template: "dora-incident-notification"
      recipients: "affected_customers"

    - name: "Containment"
      parallel: true
      actions:
        - "Isolate affected systems"
        - "Activate failover/redundancy"
        - "Preserve forensic evidence"

    - name: "Resolution"
      actions:
        - "Implement fix"
        - "Verify fix"
        - "Restore service"

    - name: "Post-Incident"
      actions:
        - "Interim report to customers (T+24h)"
        - "Root Cause Analysis (T+2w)"
        - "Final report to customers (T+4w)"
        - "Update risk register"
        - "Update detection rules"
        - "Lessons learned session"
```
