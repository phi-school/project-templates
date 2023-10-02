import enquirer from 'enquirer'

import type { PackageJsonOptions } from '@/templates'

const { prompt } = enquirer

/**
 * Prompt the user for package options. This function will ask the user to input
 * the package name and package scope, then perform a basic validation of the
 * input, ensuring the package name is not empty and the package scope (if
 * provided) starts with "@".
 *
 * @returns {Promise<PackageJsonOptions>} The package options entered by the
 * user.
 * @throws Will throw an error if the user input is invalid.
 */
export const getPackageOptions = async (): Promise<PackageJsonOptions> => {
	try {
		// Prompt the user for package name and package scope.
		const response = (await prompt([
			{
				type: 'input',
				name: 'packageName',
				message: 'Please enter a package name',
				// Validate that the package name is not empty.
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

		// Check that if a packageScope is provided, it must start with '@'.
		if (packageScope && !packageScope.startsWith('@')) {
			throw new Error('The provided package scope must start with "@"')
		}

		return response
	} catch (error) {
		// Log the error and exit the process if the user input is invalid.
		console.error('\n', error)
		process.exit(1)
	}
}
