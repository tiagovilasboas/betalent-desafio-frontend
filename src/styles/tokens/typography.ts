// Tokens de tipografia extraídos do design system
// Baseado no arquivo design-system/font.svg

export const typography = {
  // Famílias de fonte
  fontFamily: {
    primary: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    secondary: 'Helvetica, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    mono: 'SF Mono, Monaco, Inconsolata, "Roboto Mono", monospace',
  },

  // Tamanhos de fonte
  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
  },

  // Pesos de fonte
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },

  // Alturas de linha
  lineHeight: {
    tight: 1.2,
    normal: 1.4,
    relaxed: 1.6,
  },

  // Espaçamentos de letra
  letterSpacing: {
    normal: '0em',
  },

  // Variantes de texto
  variants: {
    h1: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '20px',
      fontWeight: 500, // Medium
    },
    h2: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '16px',
      fontWeight: 500, // Medium
    },
    h3: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '16px',
      fontWeight: 400, // Regular
    },
    body: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '16px',
      fontWeight: 400,
    },
    button: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '14px',
      fontWeight: 500,
    },
  },
} as const;

// Tipos para TypeScript
export type TypographyToken = typeof typography;
export type TypographyKey = keyof TypographyToken; 