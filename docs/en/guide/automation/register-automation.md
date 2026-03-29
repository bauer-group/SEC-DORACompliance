# Register Automation

## Objective

Automated management and export of information register data (ITS 2024/2956) for all financial sector clients.

## Architecture

```
CRM                    BAUER GROUP Internal
┌──────────────┐              ┌──────────────┐
│ Deals        │              │ CMDB       │
│ (Clients)    │──────────────│ (Assets)     │
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
│  (Node.js/Python scheduled job)     │
│                                     │
│  1. Fetch customer data (CRM)   │
│  2. Enrich with asset data (CMDB) │
│  3. Generate JSON/CSV per customer  │
│  4. Validate against ITS schema     │
│  5. Send to customer (email/portal) │
└──────────────────────────────────────┘
```

## CRM Custom Object Schema

```json
{
  "name": "dora_service",
  "labels": { "singular": "DORA Service", "plural": "DORA Services" },
  "properties": [
    { "name": "service_id", "label": "Service ID", "type": "string" },
    { "name": "service_description", "label": "Service Description", "type": "string" },
    { "name": "criticality", "label": "Criticality", "type": "enumeration",
      "options": ["critical", "important", "standard"] },
    { "name": "data_processing_locations", "label": "Data Processing Locations", "type": "string" },
    { "name": "data_storage_locations", "label": "Data Storage Locations", "type": "string" },
    { "name": "sla_availability", "label": "SLA Availability (%)", "type": "number" },
    { "name": "sla_response_time", "label": "SLA Response Time", "type": "string" },
    { "name": "subcontractors", "label": "Subcontractors", "type": "string" },
    { "name": "contract_start", "label": "Contract Start", "type": "date" },
    { "name": "contract_end", "label": "Contract End", "type": "date" },
    { "name": "exit_transition_months", "label": "Exit Transition Period (Months)", "type": "number" },
    { "name": "last_audit_date", "label": "Last Audit", "type": "date" },
    { "name": "dora_compliant", "label": "DORA Compliant", "type": "boolean" }
  ]
}
```

## Export Script

```python
# Pseudocode – conceptual representation
#!/usr/bin/env python3
"""DORA Register Export – Generates client-specific data packages."""

import json
from datetime import date
# CRM-Client initialisieren

def export_dora_register(customer_id: str) -> dict:
    """Exports DORA register data for a client."""
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

# Cron: monthly or upon change
# Notification: email to client contact person
```

## Annual Review Workflow

1. **T-30d:** Automatic reminder to all financial sector clients
2. **T-14d:** Export current register data, diff against previous year
3. **T-7d:** Internal review, management approval
4. **T-0:** Send updated fact sheet to all clients
