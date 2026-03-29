# Incident Pipeline

## Automated Incident Processing

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
│ Classifier   │ Check 6 DORA criteria
│ (Rule Engine)│ → MINOR / SIGNIFICANT / MAJOR
└──────┬───────┘
       │
       ├── MINOR ──────► Log & Monitor
       │
       ├── SIGNIFICANT ► Log + Notify Team Lead
       │
       └── MAJOR ──────► Escalation chain:
                         1. Alerting-System (On-Call)
                         2. Email management
                         3. Client notification (template)
                         4. Incident ticket (Ticketsystem)
                         5. Pre-fill BaFin XML template
```

## Workflow-Automation

```json
{
  "nodes": [
    { "name": "Webhook", "type": "workflow-automation.webhook", "parameters": { "path": "dora-incident" } },
    { "name": "Classify", "type": "workflow-automation.function",
      "parameters": { "functionCode": "// 6-criteria decision tree\n// return MINOR|SIGNIFICANT|MAJOR" } },
    { "name": "Route", "type": "workflow-automation.switch",
      "parameters": { "rules": [
        { "value": "MAJOR", "output": 0 },
        { "value": "SIGNIFICANT", "output": 1 },
        { "value": "MINOR", "output": 2 }
      ]}},
    { "name": "Alerting-System", "type": "workflow-automation.pagerDuty" },
    { "name": "Email Management", "type": "workflow-automation.emailSend" },
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
    <LEI>[BAUER GROUP-Client-LEI]</LEI>
    <Name>[Client name]</Name>
  </ReportingEntity>
  <IncidentDetails>
    <DetectionTimestamp>[ISO-8601]</DetectionTimestamp>
    <ClassificationTimestamp>[ISO-8601]</ClassificationTimestamp>
    <Description>[Auto-generated from SIEM alert]</Description>
    <AffectedServices>[From asset inventory]</AffectedServices>
    <Classification>
      <ClientsAffected>[Count]</ClientsAffected>
      <DowntimeHours>[Hours]</DowntimeHours>
      <GeographicSpread>[Countries]</GeographicSpread>
      <DataLoss>[true/false]</DataLoss>
      <CriticalService>[true/false]</CriticalService>
      <EconomicImpact>[EUR]</EconomicImpact>
    </Classification>
  </IncidentDetails>
  <ImmediateActions>[Description]</ImmediateActions>
  <ContactPerson>
    <Name>[Media spokesperson]</Name>
    <Phone>[Phone]</Phone>
    <Email>[Email]</Email>
  </ContactPerson>
</IncidentReport>
```
