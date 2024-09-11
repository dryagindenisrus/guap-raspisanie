/// <reference types="vitest" />
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
      'process.env': {
        VITE_API_URL: JSON.stringify(env.VITE_API_URL),
        VITE_APP_HOSTS: JSON.stringify(env.VITE_APP_HOST),
      },
    },
    plugins: [
      svgr({
        svgrOptions: { exportType: 'named', ref: true, svgo: false, titleProp: true },
        include: '**/*.svg',
      }),
      react(),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/__tests__/setup.ts'],
    },
    server: {
      host: env.VITE_APP_HOST || 'localhost',
      port: env.VITE_APP_PORT ? parseInt(env.VITE_PORT, 10) : 5173,
      strictPort: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        '@app': path.resolve(__dirname, 'src/app/'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
    },
  };
});
