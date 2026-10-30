import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
          hover: 'var(--primary-hover)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        border: 'var(--border)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        destructive: 'var(--destructive)',
        surface: 'var(--surface)',
        // Colver Experimental Brutalist Palette
        obsidian: '#080808',
        paper: '#F4F1EA',
        lime: {
          DEFAULT: '#C8FF00',
          hover: '#b8ea00',
        },
        acid: {
          DEFAULT: '#FF5A1F',
          hover: '#e64e16',
        },
        electric: {
          DEFAULT: '#405CFF',
          hover: '#3149e0',
        },
        chrome: {
          DEFAULT: '#BFC3C9',
          light: '#E2E8F0',
          dark: '#7E8694',
        },
      },
      fontFamily: {
        display: [
          'var(--font-display)',
          'Space Grotesk',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        mono: [
          'var(--font-mono)',
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'monospace',
        ],
        sans: [
          'var(--font-inter)',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch-subtle': 'glitch 4s infinite linear alternate-reverse',
        'marquee': 'marquee 25s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glitch: {
          '0%, 94%': { transform: 'translate(0, 0)' },
          '95%': { transform: 'translate(-1.5px, 0.5px)' },
          '96%': { transform: 'translate(1.5px, -0.5px)' },
          '97%': { transform: 'translate(-0.5px, -1px)' },
          '98%': { transform: 'translate(1px, 1px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'expo-in': 'cubic-bezier(0.7, 0, 0.84, 0)',
      },
    },
  },
  plugins: [],
}

export default config
