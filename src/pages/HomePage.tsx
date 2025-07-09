import { lazy, Suspense } from 'react';

import { Center } from '@mantine/core';

import EmployeeTableSkeleton from '@/features/employees/components/EmployeeTableSkeleton';

const LazyEmployees = lazy(
  () => import('@/features/employees/components/Employees'),
);

export function Component() {
  return (
    <Suspense
      fallback={
        <Center style={{ height: '100%' }}>
          <EmployeeTableSkeleton />
        </Center>
      }
    >
      <LazyEmployees />
    </Suspense>
  );
} 