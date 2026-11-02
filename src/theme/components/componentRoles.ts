import { alpha, type Components, type Theme } from '@mui/material/styles';
import { designTokens } from '../../foundations/tokens';
import type { OverrideContext } from './types';

/** Named visual treatments for reusable component roles. */
export const componentRoleOverrides = ({ mode, tokens: t }: OverrideContext): Components<Theme> => {
  const dark = mode === 'dark';
  const foreground = dark ? '#F5F5F5' : '#171717';
  const neutralSurface = dark ? '#292929' : '#F4F4F4';
  const border = dark ? 'rgba(255,255,255,.12)' : 'rgba(13,13,13,.10)';

  return {
    MuiAppBar: {
      variants: [{ props: { variant: 'shellBar' }, style: {
        backgroundColor: alpha(t.surface, 0.9), backgroundImage: 'none', boxShadow: 'none',
        color: t.textPrimary, backdropFilter: 'blur(16px)', borderBottom: `1px solid ${t.borderGray}`,
      } }],
    },
    MuiAvatar: {
      variants: [{ props: { variant: 'profile' }, style: {
        width: 32, height: 32, backgroundColor: dark ? '#FFFFFF' : '#0D0D0D',
        color: dark ? '#0D0D0D' : '#FFFFFF', fontSize: 13, fontWeight: 700, filter: 'grayscale(1)',
      } }],
    },
    MuiMenuItem: { variants: [
      { props: { variant: 'menuAction' }, style: { borderRadius: 8 } },
      { props: { variant: 'destructiveAction' }, style: { borderRadius: 8, color: designTokens.color.error } },
    ] },
    MuiChip: {
      variants: [
        { props: { variant: 'overlayBadge' }, style: {
          height: 22, fontSize: 10, fontWeight: 700, color: '#FFFFFF',
          backgroundColor: 'rgba(13,13,13,.68)', backdropFilter: 'blur(4px)',
        } },
        { props: { variant: 'quietBadge' }, style: {
          height: 22, fontSize: 10, fontWeight: 700, color: foreground,
          backgroundColor: t.surfacePure, border: `1px solid ${t.borderGray}`,
          '& .MuiChip-icon': { color: t.textSecondary },
        } },
      ],
    },
    MuiIconButton: {
      variants: [
        { props: { variant: 'overlayAction' }, style: {
          position: 'absolute', top: 40, right: 8, width: 34, height: 34,
          color: '#FFFFFF', backgroundColor: 'rgba(13,13,13,.68)', backdropFilter: 'blur(4px)',
          '&:hover': { backgroundColor: 'rgba(13,13,13,.84)' },
        } },
        { props: { variant: 'userMenuTrigger' }, style: {
          padding: 4, width: 40, height: 40, borderRadius: '50%', backgroundColor: t.surfacePure,
          border: `1px solid ${t.borderGray}`, '&:hover': { backgroundColor: t.surfaceContainerLow },
        } },
        { props: { variant: 'utilityAction' }, style: { border: `1px solid ${t.borderGray}` } },
        { props: { variant: 'quietAction' }, style: { padding: 2, color: t.textSecondary } },
      ],
    },
    MuiPaper: {
      variants: [
        { props: { variant: 'mediaHero' }, style: {
          position: 'relative', width: '100%', aspectRatio: '3 / 4', minHeight: 0, flexShrink: 0,
          overflow: 'hidden', backgroundColor: t.surfaceContainerLow,
        } },
        { props: { variant: 'mediaScrim' }, style: {
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,.85), transparent)', padding: '24px 12px 8px',
        } },
        { props: { variant: 'insetPanel' }, style: {
          padding: 16, borderRadius: 12, backgroundColor: t.surfaceContainerLow,
        } },
        { props: { variant: 'iconBadge' }, style: {
          width: 36, height: 36, borderRadius: 8, display: 'grid', placeItems: 'center',
          backgroundColor: t.surfaceContainerLow, color: foreground, flexShrink: 0,
        } },
        { props: { variant: 'dangerIconBadge' }, style: {
          width: 44, height: 44, borderRadius: 8, display: 'grid', placeItems: 'center',
          backgroundColor: t.surfaceContainerLow, color: designTokens.color.error, flexShrink: 0,
        } },
        { props: { variant: 'imagePicker' }, style: {
          width: 76, height: 76, borderRadius: 10, flexShrink: 0, overflow: 'hidden',
          display: 'grid', placeItems: 'center', backgroundColor: t.surfaceContainerLow, color: t.textSecondary,
        } },
        { props: { variant: 'emptyState' }, style: {
          display: 'flex', alignItems: 'center', gap: 16, padding: '24px 16px', borderRadius: 12,
          backgroundColor: t.surfaceContainerLow,
        } },
        { props: { variant: 'emptyStateIcon' }, style: {
          width: 44, height: 44, flex: '0 0 auto', display: 'grid', placeItems: 'center',
          borderRadius: 8, backgroundColor: t.surfacePure, color: t.textSecondary,
        } },
        { props: { variant: 'infoPanel' }, style: { padding: 16, borderRadius: 12, border: `1px solid ${border}`, backgroundColor: neutralSurface } },
        { props: { variant: 'messagePanel' }, style: { padding: 16, whiteSpace: 'pre-wrap', borderRadius: 12, border: `1px solid ${border}`, backgroundColor: neutralSurface } },
        { props: { variant: 'approvalPanel' }, style: { padding: 16, borderRadius: 12, border: `1px solid ${border}`, backgroundColor: neutralSurface } },
        { props: { variant: 'codePanel' }, style: {
          maxHeight: 180, overflow: 'auto', whiteSpace: 'pre-wrap', wordBreak: 'break-word',
          fontFamily: 'monospace', fontSize: 12, padding: 10, backgroundColor: t.surfacePure,
          border: `1px solid ${border}`, borderRadius: 8,
        } },
        { props: { variant: 'metadataPanel' }, style: { padding: 12, border: `1px solid ${border}`, borderRadius: 12, backgroundColor: neutralSurface } },
        { props: { variant: 'tokenValue' }, style: { flex: 1, fontSize: 12, overflowWrap: 'anywhere' } },
        { props: { variant: 'appBackdrop' }, style: { position: 'fixed', inset: 0, zIndex: 0, backgroundColor: t.surface, pointerEvents: 'none' } },
        { props: { variant: 'systemBackdrop' }, style: { position: 'fixed', inset: 0, display: 'grid', placeItems: 'center', padding: 24, backgroundColor: t.surface } },
        { props: { variant: 'mobileDock' }, style: {
          position: 'fixed', inset: 'auto 0 0', zIndex: 1100, display: 'block',
          backgroundColor: t.surface, borderTop: `1px solid ${t.borderGray}`, paddingBottom: 'env(safe-area-inset-bottom, 0px)',
          '@media (min-width:900px)': { display: 'none' },
        } },
        { props: { variant: 'desktopRail' }, style: {
          position: 'fixed', inset: '0 auto 0 0', width: 72, zIndex: 1200, display: 'flex',
          flexDirection: 'column', alignItems: 'center', padding: '18px 10px',
          backgroundColor: t.surfaceOffWhite, borderRight: `1px solid ${t.borderGray}`,
          '@media (max-width:899px)': { display: 'none' },
        } },
        { props: { variant: 'popoverMenuSurface' }, style: {
          width: 240, marginTop: 8, overflow: 'hidden', borderRadius: 16,
          border: `1px solid ${t.borderGray}`,
        } },
        { props: { variant: 'listRow' }, style: { borderBottom: `1px solid ${t.borderGray}` } },
      ],
    },
    MuiSkeleton: {
      variants: [
        { props: { variant: 'mediaCover' }, style: { position: 'absolute', inset: 0, width: '100%', height: '100%', transform: 'none', backgroundColor: alpha(foreground, 0.08) } },
        { props: { variant: 'mediaBadge' }, style: { borderRadius: 999 } },
        { props: { variant: 'mediaTitle' }, style: { backgroundColor: 'rgba(255,255,255,.22)' } },
        { props: { variant: 'mediaMetadata' }, style: { backgroundColor: 'rgba(255,255,255,.16)' } },
        { props: { variant: 'mediaAction' }, style: { borderRadius: 999 } },
      ],
    },
    MuiTypography: {
      variants: [
        { props: { variant: 'heroTitle' }, style: { fontSize: 14, fontWeight: 800, color: '#FFFFFF', lineHeight: 1.25 } },
        { props: { variant: 'heroMetadata' }, style: { fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,.7)' } },
        { props: { variant: 'monospaceValue' }, style: { fontFamily: 'monospace', wordBreak: 'break-all', fontWeight: 600, color: t.textPrimary } },
        { props: { variant: 'dialogTitle' }, style: { fontWeight: 700 } },
        { props: { variant: 'sectionTitle' }, style: { fontWeight: 650 } },
        { props: { variant: 'settingLabel' }, style: { fontWeight: 600 } },
        { props: { variant: 'panelTitle' }, style: { fontWeight: 700 } },
        { props: { variant: 'verificationCode' }, style: { fontFamily: 'monospace', fontWeight: 700, fontSize: 20, letterSpacing: '.08em' } },
        { props: { variant: 'codeValue' }, style: { fontFamily: 'monospace', fontWeight: 700, fontSize: 12 } },
        { props: { variant: 'technicalValue' }, style: { fontFamily: 'monospace', overflowWrap: 'anywhere' } },
        { props: { variant: 'navigationLabel' }, style: { fontSize: 11, fontWeight: 600, lineHeight: 1.4, color: 'inherit' } },
        { props: { variant: 'brandWordmark' }, style: { fontSize: 24, lineHeight: '30px', fontWeight: 800, letterSpacing: '-.01em', color: t.textPrimary } },
        { props: { variant: 'breadcrumb' }, style: { fontSize: 13, color: t.textSecondary } },
        { props: { variant: 'breadcrumbCurrent' }, style: { fontSize: 13, fontWeight: 600, color: t.textPrimary } },
        { props: { variant: 'userName' }, style: { fontWeight: 700, fontSize: 14, color: t.textPrimary } },
        { props: { variant: 'userDetail' }, style: { fontSize: 12, color: t.textSecondary } },
        { props: { variant: 'errorTitle' }, style: { fontWeight: 700 } },
        { props: { variant: 'emptyStateTitle' }, style: { fontWeight: 650 } },
        { props: { variant: 'statusMetadata' }, style: { fontWeight: 600, color: t.textSecondary } },
        { props: { variant: 'statusMetadataEmphasis' }, style: { fontWeight: 600, color: designTokens.color.error } },
      ],
    },
  };
};
