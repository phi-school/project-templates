/**
 * Type definition for the configuration options for creating a tsup config
 * file.
 */
type TsupConfigOptions = {
	entryPoints?: string[]
	baseConfigPath?: string
}

/**
 * Creates a tsup config content string based on the provided configuration
 * options.
 *
 * @param {TsupConfigOptions} options - The configuration options.
 * @param {string[]} [options.entryPoints] - The entry points of the
 * application.
 * @param {string} [options.baseConfigPath] - The path to the base tsup config
 * file.
 * @returns {string} The content of the tsup config file in string format.
 */
export const generateTsupConfig = ({
	entryPoints = ['src/main.ts'],
	baseConfigPath = '../../tsup.config',
}: TsupConfigOptions = {}): string => {
	return `import { defineConfig } from 'tsup'
import baseConfig from '${baseConfigPath}'

export default defineConfig({
  ...baseConfig,
  entry: ${JSON.stringify(entryPoints, null, 2)},
})
`
}
