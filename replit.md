# Tristen's Therapeutics - Replit Project Guide

## Overview

This is a full-stack web application for Tristen's Therapeutics, a therapeutic massage and bodywork business. The application features a jungle-themed landing page with contact form functionality, built using modern web technologies.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom jungle theme variables
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Animations**: Framer Motion for smooth animations and transitions

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Pattern**: RESTful endpoints with JSON responses
- **Session Management**: Built-in session handling with PostgreSQL store

### Development Environment
- **Package Manager**: npm with lockfile version 3
- **Development Server**: Vite dev server with HMR
- **Build Process**: Vite for frontend, esbuild for backend bundling
- **Type Checking**: TypeScript compiler for type safety

## Key Components

### Database Schema
- **Users Table**: Basic user authentication (id, username, password)
- **Contacts Table**: Contact form submissions (id, name, email, phone, service, message, createdAt)
- **Schema Location**: `/shared/schema.ts` with Drizzle ORM definitions
- **Validation**: Zod schemas for runtime validation

### API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Retrieve all contacts (admin use)

### Frontend Pages
- **Home Page**: Single-page application with sections for hero, services, about, pricing, and contact
- **404 Page**: Simple not found page with development guidance

### UI Theme
- **Design System**: Custom jungle theme with dark backgrounds and earth tones
- **Typography**: Cinzel font for headings, Open Sans for body text
- **Color Palette**: Jungle greens, earth browns, and cream accents
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Data Flow

### Contact Form Submission
1. User fills out contact form with name, email, phone, service type, and message
2. Frontend validates data using Zod schema
3. Data sent to `/api/contact` endpoint via POST request
4. Server validates and stores contact in PostgreSQL database
5. Success/error response returned to frontend
6. Toast notification displayed to user

### Page Navigation
1. Single-page application with smooth scrolling between sections
2. Navigation component provides section links
3. Wouter handles any additional routing needs

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **tailwindcss**: Utility-first CSS framework
- **@radix-ui/***: Headless UI components
- **react-hook-form**: Form handling
- **zod**: Runtime type validation

### Development Dependencies
- **vite**: Build tool and dev server
- **typescript**: Type checking
- **tsx**: TypeScript execution
- **esbuild**: Fast JavaScript bundler

## Deployment Strategy

### Production Build
1. **Frontend**: Vite builds optimized static assets to `/dist/public`
2. **Backend**: esbuild bundles server code to `/dist/index.js`
3. **Database**: Drizzle migrations applied via `npm run db:push`

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment setting (development/production)

### Development Workflow
1. Run `npm run dev` for development server with hot reload
2. Run `npm run build` for production build
3. Run `npm start` for production server
4. Run `npm run db:push` to apply database schema changes

### Storage Implementation
- **Development**: In-memory storage for rapid prototyping
- **Production**: PostgreSQL database with Drizzle ORM
- **Interface**: IStorage interface allows switching between implementations

The application is designed for easy deployment on platforms like Replit, Vercel, or any Node.js hosting service with PostgreSQL support.