# Colver

A modern, high-end marketing website with immersive 3D backgrounds, smooth scroll animations, and a dark-only design.

![Colver Preview](./preview.png)

## Features

- **Immersive 3D Background** - React Three Fiber powered background with floating blobs, particles, and gradient meshes
- **Smooth Scroll Animations** - GSAP ScrollTrigger + Framer Motion for buttery-smooth section transitions
-- **Dark Theme** - OLED-style dark mode (dark-only)
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Performance Optimized** - GPU-friendly animations, lazy loading, reduced motion support

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: React Three Fiber + Three.js
- **Animations**: Framer Motion + GSAP ScrollTrigger
- **Icons**: Lucide React (via SVG)

## Project Structure

```
colver/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles & CSS variables
├── components/
│   ├── AnimatedBackground.tsx   # 3D background with Three.js
│   ├── Navigation.tsx           # Fixed navigation with scroll effects
│   ├── Section.tsx              # Reusable section component
├── lib/
│   ├── animations.ts       # Animation variants & utilities
│   └── theme.tsx           # Theme context & provider
├── styles/
│   └── globals.css         # Tailwind imports & custom styles
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Animation Architecture

### 1. Background Layer (React Three Fiber)

The `AnimatedBackground` component creates an immersive 3D scene:

- **Stars**: `@react-three/drei/Stars` for depth
- **Organic Blobs**: Floating spheres with `MeshDistortMaterial`
- **Particle Field**: Custom points with mouse parallax
- **Gradient Mesh**: Shader-based animated gradient plane
- **Section-aware colors**: Background adapts to current section

```tsx
// Key features:
// - Mouse parallax via useFrame
// - Section progress tracking
// - Reduced motion support
// - Visibility API for performance
```

### 2. Content Layer (Framer Motion + GSAP)

Section animations use a hybrid approach:

**Framer Motion** (component-level):
- `whileInView` for scroll-triggered reveals
- `useScroll` + `useTransform` for parallax
- Staggered children animations
- Layout animations for theme transitions

**GSAP ScrollTrigger** (page-level):
- Section progress tracking for background
- Pinned sections (optional)
- Complex scroll-linked timelines

### 3. Theme System

CSS Variables approach for instant theme switching:

```css
:root {
  --background: #000000;
  --foreground: #ffffff;
  /* ... */
}

:root.light {
  --background: #ffffff;
  --foreground: #0a0a0a;
  /* ... */
}
```

All elements transition smoothly via:
```css
transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/colver.git
cd colver

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Changing Colors

Edit CSS variables in `styles/globals.css`:

```css
:root {
  --primary: #3b82f6;    /* Change primary color */
  --accent: #8b5cf6;     /* Change accent color */
}
```

### Adding New Sections

1. Create section component in `app/page.tsx` or separate file
2. Wrap with `<Section id="your-section">` component
3. Add to GSAP ScrollTrigger setup in `useEffect`

```tsx
<Section id="new-section" padding="large">
  <YourSectionContent />
</Section>
```

### Modifying Background

Edit `components/AnimatedBackground.tsx`:

```tsx
// Add more blobs
<OrganicBlob
  position={[2, -2, -4]}
  color="#ff6b6b"
  scale={1.5}
/>

// Adjust particle count
<ParticleField count={200} mousePosition={mousePosition} />
```

### Animation Timing

Edit `lib/animations.ts`:

```ts
export const durations = {
  fast: 0.3,    // Faster animations
  normal: 0.5,
  slow: 0.8,    // Slower, more dramatic
}
```

## Performance Tips

1. **Reduce particle count** on mobile devices
2. **Use `dpr={[1, 2]}`** for responsive pixel ratio
3. **Enable `frameloop="never"`** when tab is hidden
4. **Respect `prefers-reduced-motion`** preference
5. **Use `will-change`** sparingly on animated elements

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - feel free to use for personal or commercial projects.

---

Built with ❤️ using Next.js, Three.js, and Framer Motion.
