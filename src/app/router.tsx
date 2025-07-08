import { createBrowserRouter } from 'react-router-dom'

import App from '@/App'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        lazy: () => import('@/features/employees/components/Employees'),
      },
      {
        path: '/about',
        lazy: () => import('@/pages/AboutPage'),
      },
    ],
  },
])
