import { defineConfig } from 'vite'

export default defineConfig({
    base: '/mba-portal/', // Explicit base path for GitHub Pages
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
    }
})
