import { useAuth } from '@/hooks';
import { Avatar, Badge } from '@/libs/heroUI';

export default function EmptyMessage() {
  const { user } = useAuth();
  const { username } = user || {};

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <Badge
        classNames={{
          badge: user?.online ? '' : 'hidden',
        }}
        color="success"
        content=""
        placement="bottom-right"
        shape="circle"
      >
        <Avatar
          classNames={{
            name: 'text-3xl font-semibold',
            base: 'bg-primary text-white',
          }}
          name={username?.charAt(0)?.toUpperCase()}
          radius="full"
          size="lg"
        />
      </Badge>
      <div className="flex flex-col items-center gap-1">
        <h4 className="text-3xl font-semibold text-primary">
          Welcome! {username}
        </h4>
        <p className="text-base text-gray-500">
          Choose a person to start chat.
        </p>
      </div>
    </div>
  );
}
