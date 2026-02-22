# Updated Roadmap Baseline — Tribe x X Media Consumer Banking App

**Version:** 2.0
**Date:** February 2026
**Status:** For Review and Alignment
**Parties:** Tribe Systems Ltd ("Tribe"), X Media Media Group ("X Media")

**Reference documents:**
- Original Delivery Roadmap (January 2026)
- X Media Figma Feedback (February 2026)
- SOW v1.0 — Tribe x X Media Consumer Banking App MVP

**Purpose:** This document presents an updated delivery roadmap incorporating X Media's feedback and aligned to a banking-first, engagement-smart product strategy. It supersedes the January 2026 roadmap and forms the basis for subsequent deliverables.

---

## 1. Context and Feedback

### 1.1 What We Heard

Following X Media's review of the original Figma designs, we received clear and valuable direction on the product vision. The key themes from your feedback:

- **Wallet-first navigation** — The wallet and card should be the primary experience, not content or social feeds
- **Full card management** — Users need comprehensive card controls: freeze, view details, order physical card, set limits, add to Apple Wallet
- **Payments capability** — Transfers, standing orders, direct debits and peer-to-peer payments are important to the long-term vision
- **Rewards ecosystem** — Merchandise, events, experiences and partner offers should be accessible through a dedicated rewards area
- **Q Media merchandise** — A shop presence for branded merchandise
- **PITStop AI support** — An in-app support character to handle customer queries
- **Navigation restructure** — Four primary tabs (Wallet, Payments, Rewards, Shop) with account management via a side menu

### 1.2 How We Responded

Based on your feedback, we have made three strategic shifts to the product direction:

1. **Banking-first, wallet-centric architecture.** The wallet is now the home screen and primary landing tab. Every user session starts with their financial position — balance, card, recent transactions. This directly reflects your feedback.

2. **Brand-agnostic core platform.** The application core supports X Media, Q Media and future partners from a single codebase with themed builds per partner. This means new partnerships do not require a rebuild — they require a new theme configuration.

3. **Engagement-smart approach.** Rather than building a content-heavy media experience for launch, we are introducing targeted, data-driven engagement surfaces that are measurable from day one and operationally lightweight. This reduces delivery risk while creating the measurement framework needed to optimise engagement post-launch.

### 1.3 What This Document Covers

This roadmap baseline is the first in a sequence of deliverables:

1. **Updated Roadmap Baseline** (this document) — direction, phasing and scope boundaries
2. **Product Specification** — detailed feature descriptions building on the SOW
3. **Lightweight Use Cases** — key user journeys across onboarding, wallet, rewards and payments
4. **Updated Wireframes** — visual reference for new and modified flows

Each document builds on the previous. This roadmap sets the direction; subsequent documents add the detail.

---

## 2. Guiding Principles

These principles underpin every scoping and sequencing decision in this roadmap. They are designed to be shared between Tribe and X Media as a decision-making framework.

1. **Banking-first UX** — The wallet is the home screen. Every user session starts with their financial position. Engagement features complement the banking experience; they do not compete with it.

2. **Brand-agnostic core** — The platform supports X Media, Q Media and future partners from a single codebase. Partner-specific elements (colours, logos, card imagery, content) are configured per build, not hard-coded.

3. **Engagement-smart, not content-heavy** — Engagement features are data-driven and measurable, not dependent on high-volume content operations. We build surfaces that track impressions, interactions and conversions from day one.

4. **Operational simplicity** — Launch features must be maintainable by a small team. Features requiring dedicated editorial operations, content moderation or complex compliance workflows are sequenced for post-launch when the team and processes can support them.

5. **Measure before scaling** — Every engagement surface tracks user interactions from launch. Expansion to richer content, deeper personalisation and broader rewards is gated on evidence, not assumption.

6. **Responsible delivery** — Features with significant compliance, fraud or moderation overhead are sequenced after core stability is proven. This protects the launch timeline and ensures we build on a solid foundation.

---

## 3. Roadmap Overview

The roadmap is structured in five phases plus an alignment period. Each phase has clear entry criteria and deliverables.

