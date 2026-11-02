import { forwardRef } from 'react';
import Paper, { type PaperProps } from '@mui/material/Paper';
import { alpha, styled } from '@mui/material/styles';

export type MetricBadgeTone = 'primary' | 'secondary' | 'error' | 'success';

export type MetricBadgeProps = Omit<PaperProps, 'color' | 'variant'> & {
  tone: MetricBadgeTone;
};

const Root = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'tone',
})<{ tone: MetricBadgeTone }>(({ theme, tone }) => {
  const color = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    error: theme.palette.error.main,
    success: theme.palette.success.main,
  }[tone];

  return {
    width: 36,
    height: 36,
    flexShrink: 0,
    display: 'grid',
    placeItems: 'center',
    borderRadius: 10,
    color,
    backgroundColor: alpha(color, 0.1),
    boxShadow: 'none',
  };
});

/** Small badge for emphasizing a metric with a semantic theme color. */
export const MetricBadge = forwardRef<HTMLDivElement, MetricBadgeProps>(function MetricBadge(
  { tone, ...props },
  ref,
) {
  return <Root ref={ref} tone={tone} {...props} />;
});
