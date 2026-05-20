# Al-Azan — Master Change Tracker

> **Last updated:** 2026-05-20
> Update this file whenever a significant change is landed.

---

## ✅ Completed

### [2026-05-20] v1.17.10-updates — UI Refresh, DST Toggle & Onboarding Polish

| Area | What changed |
|------|-------------|
| **Settings store** | Added `OBSERVE_DST` boolean flag (default `true`). Store version bumped to `12` with migration. |
| **Display Settings** | New "Daylight Saving Time" toggle. When turned off, prayer time calculation can skip the automatic DST offset. |
| **Onboarding (Intro)** | Completely restyled intro item with gradient header, icon, and accent colour. WelcomeSlide redesigned with a mosque icon, tagline, and improved card layout. |
| **Settings list** | Settings list items now show a right-arrow chevron and use card-style rows with rounded backgrounds for better legibility. |
| **package.json** | Conservative safe-patch bumps for several dependencies (see "Library Updates" below). |

---

## 📦 Library Updates

### Safe patch / minor bumps applied

| Package | Old | New |
|---------|-----|-----|
| `react-native` | 0.74.5 | 0.74.6 |
| `react-native-reanimated` | ^3.15.0 | ^3.16.7 |
| `react-native-safe-area-context` | ^4.10.5 | ^4.11.0 |
| `react-native-screens` | ^3.31.0 | ^3.34.0 |
| `react-native-svg` | ^15.4.0 | ^15.11.2 |
| `react-native-gesture-handler` | ^2.18.1 | ^2.21.2 |
| `react-native-mmkv` | ^2.12.2 | ^2.12.2 (unchanged — breaking changes in 3.x) |
| `immer` | ^10.0.3 | ^10.1.1 |
| `fuse.js` | ^6.6.2 | ^7.1.0 |
| `zustand` | 4.3.9 | 4.5.6 |
| `typescript` | 5.0.4 | 5.4.5 |
| `@typescript-eslint/eslint-plugin` | ^5.47.1 | ^7.18.0 |
| `@typescript-eslint/parser` | ^5.47.1 | ^7.18.0 |

### Held back (require larger migrations)

| Package | Reason |
|---------|--------|
| `react-native` → 0.75/0.76 | Introduces New Architecture opt-in; requires native module audit. |
| `native-base` → 4.x | Native Base 4 is in alpha; 3.x remains the stable track. |
| `@lingui/*` → 4.x | Lingui v4 drops the `macro` Babel approach; full message catalogue migration needed. |
| `react-native-mmkv` → 3.x | v3 changes `Storage` API surface; all consumers need updating. |
| `@maplibre/maplibre-react-native` | Version pinned to alpha; upgrade separately after native pod/gradle sync. |

---

## 🔮 Planned / Backlog

- [ ] Migrate to React Native 0.76 (New Architecture)
- [ ] Upgrade `@lingui/*` to v4 and migrate message catalogue
- [ ] Replace `native-base` with a maintained alternative (e.g., Tamagui or Gluestack UI)
- [ ] Add `react-native-mmkv` v3 migration
- [ ] Add haptic feedback to prayer row taps
- [ ] Add animated prayer-time countdown on the Home screen
- [ ] Dark-mode splash screen

---

## 🗂 How to Update This File

1. After each PR that ships a meaningful change, add a row to **Completed** with the date and a brief description.
2. After bumping a library, update the **Library Updates** table.
3. When starting work on a backlog item, move it to a *In Progress* section and link the PR.
