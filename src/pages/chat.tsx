import { useAuth } from '@/hooks';
import { Button } from '@/libs/heroUI';
import { Outlet } from 'react-router-dom';

export default function Chat() {
  const { user, onLogout } = useAuth();

  return (
    <div>
      <p>{user?.username}</p>
      <p>Conversation</p>
      <Button onClick={() => onLogout()}>Logout</Button>
      <Outlet />
    </div>
  );
}
