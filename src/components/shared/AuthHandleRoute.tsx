import { Navigate } from 'react-router-dom';

function AuthHandleRoute({ children }: { children: React.ReactNode }) {
  const authed = true;

  return authed ? <Navigate replace to="/" /> : children;
}

export default AuthHandleRoute;
