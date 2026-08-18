import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0B',
        dark: '#F4F4F5',
        secondary: '#9CA3AF',
        accent: '#22D3EE',
        accent2: '#8B5CF6',
        panel: '#131315',
        timeline: '#22D3EE',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2.5rem',
      },
      borderRadius: {
        photo: '4px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
      },
      animation: {
        marquee: 'marquee 36s linear infinite',
        'fade-in-up': 'fade-in-up 0.7s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
    },
  },
} satisfies Partial<Config>
