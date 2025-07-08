// Tokens de espaçamentos extraídos do design system
// Baseado no arquivo design-system/spaces.svg

export const spaces = {
  // Espaçamentos pequenos
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',

  // Espaçamentos específicos
  padding: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },

  margin: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },

  // Espaçamentos de grid
  grid: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },

  // Espaçamentos de componentes
  component: {
    button: {
      padding: '12px 24px',
      margin: '8px',
    },
    input: {
      padding: '12px 16px',
      margin: '8px 0',
    },
    card: {
      padding: '24px',
      margin: '16px',
    },
    table: {
      cellPadding: '12px 16px',
      rowSpacing: '8px',
    },
  },
} as const;

// Tipos para TypeScript
export type SpaceToken = typeof spaces;
export type SpaceKey = keyof SpaceToken; 