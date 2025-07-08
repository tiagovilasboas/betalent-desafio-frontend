import { createBrowserRouter } from 'react-router-dom';

import Employees from '../features/employees/components/Employees';
import { AppLayout } from './AppLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Employees />,
      },
    ],
  },
]);
