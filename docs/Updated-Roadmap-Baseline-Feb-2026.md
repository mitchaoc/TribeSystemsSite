# Updated Roadmap Baseline — Tribe x Veloce Media Consumer Banking App

**Version:** 3.0
**Date:** February 2026
**Status:** For Review and Alignment
**Parties:** Tribe Systems Ltd ("Tribe"), Veloce Media Group ("Veloce")

**Reference documents:**
- Original Delivery Roadmap (22 January 2026)
- Veloce Figma Feedback (4 February 2026)

**Purpose:** This document presents an updated delivery roadmap incorporating Veloce's feedback and aligned to a banking-first, engagement-smart product strategy. It supersedes the January 2026 roadmap.

---

## 1. Context

### What We Heard

Following your review of the original Figma designs, we received clear direction: the wallet and card should be the primary experience, not content or social feeds. You asked for comprehensive card management, a robust rewards ecosystem, Quadrant merchandise access, PITStop AI support, and a cleaner navigation structure.

### How We Responded

We have made three strategic shifts:

1. **Banking-first, wallet-centric architecture.** The wallet is now the home screen. Every session starts with the user's financial position — balance, card, recent transactions.

2. **Brand-agnostic core.** The platform supports Veloce, Quadrant and future partners from a single codebase with themed builds per partner.

3. **Engagement-smart approach.** Rather than the heavy content experience in the original designs or a purely banking-only app, we are introducing a measured middle ground — lightweight, data-driven engagement surfaces that give users reasons to open the app daily while remaining operationally simple to manage.

### What This Document Covers

This is the first in a sequence of deliverables: **Roadmap Baseline** (this document) → **Feature Specification** → **User Journeys** → **Wireframes**. Each builds on the previous.

---

## 2. Guiding Principles

1. **Banking-first UX** — The wallet is the home screen. Engagement features complement the banking experience; they do not compete with it.

2. **Brand-agnostic core** — The platform supports multiple partners from a single codebase. Partner-specific elements are configured per build, not hard-coded.

3. **Engagement-smart, not content-heavy** — Engagement features are data-driven and measurable, not dependent on high-volume content operations.

4. **Operational simplicity** — Launch features must be maintainable by a small team. Features requiring dedicated editorial or moderation operations are sequenced for post-launch.

5. **Measure before scaling** — Every engagement surface tracks user interactions from launch. Expansion is gated on evidence, not assumption.

6. **Responsible delivery** — Features with significant compliance, fraud or moderation overhead are sequenced after core stability is proven.

---

## 3. Roadmap Overview

| Phase | Timing | Theme | Key Deliverables |
|-------|--------|-------|-----------------|
| **Alignment** | Jan–Feb 2026 | Scope Lock | Updated roadmap, rewards funding model, success metrics |
| **Phase 1** | Q1 2026 | Core Build | Onboarding, wallet, virtual card, transfers, infrastructure |
| **Phase 1B** | Q1 2026 (parallel) | Ecosystem MVP | Engage tab, wallet carousel, behaviour-triggered rewards |
| **Phase 2** | Apr–May 2026 | Pilot | Family & Friends, 500–2,000 users, no new features |
| **Phase 3** | June 2026 | Public Launch | Money 2026 — full banking + engagement live |
| **Phase 4** | H2 2026 | Growth & Monetisation | Gated on 25k monthly transacting users |
| **Phase 5** | 2027 | Strategic Expansion | Gated on proven unit economics |

---

## 4. Navigation Structure

We are proposing one change to the navigation structure from Veloce's original feedback. The rationale is explained below.

**Proposed navigation (4 tabs):**

| Tab | Role | Content at Launch |
|-----|------|-------------------|
| **Wallet** | Primary / landing | Balance, card, transactions, card controls, add funds, send money, Ecosystem Highlights carousel |
| **Engage** | Secondary | Curated feed of partner announcements, upcoming events, new rewards, behind-the-scenes teasers |
| **Rewards** | Tertiary | Merch, Events, Rewards, Experiences, Partner sub-tabs |
| **Shop** | Quaternary | Links to external Quadrant Shopify store |

**Side menu** (account icon, top-left): Profile hub, My Account, PITStop Help, Legal

