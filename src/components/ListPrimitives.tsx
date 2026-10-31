import { ListItemIcon } from '@mui/material';
import { styled } from '@mui/material/styles';

/** List action icon that inherits the semantic destructive text color. */
export const DestructiveListIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: 36,
  color: theme.palette.error.main,
}));
