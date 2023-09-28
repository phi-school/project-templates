import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { join, dirname } from 'node:path'

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

	let currentDir = dirname(currentFilePath)

	while (!existsSync(join(currentDir, '.monorepo-root'))) {
		const parentDir = dirname(currentDir)

		// If we are at the filesystem root, stop searching
		if (parentDir === currentDir) {
			throw new Error('Monorepo root not found.')
		}

		currentDir = parentDir
	}

	return currentDir
}

export { getMonorepoRoot }
