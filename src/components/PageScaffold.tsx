import type { ReactNode } from 'react';
import Box from '@mui/material/Box';

export interface PageScaffoldProps {
  children: ReactNode;
  /** Maximum width for the routed page content. Use `none` when the app shell owns this constraint. */
  maxWidth?: number | string;
  /** Responsive horizontal page gutter, in the shared theme's spacing units. */
  gutter?: number | string | Record<string, number | string>;
}

/** Shared page width and content inset. PageHeader keeps its baseline while body content shifts inward. */
export function PageScaffold({ children, maxWidth = 'none', gutter = 0 }: PageScaffoldProps) {
  return (
    <Box
      data-page-scaffold="true"
      sx={{
        boxSizing: 'border-box',
        width: '100%',
        maxWidth,
        mx: 'auto',
        px: gutter,
        pl: { xs: gutter, md: 4 },
        '& [data-page-heading="true"]': { ml: { xs: 0, md: -4 } },
      }}
    >
      {children}
    </Box>
  );
}
