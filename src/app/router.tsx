import { createBrowserRouter } from 'react-router-dom';

import { Component as HomePage } from '../pages/HomePage';
import { AppLayout } from './AppLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);