| Phase | Timing | Theme | Key Deliverables |
|-------|--------|-------|-----------------|
| **Alignment** | Jan–Feb 2026 | Scope Lock | Updated roadmap, rewards funding model, success metrics |
| **Phase 1** | Q1 2026 | Core Build | Onboarding, wallet, virtual card, payments, infrastructure |
| **Phase 1B** | Q1 2026 (parallel) | Ecosystem MVP | Ecosystem Highlights on wallet, Engagement Rewards |
| **Phase 2** | Apr–May 2026 | Pilot | Family & Friends, 500–2,000 users, no new features |
| **Phase 3** | June 2026 | Public Launch | Money 2026 — full banking + ecosystem live |
| **Phase 4** | H2 2026 | Growth & Monetisation | Gated on 25k monthly transacting users |
| **Phase 5** | 2027 | Strategic Expansion | Gated on proven unit economics |

---

## 4. Detailed Phase Breakdown

### 4.1 Current: Scope Alignment (Jan–Feb 2026)

We are currently in a scope alignment period. The purpose is to lock the MVP definition and confirm the commercial commitments that underpin the engagement features.

**Objectives:**
- Lock MVP scope around a banking-first product (this document)
- Confirm the rewards funding model — who funds the incentives in the Engagement Rewards system (Section 4.3)
- Define shared success metrics: Active Users, Activation Rate, Monthly Transacting Users
- Align on scheme marketing targets

**Deliverables:**
- This updated roadmap baseline (for X Media review)
- Confirmed Ecosystem MVP scope (Ecosystem Highlights + Engagement Rewards, as defined in Section 4.3)
- Confirmed minimum content commitment — what X Media provides for the Rewards tab vs what Tribe manages
- Rewards funding agreement — tiered incentives confirmed between Tribe and X Media
- Success metrics alignment document
- Updated SOW reflecting this roadmap

**Dependencies on X Media:**
- Brand assets (logos, imagery, colour specifications) — needed by end of February 2026
- Rewards and merchandise content for the Rewards tab (product images, descriptions, pricing)
- Commercial confirmation on reward funding for Engagement Rewards

---

### 4.2 Phase 1: Core Build (Q1 2026)

The primary build phase focuses on delivering a stable, fully functional banking experience.

#### 4.2.1 Core Banking

| Feature | Status | Notes |
|---------|--------|-------|
| Onboarding + UK KYC (ONB-001 to ONB-015) | **[UNCHANGED]** | 6-step onboarding with X Media-branded illustrations, tier selection, KYC via Equals API |
| Wallet home screen with balance and card (WAL-001 to WAL-003) | **[UNCHANGED]** | Branded virtual Visa card, real-time balance |
| Transaction history with search and filters (WAL-004, WAL-005) | **[EVOLVED]** | Expanded per X Media feedback — pending/completed sections, merchant search, date filtering |
| Add funds — card, digital wallet, bank transfer (WAL-006, WAL-007) | **[UNCHANGED]** | Apple Pay, Google Pay, Visa, Mastercard, bank transfer with account details |
| Card controls hub (WAL-008 to WAL-014) | **[EVOLVED]** | Expanded per X Media feedback — full management: freeze, details, Apple Wallet, order physical, report issue |
| Allowances and limits (WAL-015) | **[UNCHANGED]** | Tabbed display: allowances, limits, transfers |
| Basic outbound transfer (PAY-001, PAY-002) | **[UNCHANGED]** | Send money to external UK bank accounts |
| Rewards tab with 5 content categories (REW-001 to REW-007) | **[UNCHANGED]** | Merch, Events, Rewards, Experiences, Partner — content provided by X Media/Q Media |
| Shop tab — external store link (SHP-001) | **[UNCHANGED]** | Links to Q Media Shopify store |
| PITStop AI support (ACC-010 to ACC-013) | **[NEW]** | AI chatbot for Tier 1 support, added per X Media feedback |
| Account management (ACC-001 to ACC-008, ACC-014 to ACC-016) | **[UNCHANGED]** | Profile hub, My Account (Profile/Bank/Card tabs), terms viewer, notification preferences |
| Cross-cutting: security, auth, accessibility (XC-001 to XC-008) | **[UNCHANGED]** | Push notifications, biometric auth, brand theming, data consent, error handling, app security |
| Direct debits (PAY-005) | **[MOVED → Phase 4]** | Requires BACS sponsored access, retry and notification infrastructure. See Section 5. |
| Standing orders (PAY-004) | **[MOVED → Phase 4]** | Requires scheduling infrastructure with guaranteed execution. See Section 5. |
| P2P payments and request money (PAY-007, PAY-008) | **[MOVED → Phase 4]** | Compliance and fraud complexity. See Section 5. |

#### 4.2.2 Infrastructure (Enabling Layer)