### Why Engage replaces Payments

Your feedback proposed a Payments tab with transfers, standing orders, direct debits and peer-to-peer payments. After detailed analysis, we recommend replacing this with an Engage tab at launch for three reasons:

1. **The Payments tab would be near-empty at launch.** With standing orders, direct debits and P2P payments responsibly deferred to Phase 4 (see Appendix B), the tab would contain a single "Transfer money" button and four "Coming Soon" placeholders. A near-empty tab in prime navigation damages the premium feel of the app.

2. **Outbound transfers belong in the Wallet.** Sending money is a wallet action — it sits naturally alongside "Add funds" and "Card controls" as a quick action on the wallet home screen. Users expect to manage their money from where they see their money.

3. **Engagement drives the metrics that matter.** Fan engagement content — announcements, events, behind-the-scenes access — gives users reasons to open the app between transactions. Higher daily active users drives more card transactions, which drives higher scheme marketing revenue for Veloce. Content and perks are what makes fans pay £4.99/month instead of using a free banking app.

**This is a middle ground.** The original Figma designs had three content-heavy tabs (Buzz, Insider, Spotlight) with social features, infinite scroll and live feeds. That was too operationally heavy for launch. A purely banking-only app with no engagement surface is too thin to justify a subscription or differentiate from free alternatives. The Engage tab is the measured middle ground — a curated feed of 5–10 items, managed via remote config, tracked for engagement, and operationally lightweight.

**The Payments tab returns in Phase 4** when standing orders, direct debits and P2P payments are built — at that point, there is enough feature depth to justify dedicated navigation.

---

## 5. Ecosystem Strategy

The ecosystem creates three engagement surfaces that work together to make the app sticky beyond balance-checking.

### 5.1 Engage Tab (Curated Feed)

A lightweight, curated feed in its own navigation tab. Not infinite scroll. Not a social media feed. Think "curated newsletter."

**Content types at launch:**
- Partner announcements (new rewards available, event launches)
- Upcoming events and experiences (with "View" or "Get tickets" actions)
- New rewards and offers highlights
- Behind-the-scenes teasers (driver photos, race day content, exclusive clips)
- Race/match day highlights

**What makes this operationally light:**
- 5–10 items visible at any time — not an infinite scroll
- Content managed via remote config or lightweight CMS — not a real-time editorial system
- No user-generated content, no comments, no social features — no moderation burden
- Each item is a card: image + headline + short description + action button
- Veloce/Quadrant supplies the content (as agreed in the partnership)

**What makes this strategically powerful:**
- Every item tracks impressions, tap-throughs and conversions
- This data feeds Phase 4 sponsor campaigns and segmented offers
- A/B testing of content types reveals what drives engagement — enabling data-informed expansion

### 5.2 Ecosystem Highlights (Wallet Home Carousel)

A dynamic 1–3 slot carousel on the wallet home screen, below the card and quick actions. This is the brand touchpoint that every user sees in every banking session.

- Reward unlock announcements, event incentives, limited-time offers, VIP tier recognition
- Surfaces highlights FROM the Engage tab and Rewards tab onto the wallet home
- Tracks impressions, tap-throughs and conversions

### 5.3 Engagement Rewards (Behaviour-Triggered)

Financial behaviour triggers rewards, creating a loop between card usage and the fan ecosystem.

| Trigger | Reward | Business Value |
|---------|--------|---------------|
| Spend £X in a month | Entry to prize draw | Drives card usage — supports scheme marketing |
| Transact on match/race day | Cashback boost | Ties banking to the fan calendar |
| Upgrade account tier | Exclusive perk unlock | Increases revenue per user |
| Refer a friend who activates | VIP status bump | Organic acquisition at low cost |
| First card transaction | Welcome bonus | Drives activation rate |

**Dependency — reward funding:** These rewards require real incentives funded by Veloce/Quadrant. The reward funding model needs to be confirmed during the current scope alignment period.

---

## 6. Phase Summary

### Alignment (Jan–Feb 2026)

We are here now. Objectives: lock MVP scope, confirm reward funding model, align on success metrics and scheme marketing targets. Deliverables: this roadmap, confirmed Engage tab content commitment from Veloce, reward funding agreement.

