import {
  AuthHandleRoute,
  ProtectedRoute,
  SuspenseLoading,
} from '@/components/shared';
import { ChatPage, LoginPage, MessagePage } from '@/pages';

export const ROUTES = [
  {
    path: '/',
    element: (
      <SuspenseLoading>
        <ProtectedRoute>
          <ChatPage />
        </ProtectedRoute>
      </SuspenseLoading>
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
      <SuspenseLoading>
        <AuthHandleRoute>
          <LoginPage />
        </AuthHandleRoute>
      </SuspenseLoading>
    ),
  },
];
