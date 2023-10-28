import {
	enumType,
	length,
	object,
	optional,
	safeParse,
	startsWith,
	string,
} from 'valibot'

// Add secret variables to delete from `process.env` after processing for
// improved security.
const secrets: Array<keyof typeof envSchema.object> = ['OCO_OPENAI_API_KEY']

const envSchema = object({
	NODE_ENV: string('development'),

	/**
	 * opencommit configuration
	 * AI generated conventional commit messages.
	 * https://github.com/di-sukharev/opencommit
	 */
	OCO_OPENAI_API_KEY: optional(string([startsWith('sk-'), length(51)])),
	OCO_OPENAI_MAX_TOKENS: optional(string()),
	OCO_OPENAI_BASE_PATH: optional(string()),
	OCO_DESCRIPTION: optional(enumType(['true', 'false']), 'false'),
	OCO_EMOJI: optional(enumType(['true', 'false']), 'false'),
	OCO_MODEL: optional(
		enumType([
			'gpt-4',
			'gpt-3.5-turbo-16k',
			'gpt-3.5-turbo-0613',
			'gpt-3.5-turbo',
		]),
		'gpt-3.5-turbo',
	),
	OCO_LANGUAGE: optional(string(), 'en'),
	OCO_MESSAGE_TEMPLATE_PLACEHOLDER: optional(string(), '$msg'),
	OCO_PROMPT_MODULE: optional(
		enumType(['conventional-commit', '@commitlint']),
		'@commitlint',
	),
})

const parsedEnvSchema = safeParse(envSchema, process.env)

// Format and log any errors to the console.
if (!parsedEnvSchema.success) {
	const { issues } = parsedEnvSchema

	console.error('ERROR: Missing or invalid environment variable:')

	issues.forEach((issue) => {
		const message = issue.message
		const key = issue.path?.[0].key

		console.log(`  ${key}: ${message}`)
	})

	process.exit(1)
}

// Make the env object immutable.
export const env = Object.freeze(parsedEnvSchema.output)

// Delete secrets from `process.env` for improved security.
for (const secret of secrets) {
	delete process.env[secret]
}
