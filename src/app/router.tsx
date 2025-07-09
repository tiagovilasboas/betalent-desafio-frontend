import { Loader } from '@mantine/core';
import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Layout } from './Layout';
const LazyHomePage = lazy(() =>
  import('../pages/HomePage').then((module) => ({ default: module.Component })),
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<Loader />}>
            <LazyHomePage />
          </Suspense>
        ),
      },
    ],
  },
]);
