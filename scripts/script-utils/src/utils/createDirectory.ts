import { mkdirSync } from 'node:fs'

export const createDirectory = (directoryPath: string) => {
	mkdirSync(directoryPath, { recursive: true })
}
