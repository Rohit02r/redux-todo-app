import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/redux-todo-app/',  // Add this line to specify the base URL for GitHub Pages
  plugins: [react()],
});
