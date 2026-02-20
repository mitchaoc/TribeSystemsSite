# Feature Catalogue — Tribe x Veloce MVP

**Version:** 0.1 (Draft for review)
**Date:** February 2026
**Scope:** Phase 1 + Phase 1B (IN-scope MVP features only)

This document describes what the app does from the user's perspective, organised by feature group. It is the single source of truth for wireframing and development.

**How to read this document:**
- Each feature group describes a user-facing area of the app
- **Flow** sections describe the sequence of screens — what the user sees, in order
- **Acceptance criteria** define when the feature is done
- **Open questions** are things we need to resolve before or during build
- **Integration** notes say what comes from Equals vs what Tribe builds
- Feature IDs (e.g. ONB-001) match the roadmap and will carry through to dev tickets

---

## 1. Onboarding & Registration (ONB-001 to ONB-015)

### Purpose

Take a new user from app download to funded account with a virtual Visa debit card. The entire flow should feel like joining a fan club that happens to come with a bank account — not filling in a banking application form.

### Flow

The onboarding is a linear 6-step form with a progress bar, bookended by a welcome screen and a completion celebration. Veloce-branded racing illustrations appear throughout.

**Screen 1 — Welcome (ONB-001)**
- Partner-branded splash with logo and tagline
- Two options: "I'm new here" (starts registration) and "Log in" (returning users)
- Visual ref: `designs/Screenshot-2026-02-05-splash.png`

**Screen 2 — Choose Your Card (ONB-002)**
- Three tier cards: Everyday (£4.99/mo), Plus (£6.99/mo), Premium (£89.99/yr)
- Each card shows: name, price, one-line description, radio button selector
- "See full product details" link per tier opens the detail screen (ONB-003)
- Default selection: none — user must actively choose
- Visual ref: `designs/Screenshot-2026-02-05-onboard1.png`

**Screen 2a — Tier Details (ONB-003)**
- Scrollable detail page per tier with four sections:
  - Features & Perks (banking features, content access, support level)
  - Fees & Limits (ATM allowances, FX fees, daily spend limits)
  - Legal & Important Info (bank discretion notice, upgrade/downgrade, T&C reference)
  - Privacy & Data Use (GDPR, data collection purpose, privacy notice acceptance)
- Close (X) returns to tier selection
- Visual ref: `designs/Screenshot-2026-02-05-onboard2.png` through `onboard5.png`

**Screen 3 — Name Entry, Step 1 of 6 (ONB-004)**
- Progress bar appears: step 1 of 6 highlighted
- Fields: Given name(s), Surname
- Helper text: "as it appears on your photo ID"
- Lists accepted ID types (passport, driving licence)
- Minimum 2 characters per field
- Links to Terms of Service and Privacy Policy in footer
- Visual ref: `designs/Screenshot-2026-02-05-onboard6.png`

**Screen 4 — Email Entry, Step 2 of 6 (ONB-005)**
- Fields: Email address, Confirm email address
- Standard email format validation

**Screen 5 — Email Verification (ONB-006)**
- 6-digit code input (individual digit boxes)
- Branded illustration: racing car with "GOTTA CHECK YOUR INBOX!" and confetti
- "Resend code" link at bottom
- Auto-advances on successful code entry
- Visual ref: `designs/Screenshot-2026-02-05-onboard10.png`

**Screen 6 — Mobile Number, Step 3 of 6 (ONB-007)**
- Phone number field with country code prefix (UK default +44)
- Used for account verification and security alerts

**Screen 7 — Keycode Creation, Step 4 of 6 (ONB-008)**
- Create a 6-digit keycode
- Instruction: must differ from device passcode
- Second screen: confirm keycode (re-enter)
- This becomes the fallback authentication method

**Screen 8 — Biometric Setup (ONB-009)**
- Prompt to enable Face ID or Fingerprint
- Two options: "Enable now" or "Enable later"
- If enabled, biometric becomes the primary auth method; keycode is fallback
- This is optional but recommended — UI should nudge toward enabling

**Screen 9 — Date of Birth, Step 5 of 6 (ONB-010)**
- Date picker (day/month/year)
- Used for identity verification and age check (must be 18+)

