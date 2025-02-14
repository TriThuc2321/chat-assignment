import { useAuth } from '@/hooks';
import { Navigate } from 'react-router-dom';

function AuthHandleRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  return user ? <Navigate replace to="/" /> : children;
}

export default AuthHandleRoute;
