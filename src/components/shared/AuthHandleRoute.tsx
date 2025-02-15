import { useAuth } from '@/hooks';
import { Navigate } from 'react-router-dom';
import { Loader } from '.';

function AuthHandleRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();

  if (isLoading) return <Loader />;

  return user ? <Navigate replace to="/" /> : children;
}

export default AuthHandleRoute;
