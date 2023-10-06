<a name="readme-top"></a>

<br/>

<div align="center">

<h1>node-ts-package</h1>

<p>
  A feature-rich Node.js TypeScript package template designed to boost productivity,<br/>ensure code quality, and provide best practices out of the box.
</p>

[Report Bug][github-issues-link] · [Request Feature][github-issues-link]

</div>

<br/>

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Post Installation Checklist](#post-installation-checklist)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

<table>
	<thead>
		<tr>
			<th width="200">Feature</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<a href="https://jetpack.io/devbox/docs/contributor-quickstart/"
					>Devbox</a
				>
			</td>
			<td>
				A command-line tool that lets you easily create an isolated,
				reproducible development environment. See the
				<a href="#devbox">Devbox</a> section for more info.
			</td>
		</tr>
		<tr>
			<td><a href="https://pnpm.io/">pnpm</a></td>
			<td>
				A fast and efficient package manager for JavaScript and Node.js that
				uses a content-addressable filesystem to store files.
			</td>
		</tr>
		<tr>
			<td><a href="https://github.com/semantic-release/semantic-release">semantic-release</a></td>
			<td>
				An automated versioning and package publishing tool that adheres to Semantic Versioning. This ensures that versions are incremented based on the content of commits and makes package publishing a breeze.
			</td>
		</tr>
		<tr>
			<td><a href="https://vitest.dev/">Vitest</a></td>
			<td>A Jest compatible testing utility with better performance.</td>
		</tr>
		<tr>
			<td><a href="https://tsup.egoist.dev/">tsup</a></td>
			<td>
				A fast, easy-to-configure Node.js and browser bundler that supports
				TypeScript, ES Modules, CommonJS, and more.
			</td>
		</tr>
		<tr>
			<td><a href="https://eslint.org/">ESLint</a></td>
			<td>
				A tool to identify and report on patterns found in ECMAScript/JavaScript
				code. Configured with the comprehensive
				<a href="https://github.com/phi-school/config/tree/main/packages/eslint-config"
					><code>@phi.school/eslint-config</code></a
				>
				to align with organization coding standards.
			</td>
		</tr>
		<tr>
			<td><a href="https://prettier.io/">Prettier</a></td>
			<td>
				An opinionated code formatter that supports multiple languages and
				integrates with most editors. Configured with
					<a href="https://github.com/phi-school/config/tree/main/packages/prettier-config"
					><code>@phi.school/prettier-config</code></a
				>, to adhere to the organization's preferred code style.
			</td>
		</tr>
		<tr>
			<td>
				<a href="https://github.com/conventional-changelog/commitlint"
					>commitlint</a
				>
			</td>
			<td>
				A tool to enforce conventional commit messages, ensuring consistency and
				automated versioning compatibility.
			</td>
		</tr>
		<tr>
			<td><a href="https://github.com/typicode/husky">husky</a></td>
			<td>
				A tool to improve Git hooks, making it easier to enforce quality checks,
				using linters, and more.
			</td>
		</tr>
		<tr>
			<td><a href="https://github.com/okonet/lint-staged">lint-staged</a></td>
			<td>
				A tool that runs linters against pre-committed code in Git, helping to
				ensure that you're only committing files that meet your linting
				criteria.
			</td>
		</tr>
		<tr>
			<td><a href="https://github.com/motdotla/dotenv">dotenv</a></td>
			<td>
				A zero-dependency module that loads environment variables from a <code>.env</code>
				file into <code>process.env</code>, enhancing the application's configuration
				management.
			</td>
		</tr>
	</tbody>
</table>

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## Prerequisites

### Devbox

Devbox is a Nix-based environment and package manager that standardizes development environments across teams. By ensuring every developer has the same tool versions locally, collaboration becomes smoother. Some key features include:

- Generating a [devcontainer](https://code.visualstudio.com/docs/devcontainers/create-dev-container) for use with VSCode.
- Creating a Dockerfile to build a production image with the identical development tools.
- Integration with [direnv](https://direnv.net/), auto-loading the isolated shell upon entering the project directory.
- Compatibility with the [Devbox GitHub Action](https://github.com/marketplace/actions/devbox-installer), enabling recreation of your development environment in workflows.

**Installing Devbox:**

Installation is straightforward, and Devbox is compatible with macOS, Linux, and Windows. See the [Devbox docs](https://www.jetpack.io/devbox/docs/installing_devbox/#install-devbox) for detailed instructions.

### degit

To install this template efficiently, utilize [degit](https://github.com/Rich-Harris/degit). You can globally install degit with your preferred package manager:

```bash
pnpm install -g degit
# OR
npm install -g degit
# OR
yarn global add degit
# OR
nix-env -iA nixpkgs.nodePackages.degit
```

<div align="right">
  
[![][back-to-top]](#readme-top)

</div>

## Installation

Once `degit` is installed, initiate your project with the following command, substituting `<YOUR_PROJECT_NAME>` with your project's name:

```bash
degit phi-school/templates/node-ts-package <YOUR_PROJECT_NAME>
cd <YOUR_PROJECT_NAME> && devbox shell
```

For an automated `devbox shell` load upon entering the project directory, [install & configure direnv](https://direnv.net/docs/installation.html).

> **Note:**\
> Upon entering the project directory for the first time after setting up `direnv`, you will be prompted with a security notification. You must run `direnv allow` to grant permission. Once allowed, your development environment will auto-load every time you enter the directory.

<div align="right">
  
[![][back-to-top]](#readme-top)

</div>

## Post-Installation Checklist

After installing the template, make sure to complete the following tasks to personalize and configure your project:

1. Update the `package.json` fields:

- [ ] `name`: Set this to your project name.
- [ ] `description`: Add a brief description of your project.
- [ ] `repository`: Update the repository URL to match your own project's repository.
- [ ] `author`: Add your name or your organization's name.
- [ ] `license`: Update the license field if needed.

2. Update the `LICENSE` file:

- [ ] Replace the placeholder name and year with your own name (or organization name) and the current year.

3. Set up environment variables:

- [ ] Create a `.env` file with any environment-specific values your project requires.

4. Configure GitHub Actions settings:

- [ ] Add an `NPM_TOKEN` secret for publishing to npm.
- [ ] Ensure workflow permissions are correctly configured:
  - [ ] Grant required read and write permissions.
  - [ ] Permit GitHub Actions to create, review, and merge pull requests.

<div align="right">
  
[![][back-to-top]](#readme-top)

</div>

## Usage

The template includes several handy scripts:

- `build`: Compile the TypeScript project with tsup.
- `format`: Prettify the codebase using Prettier.
- `lint`: Conduct code linting via ESLint.
- `test`: Launch tests with Vitest.
- `type-check`: Check code types using TypeScript.

<div align="right">
  
[![][back-to-top]](#readme-top)

</div>

## Contributing

Contributions are welcome! For a detailed guide on how to contribute, please refer to the [Contributing & Development](../README.md#contributing--development) section in the repository root.

<div align="right">
  
[![][back-to-top]](#readme-top)

</div>

## License

This project is released under the [MIT](../LICENSE) License. © 2023-Present [phi school](https://phi.school)

<div align="right">
  
[![][back-to-top]](#readme-top)

</div>

<!-- Link Group -->

[back-to-top]: https://img.shields.io/badge/-⇧_Back_To_Top-black?style=flat-square
[contributing-guide]: ../CONTRIBUTING.md
[contributors-contrib]: https://contrib.rocks/image?repo=phi-school/project-templates
[contributors-link]: https://github.com/phi-school/project-templates/graphs/contributors
[github-issues-link]: https://github.com/phi-school/project-templates/issues
