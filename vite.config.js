import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // Only inline everything when building the standalone file
    ...(mode === 'singlefile' ? [viteSingleFile()] : []),
  ],
  build: mode === 'singlefile' ? {
    // Inline all assets — no external chunks
    assetsInlineLimit: 100_000_000,
    cssCodeSplit: false,
    // Output to dist-standalone so it doesn't overwrite the normal build
    outDir: 'dist-standalone',
    rollupOptions: {
      output: {
        // Single JS bundle — no code splitting
        manualChunks: undefined,
      },
    },
  } : {},
}))
