import { useAuth } from '@/hooks';
import { useLogout } from '@/hooks/apis/auth';
import { Button } from '@/libs/heroUI';
import { Outlet } from 'react-router-dom';

export default function Chat() {
  const { user } = useAuth();
  const { mutateAsync: logout } = useLogout();

  const handleLogout = () => {
    logout({ userId: user?.id });
  };

  return (
    <div>
      <p>{user?.username}</p>
      <p>Conversation</p>
      <Button onClick={handleLogout}>Logout</Button>
      <Outlet />
    </div>
  );
}
