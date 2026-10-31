import { Box } from '@mui/material';

export interface BrandLoadingScreenProps {
  /** App-specific brand asset, preferably a transparent monochrome mark. */
  logoSrc: string;
  appName: string;
  logoSize?: number;
}

/** Full-viewport, logo-only loading presentation for app startup and route suspense. */
export function BrandLoadingScreen({ logoSrc, appName, logoSize = 72 }: BrandLoadingScreenProps) {
  return (
    <Box
      role="status"
      aria-label={`Loading ${appName}`}
      sx={{ display: 'grid', minHeight: '100dvh', placeItems: 'center', p: 3 }}
    >
      <Box
        component="img"
        src={logoSrc}
        alt={appName}
        sx={{ display: 'block', width: logoSize, height: logoSize, objectFit: 'contain' }}
      />
    </Box>
  );
}