### Phase 1: Core Build (Q1 2026)

The primary build delivers a stable, fully functional banking experience: onboarding with UK KYC, wallet with real-time balance, virtual Visa card, full card management (freeze, details, Apple Wallet, order physical card, limits), outbound UK bank transfers, Rewards tab with five content categories (Merch, Events, Rewards, Experiences, Partner), Shop tab (external Shopify link), PITStop AI support, push notifications, and brand theming for Veloce and Quadrant.

In parallel, we build the enabling infrastructure: event analytics, impression tracking, offer redemption tracking, tier/segment tagging, GDPR consent layer, and a basic rewards ledger. This is invisible to users but critical — it's the measurement framework that makes Phase 4 monetisation possible.

### Phase 1B: Ecosystem MVP (Parallel)

Built alongside Phase 1: the Engage tab (curated content feed), the wallet home carousel (Ecosystem Highlights), and the behaviour-triggered reward mechanics (Engagement Rewards). See Section 5.

### Phase 2: Pilot (Apr–May 2026)

500–2,000 invited users. Strict rule: no new features during pilot. Focus on banking stability, engagement metrics validation, PITStop support load, and analytics infrastructure accuracy. Go/no-go assessment for public launch.

### Phase 3: Public Launch (June 2026)

Public UK launch at Money 2026. Everything from Phases 1 and 1B is live. Three account tiers: Everyday (£4.99/mo), Plus (£6.99/mo), Premium (£89.99/yr). Physical card orderable at £4.99 (virtual-first UX).

Features **not** live at launch: full Payments tab (returns Phase 4), P2P payments, standing orders, direct debits, community/social features, crypto/Web3, marketplace, deep personalisation. See Appendix B for rationale.

### Phase 4: Growth & Monetisation (H2 2026)

**Gated on 25,000 monthly transacting users** (not just registered — users who make at least one card transaction per month).

Additions: Payments tab (with sufficient feature depth), sponsor-funded campaigns, segmented offers, analytics dashboard for Veloce, standing orders, direct debits, card customisation, savings pots, expanded rewards mechanics. P2P payments only if strategically justified by data.

### Phase 5: Strategic Expansion (2027)

**Gated on proven unit economics** (subscription + interchange covers acquisition cost).

Advanced rewards, crypto via third-party provider, token-gated experiences, marketplace, EU expansion.

---

## 7. Dependencies

### From Veloce / Quadrant 

| What | When | Notes |
|------|------|-------|
| Brand assets (logos, imagery, colour specs) | End of Feb 2026 | Required for themed builds |
| Rewards content (Merch, Events, Experiences, Partner items) | March 2026 | Product images, descriptions, pricing |
| Engage tab content (announcements, events, teasers) | March 2026 | 5–10 curated items for launch |
| Reward funding commitment | During Scope Alignment | Budget for Engagement Rewards incentives |
| Scheme marketing target alignment | During Scope Alignment | Shared KPIs and growth targets |
| Review and sign-off on this roadmap | February 2026 | Enables build to proceed |

### From Tribe

| What | When |
|------|------|
| Feature Specification | Following roadmap sign-off |
| User Journeys | Following feature spec |
| Updated wireframes | Following user journeys |
| Technical architecture and infrastructure | Phase 1 build |
| PITStop AI training and configuration | Phase 1 build |

### From Equals / Railsr

| What | When | Notes |
|------|------|-------|
| API documentation and sandbox | Q1 2026 | Onboarding, KYC, card, transactions |
| KYC verification service | Phase 1 | UK identity verification |
| Virtual card issuance | Phase 1 | Visa card provisioning |
| Physical card production | Phase 3 | £4.99 per card, 5–7 day delivery |
| Transaction processing | Phase 1 | Payments, top-ups, transfers |

---

## 8. Success Metrics

### Pilot (Phase 2)

| Metric | Target | Source |
|--------|--------|--------|
| Onboarding completion rate | >80% of invited users | Analytics |
| Card activation rate | >70% within 7 days | Analytics |
| Monthly transacting users | >60% of activated users | Analytics |
| Engage tab daily views | >30% of daily active users | Impression tracking |
| Ecosystem Highlights tap-through | >15% of impressions | Impression tracking |
| Engagement Rewards redemption | >10% of eligible users | Rewards ledger |
| PITStop resolution rate | >80% of Tier 1 queries | Support platform |
| App crash rate | <1% of sessions | Crash reporting |

