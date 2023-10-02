/**
 * Template for the base properties of a package.json file.
 */
const basePackageJsonTemplate = {
	version: '0.0.0',
	module: './dist/main.mjs',
	main: './dist/main.js',
	types: './dist/main.d.ts',
	exports: {
		require: {
			types: './dist/main.d.ts',
			default: './dist/main.js',
		},
		import: {
			types: './dist/main.d.mts',
			default: './dist/main.mjs',
		},
	},
	scripts: {
		build: 'tsup',
		lint: 'eslint --cache .',
		'type-check': 'tsc',
	},
	publishConfig: {
		access: 'public',
	},
}

/**
 * Type definition for the configuration options for creating a package.json
 * file.
 */
export type PackageJsonOptions = {
	packageName: string
	packageScope?: string
}

/**
 * Creates a package.json content string based on the provided package
 * configuration.
 *
 * @param {PackageJsonOptions} options - The package configuration options.
 * @param {string} options.name - The name of the package.
 * @param {string} [options.scope] - The scope of the package, must start with
 * "@" if provided.
 * @returns {string} The content of the package.json file in string format.
 * @throws Will throw an error if the scope is provided but does not start with
 * "@".
 */
export const generatePackageJson = ({
	packageName,
	packageScope,
}: PackageJsonOptions): string => {
	if (packageScope && !packageScope.startsWith('@')) {
		throw new Error(
			`Invalid packageScope: "${packageScope}". It must start with "@"`,
		)
	}

	const fullName = packageScope ? `${packageScope}/${packageName}` : packageName

	return JSON.stringify(
		{
			name: fullName,
			...basePackageJsonTemplate,
		},
		null,
		2,
	) // The last two arguments format the JSON
}
