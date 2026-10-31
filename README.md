# Monochrome UI

Monochrome UI is the shared, app-neutral design system for products that use its visual language.

- `designTokens`: canonical colors, spacing, radii, typography, and elevation.
- `createMonochromeTheme(mode)`: shared MUI theme factory.
- `tokens.css`: semantic CSS custom properties for non-MUI surfaces.
- App chrome follows the shared ChatGPT-inspired neutral system: white and charcoal surfaces, monochrome controls, compact Plus Jakarta Sans typography, 16px cards, and Linear AppIcon marks. Finance charts retain distinct data colors.

Product-specific MUI overrides may remain in the consuming application, but raw
visual values must be defined here rather than copied between projects.
