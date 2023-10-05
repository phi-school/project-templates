import { test, expect } from 'vitest'

import { greet } from './main'

test('greet function returns the correct greeting', () => {
	const name = 'John'
	const result = greet(name)
	expect(result).toBe(`Hello, ${name}!`)
})

test('greet function returns the default greeting when no name is provided', () => {
	const result = greet('')
	expect(result).toBe('Hello, !')
})
