/**
 * Type definition for the configuration options for creating a tsconfig.json file.
 */
type TsConfigOptions = {
	baseConfigPath?: string
	baseUrl?: string
	paths?: Record<string, string[]>
	include?: string[]
	exclude?: string[]
}

/**
 * Creates a tsconfig.json content string based on the provided configuration options.
 *
 * @param {TsConfigOptions} options - The configuration options.
 * @param {string} [options.baseConfigPath] - The path to the base/parent tsconfig.json file.
 * @param {string} [options.baseUrl] - The base URL for module resolution.
 * @param {Record<string, string[]>} [options.paths] - The paths mapping for module names to locations.
 * @param {string[]} [options.include] - The file patterns to include in the compilation.
 * @param {string[]} [options.exclude] - The file patterns to exclude from the compilation.
 * @returns {string} The content of the tsconfig.json file in string format.
 */
export const generateTsConfig = ({
	baseConfigPath = '../../tsconfig.json',
	baseUrl = '.',
	paths = {},
	include = ['src/**/*'],
	exclude = ['dist'],
}: TsConfigOptions = {}): string => {
	return JSON.stringify(
		{
			extends: baseConfigPath,
			compilerOptions: {
				baseUrl,
				paths,
			},
			include,
			exclude,
		},
		null,
		2,
	) // The last two arguments format the JSON
}
