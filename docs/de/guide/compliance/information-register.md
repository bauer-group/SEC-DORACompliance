# Informationsregister

## Anforderung (Art. 28 Abs. 3)

Finanzunternehmen müssen ein vollständiges Register aller vertraglichen Vereinbarungen mit IKT-Drittanbietern führen und regelmäßig aktualisieren.

## Template-Struktur (ITS 2024/2956)

Das Informationsregister umfasst folgende Daten-Tabellen:

| Tabelle | Inhalt | BAUER GROUP-Rolle |
|---|---|---|
| **B_01** | Allgemeine Informationen zum Finanzunternehmen | Nicht BAUER GROUP |
| **B_02** | Vertragliche Vereinbarungen | BAUER GROUP liefert Input |
| **B_03** | IKT-Drittanbieter-Identifikation | BAUER GROUP: LEI, Kontaktdaten |
| **B_04** | IKT-Dienstleistungsinformationen | BAUER GROUP: Dienstleistungsbeschreibung |
| **B_05** | IKT-Dienstleistungen, die kritische/wichtige Funktionen unterstützen | BAUER GROUP: Klassifizierung |
| **B_06** | Subcontracting-Informationen | BAUER GROUP: Untervergabe-Kette |
| **B_07** | Standorte der Datenverarbeitung | BAUER GROUP: Standortliste |

## BAUER GROUP-Deliverable: Standardisiertes Datenpaket

Für jeden Kunden im Finanzsektor stellt BAUER GROUP ein standardisiertes Datenpaket bereit:

```json
{
  "provider": {
    "name": "BAUER GROUP",
    "lei": "[LEI einfügen]",
    "registration_country": "DE",
    "address": "[Adresse]",
    "contact_dora": {
      "name": "[Name]",
      "email": "[E-Mail]",
      "phone": "[Telefon]"
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

## Automatisierung: CRM → Register-Export

Der Register-Export kann via CRM Custom Objects automatisiert werden:

1. **Custom Object `DORA_Service`** im CRM mit den oben genannten Feldern
2. **Automatischer Export** via CRM-API → JSON/CSV
3. **Kunden-Portal** oder automatisierter E-Mail-Versand bei Aktualisierungen
4. **Jährlicher Review-Workflow** als CRM-Automatisierung

→ Siehe [Register-Automatisierung](../automation/register-automation) für die technische Umsetzung.
