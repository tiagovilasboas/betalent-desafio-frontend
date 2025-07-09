import { MantineTheme, MantineThemeOverride } from '@mantine/core'

import { colors, shadows, spaces, typography } from './tokens'

export const theme: MantineThemeOverride = {
  // Cores do tema
  colors: {
    primary: [
      colors.blue[10],
      colors.blue[10],
      colors.blue[10],
      colors.blue[10],
      colors.blue[10],
      colors.blue.primary,
      colors.blue.primary,
      colors.blue.primary,
      colors.blue.primary,
      colors.blue.primary,
    ],
    gray: [
      colors.neutral['00'],
      colors.neutral['05'],
      colors.neutral['10'],
      colors.neutral['20'],
      colors.neutral.black,
      colors.neutral.black,
      colors.neutral.black,
      colors.neutral.black,
      colors.neutral.black,
      colors.neutral.black,
    ],
  },

  // Tipografia
  fontFamily: typography.fontFamily.primary,
  headings: {
    fontFamily: typography.fontFamily.primary,
    sizes: {
      h1: {
        fontSize: typography.variants.h1.fontSize,
        fontWeight: String(typography.variants.h1.fontWeight),
      },
      h2: {
        fontSize: typography.variants.h2.fontSize,
        fontWeight: String(typography.variants.h2.fontWeight),
      },
      h3: {
        fontSize: typography.variants.h3.fontSize,
        fontWeight: String(typography.variants.h3.fontWeight),
      },
    },
  },
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
    Input: {
      styles: (theme: MantineTheme) => ({
        input: {
          backgroundColor: theme.white,
          color: theme.colors.gray[4],
          borderColor: theme.colors.gray[3],

          '&::placeholder': {
            color: theme.colors.gray[3],
          },

          '&:focus': {
            borderColor: theme.colors.primary[6],
          },

          '&:focusWithin': {
            borderColor: theme.colors.primary[6],
          },
        },
      }),
    },
    Table: {
      styles: {
        root: {
          boxShadow: shadows.component.table,
        },
        th: {
          fontWeight: typography.fontWeight.medium,
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
}
