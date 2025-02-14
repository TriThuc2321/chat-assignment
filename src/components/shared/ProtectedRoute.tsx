import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const authed = true;
  const location = useLocation();

  return authed ? (
    children
  ) : (
    <Navigate replace state={{ path: location.pathname }} to="/login" />
  );
}

export default ProtectedRoute;
