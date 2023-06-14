import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import reactRefresh from '@vitejs/plugin-react-refresh';
// import reactPlugin from 'vite-plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  base: "https://tetecruzc.github.io/gspa-consulting/",
  define: {
    'process.env': {}
  }
})
