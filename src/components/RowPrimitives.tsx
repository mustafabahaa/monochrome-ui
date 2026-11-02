import type { ComponentProps } from 'react';
import { Box, IconButton, ListItem, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

/** Shared separators and reusable row treatments. */
export const DividedDetailRow = styled(Box, {
  name: 'DividedDetailRow',
  slot: 'Root',
})(({ theme }) => ({
  paddingTop: theme.spacing(2.5),
  paddingBottom: theme.spacing(2.5),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const ResponsiveSummaryItem = styled(Box, {
  name: 'ResponsiveSummaryItem',
  slot: 'Root',
})(({ theme }) => ({
  paddingTop: theme.spacing(2.5),
  paddingBottom: theme.spacing(2.5),
  borderBottom: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.up('lg')]: { borderBottom: 0 },
}));

const EditableListRowRoot = styled(ListItem, {
  name: 'EditableListRow',
  slot: 'Root',
})(({ theme }) => ({
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
  minHeight: 48,
  '&:hover .row-actions, &:focus-within .row-actions': { opacity: 1 },
}));

export function EditableListRow(props: ComponentProps<typeof ListItem>) {
  return <EditableListRowRoot {...props} />;
}

const RowActionGroupRoot = styled(Stack, {
  name: 'RowActionGroup',
  slot: 'Root',
})(({ theme }) => ({
  opacity: 0,
  [theme.breakpoints.down('md')]: { opacity: 1 },
}));

export function RowActionGroup(props: ComponentProps<typeof Stack>) {
  return <RowActionGroupRoot {...props} />;
}

const CompactIconButtonRoot = styled(IconButton, {
  name: 'CompactIconButton',
  slot: 'Root',
})({ width: 30, height: 30 });

export function CompactIconButton(props: ComponentProps<typeof IconButton>) {
  return <CompactIconButtonRoot {...props} />;
}
