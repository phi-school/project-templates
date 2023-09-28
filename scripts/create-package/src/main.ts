import { getPackageOptions } from '@/cli'
import { createPackage } from '@/core'

/**
 * The main function orchestrates the package creation process.
 *
 * It first retrieves the package options by prompting the user and then calls
 * the createPackage function with the obtained options.
 */
const main = async () => {
	// Prompt the user to get package options
	const packageOptions = await getPackageOptions()

	// Create the package with the specified options
	createPackage(packageOptions)
}

// Execute the main function to start the package creation process
main()
