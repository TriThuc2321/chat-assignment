import { lazy } from 'react';

export const ProtectedRoute = lazy(() => import('./ProtectedRoute'));
export const AuthHandleRoute = lazy(() => import('./AuthHandleRoute'));
export const SuspenseLoading = lazy(() => import('./SuspenseLoading'));
