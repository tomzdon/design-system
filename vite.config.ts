import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '8f33e939-79c4-4aaa-a7fb-0e38f6e273b5-00-3vkrajv9prt08.janeway.replit.dev',
    ],
  },
});
