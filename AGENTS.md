# Monochrome UI contribution rules

- Keep this package app-neutral. Do not name public components, theme variants, or tokens after a consuming app, feature, business domain, or data entity.
- Keep reusable visual appearance here. Applications should compose package primitives and named variants rather than reimplementing them.
- Reuse an existing MUI/design-system variant whenever it fits. Add a named variant and TypeScript augmentation only for a distinct, repeatable UI role.
- Keep application business logic in consuming apps; this package owns presentation primitives, theme, and tokens.
- Icons in application features must use each app's shared icon adapter; do not couple this package to an app-specific icon implementation.
