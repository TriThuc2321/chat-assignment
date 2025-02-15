import { useAuth } from '@/hooks';
import { Navigate, useLocation } from 'react-router-dom';
import { Loader } from '.';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) return <Loader />;

  return user ? (
    children
  ) : (
    <Navigate replace state={{ path: location.pathname }} to="/login" />
  );
}

export default ProtectedRoute;
