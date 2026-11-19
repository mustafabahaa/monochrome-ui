# Monochrome UI

Shared, app-neutral visual foundations and React/MUI components used by Kippa and GameHub.

## Install from GitHub

```sh
npm install https://github.com/mustafabahaa/monochrome-ui/archive/refs/tags/v0.1.19.tar.gz
```

In an app manifest, use the package name and pin a release tag:

```json
{
  "dependencies": {
    "@monochrome-ui/design-system": "https://github.com/mustafabahaa/monochrome-ui/archive/refs/tags/v0.1.19.tar.gz"
  }
}
```

The consuming app supplies React, MUI, Emotion, and any optional MUI X peer dependencies it uses.

## Public API

- `createMonochromeTheme(mode, ...extensions)` creates the shared MUI theme.
- `designTokens`, `modeTokens`, and `layoutTokens` expose the shared foundations.
- The package root re-exports MUI primitives and reusable navigation, status, chart, and layout components.
- `@monochrome-ui/design-system/tokens.css` provides semantic CSS custom properties.

## ESLint plugin

Import `@monochrome-ui/design-system/eslint` as a flat-config plugin to apply the shared UI rules. It includes variant validation and naming, shared `Button` loading behavior, input-adornment spacing, layout gaps, typography roles, metric caption stacking, visual override boundaries, and the routed-page scaffold check. Keep app-specific architecture rules in each consuming app.

Applications can extend the shared theme with product data colors and app-specific behavior. Shared visual roles and tokens remain defined here.
