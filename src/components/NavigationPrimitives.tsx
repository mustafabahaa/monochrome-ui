import { ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';

/** Shared icon-first item used by the responsive application navigation. */
export const NavigationItem = styled(ButtonBase)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: 12,
  color: theme.palette.text.secondary,
  '&:hover, &.active': {
    backgroundColor: theme.palette.action.selected,
    color: theme.palette.text.primary,
  },
  '&.Mui-focusVisible': {
    outline: `2px solid ${theme.palette.text.primary}`,
    outlineOffset: 2,
  },
})) as typeof ButtonBase;

/** Larger touch target and centered label for the bottom navigation. */
export const MobileNavigationItem = styled(ButtonBase)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  minHeight: 48,
  padding: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  position: 'relative',
  color: theme.palette.text.secondary,
  '&.active': { color: theme.palette.text.primary },
  '&.active::after': {
    content: '""', position: 'absolute', bottom: 5, width: 20, height: 2,
    backgroundColor: theme.palette.text.primary, borderRadius: 1,
  },
  '&:hover': { backgroundColor: theme.palette.action.hover },
  '&.Mui-focusVisible': {
    outline: `2px solid ${theme.palette.text.primary}`,
    outlineOffset: -4,
  },
})) as typeof ButtonBase;

/** Low emphasis hit target for a brand mark. */
export const BrandButton = styled(ButtonBase)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: theme.shape.borderRadius,
  '&:hover': { opacity: 0.8 },
})) as typeof ButtonBase;

/** Prominent add action anchored at the end of the desktop rail. */
export const NavigationAction = styled(ButtonBase)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: '50%',
  color: theme.palette.mode === 'dark' ? '#0D0D0D' : '#FFFFFF',
  backgroundColor: theme.palette.mode === 'dark' ? '#FFFFFF' : '#0D0D0D',
  '&:hover': { opacity: 0.82 },
  '&.Mui-focusVisible': {
    outline: `2px solid ${theme.palette.text.primary}`,
    outlineOffset: 2,
  },
})) as typeof ButtonBase;
