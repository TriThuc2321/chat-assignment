import { lazy } from 'react';

export const ProtectedRoute = lazy(() => import('./ProtectedRoute'));
export const AuthHandleRoute = lazy(() => import('./AuthHandleRoute'));
export const SuspenseLoading = lazy(() => import('./SuspenseLoading'));
export const RenderIf = lazy(() => import('./RenderIf'));
export const Loader = lazy(() => import('./Loader'));
export const LinkIf = lazy(() => import('./LinkIf'));
