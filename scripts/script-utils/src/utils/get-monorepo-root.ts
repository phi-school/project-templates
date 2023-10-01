import { existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

/**
 * Gets the root directory of the monorepo.
 * It traverses up the directory tree from the current script location
 * until it finds a directory identified as the monorepo root.
 *
 * @returns {string} The path of the monorepo root directory.
 */
const getMonorepoRoot = (): string => {
	// Convert the file URL to a path
	const currentFilePath = fileURLToPath(import.meta.url)

	let currentDirectory = dirname(currentFilePath)

	while (!existsSync(join(currentDirectory, '.monorepo-root'))) {
		const parentDirectory = dirname(currentDirectory)

		// If we are at the filesystem root, stop searching
		if (parentDirectory === currentDirectory) {
			throw new Error('Monorepo root not found.')
		}

		currentDirectory = parentDirectory
	}

	return currentDirectory
}

export { getMonorepoRoot }
