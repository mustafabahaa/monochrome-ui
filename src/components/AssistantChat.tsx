import type { FormEvent, KeyboardEvent, ReactNode } from 'react';
import { useEffect, useRef } from 'react';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AiAssistantStreamCursor } from './AiAssistantPrimitives';

export type AssistantChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: ReactNode;
  avatar?: ReactNode;
  createdAt?: string | Date;
  streaming?: boolean;
};

export type AssistantChatProps = {
  messages: AssistantChatMessage[];
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void | Promise<void>;
  onStop?: () => void;
  busy?: boolean;
  disabled?: boolean;
  placeholder?: string;
  emptyState?: ReactNode;
  beforeMessages?: ReactNode;
  afterMessages?: ReactNode;
  renderMessage?: (message: AssistantChatMessage) => ReactNode;
  startAdornment?: ReactNode;
  sendAdornment?: ReactNode;
  stopAdornment?: ReactNode;
  inputLabel?: string;
  sendLabel?: string;
  stopLabel?: string;
  maxLength?: number;
  ariaLabel?: string;
  footer?: ReactNode;
  height?: number | string;
  transcriptRef?: { current: HTMLDivElement | null };
  onTranscriptScroll?: () => void;
  autoScroll?: boolean;
  onInputKeyDown?: (event: KeyboardEvent<HTMLElement>) => void;
  className?: string;
};

const ChatRoot = styled(Box, { name: 'AssistantChat', slot: 'Root' })({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
  minHeight: 0,
  width: '100%',
});

const Transcript = styled(Box, { name: 'AssistantChat', slot: 'Transcript' })({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  gap: 24,
  minHeight: 0,
  overflowY: 'auto',
  overscrollBehavior: 'contain',
  padding: 16,
});

const MessageRow = styled(Box, { name: 'AssistantChat', slot: 'MessageRow' })(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-start',
  '&[data-role="user"]': { justifyContent: 'flex-end' },
  '& > [data-message-content]': { minWidth: 0, maxWidth: 'min(100%, 48rem)' },
  '&[data-role="user"] > [data-message-content]': {
    padding: theme.spacing(1, 1.5),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.action.hover,
  },
}));

const Composer = styled('form', { name: 'AssistantChat', slot: 'Composer' })(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  gap: theme.spacing(1),
  flexShrink: 0,
  padding: theme.spacing(1.5),
  backgroundColor: theme.palette.background.paper,
}));

/** App-neutral chat transcript and composer; apps render their own tool results and content. */
export function AssistantChat({
  messages,
  value,
  onChange,
  onSubmit,
  onStop,
  busy = false,
  disabled = false,
  placeholder = 'Message…',
  emptyState,
  renderMessage,
  startAdornment,
  sendAdornment,
  stopAdornment,
  inputLabel = 'Message',
  sendLabel = 'Send message',
  stopLabel = 'Stop generating',
  maxLength,
  ariaLabel = 'Conversation',
  footer,
  height = 'min(60dvh, 520px)',
  transcriptRef: externalTranscriptRef,
  onTranscriptScroll,
  autoScroll = true,
  beforeMessages,
  afterMessages,
  onInputKeyDown,
  className,
}: AssistantChatProps) {
  const transcriptRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = transcriptRef.current;
    if (autoScroll && element) element.scrollTop = element.scrollHeight;
  }, [autoScroll, messages]);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!busy && !disabled && value.trim()) void onSubmit();
  };

  return (
    <ChatRoot className={className} sx={{ height }}>
      <Transcript ref={(node) => {
        transcriptRef.current = node;
        if (externalTranscriptRef) externalTranscriptRef.current = node;
      }} onScroll={onTranscriptScroll} role="log" aria-label={ariaLabel} aria-live="polite">
        {beforeMessages}
        {messages.length === 0 ? emptyState : messages.map((message) => (
          <MessageRow key={message.id} data-role={message.role}>
            {message.role === 'assistant' && message.avatar}
            <Box data-message-content>
              {renderMessage ? renderMessage(message) : message.content}
              {message.streaming && <AiAssistantStreamCursor aria-hidden="true" />}
            </Box>
          </MessageRow>
        ))}
        {afterMessages}
      </Transcript>
      <Composer onSubmit={submit}>
        {startAdornment}
        <TextField
          fullWidth
          multiline
          maxRows={6}
          value={value}
          disabled={disabled || busy}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={(event) => {
            onInputKeyDown?.(event);
            if (event.defaultPrevented) return;
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault();
              if (!busy && !disabled && value.trim()) void onSubmit();
            }
          }}
          placeholder={placeholder}
          aria-label={inputLabel}
          slotProps={{ htmlInput: { maxLength } }}
        />
        {busy && onStop ? (
          <IconButton aria-label={stopLabel} onClick={onStop} disabled={disabled}>{stopAdornment ?? <Typography variant="button">Stop</Typography>}</IconButton>
        ) : (
          <Button type="submit" variant="contained" aria-label={sendLabel} disabled={disabled || busy || !value.trim()}>
            {sendAdornment ?? sendLabel}
          </Button>
        )}
      </Composer>
      {footer}
    </ChatRoot>
  );
}
