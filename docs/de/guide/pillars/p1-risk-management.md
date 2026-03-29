# P1: IKT-Risikomanagement

## Rechtsgrundlage

- **DORA:** Artikel 5–16 (Kapitel II)
- **RTS:** Delegierte Verordnung (EU) 2024/1774
- **Vereinfachter Rahmen:** Artikel 16 DORA (Kleinstunternehmen)

## Kernanforderungen

### Governance (Art. 5)

Das Leitungsorgan trägt die **persönliche Verantwortung** für:

- Festlegung, Genehmigung, Überwachung und Verantwortung der Umsetzung aller IKT-Risikomanagement-Maßnahmen
- Festlegung der Risikotoleranz für IKT-Risiken
- Genehmigung und regelmäßige Überprüfung der IKT-Geschäftsfortführungspolitik und -pläne
- Genehmigung und Überprüfung der IKT-Auditpläne und -ergebnisse
- Bereitstellung angemessener Haushaltsmittel

::: danger Haftung
DORA führt eine **direkte persönliche Haftung der Geschäftsleiter** ein. Zwangsgelder bis zu **2,5 Mio. EUR**, Bußgelder und Abberufung sind möglich (FinmadiG).
:::

### IKT-Risikomanagementrahmen (Art. 6)

Finanzunternehmen müssen einen umfassenden IKT-Risikomanagementrahmen aufbauen, der mindestens umfasst:

1. **Strategien, Richtlinien, Verfahren** – IKT-Protokolle und -Tools zum Schutz aller Informations- und IKT-Assets
2. **Unabhängige Kontrollfunktion** – Dedizierte Funktion für IKT-Risikomanagement
3. **Jährliche Überprüfung** – Dokumentierter Review-Prozess
4. **Lessons Learned** – Einbau von Erkenntnissen aus Vorfällen und Tests

### Identifizierung (Art. 8)

- Vollständiges **IKT-Asset-Inventar** (Hardware, Software, Netzwerk)
- Identifizierung aller **IKT-unterstützten Geschäftsfunktionen**
- Mapping von **Abhängigkeiten** (intern/extern)
- Klassifizierung nach **Kritikalität**

### Schutz & Prävention (Art. 9)

- Angemessene IKT-Sicherheitsrichtlinien
- Netzwerksicherheit, Verschlüsselung, Zugangskontrolle
- Patch Management
- Change Management
- **Sicherheitsziele:** Verfügbarkeit, Authentizität, Integrität, Vertraulichkeit

### Erkennung (Art. 10)

- Mechanismen zur **zeitnahen Erkennung** anomaler Aktivitäten
- Multiple Verteidigungslinien
- Automatisierte Erkennungssysteme

### Reaktion & Wiederherstellung (Art. 11–12)

- IKT-Geschäftsfortführungspolitik (**BCP**)
- Disaster Recovery Pläne (**DRP**)
- Backup-Richtlinien mit definierten **RPO/RTO**
- Regelmäßige Tests der Wiederherstellungspläne

### Awareness & Schulung (Art. 13)

- **Obligatorische Awareness-Programme** für alle Mitarbeitenden und Geschäftsleitung
- Regelmäßige Schulungen zu IKT-Sicherheit
- Spezifische Programme für IKT-Personal

### Kommunikation (Art. 14)

- Interne und externe **Kommunikationspläne**
- Mindestens eine Person als **Mediensprecher** für IKT-Vorfälle
- Kommunikationsstrategien für verschiedene Zielgruppen

## RTS 2024/1774 – Detailanforderungen

Der RTS konkretisiert den IKT-Risikomanagementrahmen mit:

- **IKT-Sicherheitsrichtlinien** – Mindestinhalte definiert
- **Zugangskontrollrichtlinien** – Least Privilege, MFA, Privileged Access Management
- **Kryptografie-Richtlinien** – Verschlüsselungsstandards
- **IKT-Projektmanagement** – Sicherheit im SDLC
- **IKT-Beschaffung** – Sicherheitsanforderungen bei Procurement
- **Physische Sicherheit** – Zugangskontrollen, Umgebungsüberwachung
- **Kapazitätsmanagement** – Ressourcenplanung und -monitoring

## Umsetzungsstrategie für IKT-Dienstleister

### Minimum Viable Compliance

Für BAUER GROUP als IKT-Dienstleister sind die wichtigsten Deliverables:

| Deliverable | Quelle | Automatisierbar |
|---|---|---|
| IKT-Sicherheitsrichtlinie | Art. 9 + RTS 2024/1774 | Template-basiert ✅ |
| Asset-Inventar | Art. 8 | Vollautomatisch (CMDB) ✅ |
| BCP/DRP | Art. 11–12 | Template + jährlicher Review |
| Awareness-Programm | Art. 13 | LMS-gestützt ✅ |
| Kommunikationsplan | Art. 14 | Template-basiert ✅ |
| Risikobewertung | Art. 6 | Tool-gestützt (Risk-Register) |
| Incident Detection | Art. 10 | SIEM/Monitoring vollautomatisch ✅ |

### Mapping BAIT → DORA

| BAIT-Modul | DORA-Artikel | Delta |
|---|---|---|
| AT 7 Ressourcen | Art. 5, 6 | Governance stärker formalisiert |
| AT 9 Auslagerung | Art. 28–30 | Deutlich erweitert → P4 |
| BT 1 Informationsrisikomanagement | Art. 6–8 | Asset-Inventar detaillierter |
| BT 2 Informationssicherheitsmanagement | Art. 9 | Weitgehend kongruent |
| BT 3 Operative IT-Sicherheit | Art. 9–10 | Detection stärker betont |
| BT 4 Identitäts- und Rechtemanagement | RTS 2024/1774 | MFA, PAM explizit |
| BT 5 IT-Projekte/Anwendungsentwicklung | RTS 2024/1774 | SDLC-Anforderungen |
| BT 6 IT-Betrieb | Art. 9, 11 | Kapazitätsmanagement neu |
| BT 7 IT-Notfallmanagement | Art. 11–12 | RPO/RTO explizit |
