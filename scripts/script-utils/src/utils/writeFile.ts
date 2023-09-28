import { writeFileSync } from 'node:fs'

export const writeFile = (filePath: string, content: string) => {
	writeFileSync(filePath, content)
}
