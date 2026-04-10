import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Target ES2019 so react-snap's old Chromium can execute the bundle
    // (optional chaining ?. and nullish coalescing ?? are ES2020 and
    //  not supported by the Chromium version bundled with react-snap)
    target: 'es2019',
  },
})
