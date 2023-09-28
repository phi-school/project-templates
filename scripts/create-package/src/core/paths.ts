import { join } from 'node:path'

/**
 * Generates the paths for the different files and directories that are part of
 * a package based on the package name.
 *
 * @param {string} __dirname - The directory name of the current module (i.e.,
 * the directory containing the current module file).
 * @param {string} packageName - The name of the package for which the paths are
 * to be generated.
 * @returns {object} An object containing the paths for the package directory,
 * src directory, package.json, tsconfig.json, tsup.config.ts, vitest.config.ts,
 * and main.ts.
 */
export const getPaths = (__dirname: string, packageName: string) => {
	// Generate the paths based on the package name
	const packageDirectory = join(__dirname, '../../..', 'packages', packageName)
	const srcDirectory = join(packageDirectory, 'src')
	const packageJsonPath = join(packageDirectory, 'package.json')
	const tsconfigJsonPath = join(packageDirectory, 'tsconfig.json')
	const tsupConfigPath = join(packageDirectory, 'tsup.config.ts')
	const vitestConfigPath = join(packageDirectory, 'vitest.config.ts')
	const mainPath = join(srcDirectory, 'main.ts')

	// Return the generated paths
	return {
		packageDirectory,
		srcDirectory,
		packageJsonPath,
		tsconfigJsonPath,
		tsupConfigPath,
		vitestConfigPath,
		mainPath,
	}
}