**Screen 10 — Address Entry, Step 6 of 6 (ONB-011)**
- Fields: Address Line 1*, Address Line 2, Town/City*, Postcode*, Country Code* (dropdown, UK default)
- Helper text: "exactly as it appears on your ID or official documents"
- "Submit address" button
- Visual ref: `designs/Screenshot-2026-02-05-onboard15.png`

**Screen 11 — KYC Verification (ONB-012)**
- Loading/processing state while Equals API runs identity checks
- On success: celebration screen with branded "You've Passed the Checks" illustration
- On failure: clear messaging explaining what went wrong, link to PITStop support
- Visual ref: `designs/Screenshot-2026-02-05-onboard16.png`

**Screen 12 — Legal Agreements (ONB-013)**
- "You're almost at the finish line!" heading
- Two checkboxes: Terms of Service, Privacy Policy
- Each links to full document (hosted on tribesystems.ai)
- Both must be checked to proceed
- "Agree and continue" button
- Visual ref: `designs/Screenshot-2026-02-05-onboard17.png`

**Screen 13 — Initial Payment (ONB-014)**
- Shows the virtual card (branded, with partner imagery)
- Message: "Your account has been approved and now you just need to make your initial payment"
- Notice: "The monthly fee will be deducted from your account each month so please make sure you have funds in your account to cover it"
- Three options:
  - "Pay using another card" → opens card/Apple Pay payment sheet
  - "Add funds to my account" → shows account details for bank transfer
  - "I've added funds — continue" → skips to card issuance
- Visual ref: `designs/Screenshot-2026-02-05-onboard18.png`, `onboard19.png`, `onboard20.png`

**Screen 14 — Add to Wallet (part of ONB-015)**
- Shows the branded virtual Visa card
- "Add your card to your wallet for quick and easy access"
- "Add to Apple Wallet" button (Apple Wallet SDK)
- "Add to wallet later" link to skip
- Visual ref: `designs/Screenshot-2026-02-05-onboard22.png`

**Screen 15 — Wallet Home (ONB-015 complete)**
- User arrives at the Wallet home screen (WAL-001) with their new virtual card displayed
- Onboarding is complete

### Acceptance Criteria

- Full registration completable in a single session (target: under 5 minutes for happy path)
- Progress is resumable — if user exits mid-flow and re-opens the app, they return to where they left off (requires server-side state, not just local)
- All form fields have inline validation and error states (not just on submit)
- KYC failure shows clear, non-technical messaging with a path to support
- Biometric enrolment is optional — user can complete onboarding without it
- Legal documents must be accepted before account creation — cannot be bypassed
- Tier selection is changeable up until the payment confirmation screen
- Email verification code expires after 10 minutes; resend generates a new code
- 18+ age check enforced at date of birth entry (under 18 = blocked with messaging)

### Integration

| Step | Tribe builds | Equals provides |
|------|-------------|----------------|
| Registration screens | All UI, form validation, progress state | — |
| Email verification | Send verification email, validate code | — |
| KYC | Trigger KYC check, handle response | Identity verification API (PEP/sanctions screening, document checks) |
| Account creation | Call API on KYC success | Account creation API (generates account number, sort code) |
| Card issuance | Display card, trigger Apple/Google Wallet | Virtual card issuance API (generates PAN, CVV, expiry) |
| Initial payment | Payment UI, Apple Pay / card payment sheet | Payment processing API |
| Tier assignment | Send selected tier with account creation | Tier/product configuration |

### Open Questions

1. **Resumable progress** — How much onboarding state do we persist server-side? If a user completes steps 1-3, closes the app, and returns a week later, do they restart or continue? Recommendation: persist all completed steps server-side, resume from last incomplete step.

2. **Email verification timing** — Does email verification happen before or after KYC? The Figma shows it at step 2 (before KYC). This means we collect email early. Alternative: defer verification to after account creation. Recommendation: keep as-is (step 2) — early email lets us send the KYC result notification.

3. **Payment amount on initial payment screen** — The Figma shows "Pay $135.00" on the Apple Pay sheet. Where does this amount come from? Is it the first month's subscription fee, or a minimum initial funding amount? Recommendation: clarify with Veloce whether there's a minimum initial top-up required or if the first month's fee (£4.99/£6.99) is the only required payment.

4. **KYC failure handling** — What are the possible failure reasons from Equals, and do we need different messaging for each? (e.g. "name doesn't match ID" vs "address not found" vs "sanctions match"). Needs Equals API documentation review.

