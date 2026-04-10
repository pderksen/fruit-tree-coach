# Phase 6: Products, Affiliates & Profile

## Context

This is the monetisation and profile enhancement phase. Fertilizer recommendations get standardised to preferred organic brands, all product links become Amazon affiliate URLs, and the profile page gets real functionality for account management and subscription. This phase prepares the app for revenue generation and a more complete user account experience.

## Images Needed

**None.** Product images are pulled from Amazon links/URLs at display time. No local image assets needed.

---

## Tasks

### 1. Standardise Fertilizer Recommendations

- **File:** `lib/mocks/guides.ts`
- **Change:** Update all fertilizer product recommendations across every guide to use these two brands in order:
  1. **Primary:** Espoma organic fertilizers (e.g., Citrus-tone, Holly-tone, Plant-tone — match to tree type)
  2. **Secondary:** Dr. Earth organic fertilizers (e.g., Exotic Blend for citrus, Home Grown for fruit trees)
- **Specific updates:**
  - **Apple guides** (dt1 Winter Pruning, dt2 Thinning, dt3 Fertilizing):
    - Primary: "Espoma Tree-tone Organic Fertilizer (6-3-2)" — slow-release granular for fruit trees
    - Secondary: "Dr. Earth Home Grown Tomato, Vegetable & Herb Fertilizer (4-6-3)" — also works for fruit trees
  - **Peach guides** (dt4 Bud Monitoring, any new pruning/fertilizing guides):
    - Primary: "Espoma Tree-tone Organic Fertilizer (6-3-2)"
    - Secondary: "Dr. Earth Home Grown Organic Fertilizer (4-6-3)"
  - **Lemon guide** (dt5 Spring Feeding) — already has Espoma Citrus-tone and Dr. Earth Exotic Blend; verify and keep
  - **Fig guide** (dt6 Drainage Check):
    - Add fertilizer recommendations if not present
    - Primary: "Espoma Tree-tone Organic Fertilizer (6-3-2)"
    - Secondary: "Dr. Earth Home Grown Organic Fertilizer (4-6-3)"
  - **Any pest control or harvest guides added in Phase 4:** Add relevant Espoma/Dr. Earth products where fertilizer is mentioned
- **Rule:** Espoma always listed first, Dr. Earth second. Other brands (e.g., Jobe's) can remain as a third option if already present but should not replace the top two

### 2. Add Amazon Affiliate URLs to All Products

- **Type update:** Add `affiliateUrl` optional field to `ProductRecommendation` in `lib/mocks/guides.ts`:
  ```ts
  export interface ProductRecommendation {
    name: string;
    category: "fertilizer" | "pruning-tool" | "pest-control" | "other";
    description: string;
    affiliateUrl?: string;
  }
  ```
- **Data update:** Add Amazon affiliate URLs to every product in `MOCK_GUIDES`
  - URL format: `https://www.amazon.com/dp/ASIN?tag=YOUR_AFFILIATE_TAG`
  - Use placeholder tag (e.g., `tag=fruittreecoach-20`) until real affiliate account is set up
  - Each product needs its correct Amazon ASIN
- **UI update in `app/tree/guide/[taskId].tsx`:**
  - Wrap each product card in a `Pressable`
  - On press, open the affiliate URL with `Linking.openURL(product.affiliateUrl)`
  - Add a small external link icon (`open-outline`) and "View on Amazon" text
  - Style the link text in `text-brand-600` to indicate it's tappable
  - Products without an `affiliateUrl` render without the link (graceful fallback)

### 3. Add Affiliate Disclaimer

- **File:** `app/tree/guide/[taskId].tsx`
- **Placement:** Below the "Recommended Products" section, after all product cards
- **Content:**
  > "By shopping through these links, we receive a small commission — at no cost to you. Thank you for supporting us!"
- **Style:**
  - Italic text, small font (`text-xs italic text-gray-400`)
  - Subtle separator above (thin `border-t border-gray-100` with `mt-3 pt-3`)
- **Condition:** Only render the disclaimer if at least one product has an `affiliateUrl`

### 4. Profile/Account Page Enhancements

- **File:** `app/profile.tsx`
- **Current state:** Static display of name, zip code, gardening zone, subscription status, and sign-out button
- **Enhancements:**

#### 4a. Editable Account Info

- Make name, zip code, and gardening zone fields tappable/editable
- On tap, show an inline edit mode (text field replaces the static value) or navigate to an edit modal
- Use `react-hook-form` + Zod for field validation:
  - Name: required, 1–50 characters
  - Zip code: 5-digit US zip code format
  - Gardening zone: valid USDA zone (1a–13b)
- Save changes to Zustand store (local for now; Supabase sync in future)
- Auto-derive gardening zone from zip code if possible (use a lookup table or API)

#### 4b. Subscription Management Section

- Expand the existing Subscription card:
  - Show current plan: "Free Trial", "Monthly", or "Annual"
  - Show trial expiry date or next billing date
  - "Manage Subscription" button → opens subscription management
    - For iOS: link to App Store subscription management
    - For Android: link to Google Play subscription management
    - Use `Linking.openURL` with the appropriate platform URL
  - "Restore Purchases" button for users who reinstalled
- Style: keep consistent with existing card design (`rounded-2xl bg-white p-4`)

#### 4c. Additional Profile Rows

Add new info rows to the profile:

| Field | Icon | Source |
|---|---|---|
| Email | `mail-outline` | From Supabase auth (placeholder for now) |
| Member since | `calendar-outline` | From Supabase user metadata |
| Trees in orchard | `leaf-outline` | Count from tree store |
| App version | `information-circle-outline` | From `expo-constants` |

#### 4d. Danger Zone

- Below subscription, add a "Danger Zone" section:
  - "Delete Account" button (red, outlined)
  - On press: confirmation alert → call Supabase account deletion → sign out → redirect to splash
  - For now, just show the confirmation alert and sign out (no real Supabase deletion yet)

---

## File Summary

| Action | Path |
|---|---|
| Modify | `lib/mocks/guides.ts` (standardise fertilizers, add affiliate URLs) |
| Modify | `app/tree/guide/[taskId].tsx` (affiliate links, disclaimer, external link UI) |
| Modify | `app/profile.tsx` (editable fields, subscription management, new rows, delete account) |
| Modify | `lib/types.ts` or `lib/mocks/guides.ts` (add `affiliateUrl` to `ProductRecommendation`) |

---

## Verification

1. `npm run typecheck` passes
2. `npm test` passes
3. `npm run lint` passes
4. Manual checks:
   - All fertilizer guides list Espoma first, Dr. Earth second
   - Every product with an affiliate URL shows "View on Amazon" link
   - Tapping a product link opens the Amazon URL in the device browser
   - Products without URLs render normally (no broken link)
   - Affiliate disclaimer appears below products section on every guide that has affiliate links
   - Disclaimer does NOT appear if no products have affiliate URLs
   - Profile page: tapping name/zip/zone enters edit mode
   - Profile page: edited values persist after navigating away and back
   - Profile page: zip code validates as 5 digits, invalid input shows error
   - Profile page: subscription section shows plan and management button
   - Profile page: "Manage Subscription" opens platform-appropriate subscription URL
   - Profile page: new rows (email, member since, tree count, app version) display correctly
   - Profile page: "Delete Account" shows confirmation alert, sign-out works
   - Both iOS and Android: affiliate links open correctly, subscription links go to the right store