These are invisible to users but critical for future monetisation and engagement optimisation. Without baseline measurement data, engagement optimisation and sponsor campaigns in Phase 4 are not possible.

| Feature | Status | Purpose |
|---------|--------|---------|
| Event-driven analytics architecture | **[NEW]** | Foundation for all engagement measurement |
| Impression tracking framework | **[NEW]** | Measures what users see on Ecosystem Highlights |
| Click-through and conversion tracking | **[NEW]** | Measures what users engage with and act on |
| Offer redemption tracking | **[NEW]** | Tracks reward claims against the rewards ledger |
| Tier and segment tagging framework | **[NEW]** | Enables segmented offers and sponsor targeting in Phase 4 |
| Consent and GDPR tagging layer | **[NEW]** | Ensures all data collection is compliant from day one |
| Rewards ledger (basic) | **[NEW]** | Tracks earned and redeemed rewards, even with simple mechanics at launch |

This infrastructure is the prerequisite for Phase 4 monetisation. Engagement optimisation and sponsor campaigns require baseline measurement data — this is where that data comes from.

---

### 4.3 Phase 1B: Ecosystem MVP (Parallel Build)

The Ecosystem MVP creates two targeted engagement surfaces that complement the banking experience without introducing content operational overhead. These are built in parallel with the core banking work.

**Important clarification:** The Ecosystem MVP is *complementary* to the Rewards tab (REW-001 to REW-007). The Rewards tab is X Media's content showcase — merchandise, events, experiences and partner offers. The Ecosystem MVP adds a dynamic, data-driven layer that surfaces highlights from the Rewards tab onto the wallet home screen and creates behaviour-driven incentives tied to card usage.

#### Ecosystem Highlights (Wallet Home)

*Evolves the existing Rewards preview widget (WAL-018) from a static link into a dynamic, data-driven surface.*

A small carousel on the wallet home screen, positioned below the card and quick actions. Maximum 1–3 slots at any time.

**Content types:**
- Reward unlock announcements (e.g. "You've earned entry to the Q Media Meet & Greet draw")
- Event-related incentives (e.g. "Race weekend — 2x cashback on all card spend")
- Limited-time partner offers (e.g. "48 hours: 15% off at Scuf Gaming")
- VIP tier recognition (e.g. "Welcome to Plus — your new perks are live")

**What this is NOT:**
- Not an infinite scroll feed
- Not a heavy media or video surface
- Not a CMS-managed editorial experience
- Not a social feed

**Why it matters for X Media:** Every time a user opens the app to check their balance, they see a X Media-branded engagement touchpoint. The carousel is your brand presence in every banking session.

**Tracking built in:** Each slot tracks impressions, tap-throughs and conversions. This data feeds directly into the analytics infrastructure and informs what content and offers perform best — enabling data-driven decisions about what to expand in Phase 4.

#### Engagement Rewards (Behaviour-Triggered)

Financial behaviour triggers ecosystem reinforcement, creating a loop between card usage and rewards.

| Trigger | Reward | Business Value |
|---------|--------|---------------|
| Spend £X in a month | Entry to prize draw | Drives card usage — directly supports scheme marketing metrics |
| Transact on match/race day | Cashback boost | Ties banking to the fan calendar, drives event-day spend |
| Upgrade account tier | Exclusive perk unlock | Increases revenue per user |
| Refer a friend who activates | VIP status bump | Organic acquisition at low cost |
| First card transaction | Welcome bonus | Drives activation rate |

**Why it matters for X Media:** Engagement Rewards drive the transaction velocity that unlocks scheme marketing incentives. More card spend from active users means a larger marketing budget from the card scheme provider. This is the engine that makes the growth model work.

**Dependency — reward funding:** The rewards in this system require real incentives. Prize draw entries, cashback boosts, exclusive perks and VIP benefits must be funded. The reward funding model — including who funds which incentives and at what tier — needs to be confirmed during the current Scope Alignment period. Engagement Rewards activation is contingent on an agreed incentive budget between Tribe and X Media.

---

### 4.4 Phase 2: Family & Friends Pilot (Apr–May 2026)

**[EVOLVED]** from the original roadmap — now includes explicit Ecosystem MVP validation.

- 500–2,000 invited users via TestFlight (iOS) and internal testing track (Android)
- **Strict rule: No new feature additions during the pilot.** The pilot exists to validate, not to build. Feature changes during pilot risk destabilising the launch candidate.

