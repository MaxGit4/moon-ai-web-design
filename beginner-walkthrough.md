# AI Web Design — Beginner Walkthrough

A step-by-step guide to setting up an AI-supported web design workflow, written
for people who are **comfortable with design but new to code and the terminal**.

Take it one step at a time. After most steps there's a **"You'll know it worked when…"**
check — don't move on until you see it. If something goes wrong, see Troubleshooting
at the end, and remember: you can always paste an error message to Claude and ask.

---

## The big picture (read this first)

You're connecting four things into one workflow:

- **Figma** — where you design (your home turf).
- **Code** — what actually runs as a website in a browser.
- **GitHub** — an online vault that stores your code and its history.
- **Claude Code** — an AI assistant living in your code editor that translates
  your Figma designs into code, and helps you build.

The "terminal" is just a text-based way to give your computer instructions by
typing commands instead of clicking. It feels alien at first; by the end it won't.

**What you'll have at the end:** a live website project on your computer and backed
up on GitHub, with Claude Code able to turn your Figma designs into real code.

A note on placeholders: wherever you see `MaxGit4`, `you@email.com`, or `Your Name`,
**replace them with your own** details. They're examples.

---

## Before you start — things to have ready

Get these sorted first so you're not interrupted mid-setup:

- A **GitHub account** (free) — sign up at github.com.
- A **paid Claude plan** (Pro, Max, Team, or Enterprise) — Claude Code needs it.
- A **Figma account on a plan with Dev Mode** (Professional or higher) — the AI-Figma
  bridge needs Dev Mode.
