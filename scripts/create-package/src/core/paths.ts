import { join } from 'node:path'

export const getPaths = (__dirname: string, packageName: string) => {
	const packageDirectory = join(__dirname, '../../..', 'packages', packageName)
	const srcDirectory = join(packageDirectory, 'src')
	const packageJsonPath = join(packageDirectory, 'package.json')
	const tsconfigJsonPath = join(packageDirectory, 'tsconfig.json')
	const tsupConfigPath = join(packageDirectory, 'tsup.config.ts')
	const vitestConfigPath = join(packageDirectory, 'vitest.config.ts')
	const mainPath = join(srcDirectory, 'main.ts')

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
