import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import reactRefresh from '@vitejs/plugin-react-refresh';
// import reactPlugin from 'vite-plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    chunkSizeWarningLimit: 1000, // Adjust the size limit as needed
    outDir: 'dist', // Output directory for the build
    assetsDir: '', // Directory for static assets (JS, CSS, images, etc.)
    sourcemap: true, // Generate source maps for debugging
    // ... other configurations
  },
})
