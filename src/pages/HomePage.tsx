import { Loader } from '@mantine/core';
import { lazy, Suspense } from 'react';

const LazyEmployees = lazy(() => import('@/features/employees/components/Employees'));

export function Component() {
  return (
    <Suspense fallback={<Loader />}>
      <LazyEmployees />
    </Suspense>
  );
} 