5. **Under-18 handling** — Do we hard-block under 18s, or is there a future plan for junior/family accounts? Recommendation: hard-block for MVP with messaging "You must be 18 or over to open an account."

6. **Add to Apple Wallet timing** — The Figma shows this as the final onboarding step. Should it also be offered later from Card Controls (WAL-009)? Recommendation: yes — offer at onboarding AND in card controls, since some users will skip it initially.

---

## 2. Wallet (WAL-001 to WAL-018)

### Purpose

The wallet is the app's home screen and primary experience. It shows the user their money, their card, and their recent activity. Every session starts here. It should feel like opening your wallet — immediate, clear, trustworthy.

### Flow Overview

The wallet is not a linear flow — it's a hub. The home screen links to several sub-screens:

```
Wallet Home (WAL-001)
├── Card image (WAL-002) → tap → Card Details (WAL-012)
├── Balance (WAL-003)
├── Card Controls button → Card Controls Hub (WAL-008)
│   ├── Add to Apple Wallet (WAL-009)
│   ├── Activate Card (WAL-010)
│   ├── Order Physical Card (WAL-013) → Order Flow
│   ├── Report Card Issue (WAL-014)
│   └── Allowances & Limits (WAL-015)
├── Add Funds button → Add Money (WAL-006)
│   └── Account Details overlay (WAL-007)
├── Latest Transactions (WAL-004) → tap "see all" → Full History (WAL-005)
├── Freeze/Unfreeze toggle (WAL-011)
└── Ecosystem Highlights carousel (WAL-018)
```

### Screens

**Wallet Home (WAL-001, WAL-002, WAL-003, WAL-004)**

The main screen. Stacked vertically:

1. **Header bar** — User profile icon (top-left, opens side menu/account), user name
2. **Balance** — Large, prominent. e.g. "£693.74". Updates in real-time after transactions and top-ups.
3. **Card image** — Branded virtual Visa debit card showing last 4 digits and partner imagery (racing car for Veloce). Tappable → opens Card Details (WAL-012). Card changes appearance per partner theme.
4. **Quick action buttons** — Two buttons below card:
   - "Card controls" (shield icon) → Card Controls Hub (WAL-008)
   - "Add funds" (plus icon) → Add Money (WAL-006)
5. **Latest Transactions** — Heading "Latest Transactions" with date group. Shows 3-5 most recent transactions. Each row: merchant name, location, merchant logo (circular), amount (red for debits, green for credits). Tapping a transaction → full transaction list (WAL-005). Tapping "see all" or scrolling → full list.
6. **Ecosystem Highlights carousel** (WAL-018) — 1-3 dynamic cards below transactions. See Section 4.3 of roadmap for detail.

Visual ref: `designs/Screenshot-2026-02-05-bank1.png`

**Full Transaction History (WAL-005)**

Dedicated screen accessed from wallet home.

- **Header**: "Transactions" with close (X) button
- **Search** (magnifying glass icon, top-left) — searches by merchant name
- **Date filter** (calendar icon, top-right) — filter by date range
- **Pending section** — Purple header "Pending", shows date and running balance, then transaction rows
- **Completed section** — Purple header "Completed", same format
- **Transaction row**: Merchant name, location, circular merchant logo, amount (colour-coded)
- Running balance shown per date group

Visual ref: `designs/Screenshot-2026-02-05-bank2.png`

**Add Money (WAL-006)**

Modal or full screen accessed from wallet home "Add funds" button.

- **Header**: "Add Money" with close (X)
- Two methods presented with branded illustration:
  1. **Card or digital wallet** — Apple Pay, Google Pay, Visa, Mastercard logos. "The funds will arrive instantly in your account."
  2. **Bank transfer** — tapping shows Account Details overlay (WAL-007)

Visual ref: `designs/Screenshot-2026-02-05-bank3.png`

**Account Details Overlay (WAL-007)**

Bottom sheet/overlay shown when user selects bank transfer in Add Money.

- Account Name (e.g. "Mr Quentin Armitage")
- Account Number (e.g. "25475971") with copy button
- Sort Code (e.g. "51-92-87") with copy button
- Close (X) to dismiss

Visual ref: `designs/Screenshot-2026-02-05-bank4.png`

**Card Controls Hub (WAL-008)**

Central card management screen.

