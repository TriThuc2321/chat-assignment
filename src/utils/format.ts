import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const getMessageDuration = (messageTime: string | Date): string => {
  const messageDate = dayjs(messageTime);
  const now = dayjs();

  return messageDate.from(now);
};

export const getMessageDurationFormatted = (
  messageTime?: string | number | Date,
): string => {
  if (!messageTime) return '';

  const messageDate = dayjs(messageTime);
  const now = dayjs();
  const diffMinutes = now.diff(messageDate, 'minute');

  if (diffMinutes < 1) return 'just now';
  if (diffMinutes < 60) return `${diffMinutes}m ago`;

  const diffHours = now.diff(messageDate, 'hour');

  if (diffHours < 24) return `${diffHours}h ago`;

  const diffDays = now.diff(messageDate, 'day');

  if (diffDays < 7) return `${diffDays}d ago`;

  return messageDate.format('MMM D, YYYY');
};
