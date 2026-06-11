Run a build and browser verification check for the moon-ai-web-design project.

## Step 1 — Build check

```bash
npm run build
```

- If there are TypeScript or Vite errors: report them clearly and stop — do not proceed to the browser check.
- If the build is clean: continue to Step 2.

## Step 2 — Start dev server and capture the port

Run the dev server and redirect output to a temp file so the port can be read:

```bash
npm run dev > /tmp/dev-server.txt 2>&1 &
DEV_PID=$!
sleep 3
cat /tmp/dev-server.txt
```

Read the port from the output line that says `Local: http://localhost:<PORT>/`. Default is 5173 but it increments automatically if already in use.

## Step 3 — Take a screenshot

Use Chrome headless with a standard 1440×900 viewport — do NOT use a tall viewport (the HeroBanner is `min-h-[90vh]` and will expand proportionally):

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new \
  --screenshot=/tmp/build-verify.png \
  --window-size=1440,900 \
  --disable-gpu \
  --no-sandbox \
  "http://localhost:<PORT>/"
```

Replace `<PORT>` with the actual port captured in Step 2.

## Step 4 — Describe the screenshot

Use the Read tool on `/tmp/build-verify.png`. Report:
- Does the overall layout render correctly?
- Is text readable against the background (contrast looks sufficient)?
- Are there visible regressions in sections neighbouring the changed component?
- Any broken images, horizontal overflows, or layout shifts?

## Step 5 — Kill the dev server

Use the PID captured in Step 2 — more reliable than `kill %1` which depends on job numbering:

```bash
kill $DEV_PID
```

## Report format

End with a brief summary:
- ✓ Build clean — or list the errors
- 2–4 sentences on what you observed in the screenshot
- Any regressions noted
