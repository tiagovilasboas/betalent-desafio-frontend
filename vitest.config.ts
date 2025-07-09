import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [path.resolve(__dirname, 'src/setupTests.ts')],
    passWithNoTests: true,
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
