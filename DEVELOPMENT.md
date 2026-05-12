# Development Guide

## Project Setup

This document provides guidelines for developing ShoppyGlobe.

### Component Architecture

All components are located in `/src/components/` and follow these principles:
- Functional components with hooks
- Props drilling minimized using Redux
- Lazy loading for performance
- Comprehensive error handling

### State Management

Redux is used for:
- **Cart State** - Product additions, removals, quantity changes
- **Search State** - Product filtering

### API Integration

- DummyJSON API for product data
- Custom hooks for data fetching
- Error boundaries for graceful failure handling

### Styling

- CSS Grid and Flexbox for layouts
- Mobile-first responsive design
- CSS variables for theming
- Smooth animations and transitions

## Commit Guidelines

- Feature commits: `feat: [description]`
- Bug fixes: `fix: [description]`
- Styling: `style: [description]`
- Documentation: `docs: [description]`
- Performance: `perf: [description]`

## Testing Features

1. Product browsing and filtering
2. Shopping cart functionality
3. Checkout process
4. 404 error page
5. Responsive design on different devices
