import { env } from '@/env'

export function greet(name: string): string {
	return `Hello, ${name}! The current Node environment is ${env.NODE_ENV}.`
}

// ─────────────────────────────────── TEST ────────────────────────────────────

if (import.meta.vitest) {
	const { test, expect } = import.meta.vitest

	test('greet', () => {
		expect(greet('World')).toBe(
			'Hello, World! The current Node environment is test.',
		)
	})
}
