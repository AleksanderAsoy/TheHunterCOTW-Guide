# Contributing to TheHunter: COTW Guide

Thank you for your interest in contributing to this project! This guide will help you get started.

## How Can I Contribute?

### Reporting Bugs

If you find a bug, please create an issue with:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior vs actual behavior
- Screenshots (if applicable)
- Your browser and OS information

### Suggesting Enhancements

Enhancement suggestions are welcome! Please create an issue with:
- A clear description of the enhancement
- Why this enhancement would be useful
- Any examples or mockups (if applicable)

### Adding Game Data

One of the most valuable contributions is adding accurate game data:

1. **Reserves**: Add new reserves to `src/data/reserves.json`
2. **Animals**: Add new animals to `src/data/animals.json`
3. **Ensure accuracy**: Verify all information against official sources

### Code Contributions

#### Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/TheHunterCOTW-Guide.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Install dependencies: `npm install`
5. Start the dev server: `npm run dev`

#### Making Changes

1. Follow the existing code style
2. Use Tailwind CSS classes for styling
3. Keep components small and reusable
4. Add comments for complex logic
5. Test your changes locally

#### Submitting a Pull Request

1. Commit your changes: `git commit -m "Add: description of changes"`
2. Push to your fork: `git push origin feature/your-feature-name`
3. Create a Pull Request from your fork to the main repository
4. Describe your changes clearly in the PR description
5. Link any related issues

## Code Style Guidelines

### JavaScript/React

- Use functional components with hooks
- Use descriptive variable and function names
- Keep components focused on a single responsibility
- Use ES6+ features (arrow functions, destructuring, etc.)

### Tailwind CSS

- Use existing custom colors from `tailwind.config.js`
- Follow mobile-first responsive design principles
- Keep utility classes organized and readable

### File Organization

- Components go in `src/components/`
- Pages go in `src/pages/`
- Data files go in `src/data/`
- Static assets go in `src/assets/`

## Commit Message Guidelines

Use clear, descriptive commit messages:

- `Add: [description]` - For new features
- `Update: [description]` - For changes to existing features
- `Fix: [description]` - For bug fixes
- `Refactor: [description]` - For code refactoring
- `Docs: [description]` - For documentation changes
- `Style: [description]` - For styling changes

## Questions?

Feel free to open an issue with the "question" label if you have any questions!

## Code of Conduct

- Be respectful and considerate
- Welcome newcomers and encourage diverse perspectives
- Focus on constructive criticism
- Assume good intentions

Thank you for contributing! 🦌

