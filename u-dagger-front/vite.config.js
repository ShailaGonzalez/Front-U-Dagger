import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/', // Ajuste para asegurarse que todas las rutas se resuelvan correctamente.
  plugins: [react()],
  server: {
    port: 5173, // Configuración del puerto del servidor
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: path.resolve(__dirname, 'src/setupTests.js'),
  },
});
