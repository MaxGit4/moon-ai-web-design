Create a new React section component for the moon-ai-web-design project.

Component to create: $ARGUMENTS

## Step 1 — Check what already exists

Read `src/components/` before writing anything new. Prefer composing from or extending an existing primitive over inventing a new pattern.

## Step 2 — Generate the component

**File location:** `src/components/<ComponentName>.tsx`

### TypeScript interface
- Named `<ComponentName>Props` at the top of the file
- All props typed explicitly — no `any`
- Optional props marked with `?`
- Use sub-interfaces for structured items (e.g. `FaqItem`, `ProductCard`) rather than inline object types

### React hooks
- Use hooks freely when needed (`useState`, `useRef`, `useEffect`, etc.)
- Keep state minimal — prefer lifting state to the parent via props when the component is likely to be composed

### Colors — Moon DS tokens only

| Token    | Role                              |
|----------|-----------------------------------|
| `piccolo` | Primary purple — CTAs, accents   |
| `goku`    | Pure white — primary surface      |
| `gohan`   | Warm off-white — secondary surface|
| `bulma`   | Near-black — headings             |
| `trunks`  | Muted gray — body text            |
| `beerus`  | Light gray — borders, separators  |
| `hit`     | Dark — overlays, footer bg        |

No hardcoded hex values. No Tailwind default palette colors (blue-500, gray-300, etc.).

### Radius tokens

- **Surface elements** (cards, images, containers): `rounded-s-{xs|sm|md|lg|rounded}`
- **Interactive elements** (buttons, inputs, tags): `rounded-i-{xs|sm|md|lg|rounded}`

### Typography

- Use `font-sans` for DM Sans — never hardcode `font-family`
- Heading scale: `text-2xl` up to `text-6xl` with `font-bold` and `leading-tight` or `leading-[1.08]`
- Body: `text-base` or `text-lg` with `leading-relaxed`

### Layout

- Container: `max-w-7xl mx-auto px-6`
- Section padding: `py-16 lg:py-24`
- Mobile-first grids: `grid-cols-1` → `md:grid-cols-2` → `lg:grid-cols-3/4`

### Accessibility

- Semantic HTML: `<section>`, `<article>`, `<h2>`–`<h4>` (h1 is reserved for HeroBanner)
- `aria-label` on icon-only buttons
- `aria-hidden="true"` on decorative images (`alt=""` too)
- `aria-expanded` on accordion/disclosure toggles
- All interactive elements keyboard-reachable

## Step 3 — After generating

1. Run `npm run build` — fix any TypeScript or compilation errors before reporting done
2. Run `/build-verify` to start the dev server, take a screenshot, and confirm the render
3. Suggest the correct insertion point in `src/App.tsx` based on the page flow
