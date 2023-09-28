import { writeFileSync } from 'node:fs'

/**
 * Writes the specified content to a file at the given file path.
 *
 * @param filePath - The path of the file where the content will be written.
 * @param content - The content to write to the file.
 */
export const writeFile = (filePath: string, content: string) => {
	writeFileSync(filePath, content)
}
