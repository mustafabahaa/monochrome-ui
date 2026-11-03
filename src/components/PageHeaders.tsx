import type { ReactNode } from 'react';
import { Box, Button, Paper, Stack, SvgIcon, Typography } from '@mui/material';

export interface PageHeaderBackAction {
  label: string;
  onClick: () => void;
}

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backAction?: PageHeaderBackAction;
  action?: ReactNode;
}

/** Shared page title, supporting copy, and optional back or trailing page actions. */
export function PageHeader({ title, subtitle, backAction, action }: PageHeaderProps) {
  const heading = (
    <Box sx={{ minWidth: 0 }}>
      <Typography variant="pageTitle" color="text.primary">
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );

  return (
    <Stack data-page-heading="true" spacing={1.5} sx={{ mt: 0.5 }}>
      {backAction && (
        <Button
          variant="text"
          onClick={backAction.onClick}
          startIcon={
            <SvgIcon fontSize="small" aria-hidden="true">
              <path
                d="M20 12H4m0 0 7-7m-7 7 7 7"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </SvgIcon>
          }
          sx={{ alignSelf: 'flex-start' }}
        >
          {backAction.label}
        </Button>
      )}
      <Stack
        direction="row"
        flexWrap="wrap"
        useFlexGap
        gap={2}
        alignItems={action ? 'center' : 'flex-start'}
        justifyContent="space-between"
      >
        {heading}
        {action && <Box sx={{ flexShrink: 0 }}>{action}</Box>}
      </Stack>
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
