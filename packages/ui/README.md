# 🧬 Atomic Design System

This package provides the **Design System** for our applications — a unified library of reusable components, tokens, and patterns following the **Atomic Design methodology**.
It lives inside the monorepo under `packages/ui` and is shared across all client applications.

## 📖 Overview

The Design System ensures a **consistent, accessible, and scalable** user experience across products.  
It is built using **React**, **TypeScript**, and **Vanilla Extract CSS**, structured according to **Atomic Design principles**:

## ⚙️ Atomic Design Layers

### **1. Atoms** - The smallest, most fundamental UI building blocks.

Examples:

- `Avatar`, `Button`, `Icon`, `Input`, `Text`,
- Each atom is **pure**, **stateless**, and styled using design tokens.

Guidelines:

- Use only **tokens** for colors, spacing, and typography (no hardcoded values).
- Keep atoms accessible (`aria-*`, keyboard focus, contrast).
- No business logic.

### **2. Molecules** - Groups of atoms working together to form a reusable pattern.

Examples:

- `InputField` (Input + Label + Error message)
- `Card` (Container + Title + Actions)
- `Modal` (Overlay + Card + Buttons)

Guidelines:

- Encapsulate layout and relationships between atoms.
- Avoid API complexity; keep props composable.
- Support state and events (e.g. open/close, validation).

---

### **3. Organisms** - Complex UI sections made up of multiple molecules and/or atoms.

Examples:

- `Header`, `Footer`, `Sidebar`, `FormSection`, `ProductCardList`

Guidelines:

- Handle layout composition.
- Begin to incorporate real data props (but still UI-focused).
- Organisms are shared between templates or pages.

### **4. Templates** - Page-level wireframes that define layout structure using organisms.

Examples:

- `AuthLayout`, `DashboardLayout`

Guidelines:

- Define placement and hierarchy of organisms.
- Should not contain business logic.
- Accept children and layout configuration props.

### **5. Pages** - Final view composition using templates populated with real data.

Examples:

- `AccountPage`, `DashboardPage`, `HomePage`,

Guidelines:

- Pages connect to data fetching (via app layer).
- Typically live inside the app project, but examples exist here for Storybook docs and visual testing.

## 🎨 Theming

The design system supports **multiple brands and modes** (e.g. light/dark).  
It uses **Vanilla Extract CSS** with a `themeContract`, `sprinkles API` and `recipes API` to guarantee consistent variable names across themes.

Below is the current theme skeleton when creating a new brand/client

Example:

```ts
export const replaceWithThemeName = createTheme(tokens, {
  background: {
    hero: "",
    primary: "",
    secondary: "",
    tertiary: "",
    quarternary: "",
    quinary: "",
    senary: "",
    septenary: "",
    octonary: "",
  },
  border: {
    primary: "",
    secondary: "",
    tertiary: "",
    quarternary: "",
    quinary: "",
    senary: "",
  },
  borderRadius: {
    xxs: "",
    xs: "",
    sm: "",
    md: "",
    lg: "",
    xl: "",
    xl1: "",
    xl2: "",
  },
  brand: {
    primary: "",
    secondary: "",
    tertiary: "",
    quarternary: "",
    quinary: "",
  },
  button: {
    primary: "",
    primary_active: "",
    primary_text: "",
    secondary: "",
    secondary_active: "",
    secondary_text: "",
    tertiary: "",
    tertiary_active: "",
    tertiary_text: "",
    quarternary: "",
    quarternary_active: "",
    quarternary_text: "",
    disabled: "",
    disabled_text: "",
  },
  drag_handle: {
    brand: "",
    primary: "",
    disabled: "",
  },
  icons: {
    brand_background: "",
    brand_foreground: "",
    primary_background: "",
    primary_foreground: "",
    secondary_background: "",
    secondary_foreground: "",
    tertiary_background: "",
    tertiary_foreground: "",
    disabled_background: "",
    disabled_foreground: "",
    error_background: "",
    error_foreground: "",
  },
  pagination: {
    primary_active: "",
    primary_inactive: "",
    secondary_active: "",
    secondary_inactive: "",
  },
  pill: {
    primary: "",
    primary_text: "",
    secondary: "",
    secondary_text: "",
    tertiary: "",
    tertiary_text: "",
    positive: "",
    negative: "",
  },
  separator: {
    primary: "",
    secondary: "",
    tertiary: "",
    quarternary: "",
    quinary: "",
  },
  skeleton_shimmer: {
    primary: "",
    secondary: "",
  },
  spacing: {
    none: "",
    xxxs: "",
    xxs: "",
    xs: "",
    sm: "",
    md: "",
    lg: "",
    xl: "",
    xl1: "",
    xl2: "",
    xl3: "",
    xl4: "",
    xl5: "",
    xl6: "",
    xl7: "",
    xl8: "",
    xl9: "",
    xl10: "",
    xl11: "",
    xl12: "",
    xl13: "",
    xl14: "",
    xl15: "",
    xl16: "",
    xl17: "",
    xl18: "",
    xl19: "",
    xl20: "",
    xl21: "",
    xl22: "",
    xl23: "",
    xl24: "",
    xl25: "",
    xl26: "",
    xl27: "",
    xl28: "",
    xl29: "",
    xl30: "",
    xl31: "",
  },
  status: {
    brand_highlight: "",
    error_background: "",
    error_primary: "",
    error_secondary: "",
    info_background: "",
    info_primary: "",
    success_background: "",
    success_primary: "",
    success_secondary: "",
    warning_background: "",
    warning_primary: "",
    warning_secondary: "",
  },
  toast: {
    primary: "",
  },
  text: {
    primary: "",
    primary_contrast: "",
    secondary: "",
    secondary_contrast: "",
    tertiary: "",
    tertiary_contrast: "",
    link_primary: "",
    link_secondary: "",
    disabled: "",
    error: "",
  },
});
```
