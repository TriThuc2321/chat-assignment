import { LoadingPage } from '@/pages';
import React, { Suspense } from 'react';

export default function SuspenseLoading({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<LoadingPage />}>{children}</Suspense>;
}
