# Monitoring & Alerting

## DORA-Compliant Monitoring (Art. 10)

Financial entities and their ICT service providers must implement mechanisms for **timely detection** of anomalous activities.

## Monitoring Stack

```
┌────────────────────────────────────────────┐
│              Compliance-Dashboard              │
│  (DORA Compliance KPIs + Incident Status)  │
├──────────────┬──────────────┬──────────────┤
│   SIEM      │   Monitoring │   Loki       │
│   SIEM       │   Metrics    │   Logs       │
├──────────────┴──────────────┴──────────────┤
│              Alert Manager                  │
│  → Alerting-System → DORA Escalation    │
└────────────────────────────────────────────┘
```

## DORA-Specific Alert Rules

```yaml
# prometheus-dora-rules.yaml
groups:
  - name: dora_availability
    rules:
      - alert: DoraServiceUnavailable
        expr: up{dora_critical="true"} == 0
        for: 5m
        labels:
          severity: critical
          dora_criterion: "downtime"
        annotations:
          summary: "DORA-critical service {{ $labels.instance }} unreachable"
          description: "Service has been down for > 5min. DORA Art. 18: Downtime threshold > 2h."
          runbook: "https://docs.internal/dora/incident-response"

      - alert: DoraHighErrorRate
        expr: rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m]) > 0.05
        for: 10m
        labels:
          severity: warning
          dora_criterion: "service_quality"
        annotations:
          summary: "Elevated error rate on {{ $labels.service }}"

  - name: dora_security
    rules:
      - alert: DoraUnauthorizedAccess
        expr: rate(auth_failures_total[5m]) > 10
        for: 2m
        labels:
          severity: critical
          dora_criterion: "data_breach"
        annotations:
          summary: "Possible brute-force attack on {{ $labels.service }}"
```

## SIEM Rules

```xml
<!-- dora-custom-rules.xml -->
<group name="dora,">
  <rule id="100100" level="14">
    <if_sid>5710</if_sid>
    <match>DORA_CRITICAL_SYSTEM</match>
    <description>DORA: Security incident detected on critical system</description>
    <group>dora,critical,</group>
  </rule>

  <rule id="100101" level="12">
    <if_group>authentication_failure</if_group>
    <frequency>10</frequency>
    <timeframe>60</timeframe>
    <description>DORA Art. 10: Brute-force attempt detected (>10 failures/min)</description>
    <group>dora,brute_force,</group>
  </rule>
</group>
```

## DORA Compliance Dashboard (Dashboard)

Recommended panels:

| Panel | Data Source | DORA Reference |
|---|---|---|
| Service availability (SLA %) | Monitoring | Art. 9, 30 |
| Open vulnerabilities by criticality | Vulnerability-Scanner-API | Art. 25 |
| Incidents (classification) | SIEM | Art. 18 |
| Backup status (RPO/RTO) | Custom exporter | Art. 11 |
| Asset inventory completeness | CMDB-API | Art. 8 |
| Awareness training progress | LMS API | Art. 13 |
| Contract compliance status | CRM-API | Art. 30 |
