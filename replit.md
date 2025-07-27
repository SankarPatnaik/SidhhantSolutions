# Sidhhant - AI-Driven Business Solutions Platform

## Overview

This is a modern full-stack web application for Sidhhant, a company providing AI-driven solutions for real estate and legal industries. The platform features a marketing website with contact functionality and is built using a monorepo structure with shared schema validation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Monorepo Structure
The application follows a clean monorepo architecture with three main directories:
- `client/` - React frontend application
- `server/` - Express.js backend API
- `shared/` - Common schemas and types used by both frontend and backend

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives
- **Animations**: Framer Motion for smooth animations
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Style**: RESTful API with JSON responses
- **Middleware**: Custom logging and error handling middleware
- **Development**: Hot reload with Vite integration

## Key Components

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Centralized schema definitions in `shared/schema.ts`
- **Database**: PostgreSQL (configured for Neon Database)
- **Tables**: 
  - `users` - User authentication and profiles
  - `contact_inquiries` - Contact form submissions

### Storage Layer
- **Interface**: `IStorage` interface for data operations
- **Implementation**: In-memory storage (`MemStorage`) for development
- **Operations**: CRUD operations for users and contact inquiries

### UI System
- **Design System**: shadcn/ui with Tailwind CSS
- **Theme**: Salesforce-inspired color palette with light/dark mode support
- **Components**: Comprehensive set of reusable UI components
- **Forms**: React Hook Form with Zod validation

### Marketing Website
- **Sections**: Hero, Products, AI Technology, About, Testimonials, Contact, Footer
- **Features**: Smooth scrolling navigation, responsive design, contact form
- **Content**: Focus on real estate CRM, legal information hub, and law community products

## Data Flow

### Contact Form Flow
1. User fills out contact form with validation
2. Frontend validates data using shared Zod schemas
3. API endpoint receives and validates request
4. Data is stored using storage interface
5. Success/error response sent back to client
6. UI updates with toast notification

### API Request Flow
1. Client makes requests using custom `apiRequest` utility
2. Express middleware logs requests and responses
3. Route handlers process requests with error handling
4. Responses are JSON formatted with consistent structure

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless** - Neon Database connection
- **drizzle-orm** & **drizzle-kit** - Database ORM and migration tools
- **@tanstack/react-query** - Server state management
- **framer-motion** - Animation library
- **react-hook-form** & **@hookform/resolvers** - Form handling
- **zod** & **drizzle-zod** - Schema validation

### UI Dependencies
- **@radix-ui/** - Headless UI components
- **tailwindcss** - Utility-first CSS framework
- **class-variance-authority** - Component variant management
- **lucide-react** - Icon library

### Development Dependencies
- **tsx** - TypeScript execution for development
- **esbuild** - Fast bundling for production
- **@replit/** - Replit-specific development tools

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds client code to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Development**: `tsx` provides hot reload for server changes

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable
- **Development**: Uses Vite dev server with middleware mode
- **Production**: Serves static files and API from single Express server

### Development Workflow
- `npm run dev` - Starts development server with hot reload
- `npm run build` - Builds both frontend and backend for production
- `npm run start` - Runs production server
- `npm run db:push` - Pushes database schema changes

The application is designed to be easily deployable to platforms like Replit, Vercel, or traditional hosting providers with minimal configuration changes.