**Validation focus areas:**
- Banking stability — transactions, top-ups, card controls under real usage
- Ecosystem Highlights engagement — carousel impression and tap-through rates
- Engagement Rewards mechanics — do behaviour triggers drive the expected actions?
- PITStop AI resolution rate — does the support bot handle common queries effectively?
- Impression tracking validation — is the analytics infrastructure capturing data correctly?
- Support model load testing — volume of queries, escalation rates

**Exit criteria:** Go/no-go assessment for public launch based on stability metrics, activation rates and engagement baseline data.

---

### 4.5 Phase 3: Public Launch at Money 2026 (June 2026)

Public UK launch coordinated with X Media at the Money 2026 conference.

#### Live at Launch

- Wallet-first UX with branded virtual Visa debit card
- Full card management (controls, details, freeze, order physical card at £4.99, Apple/Google Wallet)
- Basic outbound payments (external UK bank transfers)
- Ecosystem Highlights carousel on wallet home
- Engagement Rewards (basic behaviour-triggered mechanics)
- Rewards tab with X Media/Q Media content (Merch, Events, Rewards, Experiences, Partner)
- Shop tab linking to external Q Media Shopify store
- PITStop AI Tier 1 support
- Account management (profile, bank details, card management)
- Referral tracking (basic)
- Scheme marketing tracking metrics
- Physical card orderable (virtual-first, physical on request)
- Three account tiers: Everyday (£4.99/mo), Plus (£6.99/mo), Premium (£89.99/yr)

#### Not Live at Launch

| Feature | Rationale | Target Phase |
|---------|-----------|-------------|
| Content feeds (Buzz, Insider, Spotlight) | Replaced by Ecosystem MVP — see Section 5.4 | Phase 4+ |
| P2P payments | Compliance and fraud complexity — see Section 5.1 | Phase 4 |
| Standing orders and direct debits | Requires BACS infrastructure — see Section 5.2 | Phase 4 |
| Request money | Same regulatory burden as P2P — see Section 5.1 | Phase 4 |
| Community and social features | Moderation risk, unclear ROI until scale — see Section 5.3 | Phase 4+ |
| Savings pots | Adds complexity to account structure | Phase 4 |
| Card customisation | Nice-to-have, not core to launch value | Phase 4 |
| Creator commerce and marketplace | Requires proven user base | Phase 5 |
| Crypto and Web3 | Requires proven unit economics | Phase 5 |
| Deep personalisation | Requires engagement data from Phases 1–3 | Phase 4 |
| Sponsor-funded campaigns | Requires active user base and engagement data | Phase 4 |
| EU market expansion | UK stability first | Phase 4+ |

---

### 4.6 Phase 4: Growth and Monetisation (H2 2026)

**[EVOLVED]** — previously grouped as "Later Phases" in the original roadmap. Now structured with explicit entry criteria.

**Entry criteria (gate):** 25,000 monthly transacting users. This means users who have made at least one card transaction in the calendar month — not just registered or activated accounts. Active transacting users are the metric that drives interchange revenue and scheme marketing eligibility.

**Planned additions:**
- Sponsor-funded campaigns and rewards (REW-011, using impression and conversion data from Phase 1 infrastructure)
- Segmented offers (using tier and segment tagging from Phase 1 infrastructure)
- Enhanced analytics dashboard for X Media — engagement, conversion and spend data
- Limited personalisation rules (data-informed, not speculative)
- Standing orders and direct debits (PAY-004, PAY-005)
- Transfer between own accounts/pots (PAY-003)
- Card customisation (WAL-016)
- Savings pots (WAL-017)
- Expanded rewards mechanics — spend-to-earn (REW-008), referral tiers (REW-009)
- My Payouts section (ACC-009)
- P2P payments — only if strategically justified by usage data (PAY-007, PAY-008)

**Still deferred past Phase 4:**
- Community and social features (moderation risk, no proven ROI yet)
- Marketplace and creator commerce (requires scale)
- Full content feeds (only if Ecosystem MVP data justifies the editorial investment)

---

### 4.7 Phase 5: Strategic Expansion (2027)

**[UNCHANGED]** in scope, but with explicit entry criteria added.

**Entry criteria:** Proven unit economics — subscription revenue plus interchange income covers customer acquisition cost per cohort.

- Advanced rewards engine with sophisticated earn and redeem mechanics
- Deeper ecosystem integration (content feeds, if Phase 4 data supports the investment)
- Crypto buy/sell via licensed third-party provider
- Token-gated fan experiences
- Marketplace for partner merchandise and digital goods
- EU market expansion
- Personalised AI-driven offers (REW-010)

