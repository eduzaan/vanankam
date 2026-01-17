# 🤝 Contributing to Vanankam

Thank you for your interest in contributing to Vanankam! We welcome contributions from developers of all skill levels. This document provides guidelines and information for contributors.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Issues](#reporting-issues)
- [Feature Requests](#feature-requests)

## 🤟 Code of Conduct

This project follows a code of conduct to ensure a welcoming environment for all contributors. By participating, you agree to:

- Be respectful and inclusive
- Focus on constructive feedback
- Accept responsibility for mistakes
- Show empathy towards other contributors
- Help create a positive community

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager
- Git

### Local Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/yourusername/vanankam.git
   cd vanankam
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```
5. **Start the development server**:
   ```bash
   npm run dev
   ```

## 🔄 Development Workflow

### 1. Choose an Issue
- Check the [Issues](https://github.com/yourusername/vanankam/issues) page
- Look for issues labeled `good first issue` or `help wanted`
- Comment on the issue to indicate you're working on it

### 2. Create a Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-number-description
```

### 3. Make Changes
- Write clear, concise code
- Add tests for new features
- Update documentation as needed
- Follow the coding standards below

### 4. Test Your Changes
```bash
# Run linting
npm run lint

# Run type checking
npm run type-check

# Build the project
npm run build

# Format code
npm run format
```

### 5. Commit Your Changes
```bash
git add .
git commit -m "feat: add your feature description"
```

### 6. Push and Create PR
```bash
git push origin feature/your-feature-name
```
Then create a Pull Request on GitHub.

## 📝 Coding Standards

### TypeScript/React
- Use TypeScript for all new code
- Define proper types for component props
- Use functional components with hooks
- Follow React best practices

### Naming Conventions
```typescript
// Components: PascalCase
export function UserProfile() { ... }

// Functions: camelCase
function calculateTotal() { ... }

// Variables: camelCase
const userName = "John";

// Constants: UPPER_SNAKE_CASE
const API_BASE_URL = "/api";

// Files: PascalCase for components, camelCase for utilities
// UserProfile.tsx, utils.ts
```

### Code Style
- Use Prettier for code formatting
- Follow ESLint rules
- Maximum line length: 100 characters
- Use meaningful variable and function names

### Component Structure
```tsx
interface ComponentProps {
  title: string;
  onClick: () => void;
}

export function MyComponent({ title, onClick }: ComponentProps) {
  return (
    <div className="my-component">
      <h2>{title}</h2>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
```

## 📝 Commit Guidelines

We follow the [Conventional Commits](https://conventionalcommits.org/) specification:

```
type(scope): description

[optional body]

[optional footer]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples
```bash
git commit -m "feat: add user authentication system"
git commit -m "fix: resolve mobile menu toggle issue"
git commit -m "docs: update API documentation"
git commit -m "style: format code with Prettier"
```

## 🔄 Pull Request Process

### 1. Before Submitting
- [ ] Tests pass locally
- [ ] Code is linted and formatted
- [ ] TypeScript compilation succeeds
- [ ] No console errors or warnings
- [ ] Responsive design tested on mobile/tablet/desktop

### 2. PR Template
When creating a PR, please include:

**Description**: What changes were made and why

**Type of Change**:
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

**Testing**:
- [ ] Unit tests added/updated
- [ ] Manual testing completed
- [ ] Cross-browser testing done

**Screenshots**: If UI changes were made

### 3. Review Process
- At least one maintainer must approve
- All CI checks must pass
- Conflicts must be resolved
- Code follows project standards

## 🐛 Reporting Issues

### Bug Reports
When reporting bugs, please include:

1. **Clear title** describing the issue
2. **Steps to reproduce** the problem
3. **Expected behavior** vs. actual behavior
4. **Environment details**:
   - Browser and version
   - Operating system
   - Device type (mobile, tablet, desktop)
5. **Screenshots** if applicable
6. **Console errors** or logs

### Issue Template
```
## Bug Report

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
- Browser: [e.g. Chrome 91]
- OS: [e.g. Windows 10]
- Device: [e.g. Desktop, iPhone 12]

**Additional context**
Add any other context about the problem here.
```

## 💡 Feature Requests

### Feature Request Template
```
## Feature Request

**Is your feature request related to a problem? Please describe.**
A clear and concise description of what the problem is.

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.
```

### Feature Request Guidelines
- Check if the feature already exists
- Search existing issues for similar requests
- Provide mockups or examples if possible
- Explain the use case and benefits

## 🎯 Areas for Contribution

### High Priority
- [ ] Add unit tests and integration tests
- [ ] Improve accessibility (WCAG compliance)
- [ ] Add internationalization (i18n)
- [ ] Performance optimizations
- [ ] SEO improvements

### Medium Priority
- [ ] Add dark mode support
- [ ] Implement PWA features
- [ ] Add more interactive animations
- [ ] Create design system documentation
- [ ] Add error boundaries

### Good for Beginners
- [ ] Fix typos in documentation
- [ ] Add loading states to components
- [ ] Improve responsive design
- [ ] Add keyboard navigation
- [ ] Create reusable components

## 📞 Getting Help

If you need help or have questions:

1. Check the [README.md](README.md) for setup instructions
2. Search existing [Issues](https://github.com/yourusername/vanankam/issues) and [Discussions](https://github.com/yourusername/vanankam/discussions)
3. Create a new [Discussion](https://github.com/yourusername/vanankam/discussions) for questions
4. Join our community chat (if available)

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

Thank you for contributing to Vanankam! Your help makes India's chai revolution possible. 🍵✨