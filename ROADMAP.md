# Route map: from zero to a published app

Goal: understand how apps work, build your own, and put it on the web and in the app stores where real people can use it.

**The idea behind the order:** the web is the fastest and cheapest place to publish (free, live in minutes). Once you can build a web app, the same skills (JavaScript + React) carry over to mobile apps with React Native / Expo, so you don't start over.

---

## How an app actually works (the mental model)

```
 You (browser / phone)          The internet            Someone else's computer
 ┌───────────────────┐                                  ┌──────────────────────┐
 │  FRONTEND         │  ── request: "give me todos" ──▶ │  BACKEND (server)    │
 │  what you see:    │                                  │  logic + rules       │
 │  HTML, CSS, JS    │  ◀── response: [todo1, todo2] ── │        │             │
 └───────────────────┘                                  │   DATABASE           │
                                                        │   stores the data    │
                                                        └──────────────────────┘
```

- **Frontend**: the part users see and click (HTML = structure, CSS = looks, JavaScript = behaviour).
- **Backend**: code running on a server that stores data, handles logins, and enforces rules.
- **Hosting / deployment**: copying your app onto a computer that is always online, so it has a public URL.
- **App store**: a mobile app is packaged into a file (`.ipa` for iPhone, `.aab` for Android), reviewed by Apple/Google, then listed in their store.

---

## Stage 1: Web basics (1–2 weeks)
**Learn:** HTML, CSS, a little JavaScript (variables, functions, clicks, changing the page).
**Build:** `01-hello-web/`: a personal page about yourself with a button that does something.
**Tools:** VS Code + the "Live Server" extension. Nothing to install beyond that.
**Resources:** MDN "Getting started with the web", freeCodeCamp "Responsive Web Design".
**Done when:** you can make a page from scratch without copying, and you understand what each tag does.

## Stage 2: Put it online (1 day): your first published thing 🎉
**Learn:** git (saving versions), GitHub (storing code online), deployment.
**Do:**
1. Create a free GitHub account; `git init`, commit, push this repo.
2. Turn on **GitHub Pages** (or drag the folder onto **Netlify Drop**) → you get a public URL.
3. Send the link to a friend.
**Done when:** someone else opened your page on their phone.

## Stage 3: Real JavaScript (2–3 weeks)
**Learn:** arrays/objects, loops, events, `fetch` (getting data from the internet), `localStorage`.
**Install:** Node.js LTS (needed from here on).
**Build:** `02-todo-js/`: a to-do list that remembers items after refresh. Then `02b-weather/`: shows the weather using a free public API.
**Deploy:** same as stage 2.
**Done when:** you understand what a request and a JSON response are.

## Stage 4: A framework, React (3–4 weeks)
**Learn:** components, props, state, lists. Why frameworks exist (keeping big UIs organised).
**Setup:** `npm create vite@latest 03-react-todo -- --template react`, then `npm run dev`.
**Build:** rebuild your to-do app in React, then something of your own design.
**Deploy:** connect the GitHub repo to **Vercel** or **Netlify**: every `git push` redeploys automatically.
**Resources:** the official tutorial at react.dev.

## Stage 5: Backend & data, so users can share data (2–4 weeks)
**Learn:** databases, user accounts (sign up / log in), APIs.
**Easiest path:** a hosted backend like **Supabase** or **Firebase** (database + login without running your own server).
**Build:** `04-shared-app/`: an app where users log in and their data is saved online (e.g. shared shopping list, mini guestbook, habit tracker).
**Done when:** two people on different devices see the same data.

> ✅ At this point you have a **real web app** anyone can use. Many "apps" never need to go further. You can also make it installable on phones as a **PWA** (Progressive Web App) without any app store.

## Stage 6: Mobile app with React Native + Expo (3–4 weeks)
**Learn:** how mobile UI differs (screens, navigation, touch), reusing your React knowledge.
**Setup:** `npx create-expo-app 05-mobile-app`, then `npx expo start` and scan the QR code with the **Expo Go** app on your phone. Works on Windows, no Mac needed.
**Build:** a mobile version of your stage 5 app (it can use the same Supabase/Firebase backend).

## Stage 7: Publish to the app stores
| | Google Play (Android) | Apple App Store (iPhone) |
|---|---|---|
| Cost | $25 one-time | $99 / year |
| Build | `eas build -p android` | `eas build -p ios` (Expo builds it in the cloud, so no Mac needed) |
| Submit | `eas submit -p android` | `eas submit -p ios` |
| Needs | Icon, screenshots, description, privacy policy URL | Same, plus stricter review |
| Review | Hours to a few days; new personal accounts must first run a closed test with testers | Usually 1–3 days, may be rejected with feedback |

**Tip:** start with Android (cheaper, easier), or invite friends through test tracks (Google Play internal testing / Apple TestFlight) before going public.

---

## Where to start, today
1. Install **VS Code** and the **Live Server** extension.
2. Create the folder `01-hello-web/` with an `index.html`.
3. Ask Claude: *"Help me build stage 1: explain each line as we go."*
