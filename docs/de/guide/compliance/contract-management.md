# Vertragsmanagement

## Vertragliche Anforderungen (Art. 30)

Alle Verträge mit IKT-Drittanbietern müssen die 8 Mindestvertragsinhalte enthalten. Für kritische/wichtige Funktionen gelten zusätzliche Anforderungen.

## Vertragsmodul-System für BAUER GROUP

### Modul A: Basis (alle Finanzsektor-Kunden)

- Dienstleistungsbeschreibung mit funktionaler Zuordnung
- Datenverarbeitungsstandorte
- SLA mit messbaren KPIs
- Datenzugang und -rückgabe
- Incident-Kooperationsklausel
- Audit-Rechte
- Kündigungsrechte
- Exit-Strategie

### Modul B: Erweitert (kritische/wichtige Funktionen)

Zusätzlich zu Modul A:

- Vollständige Subcontracting-Kette offenlegen
- Standortänderungen nur mit Vorabgenehmigung
- Business Impact Analysis
- Notfall- und Kontinuitätsplanung spezifisch
- TLPT-Kooperationsklausel
- Regelmäßige Compliance-Nachweise

## Vertragsprüfungs-Checkliste

```markdown
## DORA Vertragsprüfung – Checkliste

**Vertrag:** ___________________
**Kunde:** ___________________
**Datum:** ___________________
**Prüfer:** ___________________

### Art. 30 Abs. 2 – Mindestinhalte
- [ ] (a) Klare und vollständige Beschreibung aller Funktionen/Dienste
- [ ] (a) Angabe, ob kritische/wichtige Funktion unterstützt wird
- [ ] (b) Standorte Datenverarbeitung und -speicherung
- [ ] (b) Vorabbenachrichtigungspflicht bei Standortänderung
- [ ] (c) Verfügbarkeits-, Authentizitäts-, Integritäts-, Vertraulichkeitsregelungen
- [ ] (d) Datenzugang, -rückgabe und -löschung bei Vertragsende
- [ ] (e) SLAs mit quantitativen und qualitativen KPIs
- [ ] (f) Kooperationspflicht bei IKT-Vorfällen
- [ ] (g) Kündigungsrechte und Mindestkündigungsfristen

### Art. 30 Abs. 3 – Zusätzlich bei kritischen Funktionen
- [ ] (a) Vollständige Dienstleistungsbeschreibung mit SLAs
- [ ] (b) Benachrichtigungspflichten und Meldefristen
- [ ] (c) Geschäftsfortführungs- und Notfallpläne
- [ ] (d) Mitwirkung bei TLPT
- [ ] (e) Uneingeschränkte Audit-Rechte (inkl. Aufsichtsbehörde)
- [ ] (f) Exit-Strategien mit Übergangsfristen
- [ ] (g) Subcontracting-Transparenz und -Genehmigung

### RTS 2025/532 – Subcontracting
- [ ] Due Diligence für Unterauftragnehmer dokumentiert
- [ ] Risikobewertung Subcontracting-Kette
- [ ] Vertragliche Durchgriffsmöglichkeiten
- [ ] Änderungs-/Genehmigungsprozess definiert

### Ergebnis
- [ ] ✅ Vollständig DORA-konform
- [ ] ⚠️ Anpassungsbedarf identifiziert (siehe Anlage)
- [ ] ❌ Wesentliche Lücken (Vertragsnachtrag erforderlich)
```

## Bestandsvertrags-Migration

1. **Inventarisierung:** Alle aktiven Verträge mit Finanzsektor-Kunden aus CRM exportieren
2. **Gap-Check:** Jeden Vertrag gegen Checkliste prüfen
3. **Priorisierung:** Kritische Funktionen zuerst
4. **Anpassung:** Vertragsnachtrag oder Neuvertrag
5. **Tracking:** Status im CRM-Deal-Pipeline als Custom Property
