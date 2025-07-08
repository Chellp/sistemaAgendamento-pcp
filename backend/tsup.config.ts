import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/server.ts'],
  outDir: 'src/dist',
  format: ['cjs'],
  target: 'node16',
  sourcemap: true,
  clean: true
});