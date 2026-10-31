import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SystemStatusContent = styled(Stack, {
  name: 'SystemStatusContent',
  slot: 'Root',
})(({ theme }) => ({
  width: '100%',
  maxWidth: 560,
  alignItems: 'center',
  textAlign: 'center',
  gap: theme.spacing(1.5),
}));

export const SystemStatusLogo = styled('img', {
  name: 'SystemStatusLogo',
  slot: 'Root',
})({
  display: 'block',
  width: 'clamp(144px, 28vw, 192px)',
  height: 'clamp(144px, 28vw, 192px)',
  objectFit: 'contain',
  marginBottom: 12,
});

export const SystemStatusCode = styled(Typography, {
  name: 'SystemStatusCode',
  slot: 'Root',
})({});

export const SystemStatusTitle = styled(Typography, {
  name: 'SystemStatusTitle',
  slot: 'Root',
})({});

export const SystemStatusAction = styled(Stack, {
  name: 'SystemStatusAction',
  slot: 'Root',
})(({ theme }) => ({ alignItems: 'center', marginTop: theme.spacing(1.5) }));
