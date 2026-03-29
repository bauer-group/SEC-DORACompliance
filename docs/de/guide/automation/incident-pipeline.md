# Incident-Pipeline

## Automatisierte Incident-Verarbeitung

```
SIEM Alert
       │
       ▼
┌──────────────┐
│ Webhook      │ (SIEM → Workflow-Automation)
│ Receiver     │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Classifier   │ 6 DORA-Kriterien prüfen
│ (Rule Engine)│ → MINOR / SIGNIFICANT / MAJOR
└──────┬───────┘
       │
       ├── MINOR ──────► Log & Monitor
       │
       ├── SIGNIFICANT ► Log + Notify Team Lead
       │
       └── MAJOR ──────► Eskalationskette:
                         1. Alerting-System (On-Call)
                         2. E-Mail GF
                         3. Kunden-Notification (Template)
                         4. Incident-Ticket (Ticketsystem)
                         5. Pre-fill BaFin XML Template
```

## Workflow-Automation

```json
{
  "nodes": [
    { "name": "Webhook", "type": "workflow-automation.webhook", "parameters": { "path": "dora-incident" } },
    { "name": "Classify", "type": "workflow-automation.function",
      "parameters": { "functionCode": "// 6-Kriterien Decision Tree\n// return MINOR|SIGNIFICANT|MAJOR" } },
    { "name": "Route", "type": "workflow-automation.switch",
      "parameters": { "rules": [
        { "value": "MAJOR", "output": 0 },
        { "value": "SIGNIFICANT", "output": 1 },
        { "value": "MINOR", "output": 2 }
      ]}},
    { "name": "Alerting-System", "type": "workflow-automation.pagerDuty" },
    { "name": "Email GF", "type": "workflow-automation.emailSend" },
    { "name": "Customer Notify", "type": "workflow-automation.emailSend",
      "parameters": { "template": "dora-incident-notification" } },
    { "name": "Create Ticket", "type": "workflow-automation.jira" },
    { "name": "Generate XML", "type": "workflow-automation.function",
      "parameters": { "functionCode": "// Pre-fill ITS 2025/302 XML template" } }
  ]
}
```

## BaFin XML Template (ITS 2025/302)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<IncidentReport xmlns="urn:dora:its:2025:302">
  <ReportType>INITIAL</ReportType>
  <ReportingEntity>
    <LEI>[BAUER GROUP-Kunde-LEI]</LEI>
    <Name>[Kundenname]</Name>
  </ReportingEntity>
  <IncidentDetails>
    <DetectionTimestamp>[ISO-8601]</DetectionTimestamp>
    <ClassificationTimestamp>[ISO-8601]</ClassificationTimestamp>
    <Description>[Auto-generated from SIEM alert]</Description>
    <AffectedServices>[Aus Asset-Inventar]</AffectedServices>
    <Classification>
      <ClientsAffected>[Anzahl]</ClientsAffected>
      <DowntimeHours>[Stunden]</DowntimeHours>
      <GeographicSpread>[Länder]</GeographicSpread>
      <DataLoss>[true/false]</DataLoss>
      <CriticalService>[true/false]</CriticalService>
      <EconomicImpact>[EUR]</EconomicImpact>
    </Classification>
  </IncidentDetails>
  <ImmediateActions>[Beschreibung]</ImmediateActions>
  <ContactPerson>
    <Name>[Mediensprecher]</Name>
    <Phone>[Telefon]</Phone>
    <Email>[E-Mail]</Email>
  </ContactPerson>
</IncidentReport>
```
