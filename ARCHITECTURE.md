# Portfolio Architecture

## Application layer

`src/app.js` mounts the Vue application and provides the global layout.

## Routing layer

`src/router.js` provides lightweight hash routing and defines:

- `/` — main portfolio
- `/about-project` — redesigned first-year About Me website
- `/projects/:slug` — reusable technical project case study

Hash routing is used for compatibility with simple static hosting without requiring server-side rewrite rules.

## Data layer

`src/data/projects.js` is the single source of truth for technical project content. Adding another technical project normally requires adding one object to this file rather than building another HTML page.

## Component layer

Reusable interface pieces are kept in `src/components/`:

- App header and navigation
- Footer
- Project card
- Certificate gallery/lightbox

## View layer

`src/views/` holds full-page layouts:

- Home portfolio view
- Reusable technical project detail view
- Custom personal first-year project view

## Styling layer

The CSS is intentionally separated by responsibility:

- `tokens.css` — theme/design variables
- `base.css` — reset, typography, shared primitives
- `components.css` — portfolio components and page layouts
- `responsive.css` — breakpoint-specific behavior

This avoids having each project carry its own duplicated style sheet.
