# DORA Compliance Documentation

> **BAUER GROUP** – Digital Operational Resilience Act (EU 2022/2554)
>
> 📄 Live: [dora.docs.bauer-group.com](https://dora.docs.bauer-group.com)

Compliance documentation for the **Digital Operational Resilience Act (DORA)**, covering ICT risk management, incident reporting, resilience testing, third-party risk management, and information sharing for ICT service providers.

## Regulatory Context

DORA (Regulation (EU) 2022/2554) has been **applicable since 17 January 2025**. It establishes a unified framework for digital operational resilience across the EU financial sector, directly affecting financial entities and their ICT third-party service providers.

## Documentation Structure

| Section | Content | Articles |
|---------|---------|----------|
| **Introduction** | Scope, proportionality, FinmadiG, timeline | Art. 1–4 |
| **Pillar 1** | ICT Risk Management | Art. 5–16 |
| **Pillar 2** | Incident Reporting | Art. 17–23 |
| **Pillar 3** | Resilience Testing | Art. 24–27 |
| **Pillar 4** | Third-Party Risk | Art. 28–44 |
| **Pillar 5** | Information Sharing | Art. 45 |
| **Compliance** | Gap analysis, roadmap, contract management | – |
| **Automation** | Compliance-as-Code, monitoring, pipelines | – |
| **Reference** | Article index, glossary, BAIT mapping, templates | – |

## Languages

- 🇩🇪 German (complete)
- 🇬🇧 English (complete)

## Tech Stack

| Tool | Purpose |
|------|---------|
| [VitePress](https://vitepress.dev) | Static site generator |
| [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2) | Markdown linting |
| [linkinator](https://github.com/JustinBeckwith/linkinator) | Link checking |
| [vitepress-plugin-rss](https://github.com/ATQQ/vitepress-plugin-rss) | RSS feed generation |
| [GitHub Actions](https://github.com/features/actions) | CI/CD pipeline |
| [GitHub Pages](https://pages.github.com) | Hosting |

## Quickstart

```bash
# Install dependencies
npm install

# Start development server
npm run docs:dev

# Lint markdown
npm run lint

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run docs:dev` | Start local dev server |
| `npm run docs:build` | Build production site |
| `npm run docs:preview` | Preview built site |
| `npm run lint` | Lint markdown files |
| `npm run lint:fix` | Auto-fix lint issues |
| `npm run validate` | Lint + build + link check |
| `npm run docs:clean` | Clean build artifacts |

## Deployment

Automatic deployment to GitHub Pages on push to `main` via the [deploy-pages workflow](.github/workflows/deploy-pages.yml). Semantic releases are created automatically via the [release workflow](.github/workflows/release.yml).

## License

- **Code** (source, config, workflows): [MIT License](LICENSE)
- **Documentation** (content in `docs/`): [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)

© 2026 BAUER GROUP
