import type { ComponentProps, ReactNode } from 'react';
import { Box, Skeleton, Typography, type TypographyProps } from '@mui/material';
import { alpha, styled, type Theme } from '@mui/material/styles';

export type StatusBadgeTone = 'success' | 'warning' | 'error';
export type MetricTileTone = 'primary' | 'secondary' | 'accent';
export type MetricTileRank = 'first' | 'second' | 'third';
export type SkeletonShape = 'status' | 'progress';

const PulseSkeletonRoot = styled(Skeleton, {
  name: 'PulseSkeleton',
  slot: 'Root',
  shouldForwardProp: (prop) => prop !== 'shape',
})<{ shape: SkeletonShape }>(({ theme, shape }) => ({
  borderRadius: shape === 'status' ? theme.shape.borderRadius : 4,
}));

export function PulseSkeleton({
  shape,
  ...props
}: Omit<ComponentProps<typeof Skeleton>, 'variant'> & { shape: SkeletonShape }) {
  return <PulseSkeletonRoot variant="rectangular" shape={shape} {...props} />;
}

type StatusBadgeProps = {
  tone: StatusBadgeTone;
  children: ReactNode;
};

const StatusRoot = styled(Box, {
  name: 'StatusBadge',
  slot: 'Root',
  shouldForwardProp: (prop) => prop !== 'tone',
})<{ tone: StatusBadgeTone }>(({ theme, tone }) => ({
  width: 'fit-content',
  borderRadius: 9,
  padding: '4.8px 8px',
  backgroundColor: alpha(theme.palette[tone].main, 0.1),
  color: theme.palette[tone].main,
}));

export function StatusBadge({ tone, children }: StatusBadgeProps) {
  return (
    <StatusRoot tone={tone}>
      <Typography variant="statusBadgeLabel">{children}</Typography>
    </StatusRoot>
  );
}

type PercentageValueProps = { value: number; suffix?: string };

const ValueRoot = styled(Typography, {
  name: 'PercentageValue',
  slot: 'Root',
})(({ theme }) => ({ [theme.breakpoints.up('lg')]: { fontSize: 40 } }));

export function PercentageValue({ value, suffix = '%' }: PercentageValueProps) {
  return (
    <ValueRoot variant="percentageValue" color="text.primary">
      {value}
      <Typography component="span" variant="percentageSuffix" sx={{ ml: 0.75 }}>
        {suffix}
      </Typography>
    </ValueRoot>
  );
}

export function SupportingSummary({ children, sx }: { children: ReactNode; sx?: TypographyProps['sx'] }) {
  return (
    <Typography variant="supportingSummary" color="text.secondary" sx={sx}>
      {children}
    </Typography>
  );
}

type RankedMetricTileProps = {
  tone: MetricTileTone;
  rank: MetricTileRank;
  percent: number;
  label: string;
  valueTitle: string;
  children: ReactNode;
};

const metricTileToneStyles = {
  primary: (theme: Theme) => ({
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  }),
  secondary: (theme: Theme) => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  }),
  accent: (theme: Theme) => ({
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  }),
} as const;

const metricTileRankHeights: Record<MetricTileRank, number> = {
  first: 120,
  second: 104,
  third: 88,
};

const MetricTileRoot = styled(Box, {
  name: 'RankedMetricTile',
  slot: 'Root',
  shouldForwardProp: (prop) => prop !== 'tone' && prop !== 'rank',
})<Pick<RankedMetricTileProps, 'tone' | 'rank'>>(({ theme, tone, rank }) => ({
  boxSizing: 'border-box',
  display: 'flex',
  flex: '1 1 0',
  minWidth: 0,
  height: metricTileRankHeights[rank],
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: theme.spacing(1.25),
  borderRadius: '13px 13px 9px 9px',
  ...metricTileToneStyles[tone](theme),
}));

export function RankedMetricTile({
  tone,
  rank,
  percent,
  label,
  valueTitle,
  children,
}: RankedMetricTileProps) {
  const compactPercent = percent >= 100;

  return (
    <MetricTileRoot tone={tone} rank={rank}>
      <Box>
        <Typography variant={compactPercent ? 'percentageCompact' : 'percentageLarge'}>
          {percent}%
        </Typography>
        <Typography variant="metricCaption">
          {label}
        </Typography>
      </Box>
      <Typography variant="metricValueCaption" noWrap title={valueTitle}>
        {children}
      </Typography>
    </MetricTileRoot>
  );
}
