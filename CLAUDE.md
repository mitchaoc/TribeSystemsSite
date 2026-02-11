# Tribe Systems — Project Context

## What This Is

This is a **Next.js 16 / Netlify** project serving two purposes:
1. **Clickable prototype** (`/prototype`) for the Tribe x Veloce consumer banking + fan engagement mobile app
2. **SOW document** (`docs/SOW-Tribe-Veloce-MVP.md`) defining MVP scope for the Veloce partnership

The actual mobile app will be built separately in **React Native + Expo**. This project is for prototyping, stakeholder alignment, and scope definition.

## Business Context

**Tribe Systems** is a fintech startup building a white-label consumer banking app for fan communities. First partner: **Veloce Media Group** (esports/motorsport, includes **Quadrant** — Lando Norris's brand).

The app gives fans a branded Visa debit card and digital wallet, encouraging spending through rewards, exclusive content, event access, and merchandise tied to their fan community.

- **Banking provider:** Railsr/Equals (merged entity — contract with Railsr, APIs from Equals)
- **Target launch:** Money 2026 conference (June 2026)
- **Target scale:** 10k–100k consumers
- **Market:** UK only for MVP, EU expansion post-launch
- **Account tiers:** Everyday (£4.99/mo), Plus (£6.99/mo), Premium (£89.99/yr)

## Key Documents

| Document | Location | Purpose |
|----------|----------|---------|
| SOW (MVP scope) | `docs/SOW-Tribe-Veloce-MVP.md` | ~70 features across onboarding, wallet, payments, rewards, shop, account. Partner-facing for Veloce sign-off |
| Original roadmap | `Veloce_Program_Roadmap_22-Jan-2026.docx` | 5-phase roadmap, Phase 1-3 = MVP |
| VEL feedback | `Railsr Figma - VEL Feedback.docx` | Veloce's response to original Figma designs — drove banking-first pivot |
| Updated roadmap | `TRIBE_Updated_Roadmap_Post_Veloce_Feedback.docx` | Post-feedback roadmap incorporating wallet-first direction |
| Figma screenshots | `designs/` folder | 68 screenshots from original Figma designs (bank1-13, rewards1-8, settings1-3, help1-2, terms1, plus unlabelled onboarding flow) |

## Key Strategic Decisions (from Veloce feedback)

- **Banking-first, wallet-centric** — not content-first. Wallet is the primary/landing tab
- **Brand-agnostic core** — reusable across Veloce, Quadrant, future partners without rebuild
- **Reduced content dependency** for MVP to de-risk delivery
- **"Gear & Gratitude"** section (original rewards area) renamed/restructured per VEL direction
- **PITStop** — AI support chatbot character (racing-themed robot)

## App Navigation Structure (per VEL feedback)

1. **Wallet** (primary/landing) — balance, card, transactions, card controls, freeze, add funds
2. **Payments** (secondary) — transfers (MVP: basic outbound only, rest deferred)
3. **Rewards** (tertiary) — sub-tabs: Merch, Events, Rewards, Experiences, Partner
4. **Shop** (quaternary) — links to external Shopify store for MVP
5. **Side menu** (account icon top-left) — Profile hub, My Account (Profile/Bank/Card tabs), My Payouts, PITStop Help, Legal

## Prototype Structure

All prototype code lives under `app/prototype/`. It uses:
- **ThemeProvider** (`components/ThemeProvider.jsx`) — Veloce (purple) and Quadrant (orange) themes, togglable at runtime via button
- **BottomNav** — 4-tab navigation (Wallet, Payments, Rewards, Shop)
- **ScreenHeader** — reusable header with back/close buttons
- **CardDisplay** — branded virtual Visa card component
- **TransactionItem** — transaction row component
- Mock data throughout (no API calls)
- Mobile-first layout (max-width 430px, centered on desktop)

### Prototype pages:
- `/prototype` → redirects to `/prototype/wallet`
- `/prototype/wallet` — home screen (balance, card, transactions preview, quick actions)
- `/prototype/wallet/transactions` — full list with pending/completed, search, date filter
- `/prototype/wallet/add-money` — card/wallet/bank transfer options + account details modal
- `/prototype/wallet/card-controls` — hub: Apple Wallet, activate, order, report, limits
- `/prototype/wallet/card-details` — PAN, CVV, expiry, View PIN (with security notice)
- `/prototype/wallet/order-card` — £4.99 physical card order flow
- `/prototype/wallet/limits` — tabbed allowances/limits with transfers in/out
- `/prototype/payments` — transfer money + coming-soon items
- `/prototype/rewards` — 5 sub-tabs with content cards (merch, events, rewards, experiences, partner)
- `/prototype/shop` — external store link + coming-soon native features
- `/prototype/account` — profile hub → My Account (Profile/Bank/Card tabs), PITStop AI help
- `/prototype/onboarding` — welcome, tier selection, 6-step registration overview

## SOW Feature IDs

Features are prefixed by section: `ONB-` (onboarding), `WAL-` (wallet), `PAY-` (payments), `REW-` (rewards), `SHP-` (shop), `ACC-` (account), `XC-` (cross-cutting). Each has an MVP IN/OUT flag.

## Integration Boundaries

- **Tribe builds:** all user-facing screens, app logic, theming, AI support (PITStop)
- **Equals/Railsr provides:** banking APIs (accounts, cards, transactions, KYC)
- **Separate team member** handles banking API integration (not in this SOW)
- **Veloce/Quadrant** provides content assets for rewards, shop, branding

## Future: Mobile App Architecture

When we move to building the actual app:
- **React Native + Expo** (managed workflow, SDK 52+)
- **Expo Router** (file-based navigation)
- **Zustand** (client state) + **TanStack Query** (server state)
- **TypeScript** strict mode
- **BankingService** interface abstraction over Equals APIs
- Build-time partner theming (separate app builds per partner)
- Biometric auth via expo-local-authentication
- Push notifications via expo-notifications

## Other Tribe Repos

- `tribesystems-site` — static HTML marketing website (separate repo, deployed to Netlify at tribesystems-site.netlify.app)

## Dev Notes

- This project started as a Netlify Platform Starter template — the existing `/`, `/blobs`, `/revalidation`, `/edge`, `/image-cdn`, `/classics`, `/quotes` routes are demo content from that template, not Tribe-related
- `npm run dev` to run locally, prototype at `http://localhost:3000/prototype`
- `babel-plugin-react-compiler` was added as a dev dependency for the Next.js 16 build
- Tailwind CSS v4 with `@theme` syntax
