# The 5 DORA Pillars

## Architecture of the Regulation

DORA follows the Lamfalussy process:

- **Level 1** – Base legal act: Regulation (EU) 2022/2554 (64 articles, 9 chapters)
- **Level 2** – Specification: RTS (Regulatory Technical Standards), ITS (Implementing Technical Standards), Delegated Acts
- **Level 3** – Guidelines: Joint Guidelines of the ESAs (not legally binding, but comply-or-explain)

## Pillar Mapping

```
┌─────────────────────────────────────────────────────┐
│                    DORA (EU) 2022/2554               │
├──────────┬──────────┬──────────┬──────────┬─────────┤
│  P1      │  P2      │  P3      │  P4      │  P5     │
│  ICT-RM  │ Incident │ Testing  │ 3rd Party│ Info    │
│          │ Report.  │          │ Risk     │ Sharing │
│ Art.5-16 │ Art.17-23│ Art.24-27│ Art.28-44│ Art.45  │
├──────────┼──────────┼──────────┼──────────┼─────────┤
│ RTS      │ RTS      │ RTS      │ RTS      │  (no    │
│ 2024/1774│ 2024/1772│ 2025/1190│ 2024/1773│  RTS)   │
│          │ 2025/301 │          │ 2025/532 │         │
│          │ ITS      │          │ ITS      │         │
│          │ 2025/302 │          │ 2024/2956│         │
└──────────┴──────────┴──────────┴──────────┴─────────┘
```

## Prioritisation for ICT Service Providers

BAUER GROUP implemented the pillars in the following priority order:

| Prio | Pillar | Rationale |
|---|---|---|
| 🔴 1 | **P4 – Third-Party Risk** | Clients demand DORA-compliant contracts; register deadline was 30.04.2025 |
| 🟠 2 | **P2 – Incident Reporting** | Immediate impact on incidents, 4h reporting deadline, liability risk |
| 🟡 3 | **P1 – ICT Risk Management** | Foundation for everything; largely covered by existing ISO 27001 / BAIT |
| 🟢 4 | **P3 – Resilience Testing** | Baseline tests mandatory, TLPT only for systemically important entities |
| 🔵 5 | **P5 – Information Sharing** | Voluntary, but strategically beneficial |

## Interdependencies

The pillars do not stand in isolation:

- P1 (Risk Management) is the **foundation** for all other pillars
- P2 (Incident Reporting) requires the classification criteria from P1
- P3 (Testing) validates the measures from P1
- P4 (Third Parties) requires integration into the risk framework of P1
- P5 (Sharing) feeds insights back into P1
