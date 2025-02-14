import { useAuth } from '@/hooks';
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const location = useLocation();

  return user ? (
    children
  ) : (
    <Navigate replace state={{ path: location.pathname }} to="/login" />
  );
}

export default ProtectedRoute;
