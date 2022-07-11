export const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    grey: '#3D3D3D',
    greyLight: '#F8F8F8',
    orange: '#FF9B21',
  },
  spaces: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '40px',
  },
  size: {
    sm: 320,
    md: 600,
    lg: 1440
  },
}

export const device = {
  sm: `(min-width: ${theme.size.sm}px)`,
  md: `(min-width: ${theme.size.md}px)`,
  lg: `(min-width: ${theme.size.lg}px)`,
};