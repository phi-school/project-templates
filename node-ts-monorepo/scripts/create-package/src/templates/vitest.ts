/**
 * Type definition for the configuration options for creating a Vitest config file.
 */
type VitestConfigOptions = {
	alias?: Record<string, string>
	baseConfigPath?: string
}

/**
 * Creates a Vitest config content string based on the provided configuration options.
 *
 * @param {VitestConfigOptions} options - The configuration options.
 * @param {Record<string, string>} [options.alias] - The alias mappings.
 * @param {string} [options.baseConfigPath] - The path to the base Vitest config file.
 * @returns {string} The content of the Vitest config file in string format.
 */
export const generateVitestConfig = ({
	alias = {},
	baseConfigPath = '../../vitest.config',
}: VitestConfigOptions = {}): string => {
	return `import { defineConfig, mergeConfig } from 'vitest/config'
import baseConfig from '${baseConfigPath}'

export default mergeConfig(
  baseConfig,
  defineConfig({
    resolve: {
      alias: ${JSON.stringify(alias, null, 2)},
    },
  }),
)
`
}
