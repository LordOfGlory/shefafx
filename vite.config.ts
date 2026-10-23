import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' makes every asset path relative, so the site works at a GitHub Pages
// repository subpath (https://USER.github.io/REPO/), at a custom domain, or at a root domain.
// The router uses hash URLs (/#/courses), so refreshing any page never returns a 404.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
