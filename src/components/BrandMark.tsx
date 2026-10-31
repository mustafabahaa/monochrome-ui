import { styled } from '@mui/material/styles';

/** Brand mark whose monochrome tint follows the shared application theme. */
export const BrandMark = styled('img', {
  shouldForwardProp: (prop) => prop !== 'size',
})<{ size?: number }>(({ theme, size = 30 }) => ({
  display: 'block', width: size, height: size, objectFit: 'contain',
  filter: theme.palette.mode === 'dark' ? 'brightness(0) invert(1)' : 'brightness(0)',
}));
