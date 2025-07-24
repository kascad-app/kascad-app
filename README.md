# Kascad App

A sports sponsorship platform connecting athletes with sponsors across multiple action sports disciplines including cycling, BMX, skateboarding, surfing, snowboarding, and motocross.

## Overview

Kascad is built as a modern monorepo using Turborepo and pnpm workspaces, providing a scalable architecture for managing shared libraries and applications. The platform facilitates partnerships between riders and sponsors through various contract types including UGC, Ambassador, Product Placement, and Affiliation agreements.

## Architecture

### Apps and Packages

- `apps/playground`: Next.js development app for testing and showcasing components
- `packages/shared-types`: Core TypeScript interfaces and enums defining the platform's domain model
- `packages/requester`: HTTP client library for API communications
- `packages/ui-kit`: React component library for consistent UI across applications
- `packages/eslint-config`: Shared ESLint configurations
- `packages/prettier-config`: Shared code formatting rules
- `packages/ts-config`: Shared TypeScript configurations

### Tech Stack

- **Framework**: Next.js 14 with React 18 (App Router)
- **Language**: TypeScript 5.x with strict configuration
- **Build System**: Turborepo with pnpm workspaces
- **Package Building**: Preconstruct for library bundling
- **Code Quality**: ESLint + Prettier
- **Package Registry**: GitHub Package Registry

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 9.4.0

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd kascad-app

# Install dependencies
pnpm install
```

### Development

```bash
# Start all packages and apps in development mode
pnpm dev

# Start only the playground app
cd apps/playground && pnpm dev

# Develop packages with watch mode
pnpm dev:packages
```

### Building

```bash
# Build all packages and apps
pnpm build

# Build only packages
pnpm build:packages
```

### Code Quality

```bash
# Lint all code
pnpm lint

# Format all code
pnpm format
```

## Domain Model

The platform centers around key entities:

- **Riders**: Athletes across various sports disciplines
- **Sponsors**: Brands looking to partner with athletes
- **Contracts**: Partnership agreements with different types and terms
- **Offers**: Sponsorship opportunities and proposals
- **Sports**: Cycling, BMX, Skateboarding, Surfing, Snowboarding, Motocross
- **Social Networks**: Integration with Instagram, TikTok, YouTube, Strava, and more

## Publishing Workflow

The project uses Changesets for version management:

```bash
# Create a changeset
pnpm changeset

# Apply version changes
pnpm version

# Publish packages
pnpm release
```

## Package Development

- Packages are built using Preconstruct for optimal bundling
- Development changes are automatically reflected in consuming applications
- The `shared-types` package serves as the single source of truth for TypeScript definitions
- All packages follow consistent configuration patterns

## Contributing

1. Create a feature branch
2. Make your changes
3. Run `pnpm lint` and `pnpm format`
4. Create a changeset if needed: `pnpm changeset`
5. Submit a pull request

## License

[Add your license information here]
