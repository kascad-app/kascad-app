# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kascad is a sports sponsorship platform connecting athletes (riders) with sponsors across cycling, BMX, skateboarding, surfing, snowboarding, and motocross. This is a Turborepo monorepo using pnpm workspaces.

## Architecture

### Monorepo Structure
- `apps/playground/` - Next.js development app for testing components
- `packages/shared-types/` - Core TypeScript interfaces and enums (published as v1.5.6)
- `packages/requester/` - HTTP client library (v3.0.0)  
- `packages/ui-kit/` - React component library (early development)
- `packages/eslint-config/` - Shared linting configurations
- `packages/prettier-config/` - Shared formatting configurations
- `packages/ts-config/` - Shared TypeScript configurations

### Core Domain Model (from shared-types)
- **Entities**: Riders, Sponsors, Contracts, Offers, Articles, Profiles
- **Contract Types**: UGC, Ambassador, Product Placement, Affiliation
- **Sports**: Cycling, BMX, Skateboarding, Surfing, Snowboarding, Motocross
- **Social Networks**: Instagram, TikTok, YouTube, Strava, etc.
- **Languages**: French/English support

## Development Commands

### Essential Commands
```bash
# Install dependencies
pnpm install

# Start development (all packages + playground app)
pnpm dev

# Build everything
pnpm build

# Build only packages (for library development)
pnpm build:packages

# Watch mode for packages during development
pnpm dev:packages

# Lint all code
pnpm lint

# Format all code
pnpm format
```

### Package-Specific Commands
```bash
# Work on UI kit components
cd packages/ui-kit && pnpm dev

# Test playground app with latest package changes
cd apps/playground && pnpm dev
```

### Publishing Workflow
```bash
# Create changeset for version bump
pnpm changeset

# Apply version changes
pnpm version

# Publish to GitHub Package Registry
pnpm release
```

## Technical Stack

- **Build System**: Turborepo with pnpm workspaces
- **Frontend**: Next.js 14 with React 18 (App Router)
- **Language**: TypeScript 5.x with strict configuration
- **Package Building**: Preconstruct for library bundling
- **Registry**: GitHub Package Registry for internal packages
- **Node Version**: >=18 required

## Important Notes

### Package Development
- Packages use Preconstruct for building and linking
- Changes to packages are automatically reflected in consuming apps during development
- The `shared-types` package contains the core domain model and is frequently updated

### Missing Infrastructure
- No testing framework is currently configured
- Consider setting up Jest/Vitest when adding tests
- No CI/CD pipeline exists yet

### Code Organization
- Shared configurations are centralized in dedicated packages
- TypeScript interfaces in `shared-types` define the platform's core data structures
- The `requester` package handles HTTP communications
- UI components are developed in `ui-kit` and tested in the `playground` app