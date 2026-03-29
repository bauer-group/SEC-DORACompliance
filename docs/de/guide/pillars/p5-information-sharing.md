# P5: Informationsaustausch

## Rechtsgrundlage

- **DORA:** Artikel 45 (Kapitel VI)
- **Kein eigener RTS/ITS** – Regelung direkt im Basisrechtsakt

## Anforderungen

### Freiwilliger Austausch (Art. 45)

Finanzunternehmen dürfen untereinander Vereinbarungen zum Austausch von Informationen und Erkenntnissen über Cyberbedrohungen treffen.

**Voraussetzungen:**

- Austausch innerhalb **vertrauenswürdiger Gemeinschaften** von Finanzunternehmen
- Wahrung der **Vertraulichkeit** und des **Datenschutzes**
- Benachrichtigung der zuständigen Behörde über Teilnahme
- Beachtung der **Wettbewerbsvorschriften**

**Inhalte des Austauschs:**

- Indicators of Compromise (IoCs)
- Taktiken, Techniken und Verfahren (TTPs)
- Sicherheitswarnungen
- Konfigurationswerkzeuge und -methoden

### Behördliche Informationsbereitstellung

Die Aufsichtsbehörden stellen den Finanzunternehmen **anonymisierte Informationen** über:

- Relevante Cyberbedrohungen
- Schwachstelleninformationen
- Vorfalltrends

Finanzunternehmen müssen Mechanismen einrichten, um diese Informationen zu:

- **Empfangen** und **verifizieren**
- In die eigene Risikoanalyse **einbeziehen**
- Entsprechende **Maßnahmen** ergreifen

### Sektorübergreifende Simulationsübungen

DORA sieht koordinierte Übungen zur Stärkung der sektorweiten Resilienz vor.

## BAUER GROUP-Relevanz

Als IKT-Dienstleister ist P5 für BAUER GROUP **niedrig priorisiert**, aber strategisch relevant:

- **Teilnahme an ISACs** (Information Sharing and Analysis Centers) empfohlen
- **Threat Intelligence Feeds** in eigenes Monitoring integrieren
- **Kunden proaktiv informieren** über relevante Bedrohungen (Mehrwert-Service)

## Automatisierung

| Maßnahme | Ansatz |
|---|---|
| Threat Intelligence | MISP-Integration, STIX/TAXII Feeds |
| IoC-Sharing | Automatisierter Import in SIEM |
| Kunden-Alerts | Template-basierte Notifications |
