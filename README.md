# Luxury Yacht Catalog

A modern, responsive web application for browsing and exploring luxury yachts. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4, featuring a premium design aesthetic suitable for high-end clientele.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Architecture & Folder Structure](#architecture--folder-structure)
- [Key Features](#key-features)
- [Design Decisions](#design-decisions)
- [Implementation Details](#implementation-details)
- [Testing](#testing)
- [Performance Optimizations](#performance-optimizations)
- [Getting Started](#getting-started)

## 🎯 Project Overview

This project is a luxury yacht catalog application that displays yacht listings with detailed information. The application fetches data from a REST API, provides search and filtering capabilities, pagination, and individual detail pages for each yacht. The design emphasizes elegance and sophistication to match the premium nature of the product.

### Why This Approach?

- **Next.js 16 App Router**: Chose the latest App Router for better performance, server components, and built-in optimizations
- **Server Components**: Used server components for data fetching to improve SEO and initial load performance
- **Client Components**: Separated client-side interactivity (filters, pagination) into client components to leverage React hooks
- **TypeScript**: Full type safety for better maintainability and fewer runtime errors
- **Tailwind CSS v4**: Modern utility-first CSS with CSS-based configuration for better performance

## 🛠 Tech Stack

### Core Technologies

- **Next.js 16.0.3**: React framework with App Router
  - **Why**: Server-side rendering, automatic code splitting, image optimization, built-in routing
  - **App Router**: Modern routing system with layouts, loading states, and server components

- **React 19.2.0**: UI library
  - **Why**: Latest version with improved performance and new features
  - **Server Components**: For data fetching and static content
  - **Client Components**: For interactive features requiring hooks

- **TypeScript 5**: Type-safe JavaScript
  - **Why**: Catch errors at compile time, better IDE support, self-documenting code
  - **Strict mode**: Enabled for maximum type safety

- **Tailwind CSS v4.1.17**: Utility-first CSS framework
  - **Why**: Rapid development, consistent design system, small bundle size
  - **CSS-based config**: Using `@theme` directive for better performance in v4
  - **Custom colors**: Primary (navy), Secondary (blue), Gold accents, Cream backgrounds

### Development Tools

- **Jest 30.2.0**: Testing framework
  - **Why**: Industry standard, great TypeScript support, easy to set up
  - **Coverage**: Testing utility functions for reliability

- **ESLint**: Code linting
  - **Why**: Maintain code quality, catch potential issues early

## 📁 Architecture & Folder Structure

```
src/
├── app/                    # Next.js 16 App Router
│   ├── page.tsx           # Home/listing page (Server Component)
│   ├── [id]/              # Dynamic route for yacht details
│   │   ├── page.tsx       # Detail page (Server Component)
│   │   └── loading.tsx    # Loading state for detail page
│   ├── layout.tsx         # Root layout with fonts
│   ├── loading.tsx        # Loading state for home page
│   └── globals.css        # Global styles + Tailwind config
│
├── components/
│   ├── common/            # Reusable UI components
│   │   ├── Button.tsx     # Styled button with variants
│   │   ├── ImageLoader.tsx # Image loading spinner
│   │   ├── Loader.tsx     # Full-page loading component
│   │   ├── Pagination.tsx # Pagination controls
│   │   └── YachtImage.tsx # Image component with fallback
│   │
│   ├── filters/           # Filter components
│   │   ├── SearchInput.tsx # Search input with icon
│   │   └── SortFilter.tsx  # Sort dropdown
│   │
│   ├── layout/            # Layout components (for future use)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── PageLayout.tsx
│   │
│   └── yachts/            # Yacht-specific components
│       ├── YachtCard.tsx   # Card component for listings
│       ├── YachtDetails.tsx # Detail page component
│       └── YachtList.tsx   # List container with filters
│
├── hooks/                  # Custom React hooks
│   ├── useDebounce.ts     # Debounce hook for search
│   └── useYachts.ts       # (Placeholder for future)
│
├── services/               # API/data layer
│   └── yachtService.ts    # Data fetching functions
│
├── types/                  # TypeScript type definitions
│   └── yacht.ts           # Yacht type interface
│
└── utils/                  # Utility functions
    ├── formatPrice.ts     # Currency formatting
    ├── imageFallback.ts   # Fallback image URLs
    └── sortHelpers.ts     # Sorting logic
```

### Architecture Decisions

1. **Separation of Concerns**:
   - Server components for data fetching (pages)
   - Client components for interactivity (filters, lists)
   - Services layer for API calls
   - Utils for pure functions
   - Types for shared interfaces

2. **Component Organization**:
   - Grouped by feature (yachts, filters, common)
   - Reusable components in `common/`
   - Feature-specific in their own folders

3. **Data Flow**:
   - Server components fetch data
   - Pass data as props to client components
   - Client components handle state and user interactions

## ✨ Key Features

### 1. Yacht Listing Page
- **Server-side data fetching**: Fetches all yachts on the server for better SEO
- **Responsive grid layout**: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)
- **Luxury design**: Gold accents, cream backgrounds, elegant typography
- **Animated entrances**: Staggered fade-in animations for cards

### 2. Search & Filtering
- **Real-time search**: Debounced search (300ms) to reduce API calls
- **Search fields**: Name, type, and length
- **Sort options**: 
  - Price (ascending/descending)
  - Name (A-Z / Z-A)
  - Length (short to long / long to short)
- **Client-side filtering**: Fast, no server round-trips

### 3. Pagination
- **10 items per page**: Optimal balance between performance and UX
- **Smart pagination**: Shows page numbers with ellipsis for large datasets
- **Smooth scrolling**: Auto-scrolls to top on page change
- **Reusable component**: Can be used anywhere in the app

### 4. Yacht Detail Page
- **Dynamic routing**: `/[id]` route for individual yachts
- **Comprehensive information**: Length, guests, bedrooms, crew, pricing
- **Water toys display**: Lists all amenities as styled badges
- **Booking sidebar**: Sticky sidebar with charter information
- **Image hero**: Large hero image with overlay text

### 5. Image Handling
- **Next.js Image optimization**: Automatic optimization, lazy loading
- **Fallback system**: Falls back to Unsplash images if API images fail
- **Loading states**: Elegant spinner while images load
- **URL decoding**: Handles encoded URLs from API

### 6. Loading States
- **Page-level loaders**: Full-page loader while data fetches
- **Image loaders**: Per-image loading spinners
- **Luxury design**: Gold-themed loaders matching the brand

### 7. Responsive Design
- **Mobile-first**: Designed for mobile, enhanced for desktop
- **Breakpoints**: Tailwind's responsive utilities
- **Touch-friendly**: Appropriate button sizes and spacing

## 🎨 Design Decisions

### Color Palette
- **Primary (Navy)**: `#0a0e27` - Sophisticated, premium feel
- **Secondary (Blue)**: `#1a1f3a` - Complementary dark blue
- **Gold**: `#d4af37` - Luxury accent color
- **Cream**: `#f5f1e8` - Warm, elegant background

**Why**: Navy and gold convey luxury and sophistication, perfect for high-end clientele. Cream provides warmth without being too bright.

### Typography
- **Display font**: Geist Sans (from Next.js) for headings
- **Uppercase yacht names**: Emphasizes brand names
- **Wide letter spacing**: Adds elegance and readability
- **Font weights**: Bold for emphasis, regular for body

### Animations
- **Subtle and minimal**: Fade-ins, slight lifts on hover
- **Staggered entrances**: Cards appear sequentially for polish
- **Smooth transitions**: 300-600ms durations
- **No over-animation**: Keeps focus on content

**Why**: Subtle animations enhance UX without being distracting. Luxury brands use restraint in design.

### Layout Patterns
- **Card-based design**: Easy to scan, modern look
- **Grid system**: Consistent spacing and alignment
- **White space**: Generous padding for breathing room
- **Gradients**: Subtle gradients for depth

## 💻 Implementation Details

### Server vs Client Components

**Server Components** (`app/page.tsx`, `app/[id]/page.tsx`):
- Fetch data on the server
- Better SEO (content in HTML)
- Faster initial load
- No JavaScript needed for initial render

**Client Components** (`YachtList`, `Pagination`, `SearchInput`):
- Need React hooks (useState, useEffect)
- Handle user interactions
- Manage client-side state
- Marked with `'use client'` directive

**Why this split?**: Optimizes performance by keeping server components for static content and using client components only where interactivity is needed.

### Data Fetching Strategy

```typescript
// Server Component
export default async function Home() {
  const yachts = await fetchYachts(); // Server-side fetch
  return <YachtList yachts={yachts} />; // Pass as props
}
```

- **Server-side fetching**: Data fetched on server, sent as props
- **Caching**: `revalidate: 3600` - Cache for 1 hour
- **Error handling**: Graceful fallbacks, returns empty array on error
- **Type safety**: Full TypeScript types for API responses

### State Management

- **Local state**: useState for filters, pagination, search
- **Derived state**: useMemo for filtered/sorted lists
- **No global state**: Simple enough that props drilling is acceptable
- **Debouncing**: Custom hook for search input

**Why no Redux/Zustand?**: The app is simple enough that local state + props is sufficient. Adding a state management library would be over-engineering.

### Image Optimization

1. **Next.js Image component**: Automatic optimization
2. **Fallback system**: Custom `YachtImage` component
3. **Loading states**: Shows spinner while loading
4. **Error handling**: Falls back to Unsplash on error
5. **URL decoding**: Handles encoded URLs from API

### Performance Optimizations

1. **Server Components**: Reduce client-side JavaScript
2. **Image optimization**: Next.js automatic optimization
3. **Code splitting**: Automatic with Next.js
4. **Memoization**: useMemo for expensive computations
5. **Debouncing**: Reduces unnecessary filtering
6. **Pagination**: Only renders 10 items at a time
7. **Caching**: API responses cached for 1 hour

### Error Handling

- **API errors**: Try-catch blocks, fallback to empty arrays
- **Image errors**: Fallback to Unsplash images
- **URL decoding errors**: Try-catch, use original URL
- **Null checks**: Defensive programming throughout
- **Type safety**: TypeScript prevents many errors

## 🧪 Testing

### Test Coverage

**Utility Functions**:
- `formatPrice.test.ts`: 8 tests
  - Currency formatting (USD, EUR)
  - Null/undefined handling
  - Edge cases (small/large numbers, decimals)

- `sortHelpers.test.ts`: 8 tests
  - All sort options
  - Immutability verification
  - Empty array handling

### Testing Strategy

- **Unit tests**: For pure utility functions
- **Jest**: Industry-standard testing framework
- **TypeScript**: Type-safe tests
- **Coverage**: Focus on critical business logic

**Why Jest?**: 
- Widely used, great TypeScript support
- Easy to set up with Next.js
- Good documentation and community

**Why not test components?**: 
- Component tests require more setup (React Testing Library)
- Utility functions are easier to test and have higher ROI
- Can add component tests later if needed

## 🚀 Performance Optimizations

1. **Server Components**: 
   - Reduces JavaScript bundle size
   - Faster initial page load
   - Better SEO

2. **Image Optimization**:
   - Next.js automatic optimization
   - Lazy loading
   - Responsive images

3. **Code Splitting**:
   - Automatic route-based splitting
   - Dynamic imports where needed

4. **Memoization**:
   - `useMemo` for filtered/sorted lists
   - Prevents unnecessary recalculations

5. **Debouncing**:
   - Search input debounced (300ms)
   - Reduces computation during typing

6. **Pagination**:
   - Only renders visible items
   - Reduces DOM nodes

7. **Caching**:
   - API responses cached (1 hour)
   - Reduces API calls

## 🎯 Design Patterns Used

1. **Component Composition**: Building complex UIs from simple components
2. **Custom Hooks**: Reusable logic (useDebounce)
3. **Service Layer**: Separation of data fetching logic
4. **Type Safety**: TypeScript interfaces for contracts
5. **Error Boundaries**: Try-catch for graceful error handling
6. **Controlled Components**: All inputs are controlled
7. **Props Drilling**: Acceptable for this app size

## 🔧 Challenges & Solutions

### Challenge 1: Image URL Encoding
**Problem**: API returned URL-encoded strings that were double-encoded by Next.js Image
**Solution**: Decode URLs in the service layer before passing to components

### Challenge 2: Currency Null Values
**Problem**: API sometimes returns null for currency
**Solution**: Default to 'USD' in both service layer and formatter function

### Challenge 3: Server vs Client Components
**Problem**: Needed hooks for filters but wanted server-side data fetching
**Solution**: Fetch data in server component, pass to client component that handles state

### Challenge 4: Image Loading States
**Problem**: Empty boxes while images load
**Solution**: Created reusable ImageLoader component with elegant spinner

### Challenge 5: Pagination Scroll
**Problem**: Page didn't scroll to top when clicking prev/next
**Solution**: Used useEffect to watch page changes and scroll

## 📦 Dependencies

### Production
- `next`: React framework
- `react`: UI library
- `react-dom`: React DOM bindings

### Development
- `typescript`: Type safety
- `tailwindcss`: CSS framework
- `jest`: Testing framework
- `eslint`: Code linting

**Why minimal dependencies?**: 
- Next.js provides most features out of the box
- Reduces bundle size
- Easier to maintain
- Faster installs

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (or 20+ recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Environment Setup
No environment variables needed - API endpoint is hardcoded for this demo.

## 📝 Code Quality

- **TypeScript**: Full type coverage
- **ESLint**: Code linting enabled
- **Consistent formatting**: Following Next.js conventions
- **Component structure**: Reusable, composable components
- **Error handling**: Defensive programming throughout
- **Comments**: Minimal, code is self-documenting

## 🎓 Key Learnings & Best Practices

1. **Server Components**: Leverage Next.js 16 App Router for better performance
2. **Type Safety**: TypeScript catches errors early
3. **Component Reusability**: Build small, focused components
4. **Performance First**: Optimize images, use memoization, paginate
5. **User Experience**: Loading states, error handling, smooth animations
6. **Code Organization**: Clear folder structure for maintainability
7. **Testing**: Test critical business logic (utilities)

## 🔮 Future Enhancements

Potential improvements (not implemented):
- Add Header/Footer components
- Implement favorites/bookmarks
- Add comparison feature
- Advanced filtering (price range, length range)
- Image gallery for detail page
- Share functionality
- Print-friendly detail pages
- Accessibility improvements (ARIA labels, keyboard navigation)

## 📊 Project Statistics

- **Components**: 15+ reusable components
- **Pages**: 2 (listing + detail)
- **Utility Functions**: 3 (formatPrice, sortHelpers, imageFallback)
- **Custom Hooks**: 1 (useDebounce)
- **Test Coverage**: 16 tests, 2 test suites
- **TypeScript**: 100% type coverage
- **Responsive**: Mobile, tablet, desktop

## 🎯 Interview Talking Points

### Why Next.js?
- Server-side rendering for SEO
- Automatic code splitting
- Built-in image optimization
- Great developer experience
- App Router provides modern patterns

### Why TypeScript?
- Catches errors at compile time
- Better IDE support
- Self-documenting code
- Easier refactoring
- Industry standard

### Why Tailwind CSS?
- Rapid development
- Consistent design system
- Small bundle size (purges unused)
- Easy to maintain
- Great for responsive design

### Architecture Decisions
- Server components for data fetching (performance, SEO)
- Client components for interactivity (hooks needed)
- Service layer for API calls (separation of concerns)
- Utility functions for reusable logic
- Custom hooks for shared stateful logic

### Performance Considerations
- Server-side rendering
- Image optimization
- Code splitting
- Memoization
- Pagination
- Debouncing
- Caching

### Testing Strategy
- Unit tests for utilities (high ROI)
- Jest for testing framework
- Focus on business logic
- Can expand to component tests later

This README should prepare you for any questions about the project. The key is to explain your decisions, show understanding of the technologies, and demonstrate problem-solving skills.
