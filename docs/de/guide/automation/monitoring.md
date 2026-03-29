# Monitoring & Alerting

## DORA-konformes Monitoring (Art. 10)

Finanzunternehmen und ihre IKT-Dienstleister müssen Mechanismen zur **zeitnahen Erkennung** anomaler Aktivitäten implementieren.

## Monitoring-Stack

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

## DORA-spezifische Alert-Rules

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
          summary: "DORA-kritischer Dienst {{ $labels.instance }} nicht erreichbar"
          description: "Dienst ist seit > 5min ausgefallen. DORA Art. 18: Schwellwert Ausfallzeit > 2h."
          runbook: "https://docs.internal/dora/incident-response"

      - alert: DoraHighErrorRate
        expr: rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m]) > 0.05
        for: 10m
        labels:
          severity: warning
          dora_criterion: "service_quality"
        annotations:
          summary: "Erhöhte Fehlerrate auf {{ $labels.service }}"

  - name: dora_security
    rules:
      - alert: DoraUnauthorizedAccess
        expr: rate(auth_failures_total[5m]) > 10
        for: 2m
        labels:
          severity: critical
          dora_criterion: "data_breach"
        annotations:
          summary: "Möglicher Brute-Force-Angriff auf {{ $labels.service }}"
```

## SIEM Rules

```xml
<!-- dora-custom-rules.xml -->
<group name="dora,">
  <rule id="100100" level="14">
    <if_sid>5710</if_sid>
    <match>DORA_CRITICAL_SYSTEM</match>
    <description>DORA: Sicherheitsvorfall auf kritischem System erkannt</description>
    <group>dora,critical,</group>
  </rule>

  <rule id="100101" level="12">
    <if_group>authentication_failure</if_group>
    <frequency>10</frequency>
    <timeframe>60</timeframe>
    <description>DORA Art. 10: Brute-Force-Versuch erkannt (>10 Fehlversuche/Min)</description>
    <group>dora,brute_force,</group>
  </rule>
</group>
```

## DORA Compliance Dashboard (Dashboard)

Empfohlene Panels:

| Panel | Datenquelle | DORA-Bezug |
|---|---|---|
| Dienst-Verfügbarkeit (SLA %) | Monitoring | Art. 9, 30 |
| Offene Schwachstellen nach Kritikalität | Vulnerability-Scanner-API | Art. 25 |
| Incidents (Klassifizierung) | SIEM | Art. 18 |
| Backup-Status (RPO/RTO) | Custom Exporter | Art. 11 |
| Asset-Inventar-Vollständigkeit | CMDB-API | Art. 8 |
| Awareness-Training-Fortschritt | LMS API | Art. 13 |
| Vertrags-Compliance-Status | CRM-API | Art. 30 |
