import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    lazy: async () => {
      const { default: Employees } = await import('@/features/employees/components/Employees');
      return { Component: Employees };
    },
  },
  {
    path: '/about',
    lazy: async () => {
      const { Component } = await import('@/pages/AboutPage');
      return { Component };
    },
  },
]);
