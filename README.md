# Charles Dave Morales — Professional Vue Portfolio

This is a full remake of the portfolio using Vue 3 with a component-based, data-driven structure and lightweight hash routing for static hosting.

## Run locally

Recommended on Windows:

```powershell
cd path\to\Charles_Dave_Morales_Portfolio_Professional_Vue
py -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

Vue 3 is included inside `assets/vendor`, so the portfolio does not require an internet connection just to load the framework.

## Deploy

This is a static Vue site. Upload the entire folder to a static host such as Render Static Site, GitHub Pages, Netlify, InfinityFree, or another normal web host. Because routing uses hash URLs (`#/projects/...`), no special server rewrite rule is required.

## Certificates

Put certificate photos inside:

```text
certificates/
```

Name them:

```text
1.jpg
2.jpg
3.jpg
4.jpg
...
```

The Vue certificate gallery checks numbered JPG files automatically and displays the files that exist.

## Project architecture

```text
index.html
styles/
  tokens.css
  base.css
  components.css
  responsive.css
src/
  app.js
  router.js
  data/
    projects.js
  components/
    app-header.js
    app-footer.js
    project-card.js
    certificate-gallery.js
  views/
    home-view.js
    project-view.js
    about-project-view.js
assets/
  images/
  pictures/
  media/
certificates/
```

### Why it is structured this way

- **Project content is data-driven.** Project descriptions, technologies, architecture steps, formulas, and learning points live in `src/data/projects.js`.
- **Reusable project view.** Most projects use one professional case-study view instead of duplicated HTML pages.
- **Special first-year project view.** The Personal About Me Website has its own custom editorial layout because its purpose is different from the technical case studies.
- **Reusable components.** Navigation, footer, project cards, and certificate gallery are separate components.
- **Central design system.** Colors, spacing, typography, surfaces, and responsive rules are separated into the `styles` folder.
- **Static-host-friendly routing.** Vue Router uses hash history so project pages continue to work after refresh on simple hosting.

## Numerical Methods

Both MATLAB and Python Numerical Methods projects are explained directly inside the portfolio. They do not redirect visitors to YouTube. The pages explain root finding, the system flow, and the formulas used by the main methods.
