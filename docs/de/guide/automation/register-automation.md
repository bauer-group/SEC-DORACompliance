# Register-Automatisierung

## Ziel

Automatisierte Verwaltung und Export der Informationsregister-Daten (ITS 2024/2956) für alle Finanzsektor-Kunden.

## Architektur

```
CRM                    BAUER GROUP Internal
┌──────────────┐              ┌──────────────┐
│ Deals        │              │ CMDB       │
│ (Kunden)     │──────────────│ (Assets)     │
├──────────────┤              ├──────────────┤
│ Custom Obj:  │              │ Service      │
│ DORA_Service │              │ Catalog      │
│ - LEI        │              │ Locations    │
│ - Services   │              │ Subcontract. │
│ - Locations  │              └──────┬───────┘
│ - SLAs       │                     │
└──────┬───────┘                     │
       │                             │
       ▼                             ▼
┌──────────────────────────────────────┐
│         Export Pipeline              │
│  (Node.js/Python Scheduled Job)     │
│                                     │
│  1. Fetch Customer Data (CRM)   │
│  2. Enrich with Asset Data (CMDB) │
│  3. Generate JSON/CSV per Customer  │
│  4. Validate against ITS schema     │
│  5. Send to Customer (Email/Portal) │
└──────────────────────────────────────┘
```

## CRM Custom Object Schema

```json
{
  "name": "dora_service",
  "labels": { "singular": "DORA Service", "plural": "DORA Services" },
  "properties": [
    { "name": "service_id", "label": "Service-ID", "type": "string" },
    { "name": "service_description", "label": "Dienstleistungsbeschreibung", "type": "string" },
    { "name": "criticality", "label": "Kritikalität", "type": "enumeration",
      "options": ["critical", "important", "standard"] },
    { "name": "data_processing_locations", "label": "Datenverarbeitungsstandorte", "type": "string" },
    { "name": "data_storage_locations", "label": "Datenspeicherungsstandorte", "type": "string" },
    { "name": "sla_availability", "label": "SLA Verfügbarkeit (%)", "type": "number" },
    { "name": "sla_response_time", "label": "SLA Response Time", "type": "string" },
    { "name": "subcontractors", "label": "Unterauftragnehmer", "type": "string" },
    { "name": "contract_start", "label": "Vertragsbeginn", "type": "date" },
    { "name": "contract_end", "label": "Vertragsende", "type": "date" },
    { "name": "exit_transition_months", "label": "Exit-Übergangsfrist (Monate)", "type": "number" },
    { "name": "last_audit_date", "label": "Letztes Audit", "type": "date" },
    { "name": "dora_compliant", "label": "DORA-konform", "type": "boolean" }
  ]
}
```

## Export-Script

```python
# Pseudocode – konzeptionelle Darstellung
#!/usr/bin/env python3
"""DORA Register Export – Generiert kundenspezifische Datenpakete."""

import json
from datetime import date
# CRM-Client initialisieren

def export_dora_register(customer_id: str) -> dict:
    """Exportiert DORA-Registerdaten für einen Kunden."""
    client = CRM(access_token=HUBSPOT_TOKEN)
    
    # Fetch associated DORA services
    services = client.crm.objects.search(
        object_type="dora_service",
        filter_groups=[{
            "filters": [{"propertyName": "customer_id", "operator": "EQ", "value": customer_id}]
        }]
    )
    
    return {
        "provider": BGI_PROVIDER_INFO,
        "services": [format_service(s) for s in services.results],
        "certifications": BGI_CERTIFICATIONS,
        "export_date": date.today().isoformat(),
        "schema_version": "ITS_2024_2956_v1"
    }

# Cron: Monatlich oder bei Änderung
# Notification: Email an Kundenansprechpartner
```

## Jährlicher Review-Workflow

1. **T-30d:** Automatische Erinnerung an alle Finanzsektor-Kunden
2. **T-14d:** Export aktueller Registerdaten, Diff zum Vorjahr
3. **T-7d:** Interner Review, GF-Freigabe
4. **T-0:** Versand aktualisiertes Fact Sheet an alle Kunden
