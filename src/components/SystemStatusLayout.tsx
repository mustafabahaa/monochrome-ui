import type { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import {
  SystemStatusAction,
  SystemStatusCode,
  SystemStatusContent,
  SystemStatusLogo,
  SystemStatusTitle,
} from './SystemStatusPrimitives';

export interface SystemStatusLayoutProps {
  logoSrc: string;
  code: string;
  title: string;
  description: string;
  action?: ReactNode;
}

/** Centered, standalone presentation for public errors, missing routes, and setup states. */
export function SystemStatusLayout({ logoSrc, code, title, description, action }: SystemStatusLayoutProps) {
  return (
    <Box sx={{ display: 'grid', minHeight: '100dvh', placeItems: 'center', px: 2, py: 4 }}>
      <SystemStatusContent>
        <SystemStatusLogo src={logoSrc} alt="" />
        <SystemStatusCode variant="systemStatusCode" color="text.secondary">{code}</SystemStatusCode>
        <SystemStatusTitle variant="systemStatusTitle" color="text.primary">{title}</SystemStatusTitle>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
        {action && <SystemStatusAction>{action}</SystemStatusAction>}
      </SystemStatusContent>
    </Box>
  );
}
