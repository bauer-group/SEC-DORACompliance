# P4: Drittparteienrisiko

## Rechtsgrundlage

- **DORA:** Artikel 28–44 (Kapitel V)
- **RTS:** 2024/1773 (Vertragsrichtlinie), 2025/532 (Subcontracting)
- **ITS:** 2024/2956 (Informationsregister-Templates)
- **Delegierte Rechtsakte:** 2024/1502 (CTPP-Einstufungskriterien), 2024/1505 (Überwachungsgebühren)
- **Leitlinie:** JC/GL/2024/36 (ESA-Zusammenarbeit)

::: danger Höchste Priorität für BAUER GROUP
P4 ist der Pillar mit dem **größten direkten Impact** auf BAUER GROUP als IKT-Dienstleister. Finanzunternehmen **dürfen** nach Art. 28 Abs. 5 nur noch Verträge mit IKT-Dienstleistern abschließen, die **angemessene Informationssicherheitsstandards** einhalten. Fehlende DORA-Konformität = **Vertragsverlust**.
:::

## Zwei Ebenen des P4

### Ebene 1: Allgemeine Prinzipien (Art. 28–30)

Gelten für **alle** IKT-Drittanbieter-Beziehungen.

### Ebene 2: EU-Überwachungsrahmenwerk (Art. 31–44)

Gilt nur für **CTPPs** (Critical Third-Party Providers) – die 19 von den ESAs benannten kritischen IKT-Drittdienstleister (u.a. AWS, Google Cloud, Microsoft Azure).

## Informationsregister (Art. 28 Abs. 3)

Jedes Finanzunternehmen muss ein **vollständiges Register** aller IKT-Drittanbieter-Verträge führen.

### Pflichtinhalte (ITS 2024/2956)

| Feld | Beschreibung |
|---|---|
| **Unternehmenskennung** | LEI oder EUID des Anbieters |
| **Dienstleistungsbeschreibung** | Art der IKT-Dienste, funktionale Zuordnung |
| **Kritikalität** | Klassifizierung als kritisch/wichtig oder nicht |
| **Vertragslaufzeit** | Beginn, Ende, Kündigungsfristen |
| **Datenstandorte** | Länder der Datenverarbeitung und -speicherung |
| **Subcontracting** | Untervergaben, Kette der Unterauftragnehmer |
| **Exit-Strategie** | Definierter Ausstiegsplan |
| **Audit-Rechte** | Vereinbarte Prüfrechte |

### Einreichung bei BaFin

- **Erstmalige Einreichung:** 30.04.2025 (abgeschlossen)
- **Regelmäßige Aktualisierung:** Mindestens jährlich + bei wesentlichen Änderungen
- **Format:** Standardisierte Templates gemäß ITS 2024/2956

## 8 Mindestvertragsinhalte (Art. 30)

Verträge mit IKT-Drittanbietern müssen mindestens enthalten:

| Nr. | Vertragsinhalt | Details |
|---|---|---|
| 1 | **Dienstleistungsbeschreibung** | Klare funktionale und technische Beschreibung |
| 2 | **Standorte** | Verarbeitung und Speicherung, inkl. Subcontracting |
| 3 | **Verfügbarkeit & Qualität** | SLA mit messbaren KPIs |
| 4 | **Datenzugang & -rückgabe** | Zugang, Rückgabe und Löschung bei Vertragsende |
| 5 | **Unterstützung bei Vorfällen** | Kooperationspflicht, Meldefristen |
| 6 | **Audit-Rechte** | Uneingeschränkte Zugangs-, Inspektions- und Auditrechte |
| 7 | **Kündigungsrechte** | Außerordentliche Kündigung bei Compliance-Verstößen |
| 8 | **Exit-Strategie** | Übergangsfristen, Datenmigration, Übergabeplan |

### Zusätzlich bei kritischen/wichtigen Funktionen

- Vollständige Subcontracting-Kette offenlegen
- Standortänderungen vorab genehmigen lassen
- Business Impact Analysis des Ausfalls
- Notfall- und Kontinuitätsplanung

## RTS 2025/532 – Subcontracting

Seit Inkrafttreten am 22.07.2025 gelten verschärfte Anforderungen für die Untervergabe:

- **Due Diligence** vor Beauftragung von Unterauftragnehmern
- **Risikobewertung** der gesamten Subcontracting-Kette
- **Vertragliche Durchgriffsmöglichkeiten** auf Unterauftragnehmer
- **Genehmigungs- und Änderungsprozesse** definiert
- **Beendigungsverfahren** mit Übergangsregelungen

## CTPPs – EU-Überwachungsrahmenwerk (Art. 31–44)

### Einstufungskriterien (EU 2024/1502)

Die ESAs stufen IKT-Drittdienstleister als kritisch ein basierend auf:

- Systemische Bedeutung für den Finanzsektor
- Substituierbarkeit der Dienste
- Anzahl und Bedeutung der betreuten Finanzunternehmen
- Abhängigkeitsgrad

### Benannte CTPPs (Stand November 2025)

19 Technologieunternehmen wurden als CTPP eingestuft, darunter globale Cloud-Plattformen (AWS, Google Cloud, Microsoft Azure).

### Pflichten der CTPPs

- Direkte Aufsicht durch **Lead Overseer** (einer der ESAs)
- **Joint Examination Teams** (JETs) für Vor-Ort-Inspektionen
- Regelmäßige **Berichtspflichten** an den Lead Overseer
- **Überwachungsgebühren** gemäß EU 2024/1505

## BAUER GROUP als IKT-Dienstleister – Handlungsfelder

### Vertragsanpassung (Priorität 1)

Bestehende und neue Verträge mit Finanzunternehmen müssen **alle 8 Mindestvertragsinhalte** abdecken:

```markdown
## DORA-konforme Vertragsklauseln (Checklist)

- [ ] Vollständige Dienstleistungsbeschreibung mit funktionaler Zuordnung
- [ ] Verarbeitungsstandorte (inkl. Backup, DR-Sites)
- [ ] SLA mit messbaren KPIs (Verfügbarkeit, Response Time, MTTR)
- [ ] Datenzugang und -rückgabe bei Vertragsende (Format, Frist, Löschung)
- [ ] Incident-Kooperationsklausel (interne Meldefrist < 1h)
- [ ] Uneingeschränkte Audit-Rechte (vor Ort + remote, auch durch Aufsicht)
- [ ] Außerordentliches Kündigungsrecht bei Compliance-Verstößen
- [ ] Exit-Strategie mit Übergangsplan (min. 6 Monate)
- [ ] Subcontracting-Klausel (Genehmigungsvorbehalt, Transparenz)
- [ ] Standortänderungen nur mit Vorabgenehmigung
```

### Informationsbereitstellung (Priorität 2)

BAUER GROUP muss den Kunden alle Informationen liefern, die diese für ihr Informationsregister benötigen:

- LEI/EUID von BAUER GROUP
- Vollständige Dienstleistungsklassifikation
- Datenverarbeitungsstandorte
- Subcontracting-Kette (falls vorhanden)
- Zertifizierungsnachweise (ISO 27001, SOC 2 etc.)

### DORA-Readiness-Nachweis (Priorität 3)

Proaktive Demonstration der DORA-Konformität gegenüber Kunden:

- **Standardisiertes Fact Sheet** mit allen registerrelevanten Informationen
- **DORA Compliance Statement** (jährlich aktualisiert)
- **Audit-Report** oder Zertifizierung
- **Incident Response SLA** gemäß DORA-Fristen
