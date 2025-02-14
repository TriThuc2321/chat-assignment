import { lazy } from 'react';

export const ChatPage = lazy(() => import('./chat'));
export const NotFoundPage = lazy(() => import('./notfound'));
export const LoginPage = lazy(() => import('./login'));
export const MessagePage = lazy(() => import('./message'));
export const LoadingPage = lazy(() => import('./loading'));
