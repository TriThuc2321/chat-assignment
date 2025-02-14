import {
  AuthHandleRoute,
  ProtectedRoute,
  SuspenseLoading,
} from '@/components/shared';
import { ChatPage, LoginPage, MessagePage } from '@/pages';
import { useRoutes } from 'react-router-dom';

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <ChatPage />
        </ProtectedRoute>
      ),
      children: [
        {
          path: ':id',
          element: (
            <SuspenseLoading>
              <MessagePage />
            </SuspenseLoading>
          ),
        },
      ],
    },
    {
      path: '/login',
      element: (
        <AuthHandleRoute>
          <LoginPage />
        </AuthHandleRoute>
      ),
    },
  ]);

  return <SuspenseLoading>{routes}</SuspenseLoading>;
}

export default App;
