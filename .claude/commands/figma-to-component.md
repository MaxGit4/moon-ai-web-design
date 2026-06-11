Implement a Figma frame as a React component in the moon-ai-web-design project.

Figma target: $ARGUMENTS

## Step 1 — Get design context from Figma

Use the following tool call order. Steps 1a–1c always work (Figma REST API, no desktop required). Step 1d is optional — use it when it succeeds, skip it when it doesn't.

### 1a. Pre-flight: verify MCP connection
Call `whoami` first. This confirms the Figma MCP is connected and authenticated. If it fails, stop and tell the user the MCP is not connected.

### 1b. Get structure (always works)
Call `get_metadata` with the fileKey and nodeId extracted from the URL:
- URL format: `figma.com/design/:fileKey/:name?node-id=:nodeId`
- Convert `-` to `:` in the nodeId (e.g. `28141-11341` → `28141:11341`)

`get_metadata` uses the Figma REST API and does NOT require the desktop app or a selection.

### 1c. Get visual reference (always works)
Call `get_screenshot` with the same fileKey and nodeId. This gives a rendered PNG of the frame regardless of desktop state.

### 1d. Get rich code hints (optional — requires desktop selection)
Attempt `get_design_context` with the same fileKey and nodeId.
- **If it succeeds**: use its code output as an additional reference alongside the metadata and screenshot.
- **If it returns "nothing selected" or any connection error**: proceed without it — do NOT stop or ask the user to select something. The metadata + screenshot from steps 1b–1c are sufficient for a full implementation.

> `get_design_context` requires the Figma desktop app to be open, the MCP plugin to be running inside it, and a frame to be selected. It is an enhancement, not a dependency.

## Step 2 — Map Figma Variables to Moon DS tokens

Translate Figma Variable/Style names to this project's Tailwind token classes. Never use hardcoded hex values.

| Figma intent                  | Moon DS token | Example classes                          |
|-------------------------------|---------------|------------------------------------------|
| Primary purple / accent       | `piccolo`     | `bg-piccolo`, `text-piccolo`             |
| White / primary surface       | `goku`        | `bg-goku`, `text-goku`                   |
| Warm off-white / secondary bg | `gohan`       | `bg-gohan`                               |
| Near-black / heading text     | `bulma`       | `text-bulma`                             |
| Muted / secondary text        | `trunks`      | `text-trunks`                            |
| Border / separator            | `beerus`      | `border-beerus`                          |
| Dark overlay / footer bg      | `hit`         | `bg-hit`, `bg-hit/65`                    |

Radius mapping:
- Cards, image containers, panels → `rounded-s-{xs|sm|md|lg|rounded}`
- Buttons, inputs, tags → `rounded-i-{xs|sm|md|lg|rounded}`

## Step 3 — Generate the component

Follow all conventions from `/new-component`:
- `src/components/<ComponentName>.tsx`
- TypeScript interface named `<ComponentName>Props`
- Mobile-first Tailwind grid layout
- Semantic HTML + ARIA
- No hardcoded values — all from Moon DS tokens

Check `src/components/` first to see if a similar component already exists that could be extended.

## Step 4 — Verify

Run `/build-verify` after generating to confirm the build is clean and the component renders correctly in the browser.
