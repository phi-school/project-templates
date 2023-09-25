const fs = require('fs')
const path = require('path')
const execSync = require('child_process').execSync

// Get the package name from the command line arguments
const packageName = process.argv[2]
if (!packageName) {
	console.error('Error: Package name is required')
	process.exit(1)
}

// Define the package directory
const packageDir = path.resolve(__dirname, '..', 'packages', packageName)

// Check if the package already exists
if (fs.existsSync(packageDir)) {
	console.error(`Error: Package ${packageName} already exists`)
	process.exit(1)
}

// Create the package directory
fs.mkdirSync(packageDir, { recursive: true })

// Define the package.json content
const packageJson = {
	name: packageName,
	version: '0.0.0',
	main: 'src/main.ts',
	scripts: {
		build: 'tsup',
		dev: 'tsup --watch',
		test: 'vitest',
	},
	devDependencies: {},
	// Add other standard configurations here
}

// Write the package.json file
fs.writeFileSync(
	path.join(packageDir, 'package.json'),
	JSON.stringify(packageJson, null, 2),
)

// Create a src directory with an index.ts file
const srcDir = path.join(packageDir, 'src')
fs.mkdirSync(srcDir, { recursive: true })
fs.writeFileSync(path.join(srcDir, 'main.ts'), '// Your code here\n')

console.log(`Package ${packageName} has been created successfully!`)

// Optionally, install dependencies
execSync('pnpm install', { cwd: packageDir, stdio: 'inherit' })
