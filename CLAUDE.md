# Tribe Systems — Project Context

## What This Is

This is a **Next.js 16 / Netlify** repo used for two things:
1. **Scope definition documents** — roadmap, feature catalogue, and (historical) SOW for the Tribe x Veloce consumer banking + fan engagement mobile app
2. **Clickable prototype** (`/prototype`) — throwaway Next.js prototype for stakeholder conversations. Don't invest more build time here.

The actual mobile app will be built separately in **React Native + Expo**. This repo is for prototyping, stakeholder alignment, and scope definition.

## Business Context

**Tribe Systems** is a fintech startup building a white-label consumer banking app for fan communities. First partner: **Veloce Media Group** (esports/motorsport, includes **Quadrant** — Lando Norris's brand).

The app gives fans a branded Visa debit card and digital wallet, encouraging spending through rewards, exclusive content, event access, and merchandise tied to their fan community.

- **Banking provider:** Railsr/Equals (merged entity — contract with Railsr, APIs from Equals)
- **Target launch:** Money 2026 conference (June 2026)
- **Target scale:** 10k–100k consumers
- **Market:** UK only for MVP, EU expansion post-launch
- **Account tiers:** Everyday (£4.99/mo), Plus (£6.99/mo), Premium (£89.99/yr)

## Current Status

### What's Done
- **Updated Roadmap Baseline** (`docs/Updated-Roadmap-Baseline-Feb-2026.md`) — partner-facing, awaiting Veloce review. Incorporates banking-first pivot, Ecosystem MVP proposal, deferred features rationale.
- **Feature Catalogue started** (`docs/Feature-Catalogue-MVP.md`) — Onboarding and Wallet groups complete. Replaces the original SOW as the living requirements doc.
- **Clickable prototype** — 12 screens under `app/prototype/`, password protected. Treat as throwaway.

### What's Next (Priority Order)
1. **Finish Feature Catalogue** — remaining groups: Payments, Rewards, Shop, Account/Side Menu, Cross-Cutting, Ecosystem MVP
2. **Low-fidelity wireframes** — unbranded Figma wireframes from Feature Catalogue. Tools: Uizard or Galileo AI for generation, Figma for refinement.
3. **Technical setup** — Expo project skeleton, TypeScript BankingService interfaces, Equals API contract mapping
4. **React Native build** — against locked wireframes and Feature Catalogue

### Document Sequence (Agreed Approach)
1. Updated Roadmap Baseline — DONE
2. Feature Catalogue — IN PROGRESS (replaces SOW)
3. Low-fidelity wireframes — NEXT
4. Technical contracts / API interfaces — LATER
5. React Native / Expo build — LATER

Philosophy: "thin spec, thick conversation" — enough to build confidently, not shelfware. Iterative, not waterfall.

## Key Documents

### Living Documents (update these)

| Document | Path | Purpose |
|----------|------|---------|
| Updated Roadmap v2.0 | `docs/Updated-Roadmap-Baseline-Feb-2026.md` | Partner-facing roadmap with change tracking from Jan 2026 baseline. Banking-first, Ecosystem MVP, deferred features. Awaiting Veloce review. |
| Feature Catalogue | `docs/Feature-Catalogue-MVP.md` | Screen-by-screen requirements with flows, integration tables, acceptance criteria, open questions. Replaces the SOW. In progress. |
| This file | `CLAUDE.md` | Project context for AI session continuity. Keep updated. |

### Historical Reference (don't update, use for context)

| Document | Path | Purpose |
|----------|------|---------|
| Original SOW v1.0 | `docs/SOW-Tribe-Veloce-MVP.md` | ~70 features with IDs (ONB-/WAL-/PAY-/REW-/SHP-/ACC-/XC-). Feature IDs are canonical and carry into all other docs. Superseded by Feature Catalogue. |
| Company overview | `TRIBE-README.md` | Product vision, operating model, revenue model, 10k users/month growth claim |
| Draft roadmap notes | `DRAFT-product-roadmap-updates-Feb-2026.txt` | Internal draft thinking — Ecosystem MVP modules, pushback items, strategic rationale. NOT partner-facing. |
| Original roadmap | `Veloce_Program_Roadmap_22-Jan-2026.docx` | 5-phase roadmap from Jan 2026. Superseded by Updated Roadmap. |
| Veloce feedback | `Figma - V Media Feedback.docx` | Veloce's response to original Figma — drove banking-first pivot, navigation restructure |
| Post-feedback roadmap | `TRIBE_Updated_Roadmap_Post_Veloce_Feedback.docx` | Internal roadmap update after Veloce feedback |

## Design Assets

All in `designs/` folder. Named as `Screenshot-2026-02-05-{category}{number}.png`.

| Category | Files | Count | Notes |
|----------|-------|-------|-------|
| Banking | `bank1` to `bank13` | 13 | Wallet home, transactions, add money, account details, card controls, order card, allowances/limits, card details |
| Onboarding | `onboard1` to `onboard22` | 22 | Welcome, tier selection, tier details, registration steps 1-6, KYC, legal, payment, Apple Wallet |
| Rewards | `rewards-merch1-3`, `rewards-events1`, `rewards-experiences1-2`, `rewards-partner1`, `rewards-redeem1` | 8 | 5 sub-tab categories + redemption flow |
| Settings | `settings1` to `settings3` | 3 | Profile hub, My Account tabs |
| Help | `help1`, `help2` | 2 | PITStop AI welcome + chat |
| Content | `content-buzz1-4`, `content-insider1-7`, `content-spotlight1-6` | 17 | DESCOPED — original content-first approach, replaced by Ecosystem MVP |
| Other | `splash`, `terms1` | 2 | App splash, terms viewer |

## Feature ID Reference

Features are prefixed by section. IDs are canonical across all documents.

| Prefix | Group | IN for MVP | OUT (deferred) |
|--------|-------|-----------|----------------|
| ONB- | Onboarding | 001-015 | — |
| WAL- | Wallet | 001-015, 018 | 016 (card customisation), 017 (savings pots) |
| PAY- | Payments | 001-002 | 003-010 |
| REW- | Rewards | 001-007 | 008-011 |
| SHP- | Shop | 001 | 002-004 |
| ACC- | Account | 001-008, 010-016 | 009 (My Payouts) |
| XC- | Cross-cutting | 001-008 | — |

## Key Strategic Decisions

- **Banking-first, wallet-centric** — not content-first. Wallet is the primary/landing tab (from Veloce feedback)
- **Brand-agnostic core** — reusable across Veloce, Quadrant, future partners without rebuild
- **Ecosystem MVP** instead of content feeds — Ecosystem Highlights (wallet carousel, 1-3 slots) + Engagement Rewards (behaviour-triggered). Replaces the original Buzz/Insider/Spotlight content screens.
- **Deferred to Phase 4:** P2P payments, direct debits, standing orders, community/social, content feeds
- **Phase 4 gated on** 25k monthly transacting users (not just registered)
- **PITStop** — AI support chatbot character (racing-themed robot)
- **Reward funding dependency** — Veloce must commit to funding Engagement Rewards incentives

## App Navigation Structure (per Veloce feedback)

1. **Wallet** (primary/landing) — balance, card, transactions, card controls, freeze, add funds, Ecosystem Highlights carousel
2. **Payments** (secondary) — transfers (MVP: basic outbound only, rest deferred)
3. **Rewards** (tertiary) — sub-tabs: Merch, Events, Rewards, Experiences, Partner
4. **Shop** (quaternary) — links to external Shopify store for MVP
5. **Side menu** (account icon top-left) — Profile hub, My Account (Profile/Bank/Card tabs), My Payouts, PITStop Help, Legal

## Open Questions (Unresolved)

### Onboarding
- Initial payment amount on Figma shows $135 on Apple Pay sheet — doesn't match any tier price. Minimum top-up required?
- How much onboarding state is persisted server-side for resumable progress?
- What KYC failure reasons does Equals return? Do we need different messaging per reason?

### Wallet
- Balance updates: polling vs push? (Recommendation: polling every 10s for MVP)
- Merchant logos: does Equals transaction API include enrichment, or need third-party service (Brandfetch, Clearbit)?
- Frozen card visual treatment: not in Figma, needs design
- PIN reveal: does Equals provide tokenised PIN widget or a PIN reveal API?
- Ecosystem Highlights content source: Firebase Remote Config vs custom API?

### General
- Equals API documentation: need to review for card activation method, PIN reveal, transaction enrichment
- Reward funding model: who pays for Engagement Rewards incentives? (Critical Veloce dependency)

## Prototype (Throwaway)

All prototype code lives under `app/prototype/`. Password protected — demo password: `tribe2026`.

- **ThemeProvider** (`components/ThemeProvider.jsx`) — Veloce (purple #5B2D8E) and Quadrant (orange #FF6B00) themes
- **BottomNav** — 4-tab navigation
- **AuthGate** — session-based password gate
- Mock data throughout (no API calls)
- Mobile-first layout (max-width 430px, centered on desktop)

Pages: wallet (home, transactions, add-money, card-controls, card-details, order-card, limits), payments, rewards, shop, account, onboarding.

Useful as a conversation piece for stakeholder alignment. Don't invest more build time.

## Integration Boundaries

- **Tribe builds:** all user-facing screens, app logic, theming, AI support (PITStop)
- **Equals/Railsr provides:** banking APIs (accounts, cards, transactions, KYC)
- **Separate team member** handles banking API integration
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

- `npm run dev` to run locally, prototype at `http://localhost:3000/prototype`
- Root `/` redirects to `/prototype`
- `babel-plugin-react-compiler` added as dev dependency for Next.js 16 build
- Tailwind CSS v4 with `@theme` syntax
- Git worktree: `relaxed-cray` branch. Main repo checked out separately.
