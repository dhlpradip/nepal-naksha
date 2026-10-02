# nepal-naksha-react 🇳🇵

> Fast, lightweight, zero-dependency React component that renders an interactive SVG map of all 77 districts and 7 provinces of Nepal.

[![npm version](https://img.shields.io/npm/v/nepal-naksha-react.svg)](https://www.npmjs.com/package/nepal-naksha-react)
[![npm downloads](https://img.shields.io/npm/dm/nepal-naksha-react.svg)](https://www.npmjs.com/package/nepal-naksha-react)
[![Live demo](https://img.shields.io/badge/demo-live-ef4444)](https://dhlpradip.github.io/nepal-naksha-demo/)

**Current release: `1.2.0`** — includes configurable delivery routes with named, hover-only labels.

**nepal-naksha** is built with accurate post-2015 federal boundaries, complete bilingual English & Nepali (Devanagari) metadata from [sandipbgt/nepal-data](https://github.com/sandipbgt/nepal-data), headquarters, smart alias resolution, and customizable theming.

[**View the interactive demo →**](https://dhlpradip.github.io/nepal-naksha-demo/)

---

## Features

- 🇳🇵 **All 77 Districts & 7 Provinces:** Complete, precise SVG boundary paths with seamless shared borders.
- 🔤 **Bilingual Support (English & Devanagari):** Official English names, Nepali script (*काठमाडौं, पोखरा, झापा*), and headquarters metadata.
- 🧠 **Smart Alias & Spelling Resolution:** Automatically matches spelling variants and colloquial forms (e.g. `Kavre` ↔ `Kavrepalanchok`, `Tanahu` ↔ `Tanahun`, `Chitwon` ↔ `Chitwan`, `Parasi` ↔ `Nawalparasi West`, `Rukum East`, etc.).
- 🎨 **Fully Customizable:** Theme base, active, selected, hover, border stroke, glow, and custom choropleth color functions.
- 🏷️ **Labels & Tooltips:** Built-in floating tooltips and centroid district labels.
- 🚚 **Delivery Routes:** Plot curved delivery or travel paths between district centers or custom SVG coordinates.
- ⚡ **Zero External Runtime Dependencies:** Only peer dependencies are `react` and `react-dom`.
- 🚀 **Next.js & SSR Ready:** Pre-bundled with `"use client"`. Works out of the box in Next.js App Router, Vite, Remix, Gatsby, and Astro.

---

## Installation

```bash
npm install nepal-naksha-react
# or
yarn add nepal-naksha-react
# or
pnpm add nepal-naksha-react
```

*(Peers: `react >= 18`, `react-dom >= 18`)*

---

## Quick Start

### 1. Basic Interactive District Picker

```tsx
"use client";

import { useState } from "react";
import { NepalNaksha, type ValidDistrict } from "nepal-naksha-react";

export default function App() {
  const [selected, setSelected] = useState<ValidDistrict | null>("Kathmandu");

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <NepalNaksha
        value={selected}
        onSelect={(district, meta) => {
          console.log(`Selected: ${district} (${meta.nepali}), HQ: ${meta.headquarters}`);
          setSelected(district);
        }}
      />
      {selected && <p>Selected District: <strong>{selected}</strong></p>}
    </div>
  );
}
```

---

### 2. Highlighting Specific Districts (Delivery, Offices, Stats)

Pass the `items` prop to highlight specific districts. Any unlisted district is rendered in the `base` color.

```tsx
import { NepalNaksha } from "nepal-naksha-react";

const branches = [
  { place: "Kathmandu", count: 12 },
  { place: "Kaski", count: 4 },
  { place: "Jhapa", count: 3 },
  { place: "Chitwan", count: 5 },
  "Morang", // can also be plain strings
];

export function BranchCoverage() {
  return (
    <NepalNaksha
      items={branches}
      colors={{
        base: "#f1f5f9",
        active: "#0ea5e9",
        selected: "#e11d48",
        hover: "#38bdf8",
      }}
      onSelect={(district, meta) => alert(`Clicked ${meta.name} - HQ: ${meta.headquarters}`)}
    />
  );
}
```

---

### 3. Nepali (Devanagari) Mode

Switch labels and default tooltips to Devanagari script with `language="ne"`:

```tsx
<NepalNaksha language="ne" showLabels={true} />
```

---

### 4. Province Filter

Focus on a specific province (by ID `1`–`7` or name like `"Bagmati"`, `"Gandaki"`, etc.):

```tsx
<NepalNaksha filterProvince="Gandaki" />
```

---

### 5. Choropleth / Heatmap Mode

Provide dynamic color values using `choropleth`:

```tsx
const populationDensity: Record<string, string> = {
  Kathmandu: "#7f1d1d",
  Lalitpur: "#991b1b",
  Bhaktapur: "#b91c1c",
  Morang: "#dc2626",
  Jhapa: "#ef4444",
  Kaski: "#f87171",
};

<NepalNaksha
  choropleth={(district) => populationDensity[district] || "#f8fafc"}
/>
```

### 6. Delivery Routes

Pass `routes` to draw delivery paths between district centers. Routes can also use raw `[x, y]` coordinates from the component's SVG viewBox:

```tsx
<NepalNaksha
  routes={[
    {
      name: "Eastern delivery",
      source: "Kathmandu",
      destination: "Jhapa",
      color: "#f97316",
      width: 3,
      dasharray: "8 6",
    },
  ]}
/>
```

Set `name` to show a route label while that route is hovered. Route colors and styles are independently customizable, so applications can build route editors by collecting two district names and creating `NepalNakshaRoute` objects.

---

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `(DistrictItem \| string)[]` | `undefined` | Districts to activate/highlight. If omitted, all 77 districts are selectable. |
| `value` | `DistrictInput \| null` | `undefined` | Controlled selected district name. |
| `defaultValue` | `DistrictInput \| null` | `undefined` | Initial uncontrolled selected district. |
| `onSelect` | `(district, meta) => void` | `undefined` | Callback invoked when a district is clicked. |
| `onDistrictMouseEnter` | `(district, e, meta) => void` | `undefined` | Hover enter event callback. |
| `onDistrictMouseLeave` | `(district, e, meta) => void` | `undefined` | Hover leave event callback. |
| `colors` | `NepalNakshaColors` | `{ ... }` | Color theme object (`base`, `active`, `selected`, `hover`, `stroke`, `selectedGlow`). |
| `language` | `"en" \| "ne"` | `"en"` | Display language for default tooltips and centroid labels. |
| `filterProvince` | `number \| string \| null` | `null` | Highlight a specific province (`1` to `7` or name e.g. `"Bagmati"`). |
| `showLabels` | `boolean \| "active" \| "hover"` | `false` | Render centroid text labels over districts. |
| `showTooltip` | `boolean` | `true` | Show floating tooltip on hover. |
| `renderTooltip` | `(district, meta, item) => ReactNode` | `undefined` | Custom tooltip renderer. |
| `renderSelected` | `(district, meta, item) => ReactNode` | `undefined` | Custom banner/card rendered beneath the map. |
| `choropleth` | `(district, meta, item) => string` | `undefined` | Return custom fill color for each district. |
| `routes` | `NepalNakshaRoute[]` | `[]` | Draw curved paths between district names or SVG `[x, y]` coordinates. |
| `className` | `string` | `""` | Container CSS class. |
| `svgClassName` | `string` | `""` | SVG element CSS class. |
| `svgStyle` | `CSSProperties` | `{}` | SVG element inline styles. |
| `viewBox` | `string` | `"0 0 1000 600"` | SVG viewBox attribute. |
| `disabled` | `boolean` | `false` | Disable map interactions. |

---

## Utility Functions & Exports

```ts
import {
  DISTRICTS,              // Readonly array of all 77 canonical district names
  PROVINCE_NAMES,         // ["Koshi", "Madhesh", "Bagmati", "Gandaki", "Lumbini", "Karnali", "Sudurpashchim"]
  PROVINCES,              // Province metadata dictionary with Nepali names and IDs
  resolveDistrict,        // Converts any alias/Devanagari text -> canonical name (or null)
  isDistrict,             // Checks if a given string is a valid Nepal district
  getDistrictInfo,        // Returns { name, nepali, headquarters, provinceId, provinceName, center, bounds }
  getDistrictsByProvince, // Returns array of districts belonging to a province
  DISTRICT_PATHS,         // Raw SVG path strings and centroid data
} from "nepal-naksha-react";

// Example alias matching
resolveDistrict("kavre");              // "Kavrepalanchok"
resolveDistrict("काठमाडौं");           // "Kathmandu"
resolveDistrict("tanahu district");    // "Tanahun"
resolveDistrict("chitwon");            // "Chitwan"
resolveDistrict("rukum east");         // "Eastern Rukum"
```

---

## 77 Districts List

Achham, Arghakhanchi, Baglung, Baitadi, Bajhang, Bajura, Banke, Bara, Bardiya, Bhaktapur, Bhojpur, Chitwan, Dadeldhura, Dailekh, Dang, Darchula, Dhading, Dhankuta, Dhanusha, Dolakha, Dolpa, Doti, Eastern Rukum, Gorkha, Gulmi, Humla, Ilam, Jajarkot, Jhapa, Jumla, Kailali, Kalikot, Kanchanpur, Kapilvastu, Kaski, Kathmandu, Kavrepalanchok, Khotang, Lalitpur, Lamjung, Mahottari, Makwanpur, Manang, Morang, Mugu, Mustang, Myagdi, Nawalpur, Nuwakot, Okhaldhunga, Palpa, Panchthar, Parasi, Parbat, Parsa, Pyuthan, Ramechhap, Rasuwa, Rautahat, Rolpa, Rupandehi, Salyan, Sankhuwasabha, Saptari, Sarlahi, Sindhuli, Sindhupalchok, Siraha, Solukhumbu, Sunsari, Surkhet, Syangja, Tanahun, Taplejung, Terhathum, Udayapur, Western Rukum.

---

## License

[MIT](LICENSE) © [Pradeep Dahal](https://github.com/dhlpradip)
