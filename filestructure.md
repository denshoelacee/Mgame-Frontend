# File Structure Guide

Short guide for where things should go in this casino frontend project.

## Project Tree

```text
Mgame-Frontend/
├─ public/
│  ├─ favicon.svg
│  └─ icons.svg
├─ src/
│  ├─ assets/
│  │  ├─ audio/
│  │  ├─ icons/
│  │  └─ images/
│  ├─ components/
│  │  ├─ common/
│  │  └─ ui/
│  ├─ config/
│  │  └─ app.ts
│  ├─ features/
│  │  ├─ blackjack/
│  │  │  ├─ components/
│  │  │  └─ hooks/
│  │  ├─ game/
│  │  │  └─ core/
│  │  │     └─ canvasRenderer.ts
│  │  ├─ roulette/
│  │  │  ├─ components/
│  │  │  └─ hooks/
│  │  └─ slots/
│  │     ├─ components/
│  │     └─ hooks/
│  ├─ game/
│  │  ├─ audio/
│  │  ├─ canvas/
│  │  ├─ engine/
│  │  ├─ pixi/
│  │  └─ scenes/
│  ├─ hooks/
│  ├─ lib/
│  │  └─ utils.ts
│  ├─ services/
│  ├─ store/
│  ├─ styles/
│  ├─ types/
│  ├─ App.tsx
│  ├─ index.css
│  └─ main.tsx
├─ components.json
├─ eslint.config.js
├─ filestructure.md
├─ index.html
├─ package.json
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```

## Root Files

### `package.json`
- Main project setup.
- Put scripts and installed packages here.

### `vite.config.ts`
- Vite config file.
- Handles React, Tailwind, and the `@` import alias.

### `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- TypeScript config files.
- These control type checking and path aliases.

### `components.json`
- shadcn/ui setup file.
- Tells shadcn where to create UI components.

### `index.html`
- Base HTML file for the app.
- React mounts into the `root` div here.

### `eslint.config.js`
- Lint rules.
- Helps keep code clean.

## Main App Files

### `src/main.tsx`
- App entry point.
- Starts React and renders `App`.

### `src/App.tsx`
- Top-level React component.
- Good place for app shell, routes, or layout wrapper later.

### `src/index.css`
- Global CSS entry.
- Right now it loads Tailwind.

## Assets

### `src/assets/audio/`
- Put sound effects and music here.
- Example: chip sounds, spin sounds, win sounds.

### `src/assets/icons/`
- Put custom icons or SVG files here.

### `src/assets/images/`
- Put images here.
- Example: cards, logos, tables, chips, backgrounds.

### `src/assets/react.svg`, `src/assets/vite.svg`, `src/assets/hero.png`
- Old starter/demo files.
- Safe to delete if you do not need them.

## Components

### `src/components/common/`
- Put shared components here.
- Example: header, sidebar, modal wrapper, loader.

### `src/components/ui/`
- Put reusable UI pieces here.
- Good place for shadcn components like button, dialog, card, input.

## Config

### `src/config/app.ts`
- Basic app info lives here.
- Example: app name, mode, flags.

## Features

### `src/features/blackjack/`
- Put blackjack stuff here.
- `components/` for UI, `hooks/` for blackjack logic.

### `src/features/roulette/`
- Put roulette stuff here.
- `components/` for wheel/table UI, `hooks/` for spin and bet logic.

### `src/features/slots/`
- Put slots stuff here.
- `components/` for reels/paylines, `hooks/` for spin state and payouts.

### `src/features/game/core/`
- Put shared game feature logic here.
- Use this for things multiple games may share.

### `src/features/game/core/canvasRenderer.ts`
- Placeholder file for the render flow.
- This is basically saying: React UI + PixiJS + canvas + Howler.

## Engine And Rendering

### `src/game/audio/`
- Put Howler setup here.
- Example: sound manager, audio maps, mute controls.

### `src/game/canvas/`
- Put raw HTML5 canvas code here.

### `src/game/engine/`
- Put shared game runtime logic here.
- Example: loop, timers, state updates.

### `src/game/pixi/`
- Put PixiJS setup here.
- Example: Pixi app boot, sprites, containers, loaders.

### `src/game/scenes/`
- Put scene files here.
- Example: lobby scene, slots scene, blackjack table scene.

## Shared Code

### `src/hooks/`
- Put shared React hooks here.
- Use this when a hook is not tied to just one game.

### `src/lib/`
- Put helper functions here.

### `src/lib/utils.ts`
- Has the `cn()` helper.
- Used for merging class names, especially with Tailwind and shadcn.

### `src/services/`
- Put service code here.
- Example: API calls, websocket logic, mock data loaders.

### `src/store/`
- Put global state here.
- Example: Zustand, Context, Redux, shared app state.

### `src/styles/`
- Put extra style files here if you split styles later.

### `src/types/`
- Put shared TypeScript types here.
- Example: player types, bet types, result types, card types.

## Quick Rules

- If it is shared UI, put it in `src/components/`.
- If it belongs to one game only, put it in `src/features/<game>/`.
- If it is low-level Pixi, canvas, audio, or engine code, put it in `src/game/`.
- If it is a helper, put it in `src/lib/`.
- If it is a shared type, put it in `src/types/`.
- If it is an image, icon, or sound, put it in `src/assets/`.

## Teammate Notes

- Put blackjack stuff in `src/features/blackjack/`
- Put roulette stuff in `src/features/roulette/`
- Put slots stuff in `src/features/slots/`
- Put Pixi stuff in `src/game/pixi/`
- Put canvas stuff in `src/game/canvas/`
- Put Howler stuff in `src/game/audio/`
- Put shadcn UI stuff in `src/components/ui/`
- Put shared helpers in `src/lib/`
