import './index.css';

import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';

import { router } from './app/router';
import { theme } from './styles/theme';

function App() {
  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
