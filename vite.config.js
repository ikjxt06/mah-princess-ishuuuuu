import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// base './' makes assets work under any GitHub Pages repo path
export default defineConfig({ base: './', plugins: [react()] })
