# Incident-Response-Playbook

## DORA-konformer Incident-Response-Prozess

### Phasen

```
┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐
│1. Detect │──►│2. Classify│──►│3. Contain│──►│4. Report │──►│5. Recover│
│          │   │& Escalate│   │& Mitigate│   │& Notify  │   │& Review  │
└──────────┘   └──────────┘   └──────────┘   └──────────┘   └──────────┘
  T+0            T+30min        T+1h           T+1h (Kd)      Ongoing
                                               T+4h (BaFin)
```

### Phase 1: Detection (T+0)

**Automatisiert via SIEM/Monitoring:**

- SIEM-Alerts → Incident-Queue
- Anomalie-Erkennung (ML-basiert oder regelbasiert)
- Externe Meldungen (Kunden, Partner, Behörden)

**Verantwortlich:** On-Call Engineer / SOC

### Phase 2: Classify & Escalate (T+30min)

**DORA-Klassifikation (6 Kriterien):**

| Kriterium | Prüffrage | Schwellwert |
|---|---|---|
| Kunden betroffen? | Wie viele Kunden/Endnutzer sind betroffen? | > 10% oder > 100.000 |
| Ausfallzeit? | Ist ein kritischer Dienst ausgefallen? Wie lange? | > 2h |
| Geografisch? | Sind Kunden in ≥ 2 EU-Staaten betroffen? | ≥ 2 Staaten |
| Datenverlust? | Ist CIA der Daten betroffen? | Ja/Nein |
| Kritischer Dienst? | Ist eine kritische/wichtige Funktion betroffen? | Ja/Nein |
| Wirtschaftlicher Schaden? | Geschätzter direkter/indirekter Schaden? | > 100.000 EUR |

**Ergebnis:** ≥ 2 Kriterien = **MAJOR** → Meldepflicht

**Eskalationsmatrix:**

| Klassifizierung | Eskalation an | Aktion |
|---|---|---|
| MINOR | Team Lead | Logging, Monitoring |
| SIGNIFICANT | IT-Leitung | Monitoring, optional Kundeninfo |
| **MAJOR** | **Geschäftsleitung + alle betroffenen Kunden** | **Meldekette aktivieren** |

### Phase 3: Contain & Mitigate (T+1h)

- Sofortmaßnahmen zur Schadensbegrenzung
- Isolierung betroffener Systeme
- Aktivierung von Workarounds/Redundanzen
- Forensische Sicherung (Beweismittel)

### Phase 4: Report & Notify

**An Kunden (T+1h nach Klassifizierung als MAJOR):**

```
Betreff: [DORA-Meldung] IKT-Vorfall – [Kurzbeschreibung]

Sehr geehrte [Ansprechpartner],

hiermit informieren wir Sie gemäß unserer vertraglichen DORA-Kooperationspflicht
über einen IKT-bezogenen Vorfall:

Zeitpunkt der Erkennung: [Datum/Uhrzeit]
Betroffene Dienste: [Liste]
Aktuelle Einschätzung: [MAJOR/SIGNIFICANT]
Betroffene Kriterien: [Auflistung der 6 Kriterien mit Status]
Sofortmaßnahmen: [Beschreibung]
Nächste Schritte: [Timeline]
Ansprechpartner: [Name, Telefon, E-Mail]

Ein detaillierter Zwischenbericht folgt innerhalb von 24 Stunden.
```

**Kunde an BaFin (T+4h):**

- Kunde nutzt BaFin-Portal mit XML-Template (ITS 2025/302)
- BAUER GROUP liefert alle technischen Details

### Phase 5: Recover & Review

- Wiederherstellung der betroffenen Dienste
- Zwischenbericht an Kunden (T+24h)
- Root Cause Analysis (T+2w)
- Abschlussbericht an Kunden (T+2–4w)
- Lessons Learned in IKT-Risikomanagement-Framework einarbeiten
- Anpassung der Detection-Rules falls nötig

## Runbook-Template

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
          target: "geschaeftsleitung"
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
