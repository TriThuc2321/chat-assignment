import { Avatar, Badge, Button } from '@/libs/heroUI';
import { User } from '@/types/user';
import classNames from 'classnames';
import { LinkIf } from '../shared';

type OnlineUserProps = {
  user?: User | null;
  isActive?: boolean;
  href?: string;
};
export default function OnlineUser({ user, isActive, href }: OnlineUserProps) {
  if (!user) return null;

  const { username } = user;

  return (
    <Button
      className={classNames('h-auto min-h-16 justify-start p-0', {
        'bg-secondary': isActive,
      })}
    >
      <LinkIf className="w-full" to={href}>
        <div className="flex w-full items-center gap-2 px-4 py-3">
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
            />
          </Badge>

          <p className="text-base font-medium text-white">{username}</p>
        </div>
      </LinkIf>
    </Button>
  );
}
