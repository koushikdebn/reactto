import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' 
// https://vite.dev/config/
export default defineConfig({
  base: '/reactto/',
  plugins: [react()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@images': path.resolve(__dirname, 'src/assets/images'),  // Alias for images
      // eslint-disable-next-line no-undef
      '@components': path.resolve(__dirname, 'src/components'),  // Alias for components
      // eslint-disable-next-line no-undef
      '@templates': path.resolve(__dirname, 'src/templates'),  // Alias for templates
     
    },
  },

})
