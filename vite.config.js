// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/drive-app-static/', // 👈 Add this line
  plugins: [react()],
})
