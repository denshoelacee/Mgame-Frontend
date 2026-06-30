# Daily Documentation

## Date

- `2026-06-30`

## What Was Done Today

- Set up and refined the main homepage layout in `src/App.tsx`.
- Built the promo card mosaic using a fixed `3 big cards + 5 small cards` structure.
- Switched promo tiles from playing a video to rendering as images by generating a poster image from the existing video source at runtime (cached in localStorage).
- Matched the mosaic spacing closer to the reference using `gap-[6px]`.

## Files Updated

### `src/App.tsx`

- Added the main promo card layout structure.
- Kept the mobile/tablet/iPad view under the mobile-style layout.
- Added `DesktopLayout()` for larger screens.
- Removed extra promo cards that caused the wrong number of visible cards.
- Removed dummy desktop sections and fake data usage.
- Changed the desktop page wrapper so it is full-page instead of modal-like.
- wala nang video pinalitan kona nang image 
- match da reference image.

### `src/components/common/Header.tsx`

- Kept the mobile header for mobile, tablet, and iPad.
- Added a `variant` prop with `mobile` and `desktop` modes.
- Created the desktop header version using the requested blue bar style.

### `src/hooks/useVideoPoster.ts`

- Added a helper hook that extracts a poster image from the video URL and returns a data URL (cached).

## Final UI State

- Mobile: uses the custom mobile header, promo mosaic, and bottom navigation.
- Tablet and iPad: use the same mobile-style design.
- Desktop: uses a separate full-width blue header and a simple desktop content area.

## Important Layout Decisions

- The promo grid uses a fixed visual pattern instead of unlimited cards.
- Tablet and iPad do not use the desktop design.
- Desktop starts as a separate layout for larger screens only.
- The desktop header is full-width.

## Notes For Next Work

- check munlng yung page ulit if needed to fix paba

`Gang D2 muna tatrabahuin ko`
    
## Date

- `2026-06-30`

## What Was Done Today
- Revised Multiple Files 
- Made a Single Layout which can be reused in several pages
- Added a Static Routes
- Made a Interface on Desktop

## Files Updated

### `src/App.tsx`
- Revised and cleaned the App.tsx and all the content will be transfered in the Layout, only the Router will remain in App.tsx

### `src/components/common/Header.tsx`

- Simplified the `Header` component by using a single shared layout.
- Removed the separate mobile and desktop header layouts to reduce duplication and improve maintainability.
- Connected the navigation links to `React Router` using `NavLink` for client-side routing with active route highlighting.


### `src/components/common/Navbar.tsx`
- Created a reusable MobileBottomNav component to centralize the bottom navigation.
- Moved the navigation items into a shared component to improve reusability across the application.
- Used the bottomNav constant to dynamically render navigation items, making future updates easier and reducing duplicated code.
- Only accesable in Mobile

### `src/components/common/Sidebar.tsx`
- Created a dedicated Sidebar component for desktop layouts.
- Configured the sidebar to display only on large screens (lg and above).

## `src/constants`
- Created a constants folder to centralize shared application constants.
- Moved reusable configuration data, such as navigation items, into the constants directory for better organization and maintainability.
- Improved code reusability by allowing multiple components to import shared constants from a single source.

## `src/Interfaces`
- Created an interfaces folder to centralize shared TypeScript interfaces.
- Moved reusable interface definitions into a dedicated directory to improve project organization.
- Enabled consistent type definitions across components and reduced duplication by importing shared interfaces where needed.

## `src/Layouts`
- Created a layouts folder to organize shared layout components.
- Moved reusable layout structures into a dedicated directory to improve project organization and maintainability.
- Established a centralized location for application layouts, making them easier to reuse across different pages.

## `src/routes`
- Created a `routes` folder to centralize the React Router Configuration
- Centralized application routing to make route management easier and support future scalability. (navigation.ts for mapping route)