- **Header**: "Card Controls" with close (X)
- Virtual card image displayed at top (same as wallet home)
- Description: "Everything you need to manage your card in one place"
- **Action list** (vertically stacked buttons):
  - Add to Apple Wallet (WAL-009) — Apple Wallet icon
  - Activate Card (WAL-010) — check icon
  - Order Physical Card (WAL-013) — card icon
  - Report Card Issue (WAL-014) — info icon
  - Card Allowances & Limits (WAL-015) — chart icon
- Freeze card toggle is accessible from this screen or wallet home (WAL-011)

Visual ref: `designs/Screenshot-2026-02-05-bank5.png`

**Add to Apple Wallet (WAL-009)**

Triggers the platform's native wallet provisioning flow:
- iOS: Apple Wallet SDK (PKAddPassesViewController)
- Android: Google Wallet API (Google Pay push provisioning)

No custom UI needed beyond the trigger — the platform handles the provisioning screens.

**Activate Card (WAL-010)**

For new virtual or physical cards that require activation:
- Enter last 4 digits of card number or activation code (for physical cards)
- Confirmation screen on success
- Error state if activation fails

**Freeze / Unfreeze Card (WAL-011)**

Toggle control (accessible from card controls hub and potentially wallet home):
- Freeze: immediately blocks all transactions. Card image/UI should visually indicate frozen state (e.g. greyed out, frost overlay, "FROZEN" badge)
- Unfreeze: immediately re-enables transactions
- Takes effect instantly — no delay
- Push notification sent on freeze/unfreeze

**View Card Details (WAL-012)**

Secure screen — requires biometric or keycode authentication before displaying.

- **Security notice banner** (purple): "These are your personal card details. They're just for you, so please keep them private and make sure no one else can see your screen."
- Fields (each with copy-to-clipboard button):
  - Name on Card (e.g. "Mr Q Armitage")
  - Card Number/PAN (e.g. "62437654..." — full number)
  - Expiry (e.g. "11/28")
  - CVV (e.g. "765")
- **"View my PIN" button** (bottom, with lock icon) — requires additional biometric/keycode confirmation, then displays PIN momentarily

Visual ref: `designs/Screenshot-2026-02-05-bank13.png`

**Order Physical Card (WAL-013)**

Multi-step flow:

1. **Order screen** — Shows virtual card image, current balance, card cost (£4.99 including delivery). Two payment options:
   - "Pay using another card" → external card payment
   - "Add funds to purchase" → use account balance
2. **Address confirmation** — Delivery address (pre-filled from registration). Option to contact support if address needs updating. Delivery time: 5-7 working days.
3. **Confirmation** — Order placed, expected delivery date, what to do when it arrives (activate via app)

Visual ref: `designs/Screenshot-2026-02-05-bank6.png`, `bank7.png`

**Report Card Issue (WAL-014)**

- Selection of issue type: Lost, Stolen, Damaged, Other
- For lost/stolen: immediately freezes the card, offers replacement order
- Links to PITStop support for complex cases
- Confirmation of actions taken

**Allowances & Limits (WAL-015)**

Tabbed display with two or three tabs:

**Allowances tab:**
- UK & EEA ATM allowance: £300 / 30 days
- International ATM allowance: £200 / 30 days
- Premium upgrade upsell banner: "Upgrade to a Premium Account to unlock higher allowances and additional card choices"

**Limits tab:**
- Contactless daily: £500
- Card transactions daily: £1,000
- ATM daily: £350
- ATM monthly: £10,000
- Fee info for exceeding allowances

**Transfers tab (if shown):**
- Top-up by bank transfer: unlimited
- Cash deposits: £1,000 / 6 months
- Transfers out daily: £1,000
- Tribe-to-Tribe daily: £2,500

Values vary by tier — the screen shows the current user's tier limits with the upsell prompt.

Visual ref: `designs/Screenshot-2026-02-05-bank8.png` through `bank12.png`

**Card Customisation (WAL-016) — OUT OF MVP**

Placeholder in card controls. "Coming soon" messaging.

**Savings Pots (WAL-017) — OUT OF MVP**

Not visible in MVP. No placeholder needed unless it aids the navigation structure.

**Ecosystem Highlights Carousel (WAL-018)**

Positioned on the wallet home screen, below the latest transactions. Dynamic carousel with 1-3 slots. See roadmap Section 4.3 for content types and tracking requirements.

