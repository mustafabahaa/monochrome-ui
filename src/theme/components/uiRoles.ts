import type { Components, Theme } from '@mui/material/styles';

/** Reusable UI role variants for surfaces not covered by the shared base theme. */
export const uiRoleOverrides: Components<Theme> = {
  MuiButton: {
    variants: [
      { props: { variant: 'largeOutlinedAction' }, style: ({ theme }) => ({ height: 48, '&:hover': { backgroundColor: theme.palette.action.hover, borderColor: theme.palette.divider } }) },
      { props: { variant: 'quietAction' }, style: ({ theme }) => ({ color: theme.palette.text.secondary }) },
    ],
  },
  MuiPaper: {
    variants: [
      { props: { variant: 'mediaSurface' }, style: ({ theme }) => ({ display: 'block', borderRadius: theme.spacing(1), backgroundColor: theme.palette.action.hover, objectFit: 'contain' }) },
      { props: { variant: 'mediaThumbnail' }, style: ({ theme }) => ({ display: 'block', borderRadius: theme.spacing(0.75), backgroundColor: theme.palette.action.hover, objectFit: 'cover' }) },
      { props: { variant: 'contentPanel' }, style: ({ theme }) => ({ backgroundColor: theme.palette.background.paper, border: `1px solid ${theme.palette.divider}`, borderRadius: theme.spacing(1), padding: theme.spacing(3) }) },
      { props: { variant: 'insetPanel' }, style: ({ theme }) => ({ backgroundColor: theme.palette.background.default, border: `1px solid ${theme.palette.divider}`, borderRadius: theme.shape.borderRadius, padding: theme.spacing(2) }) },
      { props: { variant: 'mediaFrame' }, style: ({ theme }) => ({ width: '100%', display: 'grid', placeItems: 'center', backgroundColor: theme.palette.action.hover, padding: theme.spacing(2), boxSizing: 'border-box' }) },
    ],
  },
  MuiChip: {
    variants: [
      { props: { variant: 'inverseTag' }, style: { height: 28, color: '#fff', backgroundColor: 'rgba(0,0,0,.48)', '& .MuiChip-icon': { color: 'inherit', marginLeft: 6 }, '& .MuiChip-label': { paddingLeft: 8, paddingRight: 8, fontSize: 12, fontWeight: 700 } } },
      { props: { variant: 'inverseAlertTag' }, style: { height: 28, color: '#fff', backgroundColor: 'rgba(150,24,24,.78)', '& .MuiChip-icon': { color: 'inherit', marginLeft: 6 }, '& .MuiChip-label': { paddingLeft: 8, paddingRight: 8, fontSize: 12, fontWeight: 700 } } },
    ],
  },
  MuiTypography: {
    variants: [
      { props: { variant: 'pageHeading' }, style: { fontWeight: 750, fontSize: 'clamp(25px, 3vw, 36px)', lineHeight: 1.15, overflowWrap: 'anywhere' } },
      { props: { variant: 'sectionHeading' }, style: { fontSize: 18, fontWeight: 700, letterSpacing: '-.015em' } },
      { props: { variant: 'sectionDescription' }, style: { lineHeight: 1.55 } },
      { props: { variant: 'metadataLabel' }, style: { fontWeight: 600 } },
      { props: { variant: 'monospaceValue' }, style: { fontFamily: 'monospace', fontWeight: 600, overflowWrap: 'anywhere' } },
      { props: { variant: 'itemTitle' }, style: { fontWeight: 650, overflowWrap: 'anywhere' } },
      { props: { variant: 'brandName' }, style: ({ theme }) => ({ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', color: theme.palette.text.primary }) },
      { props: { variant: 'screenHeading' }, style: { fontSize: 28, fontWeight: 600 } },
      { props: { variant: 'brandMark' }, style: ({ theme }) => ({ width: 64, height: 64, objectFit: 'contain', filter: theme.palette.mode === 'dark' ? 'brightness(0) invert(1)' : 'brightness(0)' }) },
      { props: { variant: 'bodyNote' }, style: { whiteSpace: 'pre-wrap', lineHeight: 1.7 } },
    ],
  },
  MuiAvatar: {
    variants: [
      { props: { variant: 'mediaPlaceholder' }, style: ({ theme }) => ({ width: 52, height: 72, backgroundColor: theme.palette.action.hover, color: theme.palette.text.secondary, flexShrink: 0 }) },
      { props: { variant: 'mediaFallbackLarge' }, style: ({ theme }) => ({ width: 'clamp(104px, 10vw, 136px)', height: 'clamp(104px, 10vw, 136px)', borderRadius: theme.shape.borderRadius, backgroundColor: theme.palette.action.selected, color: theme.palette.text.primary, fontSize: '2.5rem', fontWeight: 800, flexShrink: 0 }) },
      { props: { variant: 'mediaFallbackCompact' }, style: ({ theme }) => ({ width: 92, height: 92, fontSize: 36, fontWeight: 700, backgroundColor: theme.palette.background.paper, color: theme.palette.text.primary }) },
    ],
  },
};
