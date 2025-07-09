import { createBrowserRouter } from 'react-router-dom';

import { Component as HomePage } from '../pages/HomePage';
import { Layout } from './Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);