### Launch (Phase 3)

| Metric | Target | Source |
|--------|--------|--------|
| Monthly transacting users | 25,000+ (Phase 4 gate) | Analytics |
| Card spend velocity | Increasing month-on-month | Transaction data |
| App Store rating | >4.0 stars | App Store / Google Play |
| Referral conversion rate | >5% of users refer a friend | Referral tracking |

---

## 9. What Comes Next

1. **This document** — Updated Roadmap Baseline *(for Veloce review and alignment)*
2. **Feature Specification** — Detailed descriptions per feature group
3. **User Journeys** — Key flows: onboarding, first transaction, rewards discovery, engage feed, referral
4. **Wireframes** — Low-fidelity visual reference for all flows

We recommend reviewing and aligning on this roadmap before progressing to the specification.

---

## Appendix A: Detailed Phase Breakdown

### Phase 1: Core Banking Features

| Feature | Status | Notes |
|---------|--------|-------|
| Onboarding + UK KYC | **[UNCHANGED]** | 6-step registration, tier selection, KYC via Equals |
| Wallet home with balance and card | **[UNCHANGED]** | Branded virtual Visa, real-time balance |
| Transaction history | **[EVOLVED]** | Expanded: pending/completed sections, search, date filter |
| Add funds | **[UNCHANGED]** | Apple Pay, Google Pay, Visa, Mastercard, bank transfer |
| Card controls hub | **[EVOLVED]** | Full management: freeze, details, Apple Wallet, order physical, report issue |
| Allowances and limits | **[UNCHANGED]** | Tabbed display: allowances, limits, transfers |
| Outbound UK bank transfers | **[EVOLVED]** | Moved from Payments tab into Wallet as a quick action |
| Rewards tab (5 content categories) | **[UNCHANGED]** | Merch, Events, Rewards, Experiences, Partner |
| Shop tab (external store) | **[UNCHANGED]** | Links to Quadrant Shopify store |
| PITStop AI support | **[NEW]** | AI chatbot for Tier 1 support |
| Account management | **[UNCHANGED]** | Profile hub, My Account (Profile/Bank/Card tabs) |
| Cross-cutting (security, auth, a11y) | **[UNCHANGED]** | Push notifications, biometric auth, theming, consent, security |

### Phase 1: Enabling Infrastructure

| Feature | Status | Purpose |
|---------|--------|---------|
| Event-driven analytics | **[NEW]** | Foundation for all engagement measurement |
| Impression and click-through tracking | **[NEW]** | Measures what users see and engage with |
| Offer redemption tracking | **[NEW]** | Tracks reward claims |
| Tier and segment tagging | **[NEW]** | Enables Phase 4 segmented offers and sponsor targeting |
| Consent and GDPR layer | **[NEW]** | Compliant data collection from day one |
| Rewards ledger | **[NEW]** | Tracks earned and redeemed rewards |

### Phase 1B: Ecosystem MVP

| Feature | Status | Notes |
|---------|--------|-------|
| Engage tab (curated feed) | **[NEW]** | Lightweight content feed replacing the Payments tab |
| Ecosystem Highlights carousel | **[NEW]** | Dynamic 1–3 slot carousel on wallet home |
| Engagement Rewards engine | **[NEW]** | Behaviour-triggered reward mechanics |

---

## Appendix B: Deferred Features — Rationale

### Payments Tab and Advanced Payment Features

**Your feedback included:** A dedicated Payments tab with transfers, standing orders, direct debits and P2P payments.

**Our recommendation:** Replace the Payments tab with an Engage tab at launch. Restore the Payments tab in Phase 4 when there is sufficient feature depth. Move outbound transfers into the Wallet tab.

**Rationale:** At launch, 80% of the proposed Payments features are responsibly deferred (see below). A tab with one functional button and four "Coming Soon" placeholders damages the premium feel of the app and wastes prime navigation space. Outbound transfers are a natural Wallet action. The Engage tab uses that navigation slot to drive daily active usage — which directly supports scheme marketing revenue.

