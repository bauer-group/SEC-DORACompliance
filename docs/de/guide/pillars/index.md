# Die 5 DORA-Pillars

## Architektur der Verordnung

DORA ist nach dem Lamfalussy-Verfahren aufgebaut:

- **Level 1** – Basisrechtsakt: Verordnung (EU) 2022/2554 (64 Artikel, 9 Kapitel)
- **Level 2** – Konkretisierung: RTS (Regulatory Technical Standards), ITS (Implementing Technical Standards), Delegierte Rechtsakte
- **Level 3** – Leitlinien: Joint Guidelines der ESAs (nicht rechtsverbindlich, aber Comply-or-Explain)

## Pillar-Mapping

```
┌─────────────────────────────────────────────────────┐
│                    DORA (EU) 2022/2554               │
├──────────┬──────────┬──────────┬──────────┬─────────┤
│  P1      │  P2      │  P3      │  P4      │  P5     │
│  IKT-RM  │ Incident │ Testing  │ 3rd Party│ Info-   │
│          │ Meldung  │          │ Risk     │ austausch│
│ Art.5-16 │ Art.17-23│ Art.24-27│ Art.28-44│ Art.45  │
├──────────┼──────────┼──────────┼──────────┼─────────┤
│ RTS      │ RTS      │ RTS      │ RTS      │  (kein  │
│ 2024/1774│ 2024/1772│ 2025/1190│ 2024/1773│  RTS)   │
│          │ 2025/301 │          │ 2025/532 │         │
│          │ ITS      │          │ ITS      │         │
│          │ 2025/302 │          │ 2024/2956│         │
└──────────┴──────────┴──────────┴──────────┴─────────┘
```

## Priorisierung für IKT-Dienstleister

BAUER GROUP hat die Umsetzung nach folgender Priorität durchgeführt:

| Prio | Pillar | Begründung |
|---|---|---|
| 🔴 1 | **P4 – Drittparteienrisiko** | Kunden fordern DORA-konforme Verträge; Register-Deadline war 30.04.2025 |
| 🟠 2 | **P2 – Incident Reporting** | Sofortiger Impact bei Vorfällen, 4h Meldefrist, Haftungsrisiko |
| 🟡 3 | **P1 – IKT-Risikomanagement** | Fundament für alles; weitgehend durch bestehende ISO 27001 / BAIT abgedeckt |
| 🟢 4 | **P3 – Resilienztests** | Basistests obligatorisch, TLPT nur für systemrelevante FU |
| 🔵 5 | **P5 – Informationsaustausch** | Freiwillig, aber strategisch sinnvoll |

## Querverbindungen

Die Pillars stehen nicht isoliert:

- P1 (Risikomanagement) ist das **Fundament** für alle anderen Pillars
- P2 (Incident Reporting) erfordert die Klassifikationskriterien aus P1
- P3 (Testing) validiert die Maßnahmen aus P1
- P4 (Drittparteien) erfordert Integration in den Risikorahmen von P1
- P5 (Austausch) speist Erkenntnisse zurück in P1
