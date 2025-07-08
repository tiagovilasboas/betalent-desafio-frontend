import { MantineThemeOverride } from '@mantine/core';

import { colors, shadows, spaces, typography } from './tokens';

export const theme: MantineThemeOverride = {
  // Cores do tema
  colors: {
    primary: [
      colors.primary[50],
      colors.primary[100],
      colors.primary[200],
      colors.primary[300],
      colors.primary[400],
      colors.primary[500], // Cor principal
      colors.primary[600],
      colors.primary[700],
      colors.primary[800],
      colors.primary[900],
    ],
    gray: [
      colors.neutral[50],
      colors.neutral[100],
      colors.neutral[200],
      colors.neutral[300],
      colors.neutral[400],
      colors.neutral[500],
      colors.neutral[600],
      colors.neutral[700],
      colors.neutral[800],
      colors.neutral[900],
    ],
  },

  // Tipografia
  fontFamily: typography.fontFamily.primary,
  fontSizes: {
    xs: typography.fontSize.xs,
    sm: typography.fontSize.sm,
    md: typography.fontSize.md,
    lg: typography.fontSize.lg,
    xl: typography.fontSize.xl,
  },

  // Espaçamentos
  spacing: {
    xs: spaces.xs,
    sm: spaces.sm,
    md: spaces.md,
    lg: spaces.lg,
    xl: spaces.xl,
  },

  // Raios de borda
  radius: {
    xs: '4px',
    sm: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  },

  // Sombras
  shadows: {
    xs: shadows.xs,
    sm: shadows.sm,
    md: shadows.md,
    lg: shadows.lg,
    xl: shadows.xl,
  },

  // Configurações de componentes
  components: {
    Button: {
      defaultProps: {
        radius: 'md',
      },
      styles: {
        root: {
          fontWeight: typography.fontWeight.medium,
          boxShadow: shadows.component.button,
        },
      },
    },
    TextInput: {
      defaultProps: {
        radius: 'md',
      },
      styles: {
        input: {
          boxShadow: shadows.component.input,
          '&:focus': {
            boxShadow: shadows.focus,
          },
        },
      },
    },
    Table: {
      styles: {
        root: {
          boxShadow: shadows.component.table,
        },
        th: {
          fontWeight: typography.fontWeight.semibold,
          padding: spaces.component.table.cellPadding,
        },
        td: {
          padding: spaces.component.table.cellPadding,
        },
      },
    },
    Card: {
      defaultProps: {
        radius: 'md',
        shadow: 'md',
      },
      styles: {
        root: {
          boxShadow: shadows.component.card,
        },
      },
    },
  },

  // Configurações globais
  other: {
    colors,
    spaces,
    shadows,
    typography,
  },
}; 