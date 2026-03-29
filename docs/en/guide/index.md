# DORA – Overview

## What is DORA?

The **Digital Operational Resilience Act** (Regulation (EU) 2022/2554) establishes a uniform EU-wide legal framework for digital operational resilience in the financial sector. As an EU Regulation, DORA is directly applicable in all Member States without the need for national transposition.

| Property | Value |
|---|---|
| **Legal act** | Regulation (EU) 2022/2554 |
| **Type** | EU Regulation (directly applicable) |
| **In force since** | 17.01.2023 |
| **Applicable since** | 17.01.2025 |
| **Responsible ESAs** | EBA, EIOPA, ESMA |
| **DE supervisor** | BaFin (Reporting Hub), Deutsche Bundesbank |
| **DE accompanying law** | FinmadiG (since 27.12.2024) |
| **Lex specialis to** | NIS2 Directive (Art. 1(2) DORA) |
| **Level 2 acts** | 12 RTS/ITS (fully published) |

## The 5 Pillars

DORA is structured around five core areas of requirements:

| Pillar | Topic | DORA Articles | Core Obligation |
|---|---|---|---|
| **P1** | ICT Risk Management | Art. 5–16 | Risk management framework, governance, BCP/DRP |
| **P2** | Incident Management & Reporting | Art. 17–23 | Classification, 4h/72h/1M reporting chain |
| **P3** | Resilience Testing | Art. 24–27 | Baseline tests + TLPT (systemically important) |
| **P4** | Third-Party Risk | Art. 28–44 | Information register, contractual requirements, CTPP oversight |
| **P5** | Information Sharing | Art. 45 | Voluntary exchange of cyber threat intelligence |

## Relevance for ICT Service Providers

BAUER GROUP as an ICT service provider for financial entities is **affected in two ways**:

1. **Indirectly** – Clients in the financial sector demand DORA-compliant contractual arrangements (Art. 28–30), audit rights, exit strategies, and subcontracting transparency
2. **Potentially directly** – If designated as a CTPP (Critical ICT Third-Party Provider) by the ESAs, the EU oversight framework applies (Art. 31–44)

The strategy: **Demonstrate regulatory compliance externally** (contractual clauses, certifications, documentation) with **minimal internal effort** (automation, templates, compliance-as-code).

## Distinction from NIS2, CRA, AI Act

| Aspect | DORA | NIS2 | CRA | AI Act |
|---|---|---|---|---|
| **Sector** | Financial sector | Critical infrastructures broadly | Products with digital elements | AI systems |
| **Type** | Regulation | Directive | Regulation | Regulation |
| **Focus** | Operational resilience | Cybersecurity general | Product safety | AI risk |
| **Relationship** | Lex specialis to NIS2 | General | Complementary | Complementary |

::: tip Practical Note
DORA supersedes NIS2 in the financial sector for ICT risk management and incident reporting (Art. 1(2) DORA in conjunction with Art. 4 NIS2 Directive). For ICT service providers serving both sectors: **DORA compliance covers large parts of NIS2**, not the other way around.
:::

## Quick Start

1. **[Check scope of application](./scope)** – Am I affected? As a financial entity or ICT service provider?
2. **[Clarify proportionality](./proportionality)** – Microenterprise, simplified framework?
3. **[Conduct gap analysis](./compliance/gap-analysis)** – BAIT/VAIT/ZAIT to DORA mapping
4. **[Create roadmap](./compliance/roadmap)** – Prioritisation: P2 → P4 → P1 → P3 → P5
5. **[Plan automation](./automation/)** – Compliance-as-code strategy
