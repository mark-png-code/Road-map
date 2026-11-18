# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose of this repository

This is a **learning workspace**, not a single product. The owner is a beginner who wants to understand how apps work, build their own, and publish them to the web and the app stores so real people can use them. The learning path lives in `ROADMAP.md`; check it to see which stage the user is at before suggesting tools or concepts.

## How to work with the user

- **Teach, don't just ship.** Explain *why* a piece of code or a command exists, in plain language, before or after writing it. Introduce one new concept at a time and tie it to the current roadmap stage.
- When the user is doing an exercise, give hints or a partial solution first; only write the full solution if they ask.
- Prefer the simplest tool that works for the current stage (plain HTML/CSS/JS before frameworks, a hosted backend before writing a server). Don't introduce TypeScript, build tools, or extra libraries ahead of the roadmap unless the user asks.
- When something is deployed, say exactly where it is live (URL) and how to redeploy.

## Repository layout (convention)

Each project gets its own numbered folder at the root, matching the roadmap stage, e.g. `01-hello-web/`, `02-todo-js/`, `03-react-todo/`. Each project is self-contained (its own `package.json` if it needs one) so projects never break each other. Put a short `README.md` in each project describing what was learned and how to run it.

## Environment notes (Windows)

- Git is installed. **Node.js is not installed yet**; it is needed from roadmap stage 3 onward (install the LTS version from nodejs.org, then verify with `node -v` and `npm -v`). `python` currently resolves to the Microsoft Store stub, not a real install.
- This folder lives inside **OneDrive**. `node_modules/` folders contain tens of thousands of files and will choke OneDrive sync: every Node project must have a `.gitignore` with `node_modules/`, and consider moving active Node projects to a non-synced folder (e.g. `C:\dev\`) or excluding them from sync.
- The folder is not a git repository yet. Initialize git and push to GitHub at roadmap stage 2; GitHub Pages / Netlify / Vercel deploys depend on it.

## Commands

No projects exist yet, so there are no build/test commands. Once a project is created, record its commands in that project's `README.md`. Typical commands by stage:

- Plain HTML/CSS/JS: no build; open `index.html` in a browser or use the VS Code "Live Server" extension.
- Vite + React web apps: `npm install`, `npm run dev` (local dev server), `npm run build` (production files in `dist/`), `npm test` if Vitest is added (`npx vitest run path/to/file.test.js` for a single test file).
- Expo (React Native) mobile apps: `npx expo start` (scan the QR code with the Expo Go app), `eas build` and `eas submit` for app-store builds.
