// Tokens de cores extraídos do design system
// Baseado no arquivo design-system/colors.png

export const colors = {
  blue: {
    primary: '#0500FF',
    '10': '#DEE9FB',
  },
  neutral: {
    black: '#1C1C1C',
    '20': '#9E9E9E',
    '10': '#DFDFDF',
    '05': '#F5F5F5',
    '00': '#F9F9F9',
    white: '#FFFFFF',
  },
} as const;

// Tipos para TypeScript
export type ColorToken = typeof colors;
export type ColorKey = keyof ColorToken; 