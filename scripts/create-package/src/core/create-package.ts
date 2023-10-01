import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { createDirectory, writeFile } from 'script-utils'

import { getPaths } from './paths'

import {
	generatePackageJson,
	generateTsConfig,
	generateTsupConfig,
	generateVitestConfig,
	type PackageJsonOptions,
} from '@/templates'

/**
 * Creates a new package with the specified options.
 *
 * The function will generate the necessary configuration files, directories,
 * and a sample main.ts file for the new package. The new package will be
 * located within the 'packages' directory.
 *
 * @param {PackageJsonOptions} packageJsonOptions - The options for
 * package.json.
 */
export const createPackage = (packageJsonOptions: PackageJsonOptions) => {
	// Derive the directory name for the current module
	const __dirname = dirname(fileURLToPath(import.meta.url))
	const { packageName } = packageJsonOptions

	// Get the paths for the new package
	const paths = getPaths(__dirname, packageName)

	// Generate content for the package's configuration files
	const packageJson = generatePackageJson(packageJsonOptions)
	const tsconfigJson = generateTsConfig()
	const tsupConfig = generateTsupConfig()
	const vitestConfig = generateVitestConfig()
	// Sample content for main.ts
	const main = 'export const hello = "world"'

	// Create the necessary directories for the package
	createDirectory(paths.srcDirectory)

	// Write the generated content to the respective files
	writeFile(paths.packageJsonPath, packageJson)
	writeFile(paths.tsconfigJsonPath, tsconfigJson)
	writeFile(paths.tsupConfigPath, tsupConfig)
	writeFile(paths.vitestConfigPath, vitestConfig)
	writeFile(paths.mainPath, main)

	// Log the success message with the package directory path
	console.log(`\nPackage ${packageName} created at ${paths.packageDirectory}`)
}
