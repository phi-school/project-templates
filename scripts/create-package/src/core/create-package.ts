import { createDirectory, writeFile } from 'script-utils'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
	generatePackageJson,
	generateTsConfig,
	generateTsupConfig,
	generateVitestConfig,
	type PackageJsonOptions,
} from '@/templates'
import { getPaths } from './paths'

export const createPackage = (packageJsonOptions: PackageJsonOptions) => {
	const __dirname = dirname(fileURLToPath(import.meta.url))
	const { packageName } = packageJsonOptions

	const paths = getPaths(__dirname, packageName)

	const packageJson = generatePackageJson(packageJsonOptions)
	const tsconfigJson = generateTsConfig()
	const tsupConfig = generateTsupConfig()
	const vitestConfig = generateVitestConfig()
	const main = 'export const hello = "world"'

	createDirectory(paths.srcDirectory)

	writeFile(paths.packageJsonPath, packageJson)
	writeFile(paths.tsconfigJsonPath, tsconfigJson)
	writeFile(paths.tsupConfigPath, tsupConfig)
	writeFile(paths.vitestConfigPath, vitestConfig)
	writeFile(paths.mainPath, main)

	console.log(`\nPackage ${packageName} created at ${paths.packageDirectory}`)
}
