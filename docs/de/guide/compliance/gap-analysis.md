# Gap-Analyse

## BAIT/xAIT → DORA Mapping

Die Gap-Analyse bildet den Ausgangspunkt der DORA-Umsetzung. Für Unternehmen, die bisher nach BAIT/VAIT/ZAIT/KAIT aufgestellt waren, ist der Sprung zu DORA **überschaubar** – die wesentlichen Neuerungen liegen in Formalisierung, Governance und Drittparteienmanagement.

## Gap-Matrix

| Thema | BAIT/xAIT | DORA | Gap | Aufwand |
|---|---|---|---|---|
| **Governance** | Implizit (MaRisk) | Explizit: Leitungsorgan persönlich verantwortlich (Art. 5) | 🟡 Mittel | Governance-Dokument, Board-Training |
| **IKT-Asset-Inventar** | AT 4: Informationsrisikomanagement | Art. 8: Vollständiges Asset-Inventar + Kritikalitätsklassifizierung | 🟡 Mittel | Bestehendes Inventar erweitern |
| **Sicherheitsrichtlinien** | AT 4 / AT 7.2: Informationssicherheit | Art. 9 + RTS 2024/1774: Detaillierter | 🟢 Gering | Bestehendes erweitern |
| **Detection** | AT 4.3.4: Sicherheitsmonitoring | Art. 10: Mehrstufige Erkennung, automatisiert | 🟡 Mittel | SIEM-Ausbau |
| **BCP/DRP** | MaRisk AT 7.3: IT-Notfallmanagement | Art. 11–12: RPO/RTO explizit, regelmäßige Tests | 🟢 Gering | Bestehende Pläne formalisieren |
| **Awareness** | Implizit | Art. 13: Obligatorisch, inkl. Geschäftsleitung | 🟢 Gering | Programm aufsetzen |
| **Kommunikation** | Keine explizite Anforderung | Art. 14: Kommunikationspläne, Mediensprecher | 🟡 Mittel | Neu erstellen |
| **Incident Klassifikation** | Schwer. Zahlungssicherheitsvorfall | Art. 18: 7 Kriterien (RTS 2024/1772), standardisiert | 🟡 Mittel | Neue Systematik |
| **Incident Meldung** | Meldepflicht existiert | Art. 19: 4h/72h/1M, XML-Format, BaFin-Hub | 🟠 Hoch | Neue Fristen, neues Format |
| **Basistests** | AT 4.3.4 / BT 3.6: Anwendungstests | Art. 25: Umfassenderes Testprogramm | 🟡 Mittel | Testprogramm erweitern |
| **TLPT** | Nicht erforderlich | Art. 26–27: Nur systemrelevant | 🟢 Gering | N/A für die meisten |
| **Drittparteienmanagement** | AT 9: Auslagerung | Art. 28–30: Deutlich umfassender | 🟠 Hoch | Informationsregister, Verträge |
| **Subcontracting** | Grundregeln | RTS 2025/532: Due Diligence, Kette offenlegen | 🟠 Hoch | Neuer Prozess |
| **Exit-Strategien** | Grundsätzlich vorhanden | Art. 30: Explizit mit Übergangsfrist | 🟡 Mittel | Formalisieren |
| **Info-Austausch** | Keine Anforderung | Art. 45: Freiwillig | 🟢 Gering | Optional |

## Ergebnis-Zusammenfassung

### Niedrige Gaps (bestehende Compliance ausreichend)

- IKT-Sicherheitsrichtlinien (Erweiterung)
- BCP/DRP (Formalisierung)
- Basistests (Erweiterung)

### Mittlere Gaps (Anpassung erforderlich)

- Governance-Formalisierung
- Asset-Inventar mit Kritikalitätsklassifizierung
- Detection (SIEM-Ausbau)
- Kommunikationspläne
- Incident-Klassifikation

### Hohe Gaps (Neuentwicklung nötig)

- Incident Reporting (neues Format, neue Fristen)
- Drittparteien-Informationsregister
- Vertragsanpassung alle Finanzsektor-Kunden
- Subcontracting-Governance

## Nächste Schritte

→ [Umsetzungs-Roadmap](./roadmap)
