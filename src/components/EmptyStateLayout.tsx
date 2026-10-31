import type { ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material/styles';
import { Box, Paper, Typography } from '@mui/material';

export interface EmptyStateLayoutProps {
  title: string;
  description?: string;
  action?: ReactNode;
  icon?: ReactNode;
  logoSrc?: string;
  sx?: SxProps<Theme>;
}

/** Shared empty-state presentation with app-provided iconography and content. */
export function EmptyStateLayout({ title, description, action, icon, logoSrc, sx }: EmptyStateLayoutProps) {
  return (
    <Paper variant="emptyState" role="status" sx={sx}>
      {icon ? (
        <Paper variant="emptyStateIcon" elevation={0} aria-hidden="true">{icon}</Paper>
      ) : logoSrc ? (
        <Paper component="img" variant="emptyStateLogo" src={logoSrc} alt="" />
      ) : null}
      <Box sx={{ minWidth: 0, width: '100%' }}>
        <Typography variant="emptyStateTitle" color="text.primary">{title}</Typography>
        {description && (
          <Typography variant="emptyStateDescription" color="text.secondary" sx={{ mt: 0.75, maxWidth: '80%', mx: 'auto' }}>
            {description}
          </Typography>
        )}
      </Box>
      {action && <Box sx={{ mt: 2.5, flex: '0 0 auto' }}>{action}</Box>}
    </Paper>
  );
}
