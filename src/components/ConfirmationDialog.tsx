import type { ReactNode } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Typography } from '@mui/material';

export interface ConfirmationDialogProps {
  open: boolean;
  title: string;
  description: string;
  confirmLabel: string;
  cancelLabel?: string;
  tone?: 'neutral' | 'danger';
  icon?: ReactNode;
  loading?: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

/** Standard confirmation dialog; the consuming app owns the action and copy. */
export function ConfirmationDialog({
  open,
  title,
  description,
  confirmLabel,
  cancelLabel = 'Cancel',
  tone = 'neutral',
  icon,
  loading = false,
  onConfirm,
  onClose,
}: ConfirmationDialogProps) {
  const destructive = tone === 'danger';
  return (
    <Dialog open={open} onClose={loading ? undefined : onClose} maxWidth="xs" fullWidth>
      <Box sx={{ p: 1 }}>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', p: 2 }}>
          {icon && <Paper elevation={0} variant={destructive ? 'dangerIconBadge' : 'iconBadge'}>{icon}</Paper>}
          <Box sx={{ minWidth: 0 }}>
            <DialogTitle sx={{ p: 0, mb: 1 }}><Typography variant="dialogTitle" component="span">{title}</Typography></DialogTitle>
            <DialogContent sx={{ p: 0 }}><Typography variant="body2" color="text.secondary">{description}</Typography></DialogContent>
          </Box>
        </Box>
        <DialogActions sx={{ px: 2, pb: 2, pt: 1 }}>
          <Button onClick={onClose} variant="outlined" disabled={loading}>{cancelLabel}</Button>
          <Button onClick={onConfirm} variant="contained" color={destructive ? 'error' : 'primary'} loading={loading}>
            {confirmLabel}
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
