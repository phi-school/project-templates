import enquirer from 'enquirer'
import type { PackageJsonOptions } from '@/templates'

const { prompt } = enquirer

export const getPackageOptions = async (): Promise<PackageJsonOptions> => {
	try {
		const response = (await prompt([
			{
				type: 'input',
				name: 'packageName',
				message: 'Please enter a package name',
				validate: (value) =>
					value.trim() !== '' || 'A package name is required',
			},
			{
				type: 'input',
				name: 'packageScope',
				message: 'Please enter a package scope (optional)',
			},
		])) as PackageJsonOptions

		const { packageScope } = response

		if (packageScope && !packageScope.startsWith('@')) {
			throw new Error('The provided package scope must start with "@"')
		}

		return response
	} catch (error) {
		console.error('\n', error)
		process.exit(1)
	}
}