### Peer-to-Peer Payments and Request Money

**Your feedback included:** Transfers between users, request money.

**Our recommendation:** Phase 4, gated on active user volume.

**Rationale:** P2P payments require AML monitoring of user-to-user flows, fraud detection for social engineering, and dispute resolution. These are solvable but add substantial compliance work that would risk the June launch. P2P becomes valuable at scale when Tribe-to-Tribe transfers create a closed-loop economy.

### Standing Orders and Direct Debits

**Your feedback included:** Standing orders and direct debit management.

**Our recommendation:** Phase 4.

**Rationale:** Direct debit origination requires BACS membership or sponsored access through Equals. Standing orders require scheduling infrastructure with guaranteed execution and retry logic. Basic outbound transfers (in the Wallet) cover the core need at launch.

### Community and Social Features

**Our recommendation:** Phase 4 at earliest, likely Phase 5.

**Rationale:** Social features require content moderation at scale and carry brand safety risk. The Engage tab provides curated engagement without moderation overhead.

### Full Content Feeds (Buzz, Insider, Spotlight)

**Original designs included:** Three rich content tabs with social interactions, articles, curated collections and video.

**Our recommendation:** Replaced by the Engage tab — a single, curated, lightweight feed.

**Rationale:** Three content tabs required editorial operations, content pipelines and moderation. The Engage tab achieves the same goal — app stickiness and brand presence — with dramatically lower operational burden. If Engage tab metrics prove strong, richer content can be introduced in Phase 4.

---

## Appendix C: Change Log from January 2026 Roadmap

| Item | Jan 2026 Roadmap | Feb 2026 Baseline | Change |
|------|-----------------|-------------------|--------|
| Home screen | Content-integrated | Wallet-first (banking-centric) | **[EVOLVED]** |
| Navigation | 5 areas with content focus | 4 tabs: Wallet, Engage, Rewards, Shop + side menu | **[EVOLVED]** |
| Payments tab | Proposed with transfers, standing orders, P2P | Replaced by Engage tab; transfers moved to Wallet | **[EVOLVED]** |
| Engage tab | Not in original; replaced Buzz/Insider/Spotlight | Curated lightweight content feed | **[NEW]** |
| Card management | Basic card display | Full hub: freeze, details, controls, limits, Apple Wallet | **[EVOLVED]** |
| Transaction history | Basic list | Search, date filter, pending/completed sections | **[EVOLVED]** |
| PITStop AI support | Not in original | In-app AI chatbot for Tier 1 queries | **[NEW]** |
| Ecosystem Highlights | Not in original | Dynamic carousel on wallet home (1–3 slots) | **[NEW]** |
| Engagement Rewards | Not in original | Behaviour-triggered reward mechanics | **[NEW]** |
| Analytics infrastructure | Not explicit | Event tracking, impressions, conversions, rewards ledger | **[NEW]** |
| Rewards tab content | Part of content-first approach | 5 sub-tabs with Veloce/Quadrant content (preserved) | **[UNCHANGED]** |
| Content feeds (Buzz/Insider/Spotlight) | Phase 1 (3 heavy tabs) | Replaced by single Engage tab | **[EVOLVED]** |
| P2P payments | Phase 3–4 | Phase 4, gated | **[MOVED]** |
| Request money | Phase 3–4 | Phase 4, gated | **[MOVED]** |
| Standing orders | Phase 1 (tentative) | Phase 4 | **[MOVED]** |
| Direct debits | Phase 1 (tentative) | Phase 4 | **[MOVED]** |
| Community/social | Phase 4 | Phase 4–5, gated on evidence | **[MOVED]** |
| Crypto/Web3 | Phase 4–5 | Phase 5, gated on unit economics | **[UNCHANGED]** |
| Physical cards | At launch | Orderable from launch (£4.99), virtual-first | **[EVOLVED]** |
| Phase 4 entry criteria | Not specified | 25k monthly transacting users | **[NEW]** |
| Phase 5 entry criteria | Not specified | Proven unit economics | **[NEW]** |

---

*This document is confidential and intended for Tribe Systems and Veloce Media Group only.*
