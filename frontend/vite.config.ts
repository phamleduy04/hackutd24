/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path"


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/vitest.setup.ts',
    coverage: {
      exclude: [
        'src/main.tsx', // Exclude main.tsx from coverage
        'eslint.config.js',
        'vite.config.ts'
      ],
    },
  },
})
