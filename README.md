# Monochrome UI

Shared, app-neutral visual foundations and React/MUI components used by Kippa and GameHub.

## Install from GitHub

```sh
npm install https://github.com/mustafabahaa/monochrome-ui/archive/refs/tags/v0.1.1.tar.gz
```

In an app manifest, use the package name and pin a release tag:

```json
{
  "dependencies": {
    "@monochrome-ui/design-system": "https://github.com/mustafabahaa/monochrome-ui/archive/refs/tags/v0.1.1.tar.gz"
  }
}
```

The consuming app supplies React, MUI, Emotion, and any optional MUI X peer dependencies it uses.

## Public API

- `createMonochromeTheme(mode, ...extensions)` creates the shared MUI theme.
- `designTokens`, `modeTokens`, and `layoutTokens` expose the shared foundations.
- The package root re-exports MUI primitives and reusable navigation, status, chart, and layout components.
- `@monochrome-ui/design-system/tokens.css` provides semantic CSS custom properties.

Applications can extend the shared theme with product data colors and app-specific behavior. Shared visual roles and tokens remain defined here.
