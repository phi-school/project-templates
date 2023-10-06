import { defineConfig } from 'tsup'

export default defineConfig({
	clean: true,
	dts: true,
	entry: ['src/main.ts'],
	format: ['cjs', 'esm'],
	minify: true,
	outDir: 'dist',
	splitting: false,
	target: 'node20',
	treeshake: true,
})
