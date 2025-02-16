import { Avatar } from '@/libs/heroUI';
import { ChatMessage } from '@/types/message';
import { getMessageDurationFormatted } from '@/utils/format';
import classNames from 'classnames';

type MessageItemProps = {
  message?: ChatMessage;
  isSender?: boolean;
  showDetail?: boolean;
};

export default function MessageItem({
  message,
  isSender,
  showDetail,
}: MessageItemProps) {
  const { sender, message: content, timestamp } = message || {};

  return (
    <div
      className={classNames('flex items-end gap-2', {
        'flex-row-reverse': isSender,
      })}
    >
      <Avatar
        className={showDetail ? 'invisible' : ''}
        classNames={{
          name: 'text-2xl font-medium text-primary',
          base: 'bg-accent',
        }}
        name={sender?.username?.charAt(0)?.toUpperCase()}
        radius="full"
        size="lg"
      />

      <div
        className={classNames('flex flex-col gap-1', {
          'items-end': !isSender,
        })}
      >
        <p className="text-xs">{getMessageDurationFormatted(timestamp)}</p>
        <div
          className={classNames(
            'flex flex-col rounded-lg bg-secondary px-4 py-2',
            {
              'bg-gray-200': !isSender,
            },
          )}
        >
          <p className={classNames({ 'text-white': isSender })}>{content}</p>
        </div>
      </div>
    </div>
  );
}
