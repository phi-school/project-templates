# Contributing to phi school's `project-templates`

Thank you for your interest in contributing to phi school! This guide provides an overview of how to successfully contribute.

## Table of Contents

- [Getting Setup](#getting-setup)
  - [1. Fork](#1-fork)
  - [2. Clone](#2-clone)
  - [3. Install Dependencies](#3-install-dependencies)
- [Making Your Contribution](#making-your-contribution)
  - [1. Create a Branch](#1-create-a-branch)
  - [2. Make Changes](#2-make-changes)
  - [3. Commit Changes](#3-commit-changes)
  - [4. Run Tests](#4-run-tests)
  - [5. Push Changes](#6-push-changes)
  - [6. Open a Pull Request](#7-open-a-pull-request)
  - [7. Code Review](#8-code-review)
  - [8. After Your Pull Request is Merged](#9-after-your-pull-request-is-merged)
- [Code of Conduct](#code-of-conduct)

## Getting Setup

### 1. Fork

[Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the repository you wish to contribute to.

### 2. Clone

[Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) your fork to your local machine.

```bash
git clone https://github.com/<your-username>/<repository-name>
```

Change directory to the cloned repository.

```bash
cd <repository-name>
```

Add the original repository as a remote repository named `upstream`.

```bash
git remote add upstream https://github.com/phi-school/project-templates
```

### 3. Install Dependencies

In the root directory of the project template you'd like to contribute to, install the required packages.

For JavaScript or TypeScript projects:

```bash
pnpm install
```

## Making Your Contribution

We follow the [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow). Here are the steps:

### 1. Create a Branch

From your fork, create a new branch for your feature or bug fix.

```bash
git checkout -b <branch-name>
```

An example `<branch-name>` might be: `feat/doc-search` or `fix/layout-shift`.

### 2. Make Changes

Start making your changes in this new branch. Follow the coding style prevalent in the project and aim for clean, maintainable code. Here are a few general guidelines to consider:

- **Write clear, concise comments:** Use doc comments to explain the purpose of your code. These comments should be brief, yet descriptive enough to allow someone else (or future you) to understand why you wrote the code the way you did.

- **Add tests if applicable:** If your changes add new functionality, try to include relevant tests that verify this functionality works as expected. If you're fixing a bug, include a test that would have caught the bug.

### 3. Commit Changes

Our project uses the [Conventional Commits format](https://www.conventionalcommits.org/) for commit messages. This format is automatically checked when you commit your changes. If the commit message doesn't comply, you'll be prompted to modify it.

Here's a summary of the main types used in the Conventional Commits format:

- `build`: Changes that affect the build system or external dependencies (e.g., updates to npm packages)
- `chore`: Changes related to the build process or auxiliary tools and libraries, such as documentation generation
- `ci`: Changes to your Continuous Integration configuration and scripts (e.g., GitHub Actions, CircleCI, etc.)
- `docs`: Changes to documentation only
- `feat`: A new feature
- `fix`: A bug fix
- `perf`: A code change that improves performance
- `refactor`: A code change that neither fixes a bug nor adds a feature, but restructuring code for readability or maintainability
- `style`: Changes that don't affect the code's meaning (such as formatting, white-space adjustments, or missing semi-colons)
- `test`: Changes related to adding missing tests or correcting existing ones

Here's an example of a conventional commit message with a type, scope, and description:

```bash
git commit -m "feat(users): add ability to delete own account"
```

In this message, "feat" is the type of change being made, "users" is the scope (the area or part of the project that the change affects), and "add ability to delete own account" is a brief description of the change.

It's okay to omit the scope if you're unsure. For example, `"feat: add ability to delete own account"` is valid.

If you're unsure about which type to use, `feat` or `fix` are often good choices.

### 4. Run Tests

Before submitting your changes, please ensure that all tests pass. To run tests, use the following command:

```bash
pnpm run test
```

We use Continuous Integration (CI) to automatically run tests against all Pull Requests. It's crucial that all tests pass before merging. If any test fails in your PR, revisit your changes and ensure all code is correct and all tests pass.

### 5. Push Changes

Push your changes (and changeset, if applicable) to your fork.

```bash
git push -u origin <branch-name>
```

### 6. Open a Pull Request

Navigate to the main repo and [open a Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) against it. Describe your changes thoroughly in the PR description.

### 7. Code Review

Maintainers will review your Pull Request as soon as possible. During this phase, maintainers may suggest changes, and they will explain why these changes are necessary.

If we suggest changes then:

- Make the required updates.
- Re-run the test suites to ensure tests are still passing.
- Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

```bash
git rebase main -i
git push -f
```

### 8. After Your Pull Request is Merged

Once your PR is approved, maintainers will merge it, and the changesets action will create a new release if there are any unreleased changesets. After your PR is merged:

- Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

```bash
git push origin --delete <branch-name>
```

- Check out the main branch:

```bash
git checkout main -f
```

- Delete the local branch:

```bash
git branch -D <branch-name>
```

- Update your main with the latest upstream version:

```bash
git pull --ff upstream main
```

Remember to always create a new branch when you're working on a new feature or fix. The main branch of your fork should be reserved for updates from the upstream repository.

## Code of Conduct

Be kind to all and please read our [Code of Conduct](https://github.com/phi-school/.github/blob/main/CODE_OF_CONDUCT.md).

Thank you for contributing to phi school!