- The **Figma desktop app** installed (the browser version won't work for this).
- **Homebrew** — a tool that installs other tools on a Mac (set up in Step 0).
- A few hours and some patience. This is a one-time setup.

This guide assumes a **Mac**. The terminal app is called "Terminal" (find it via
Spotlight: press Cmd+Space, type "Terminal", hit Enter).

---

## Step 0 — Terminal & Homebrew

Open Terminal (Cmd+Space → "Terminal" → Enter). You'll type commands here and
press Enter to run each one.

Check if Homebrew is installed:

```bash
brew --version
```

- **A version number prints** → you have it, skip ahead.
- **`command not found`** → install it by pasting this and following the prompts:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

_What this does:_ downloads and runs Homebrew's official installer. It may ask for
your Mac password (you won't see characters as you type — that's normal) and take
a few minutes.

**You'll know it worked when:** `brew --version` prints a version number.

---

## Step 1 — Create your GitHub repository (online vault)

A "repository" (repo) is one project's vault on GitHub.

1. Go to github.com and sign in.
2. Click the **+** (top right) → **New repository**.
3. **Name:** `ai-web-design` (lowercase, hyphens).
4. **Visibility:** **Private** (only you can see it).
5. **Leave everything else unchecked** — no README, no .gitignore, no license.
   (An empty repo avoids conflicts when you upload your project later.)
6. Click **Create repository**. Keep the page open.

**You'll know it worked when:** you see a near-empty repo page with setup instructions.

---

## Step 2 — Connect your computer to GitHub securely (SSH)

SSH is a secure way for your computer to prove who it is to GitHub, so you don't
type a password every time. You set up a pair of keys: a **public** one you give
GitHub, and a **private** one that never leaves your computer.

Test whether it's already set up:

```bash
ssh -T git@github.com
```

If it says "Permission denied," create a key:

```bash
ssh-keygen -t ed25519 -C "you@email.com"
```

_What this does:_ generates your key pair. Press **Enter** through all the questions
to accept defaults (you can leave the passphrase blank, or set one for extra security).

Show your **public** key so you can copy it:

```bash
cat ~/.ssh/id_ed25519.pub
```

Copy the entire line it prints (starts with `ssh-ed25519`). This is safe to share.
The matching file _without_ `.pub` is private — never share it.

Add it to GitHub: avatar (top right) → **Settings** → **SSH and GPG keys** →
**New SSH key** → Title "My Mac" → paste the key → **Add SSH key**.

Verify:

```bash
ssh -T git@github.com
```

**You'll know it worked when:** you see "Hi MaxGit4! You've successfully authenticated…"
(the "no shell access" part is normal). [If a passphrase prompt annoys you later, see T6.]

---

## Step 3 — Install Node (the engine that runs the project)

Node lets your computer run JavaScript projects; `npm` (bundled with Node) installs
code packages. We install Node via **nvm**, which lets you manage Node versions.

Check first:

```bash
node --version
```

- **A version prints** → skip to Step 4.
- **`command not found`** → install nvm:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

Then **close and reopen Terminal**, and install Node:

```bash
nvm install --lts
nvm use --lts
npm --version
```

**You'll know it worked when:** `npm --version` prints a number.
[If `npm` works in one terminal but not a fresh one, see T1.]

---

## Step 4 — Create the project (scaffold)

"Scaffolding" generates a ready-to-go starter project.

```bash
npm create vite@latest ai-web-design -- --template react-ts
cd ai-web-design
npm install
```

_What this does:_ line 1 builds the starter, line 2 moves you **into** the project
folder (important — most later commands must run from here), line 3 downloads the
project's building blocks.

**You'll know it worked when:** `npm install` finishes without red error text.
[If line 1 fails with "command not found: npm," see T1.]

---

## Step 5 — Add Tailwind v4 (the styling system)

Tailwind lets you style with small class names and maps neatly to your Figma tokens.

```bash
npm install tailwindcss @tailwindcss/vite
```

Open the project in your editor to edit two files (Step 7 covers opening it; if you
already have VS Code, run `code .` here). Two edits:

1. In **`vite.config.ts`**, make it read:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

2. In **`src/index.css`**, add this as the very **first line**:

```css
@import "tailwindcss";
```

Important: there is **no `tailwind.config.js`** in version 4 — that's the old way.
Your color/spacing tokens go inside `src/index.css` using `@theme`.

Test it:

```bash
npm run dev
```

Open the address it prints (usually http://localhost:5173). In `src/App.tsx`, add
`className="underline"` to a heading and save.

**You'll know it worked when:** that heading becomes underlined in the browser.
Press **Control+C** in Terminal to stop the server. [If nothing changes, see T4.]

---

## Step 6 — Save your work to GitHub (first commit & push)

"Committing" saves a snapshot; "pushing" uploads it to GitHub.

Set your identity once (so snapshots aren't labeled with your computer's name):

```bash
git config --global user.name "Your Name"
git config --global user.email "you@email.com"
```

Then:

```bash
git init
git add .
git commit -m "Initial scaffold"
git branch -M main
git remote add origin git@github.com:MaxGit4/ai-web-design.git
git push -u origin main
```

_What this does:_ `init` starts tracking, `add .` stages all files, `commit` saves the
snapshot, `remote add` links to your GitHub repo (**replace `MaxGit4`**), `push` uploads.
(If it says "remote origin already exists," use `git remote set-url origin git@github.com:MaxGit4/ai-web-design.git` then push.)

**You'll know it worked when:** refreshing your GitHub repo page shows your files.
[If you see "not a git repository," you're in the wrong folder — see T3.]

---

## Step 7 — Open the project in VS Code (your editor)

VS Code is the code editor where Claude Code lives.

```bash
code --version
```

- **`command not found`** → either install it or enable its command:
  - Install: `brew install --cask visual-studio-code`
  - If already installed: open VS Code → press **Cmd+Shift+P** → type and select
    **"Shell Command: Install 'code' command in PATH"**.

Then open your project:

```bash
cd ai-web-design
code .
```

_The `.` means "this folder."_

**You'll know it worked when:** VS Code opens showing your project files in the left
sidebar. [If `code` isn't found, see T5.]

---

## Step 8 — Install Claude Code (the AI assistant)

```bash
npm install -g @anthropic-ai/claude-code
claude --version
```

_What this does:_ installs Claude Code everywhere on your computer (`-g` = global).

Then add it to VS Code: press **Cmd+Shift+X** (Extensions), search **"Claude Code,"**
install the one published by **anthropic** (check the publisher). Open the Claude Code
panel and sign in through your browser when prompted.

**You'll know it worked when:** `claude --version` prints a version, and after signing
in, the Claude Code panel is ready in VS Code. (Sign-in needs a paid Claude plan.)

---

## Step 9 — Connect Figma to Claude Code (the design bridge)

This lets Claude Code read your Figma designs.

**In Figma (desktop app):** update to the latest version → open a Design file →
switch on **Dev Mode** (toolbar toggle) → in the right sidebar, **enable the MCP server**.

**In Terminal:**

```bash
claude plugin install figma@claude-plugins-official
```

Then in Claude Code: restart it, type **`/plugin`** and press Enter → go to the
**Installed** tab → select **figma** → press Enter → click **Allow access** to sign in
to Figma. Run **`/plugin`** again; figma should show **connected**.

**To use it:** select a frame in Figma, then ask Claude Code about "my current
selection." Or right-click a frame → **Copy link to selection** → paste the link into
your prompt.

**You'll know it worked when:** you select something in Figma, ask Claude Code to
describe your current selection, and it reads your design back to you.
[If it asks for a file URL, that's normal — see T7.]

---

## Step 10 — The CLAUDE.md context file

`CLAUDE.md` is a plain-text file in your project's main folder that Claude Code reads
automatically every session. It tells Claude your stack, conventions, design
preferences, and which Figma pages are "live" vs. to ignore — so you don't re-explain
each time. Once you have one, save it like any file:

```bash
git add CLAUDE.md
git commit -m "Add CLAUDE.md project context"
git push
```

**You'll know it worked when:** the file appears in your GitHub repo, and new Claude
Code sessions follow its guidance without being told.

---

## Step 11 — The worktree workflow (experiment safely)

A "worktree" lets you build something new in a **separate folder** on a separate
branch, while your main site stays untouched and running. Great for trying a component
with Claude Code without risk.

**Start an experiment** (run from your main project folder, with everything committed):

```bash
git worktree add ../ai-web-design-feature -b feature
cd ../ai-web-design-feature
npm install
code .
```

_Each worktree needs its own `npm install` — they don't share building blocks._

**Run both at once** to compare (two Terminal tabs — Cmd+T for a new tab):

- main folder: `npm run dev` → http://localhost:5173
- feature folder: `npm run dev` → http://localhost:5174 (it auto-picks a free port)

**Build with Claude Code** in the feature VS Code window, then save your snapshot:

```bash
git add .
git commit -m "Add hero section component"
```

**Bring it into main** (run the merge from your MAIN folder — a common mix-up):

```bash
cd ../ai-web-design
git merge feature
git push
```

A clean merge says "Fast-forward."

**Clean up** when done:

```bash
git worktree remove ../ai-web-design-feature
git branch -d feature
git push origin --delete feature
```

_(`-d` only deletes the branch if it merged successfully — a nice safety check.)_

**You'll know it worked when:** after merging, your main site (5173) shows the new
component too. [If merge says "nothing to commit," you ran it in the wrong folder — see T8.]

**Reusable recipe** once you're comfortable:

```bash
git worktree add ../ai-web-design-feature -b feature
cd ../ai-web-design-feature && npm install && code .
# ...build, commit...
cd ../ai-web-design && git merge feature && git push
git worktree remove ../ai-web-design-feature && git branch -d feature
```

---

## The one habit that prevents most problems

Most beginner snags come down to **which folder you're standing in** when you type a
command. With worktrees you have two folders for one project, so it's even easier to
slip. Before any git or npm command, run:

```bash
pwd
```

It prints your current folder. Make sure it's the one you mean. This single habit
prevents the majority of confusing errors.

---

## Troubleshooting

| #   | What you see                                   | Why                                        | What to do                                                                                                                                                                              |
| --- | ---------------------------------------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| T1  | `command not found: npm`                       | Node/nvm not loaded in this terminal       | Close and reopen Terminal. If still failing, add these lines to the file `~/.zshrc` then reopen:<br>`export NVM_DIR="$HOME/.nvm"`<br>`[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"` |
| T2  | `Missing script: "dev"`                        | You're not in the project folder           | `cd ai-web-design` (check with `pwd`)                                                                                                                                                   |
| T3  | `not a git repository`                         | Wrong folder, or git not started           | `cd` into the project; run `git init` if it was never initialized                                                                                                                       |
| T4  | Tailwind classes do nothing                    | Setup not wired, or server not restarted   | Recheck `vite.config.ts` and the `@import` line in `index.css`; stop (Ctrl+C) and rerun `npm run dev`                                                                                   |
| T5  | `command not found: code`                      | VS Code's terminal command isn't installed | In VS Code: Cmd+Shift+P → "Shell Command: Install 'code' command in PATH"                                                                                                               |
| T6  | VS Code push: "don't have permissions / fork?" | It can't ask for your SSH passphrase       | Run `ssh-add --apple-use-keychain ~/.ssh/id_ed25519`, or just push from Terminal instead                                                                                                |
| T7  | Figma: "I need a file URL"                     | The server wants you to point at the file  | Right-click your frame → Copy link to selection → paste the link into your prompt                                                                                                       |
| T8  | `git merge`: "nothing to commit"               | You ran it inside the feature folder       | Run the merge from your MAIN project folder                                                                                                                                             |

**If you hit something not on this list:** copy the exact error text and paste it to
Claude with a short note about what you were trying to do. Describing the step you
were on and the command you ran gets you the fastest help — that interactive
back-and-forth is what a written guide can't fully replace.
