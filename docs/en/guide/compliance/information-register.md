# Information Register

## Requirement (Art. 28(3))

Financial entities must maintain a complete register of all contractual arrangements with ICT third-party service providers and update it regularly.

## Template Structure (ITS 2024/2956)

The information register comprises the following data tables:

| Table | Content | BAUER GROUP Role |
|---|---|---|
| **B_01** | General information on the financial entity | Not BAUER GROUP |
| **B_02** | Contractual arrangements | BAUER GROUP provides input |
| **B_03** | ICT third-party service provider identification | BAUER GROUP: LEI, contact details |
| **B_04** | ICT service information | BAUER GROUP: service description |
| **B_05** | ICT services supporting critical/important functions | BAUER GROUP: classification |
| **B_06** | Subcontracting information | BAUER GROUP: sub-outsourcing chain |
| **B_07** | Data processing locations | BAUER GROUP: location list |

## BAUER GROUP Deliverable: Standardised Data Package

For each client in the financial sector, BAUER GROUP provides a standardised data package:

```json
{
  "provider": {
    "name": "BAUER GROUP",
    "lei": "[insert LEI]",
    "registration_country": "DE",
    "address": "[address]",
    "contact_dora": {
      "name": "[name]",
      "email": "[email]",
      "phone": "[phone]"
    }
  },
  "services": [
    {
      "id": "SVC-001",
      "description": "Managed Hosting & Infrastructure",
      "supports_critical_function": true,
      "data_locations": {
        "processing": ["DE"],
        "storage": ["DE"],
        "backup": ["DE"]
      },
      "subcontractors": [],
      "sla": {
        "availability": "99.9%",
        "response_time": "< 15min (critical)",
        "mttr": "< 4h (critical)"
      }
    }
  ],
  "certifications": [
    {
      "type": "ISO 27001",
      "valid_until": "2027-01-01",
      "scope": "IT Operations & Software Development"
    }
  ],
  "audit_rights": true,
  "exit_strategy": {
    "transition_period_months": 6,
    "data_export_formats": ["SQL", "CSV", "JSON", "API"],
    "deletion_confirmation": true
  },
  "last_updated": "2025-01-15"
}
```

## Automation: CRM → Register Export

The register export can be automated via CRM Custom Objects:

1. **Custom object `DORA_Service`** im CRM with the fields listed above
2. **Automated export** via CRM-API → JSON/CSV
3. **Client portal** or automated email dispatch upon updates
4. **Annual review workflow** as CRM-Workflow

→ See [Register Automation](../automation/register-automation) for the technical implementation.
