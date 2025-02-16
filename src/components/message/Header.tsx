import { Avatar, Badge } from '@/libs/heroUI';
import { User } from '@/types/user';

type HeaderProps = {
  user: User;
};
export default function Header({ user }: HeaderProps) {
  const { username } = user;

  return (
    <div className="flex w-full items-center gap-4 px-4 py-3 shadow-sm">
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
            name: 'text-xl font-medium text-primary',
            base: 'bg-accent',
          }}
          name={username?.charAt(0)?.toUpperCase()}
          radius="full"
          size="lg"
        />
      </Badge>

      <div className="flex flex-col">
        <p className="font-medium">{username}</p>
        <p className="text-sm text-gray-500">Online</p>
      </div>
    </div>
  );
}
