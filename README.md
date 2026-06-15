# GG Trading — Green Gains Trading

**Source code repository** for the GG Trading landing page.

> Live site is deployed automatically to [iamabotama/ggtrading.io](https://github.com/iamabotama/ggtrading.io) via GitHub Actions on every push to `main`.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite 7 |
| Styling | Tailwind CSS 4 + shadcn/ui |
| Routing | Wouter |
| Charts | Recharts |
| Animations | Framer Motion |
| Package manager | pnpm |

---

## Local Development

```bash
# Install dependencies
pnpm install

# Start dev server (http://localhost:3000)
pnpm dev

# Type-check
pnpm check

# Production build
pnpm build
```

---

## CI/CD — Automatic Deployment

Every push to `main` triggers `.github/workflows/deploy.yml` which:

1. Installs dependencies with pnpm
2. Runs `pnpm build` to produce a static Vite output in `dist/public/`
3. Pushes the built output to the `gh-pages` branch of [iamabotama/ggtrading.io](https://github.com/iamabotama/ggtrading.io)

### Required Secret

Add a **Personal Access Token (classic)** with `repo` scope as a secret named `DEPLOY_TOKEN` in this repository:

> **Settings → Secrets and variables → Actions → New repository secret**
> Name: `DEPLOY_TOKEN`
> Value: *(your PAT with repo scope)*

The same token used for this repo (`ghp_rb6Z4...`) works — just add it as the secret.

---

## Pages

| Route | Description |
|---|---|
| `/` | Main landing page (Hero, Features, Performance, Leadership, Community, Pricing) |
| `/streams` | Trading sessions — embedded YouTube videos |

---

## Key Files

| File | Purpose |
|---|---|
| `client/src/pages/Home.tsx` | Main landing page assembly |
| `client/src/pages/Streams.tsx` | Streams/YouTube page |
| `client/src/components/Navbar.tsx` | Top nav + ticker strip |
| `client/src/components/HeroSection.tsx` | Hero with frosted glass panel |
| `client/src/index.css` | Global theme tokens (violet/blue/green palette) |

---

## Brand

- **Company:** GG Trading — Green Gains Trading
- **Owner & CEO:** Brandon Iwata
- **Instruments:** MNQ, MES, NQ, ES, CL, GC (Micro Futures & Options)
- **Strategy:** Fair Value Gaps (FVG), EMA Crossovers, 6:30 AM Opening Range Breakout
