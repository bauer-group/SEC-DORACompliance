# IKT-Dienstleister-Perspektive

## BAUER GROUP als IKT-Drittanbieter unter DORA

BAUER GROUP fällt als IT-Dienstleister mit Kunden im Finanzsektor unter **Art. 2 Abs. 1 Buchstabe u) DORA** – IKT-Drittanbieter. Die Pflichten ergeben sich nicht direkt aus DORA, sondern **indirekt über die Vertragsanforderungen** der Finanzunternehmen (Art. 28–30).

## Pflichten-Matrix

### Direkte Pflichten (falls CTPP-Einstufung)

| Pflicht | Artikel | BAUER GROUP betroffen? |
|---|---|---|
| Direkte Aufsicht durch Lead Overseer | Art. 33 | ❌ Nein (keine CTPP-Einstufung) |
| Überwachungsgebühren | Art. 43 | ❌ Nein |
| JET-Inspektionen | Art. 40 | ❌ Nein |

### Indirekte Pflichten (über Kundenverträge)

| Pflicht | Quelle | BAUER GROUP betroffen? |
|---|---|---|
| DORA-konforme Vertragsgestaltung | Art. 30 | ✅ Ja |
| Informationsbereitstellung für Register | Art. 28(3) | ✅ Ja |
| Audit-Rechte gewähren | Art. 30(3)(e) | ✅ Ja |
| Incident-Kooperation & Meldung | Art. 30(3)(e) | ✅ Ja |
| TLPT-Kooperation | Art. 26(4) | ✅ Ja (auf Anfrage) |
| Exit-Strategie bereitstellen | Art. 30(3)(h) | ✅ Ja |
| Subcontracting-Transparenz | RTS 2025/532 | ✅ Ja |
| Standort-Transparenz | Art. 30(2)(b) | ✅ Ja |
| SLA mit messbaren KPIs | Art. 30(2)(a) | ✅ Ja |

## Compliance-Nachweis BAUER GROUP

### Umgesetzte Maßnahmen

- [x] DORA-Awareness im Management
- [x] Bestandsaufnahme Kunden im Finanzsektor
- [x] Identifikation betroffener Verträge
- [x] Vertragsklauseln-Template DORA-konform erstellt
- [x] Standardvertrag mit allen Mindestinhalten (Art. 30)
- [x] DORA Fact Sheet für Kunden (Registerinformationen)
- [x] SLA-Definitionen mit DORA-konformen KPIs
- [x] Exit-Strategie-Template
- [x] Subcontracting-Offenlegung
- [x] Incident-Response-Playbook mit DORA-Fristen
- [x] Asset-Inventar mit DORA-Klassifizierung
- [x] Vulnerability Management Pipeline
- [x] Awareness-Training für alle Mitarbeiter
- [x] BCP/DRP dokumentiert und getestet
- [x] Jährlicher Review IKT-Risikomanagementrahmen etabliert
- [ ] Jährliche Basistests (Schwachstellenscan, Pentest)
- [ ] Jährliche Aktualisierung Informationsregister-Daten
- [ ] Jährliche Awareness-Schulung
- [ ] Compliance-Report für Kunden

## DORA Fact Sheet (Template für Kunden)

Standardisiertes Informationsblatt, das BAUER GROUP seinen Finanzkunden bereitstellt:

```markdown
# DORA IKT-Drittanbieter – Informationsblatt

## Anbieteridentifikation
- **Firma:** BAUER GROUP
- **LEI:** [LEI einfügen]
- **Registernummer:** [HRx einfügen]
- **Anschrift:** [Adresse]
- **Ansprechpartner DORA:** [Name, E-Mail, Tel.]

## Dienstleistungen
- [Liste der für den Kunden erbrachten IKT-Dienste]
- Klassifizierung: [kritisch/wichtig/sonstig]

## Datenverarbeitungsstandorte
- **Primär:** Deutschland (Standort XY)
- **Backup/DR:** Deutschland (Standort YZ)
- **Cloud-Infrastruktur:** [Provider, Region]

## Subcontracting
- **Unterauftragnehmer:** [Liste oder "keine"]
- **Genehmigungsvorbehalt:** Ja, gemäß Vertrag

## Sicherheitsstandards
- **Zertifizierungen:** [ISO 27001, SOC 2, etc.]
- **Letzte Prüfung:** [Datum]
- **Nächste Prüfung:** [Datum]

## Incident Response
- **Interne Meldefrist an Kunden:** < 1 Stunde
- **24/7 Erreichbarkeit:** [Ja/Nein, Kontakt]
- **Kooperationszusage TLPT:** Ja

## Exit-Strategie
- **Übergangsfrist:** Mindestens 6 Monate
- **Datenformat Export:** [Formate]
- **Löschbestätigung:** Ja, schriftlich

## Letztes Update: [Datum]
```

## Vertragliche Muster-Klauseln

### Incident-Kooperation

> Der Auftragnehmer verpflichtet sich, den Auftraggeber unverzüglich, spätestens jedoch innerhalb von **60 Minuten** nach Feststellung eines IKT-bezogenen Vorfalls, der die vom Auftraggeber genutzten Dienste betrifft oder betreffen könnte, zu informieren. Der Auftragnehmer unterstützt den Auftraggeber bei der Klassifizierung, Dokumentation und Meldung des Vorfalls gemäß den Anforderungen der Verordnung (EU) 2022/2554 (DORA).

### Audit-Rechte

> Der Auftraggeber, dessen zuständige Aufsichtsbehörde sowie von diesen beauftragte Dritte haben das Recht, Vor-Ort-Inspektionen und Audits beim Auftragnehmer durchzuführen. Dies umfasst den uneingeschränkten Zugang zu Räumlichkeiten, Informationen, Systemen und Personal des Auftragnehmers, soweit dies für die Überprüfung der Einhaltung der vertraglichen und regulatorischen Anforderungen erforderlich ist. Der Auftragnehmer unterstützt diese Prüfungen aktiv und ohne unangemessene Verzögerung.

### Exit-Klausel

> Bei Beendigung des Vertrages gewährt der Auftragnehmer eine Übergangsfrist von mindestens **6 Monaten**, während der alle Dienste zu unveränderten Konditionen fortgeführt werden. Der Auftragnehmer stellt dem Auftraggeber sämtliche Daten in einem marktüblichen, maschinenlesbaren Format zur Verfügung und bestätigt die vollständige Löschung nach erfolgter Datenübernahme schriftlich.