---

## 5. Deferred Features — Phasing Rationale

The following features were discussed in X Media's feedback or the original roadmap. We recommend deferring them to later phases. In each case, the infrastructure to support these features is being designed into Phase 1 — they are planned, not abandoned.

### 5.1 Peer-to-Peer Payments and Request Money

**Your feedback included:** Transfers between users, request money from other Tribe users.

**Our recommendation:** Phase 4, gated on active user volume.

**Rationale:** P2P payments introduce significant compliance obligations — AML monitoring of user-to-user flows, fraud detection for social engineering and scam payments, and dispute resolution between users. These are solvable but add substantial compliance work that would put the June launch at risk. At launch, outbound bank transfers cover the core payment use case. P2P becomes strategically valuable at scale, when Tribe-to-Tribe transfers create a closed-loop economy that increases platform stickiness.

**Commitment:** The user account and wallet architecture built in Phase 1 is designed to support P2P. The rewards ledger and user segmentation are prerequisites that will be in place.

### 5.2 Standing Orders and Direct Debits

**Your feedback included:** Standing orders and direct debit management.

**Our recommendation:** Phase 4.

**Rationale:** Direct debit origination requires BACS membership or sponsored access through Equals — this needs commercial and technical confirmation. Standing orders require scheduling infrastructure with guaranteed execution, retry logic and failure notifications. Both carry failed-payment risk that needs robust handling. Basic outbound transfers cover the urgent need at launch. We recommend adding these once the core payment rails have been tested through pilot and public launch.

### 5.3 Community and Social Features

**Original roadmap included:** Community features referenced for later phases.

**Our recommendation:** Phase 4 at earliest, likely Phase 5.

**Rationale:** Social features — comments, feeds, user interactions — require content moderation at scale and carry brand safety risk. The ROI is unclear until the user base reaches a size where network effects create organic engagement. The Ecosystem MVP approach (Ecosystem Highlights and Engagement Rewards) provides measurable engagement without moderation overhead. If engagement data from Phases 1–3 shows strong user appetite for social interaction, community features can be introduced with evidence-informed design.

### 5.4 Content Feeds (Buzz, Insider, Spotlight)

**Original roadmap included:** Rich content screens with social interactions, articles, curated collections and video content.

**Our recommendation:** Replaced by the Ecosystem MVP for launch. Full content feeds deferred to Phase 4 at earliest.

**Rationale:** Content feeds require editorial operations — someone needs to create, curate and schedule content on an ongoing basis. They also require moderation and carry the risk of stale content degrading the user experience. The Ecosystem MVP achieves the same strategic goal — app stickiness and brand presence beyond balance-checking — with dramatically lower operational burden. If the Ecosystem Highlights carousel metrics show strong engagement in Phase 3, content feeds can be reintroduced in Phase 4 with data-informed decisions about which content types perform best.

---

## 6. Dependencies and Commitments

### From X Media / Q Media

| Dependency | Timing | Notes |
|------------|--------|-------|
| Brand assets (logos, imagery, colour specs) | End of Feb 2026 | Required for themed builds |
| Rewards content (Merch, Events, Experiences, Partner items) | March 2026 | Product images, descriptions, pricing for Rewards tab |
| Reward funding commitment | During Scope Alignment | Budget for Engagement Rewards incentives (cashback, prizes, perks) |
| Scheme marketing target alignment | During Scope Alignment | Shared KPIs and growth targets |
| Review and sign-off on this roadmap | February 2026 | Enables Phase 1 build to proceed on confirmed scope |

### From Tribe

| Commitment | Timing |
|------------|--------|
| Product Specification (next deliverable) | Following roadmap sign-off |
| Lightweight Use Cases | Following product spec |
| Updated wireframes and prototype | Following use cases |
| Updated SOW aligned to this roadmap | Following roadmap sign-off |
| Technical architecture and infrastructure | Phase 1 build |
| PITStop AI training and configuration | Phase 1 build |

### From Equals / Railsr

| Dependency | Timing | Notes |
|------------|--------|-------|
| API documentation and sandbox access | Q1 2026 | For onboarding, KYC, card, transaction APIs |
| KYC verification service | Phase 1 | UK identity verification |
| Virtual card issuance | Phase 1 | Visa card provisioning |
| Physical card production | Phase 3 | £4.99 per card, 5–7 day delivery |
| Transaction processing and settlement | Phase 1 | Payments, top-ups, transfers |

---

## 7. Success Metrics

