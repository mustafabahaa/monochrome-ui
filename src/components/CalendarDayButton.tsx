import type { ButtonBaseProps } from '@mui/material/ButtonBase';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const CalendarDayRoot = styled(ButtonBase)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  minHeight: 56,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(0.35),
  padding: theme.spacing(0.5),
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.text.secondary,
  transition: 'background-color 160ms ease, color 160ms ease',
  '&:hover': { backgroundColor: theme.palette.action.hover },
  '&.Mui-focusVisible': {
    outline: `2px solid ${theme.palette.text.primary}`,
    outlineOffset: 2,
  },
}));

const DayNumber = styled('span')(({ theme }) => ({
  width: 30,
  height: 30,
  display: 'grid',
  placeItems: 'center',
  borderRadius: '50%',
  color: theme.palette.text.primary,
  transition: 'background-color 160ms ease, color 160ms ease',
  '[aria-pressed="true"] &': {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
}));

export interface CalendarDayButtonProps extends Omit<ButtonBaseProps, 'children'> {
  weekday: string;
  day: string;
  selected: boolean;
}

/** Quiet date selector: only the selected day number receives the active fill. */
export function CalendarDayButton({ weekday, day, selected, ...buttonProps }: CalendarDayButtonProps) {
  return (
    <CalendarDayRoot aria-pressed={selected} {...buttonProps}>
      <Typography variant="caption" component="span" color="inherit">
        {weekday}
      </Typography>
      <DayNumber>
        <Typography variant="h6" component="span" color="inherit">
          {day}
        </Typography>
      </DayNumber>
    </CalendarDayRoot>
  );
}
