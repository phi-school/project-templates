import { mkdirSync } from 'node:fs'

/**
 * Creates a new directory.
 *
 * This function is synchronous and will block the execution flow until the
 * directory is created, ensuring that no other file operations are performed in
 * the meantime.
 *
 * @param directoryPath - The path where the directory should be created.
 */
export const createDirectory = (directoryPath: string) => {
	mkdirSync(directoryPath, { recursive: true })
}
