import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		dir: 'src',
		include: ['/packages/*/src/**/*.{test}.{ts,js}'],
	},
})