This is the evolution of the static "Rewards & Perks" link in the original Figma. Instead of a link, it becomes a data-driven surface showing contextually relevant content:
- Reward unlock announcements
- Event-related incentives
- Limited-time partner offers
- VIP tier recognition

Each card tracks: impressions, tap-throughs, conversions. Content sourced from a remote config/API — not hardcoded.

### Acceptance Criteria

- Balance updates within 5 seconds of a transaction or top-up
- Transaction history supports search by merchant name and filtering by date range
- Card details screen requires biometric or keycode before displaying PAN, CVV, PIN
- Physical card order deducts £4.99 from balance or charges selected payment method
- Freeze/unfreeze takes effect immediately and is reflected in the card controls UI and card image
- Apple Wallet / Google Wallet provisioning follows platform-specific guidelines
- All monetary amounts display in GBP with comma separators and two decimal places
- Ecosystem Highlights carousel loads within 2 seconds of wallet home appearing
- Card image reflects the user's partner theme (Veloce or Quadrant)
- Merchant logos in transaction list load from a logo service — graceful fallback to merchant initial if not found

### Integration

| Feature | Tribe builds | Equals provides |
|---------|-------------|----------------|
| Balance display | UI, polling/websocket for updates | Balance API (real-time) |
| Transactions | UI, search, filtering, merchant logo resolution | Transaction history API (pending + completed) |
| Add funds (card/wallet) | Payment UI, Apple Pay / Google Pay integration | Payment processing API |
| Add funds (bank transfer) | Account details display | Account details API (acc number, sort code) |
| Card controls | All UI | — |
| Freeze/unfreeze | UI, toggle state | Card freeze/unfreeze API |
| Card details | Secure UI, biometric gate | Card details API (PAN, CVV, expiry, PIN) |
| Apple/Google Wallet | Platform SDK integration | Card provisioning tokens |
| Order physical card | Order flow UI, address confirmation | Physical card order API, fulfilment |
| Allowances & limits | UI, tier-aware display | Limits configuration per product/tier |
| Ecosystem Highlights | Carousel UI, impression/click tracking | — (Tribe-managed content API) |

### Open Questions

1. **Balance update mechanism** — Polling (every N seconds) or push-based (websocket/server-sent events)? Polling is simpler but introduces lag. Push is real-time but more complex. Recommendation: start with polling (every 10 seconds when wallet home is visible), migrate to push in Phase 4 when scale justifies it.

2. **Merchant logos** — Where do merchant logos come from? Options: (a) Equals provides them via transaction API enrichment, (b) Tribe integrates a third-party service like Brandfetch or Clearbit, (c) manually curated for top merchants, generic fallback for others. Recommendation: check what Equals provides first — many BaaS platforms include merchant enrichment.

3. **Frozen card visual treatment** — The Figma doesn't show a frozen state. Need to design this. Recommendation: grey overlay on card image, "FROZEN" badge, and a prominent unfreeze button on the wallet home screen.

4. **Card details — data masking** — Should PAN/CVV be masked by default with a "reveal" tap, or shown immediately after biometric auth? The Figma shows them revealed. Recommendation: show immediately after biometric auth (the auth IS the reveal gate), but auto-hide after 60 seconds for security.

5. **Transaction detail view** — The Figma shows transactions in a list but doesn't show a detail view for a single transaction (tap on a row). Do we need one? Recommendation: not for MVP. The list view shows enough (merchant, amount, date, location). Detail view (with receipt data, category, notes) is a Phase 4 enhancement.

6. **Physical card activation** — What is the activation method? Last 4 digits? Activation code included in the packaging? PIN entry at ATM? Needs Equals documentation review.

7. **Ecosystem Highlights content source** — Is this a Tribe-managed CMS, a remote config service (Firebase Remote Config, LaunchDarkly), or a custom API? Recommendation: start with Firebase Remote Config for simplicity — it supports A/B testing and is free at our scale. Migrate to a custom API if the content management needs outgrow it.

8. **View PIN** — Does Equals provide a PIN reveal API, or is the PIN set during card issuance and stored? Some BaaS providers use a tokenised PIN reveal widget for security compliance. Needs Equals API documentation review.

---

*Remaining feature groups (Payments, Rewards, Shop, Account, Cross-Cutting) to follow after review of this format.*
