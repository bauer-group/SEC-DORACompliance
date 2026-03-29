# P2: Vorfallmanagement & Meldewesen

## Rechtsgrundlage

- **DORA:** Artikel 17–23 (Kapitel III)
- **RTS:** 2024/1772 (Klassifikation), 2025/301 (Meldefristen/-inhalte)
- **ITS:** 2025/302 (Meldeformulare/-templates)
- **Leitlinie:** JC/GL/2024/34 (Kosten- und Verlustschätzung)

## Klassifizierung von IKT-Vorfällen (Art. 18)

### 7 Klassifikationskriterien (RTS 2024/1772)

| Nr. | Kriterium | Schwellwert für "schwerwiegend" |
|---|---|---|
| 1 | **Betroffene Kunden/Gegenparteien** | > 10% der Kunden ODER > 100.000 Kunden |
| 2 | **Reputationsauswirkungen** | Medienberichterstattung, Kundenbeschwerden, regulatorische Aufmerksamkeit |
| 3 | **Ausfallzeit** | > 2 Stunden (kritische Dienste) |
| 4 | **Geografische Ausbreitung** | ≥ 2 Mitgliedstaaten betroffen |
| 5 | **Datenverlust** | Vertraulichkeit, Integrität oder Verfügbarkeit betroffen |
| 6 | **Kritikalität der Dienste** | Kritische oder wichtige Funktionen betroffen |
| 7 | **Wirtschaftliche Auswirkungen** | > 100.000 EUR direkter/indirekter Schaden |

Ein Vorfall gilt als **schwerwiegend**, wenn mindestens **2 der 7 Kriterien** die definierten Wesentlichkeitsschwellen überschreiten ODER ein einzelnes Kriterium die hohe Wesentlichkeitsschwelle erreicht. Die genauen Schwellwerte sind in RTS 2024/1772 definiert – die oben genannten Werte sind illustrativ.

## Meldekette (Art. 19, RTS 2025/301)

### 3-Stufen-Meldeprozess

```
Vorfall erkannt
     │
     ▼
Klassifikation als "schwerwiegend"
     │
     ├── T+0h: Interne Eskalation
     │
     ├── T+4h ──► ERSTMELDUNG (Initial Notification)
     │             BaFin-Melde-Hub
     │             Minimal: Wer, Was, Wann, erste Einschätzung
     │
     ├── T+72h ─► ZWISCHENMELDUNG (Intermediate Report)
     │             Status-Update, Impact-Analyse
     │             Falls ungelöst: Aktionsplan mit Timeline
     │
     └── T+1M ──► ABSCHLUSSMELDUNG (Final Report)
                   Root Cause Analysis
                   Lessons Learned
                   Maßnahmen zur Verhinderung
```

::: danger Meldefristen (Art. 19 Abs. 4)

- **4 Stunden** nach Klassifizierung als schwerwiegend → Erstmeldung (spätestens **24 Stunden** nach Erkennung)
- **72 Stunden** nach Erstmeldung → Zwischenmeldung
- **1 Monat** nach Erstmeldung → Abschlussmeldung
- **Fristversäumnis = DORA-Verstoß** → Sanktionen gemäß Art. 50–52 DORA i.V.m. FinmadiG
:::

### Meldeformat (ITS 2025/302)

- **XML-Format** gemäß ITS-Template (standardisiert, maschinenlesbar)
- Authentifizierung über **qualifizierte elektronische Zertifikate** (eIDAS)
- Automatische **Empfangsbestätigung** mit eindeutiger Vorfallnummer
- BaFin fungiert als **zentraler Melde-Hub** in Deutschland

### Freiwillige Meldung von Cyberbedrohungen (Art. 19 Abs. 2)

- Eigenes Meldeformular
- Freiwillig, aber empfohlen
- Weitergabe anonymisierter Informationen durch Behörden möglich

## Umsetzung für IKT-Dienstleister

### Pflichten gegenüber Kunden

Als IKT-Dienstleister ist BAUER GROUP kein direkter Meldepflichtiger, aber:

1. **Vertragliche Meldepflicht** – Kunden müssen binnen 4h melden; BAUER GROUP muss also **schneller** informieren
2. **Unterstützungspflicht** – Bereitstellung aller relevanten Informationen für die Meldung des Kunden
3. **Kooperationspflicht** – Vollständige Mitwirkung bei Root Cause Analysis

### Empfohlene SLA-Struktur

| Phase | BAUER GROUP-intern | An Kunden | Kunde an BaFin |
|---|---|---|---|
| Erkennung | T+0 | – | – |
| Bewertung | T+30min | – | – |
| Erstinfo an Kunden | – | T+1h | – |
| Erstmeldung BaFin | – | – | T+4h |
| Detail-Report an Kunden | – | T+24h | – |
| Zwischenmeldung BaFin | – | – | T+72h |
| RCA an Kunden | – | T+2w | – |
| Abschlussmeldung BaFin | – | – | T+1M |

### Automatisierungspotenzial

| Komponente | Tool/Ansatz | Status |
|---|---|---|
| Erkennung | SIEM (SIEM), Monitoring-Stack | ✅ Automatisierbar |
| Klassifikation | Regelbasiert (7 Kriterien als Decision Tree) | ✅ Automatisierbar |
| Erstmeldung-Template | Pre-filled XML mit statischen Daten | ✅ Vorbereitet |
| Eskalation | Alerting-System/Custom Webhook | ✅ Automatisierbar |
| Kunden-Notification | Template + automatischer Versand | ✅ Automatisierbar |
| RCA-Dokumentation | Runbook-gestützter Prozess | ⚠️ Semi-automatisch |
| BaFin-XML-Submission | API-Integration (wenn verfügbar) | ⚠️ Prüfen |

::: tip Praxistipp
Erstelle ein **Pre-filled Template** mit statischen Informationen (Unternehmensidentifikation, Kontakte, Standardtexte) um im Ernstfall wertvolle Minuten zu sparen. Die 4h-Frist beginnt ab Klassifizierung – nicht ab Erkennung.
:::