Shared KPIs that define what good looks like. These metrics gate entry to Phase 4.

### Pilot Phase (Phase 2)

| Metric | Target | Source |
|--------|--------|--------|
| Onboarding completion rate | >80% of invited users complete registration | Analytics |
| Card activation rate | >70% activate within 7 days of onboarding | Analytics |
| Monthly transacting users | >60% of activated users make at least one transaction per month | Analytics |
| Ecosystem Highlights tap-through | >15% of impressions result in a tap | Impression tracking |
| Engagement Rewards redemption | >10% of eligible users trigger at least one reward | Rewards ledger |
| PITStop resolution rate | >80% of Tier 1 queries resolved without escalation | Support platform |
| App crash rate | <1% of sessions | Crash reporting |

### Launch Phase (Phase 3)

| Metric | Target | Source |
|--------|--------|--------|
| Monthly active users (3 months post-launch) | Aligned to scheme marketing targets | Analytics |
| Monthly transacting users | 25,000+ (Phase 4 entry gate) | Analytics |
| Card spend velocity | Increasing month-on-month | Transaction data |
| App Store rating | >4.0 stars | App Store / Google Play |
| Referral conversion rate | >5% of users refer at least one activated friend | Referral tracking |

---

## 8. What Comes Next

This roadmap baseline is the first step. The following deliverables will build on this foundation:

1. **This document** — Updated Roadmap Baseline *(current — for X Media review and alignment)*
2. **Product Specification** — Detailed feature descriptions per phase, building on SOW feature IDs
3. **Lightweight Use Cases** — Key user journeys: onboarding, first transaction, rewards discovery, referral, support
4. **Updated Wireframes** — Visual reference for new and modified flows, evolving the existing clickable prototype
5. **Updated SOW** — Revised to align with this roadmap, incorporating new Ecosystem MVP feature IDs and adjusted phasing for payments features

Each document builds on the previous. We recommend reviewing and aligning on this roadmap before progressing to the detailed specification.

---

## Appendix: Change Log from January 2026 Roadmap

A summary of every change from the original roadmap for quick reference.

| Item | Jan 2026 Roadmap | Feb 2026 Baseline | Change |
|------|-----------------|-------------------|--------|
| Home screen | Content-integrated | Wallet-first (banking-centric) | **[EVOLVED]** |
| Navigation structure | 5 areas with content focus | 4 tabs: Wallet, Payments, Rewards, Shop + side menu | **[EVOLVED]** |
| Card management | Basic card display | Full hub: freeze, details, controls, limits, order, Apple Wallet | **[EVOLVED]** |
| Transaction history | Basic list | Search, date filter, pending/completed sections | **[EVOLVED]** |
| PITStop AI support | Not in original | In-app AI chatbot for Tier 1 queries | **[NEW]** |
| Ecosystem Highlights | Not in original | Dynamic carousel on wallet home (1–3 slots) | **[NEW]** |
| Engagement Rewards | Not in original | Behaviour-triggered reward mechanics | **[NEW]** |
| Analytics infrastructure | Not explicit | Event tracking, impressions, conversions, rewards ledger | **[NEW]** |
| GDPR consent framework | Not explicit | Tagged consent layer for all data collection | **[NEW]** |
| Rewards tab content | Part of content-first approach | 5 sub-tabs with X Media/Q Media content (preserved) | **[UNCHANGED]** |
| Content feeds (Buzz/Insider/Spotlight) | Phase 1 | Replaced by Ecosystem MVP | **[DEFERRED]** |
| P2P payments | Phase 3–4 | Phase 4, gated on active user volume | **[MOVED]** |
| Request money | Phase 3–4 | Phase 4, gated | **[MOVED]** |
| Standing orders | Phase 1 (tentative) | Phase 4 | **[MOVED]** |
| Direct debits | Phase 1 (tentative) | Phase 4 | **[MOVED]** |
| Community/social features | Phase 4 | Phase 4–5, gated on ROI evidence | **[MOVED]** |
| Crypto/Web3 | Phase 4–5 | Phase 5, gated on proven unit economics | **[UNCHANGED]** |
| Physical cards | At launch | Orderable from launch (£4.99), virtual-first UX | **[EVOLVED]** |
| Phase 4 entry criteria | Not specified | 25k monthly transacting users | **[NEW]** |
| Phase 5 entry criteria | Not specified | Proven unit economics | **[NEW]** |

---

*This document is confidential and intended for Tribe Systems and X Media Media Group only.*
