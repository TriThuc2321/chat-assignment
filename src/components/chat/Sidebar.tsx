import logo from '@/assets/images/logo.png';
import { useAuth } from '@/hooks';
import { useLogout } from '@/hooks/apis/auth';
import { Button } from '@/libs/heroUI';
import { User } from '@/types/user';
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline';
import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { OnlineUser } from '.';

const users: User[] = [
  {
    id: '1',
    username: 'John Doe',
    online: true,
  },
  {
    id: '2',
    username: 'Jane Doe',
    online: false,
  },
  {
    id: '3',
    username: 'John Smith',
    online: true,
  },
  {
    id: '4',
    username: 'Jane Smith',
    online: false,
  },
];

export default function Sidebar() {
  const { id } = useParams();
  const { user } = useAuth();
  const { mutate } = useLogout();

  const currentUser = user ? { ...user, online: false } : null;

  const activeUser = useMemo(() => users.find(user => user.id === id), [id]);

  return (
    <div className="flex h-full min-w-[300px] flex-col justify-between rounded-2xl bg-primary py-4 shadow-md">
      <div className="flex h-full flex-col">
        <Button className="mx-4 py-10">
          <Link className="flex items-center gap-2" to="/">
            <img alt="logo" className="h-10 w-10" src={logo} />
            <p className="text-xl font-medium text-white">WebChats</p>
          </Link>
        </Button>

        <div className="flex max-h-[calc(100vh-300px)] flex-col gap-4 overflow-y-auto p-4">
          {users.map(user => (
            <OnlineUser
              key={user.id}
              href={`/${user.id}`}
              isActive={activeUser?.id === user.id}
              user={user}
            />
          ))}
        </div>
      </div>

      <div className="mx-4 flex flex-col gap-2 border-t pt-2">
        <OnlineUser user={currentUser} />

        <Button
          className="flex w-full items-center justify-between gap-6 border border-white py-6"
          onClick={() => mutate()}
        >
          <p className="text-base font-medium text-white">Logout</p>
          <ArrowLeftStartOnRectangleIcon className="size-6 text-white" />
        </Button>
      </div>
    </div>
  );
}
