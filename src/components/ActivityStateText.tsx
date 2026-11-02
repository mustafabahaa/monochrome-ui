import { styled } from '@mui/material/styles';
import Typography, { type TypographyProps } from '@mui/material/Typography';

type ActivityStateTextProps = Omit<TypographyProps, 'color'> & { inactive: boolean };

const ActivityStateTextRoot = styled(Typography, {
  name: 'ActivityStateText',
  slot: 'Root',
  shouldForwardProp: (prop) => prop !== 'inactive',
})<{ inactive: boolean }>(({ theme, inactive }) =>
  inactive
    ? {
        color: theme.palette.text.disabled,
        textDecoration: 'line-through',
      }
    : {},
);

/** Typography treatment for inactive activity records. */
export function ActivityStateText({ inactive, ...props }: ActivityStateTextProps) {
  return <ActivityStateTextRoot inactive={inactive} {...props} />;
}
