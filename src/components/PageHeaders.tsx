import type { ReactNode } from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

/** Shared page title, supporting copy, and optional page-level action. */
export function PageHeader({ title, subtitle, action }: PageHeaderProps) {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      useFlexGap
      gap={2}
      sx={{ mt: 0.5 }}
      alignItems={action ? 'center' : 'flex-start'}
      justifyContent="space-between"
    >
      <Box sx={{ minWidth: 0 }}>
        <Typography variant="pageTitle" color="text.primary">{title}</Typography>
        {subtitle && <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>{subtitle}</Typography>}
      </Box>
      {action && <Box sx={{ flexShrink: 0 }}>{action}</Box>}
    </Stack>
  );
}

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  trailing?: ReactNode;
}

/** Shared section title with optional icon and trailing controls. */
export function SectionHeader({ title, subtitle, icon, trailing }: SectionHeaderProps) {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      useFlexGap
      alignItems="flex-start"
      justifyContent="space-between"
      gap={2}
    >
      <Stack direction="row" gap={1.5} alignItems="center" sx={{ minWidth: 0 }}>
        {icon && <Paper variant="iconBadge">{icon}</Paper>}
        <Box sx={{ minWidth: 0 }}>
          <Typography variant="sectionTitle" noWrap>{title}</Typography>
          {subtitle && <Typography variant="sectionSubtitle" color="text.secondary">{subtitle}</Typography>}
        </Box>
      </Stack>
      {trailing && <Box sx={{ flexShrink: 0 }}>{trailing}</Box>}
    </Stack>
  );
}
