import * as Stitches from '@stitches/react';
import {
  slate,
  slateDark,
  whiteA,
  blackA,
  blue,
  blueDark,
  indigo,
  indigoDark,
  crimson,
  crimsonDark,
} from '@radix-ui/colors';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  getCssText,
} = Stitches.createStitches({
  theme: {
    colors: {
      ...slate,
      ...whiteA,
      ...blackA,
      ...blue,
      ...indigo,
      ...crimson,

      text: '$slate11',
      background: '$indigo1',
    },
    space: {
      auto: 'auto',
      0: '0',
      1: '.25rem',
      2: '.5rem',
      3: '1rem',
      4: '1.25rem',
      5: '1.5rem',
      6: '1.75rem',
      7: '2rem',
      8: '3rem',
      9: '4rem',
      10: '5rem',
      11: '7.5rem',
      12: ' 10rem',
      13: '15rem',
      14: '20rem',
      15: ' 30rem',
    },
    shadows: {
      gray100: 'hsl(206,22%,99%)',
      gray200: 'hsl(206,12%,97%)',
      gray300: 'hsl(206,11%,92%)',
      gray400: 'hsl(206,10%,84%)',
      gray500: 'hsl(206,10%,76%)',
      gray600: 'hsl(206,10%,44%)',
    },
    fontSizes: {
      1: '0.833rem',
      2: '1rem',
      3: '1.2rem',
      4: '1.44rem',
      5: '1.728rem',
      6: '2.074rem',
      7: '2.488rem',
    },
    fontWeights: {
      1: '400',
      2: '700',
      3: '900',
    },
    lineHeights: {
      1: '1',
      2: '1.3',
      3: '1.75',
    },
    letterSpacings: {},
    sizes: {
      1: '.25rem',
      2: '.5rem',
      3: '1rem',
      4: '1.25rem',
      5: '1.5rem',
      6: '1.75rem',
      7: '2rem',
      8: '3rem',
      9: '4rem',
      10: '5rem',
      11: '7.5rem',
      12: ' 10rem',
      13: '15rem',
      14: '20rem',
      15: ' 30rem',
    },
    borderWidths: {
      1: '1px',
      2: '2px',
      3: '3px',
    },
    borderStyles: {},
    radii: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '50%',
      5: '99999px',
    },
    zIndices: {
      1: '2',
      2: '3',
      3: '4',
      4: '5',
      5: '99999',
    },
    transitions: {
      1: 'all .3s ease',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
    bp4: '(min-width: 1200px)',
    bp5: '(min-width: 1367px)',
    bp6: '(min-width: 1440px)',
    bp7: '(min-width: 1800px)',
    light: '(prefers-color-scheme: light)',
    dark: '(prefers-color-scheme: dark)',
  },
  utils: {
    m: (value: Stitches.ScaleValue<'space'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.ScaleValue<'space'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.ScaleValue<'space'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.ScaleValue<'space'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.ScaleValue<'space'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    mi: (value: Stitches.ScaleValue<'space'>) => ({
      marginInline: value,
    }),
    p: (value: Stitches.ScaleValue<'space'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.ScaleValue<'space'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.ScaleValue<'space'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.ScaleValue<'space'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.ScaleValue<'space'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});

export const darkTheme = createTheme({
  colors: {
    ...slateDark,
    ...whiteA,
    ...blackA,
    ...blueDark,
    ...indigoDark,
    ...crimsonDark,

    text: '$slate11',
    background: '$indigo1',
  },
});
