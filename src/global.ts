import '../node_modules/modern-normalize/modern-normalize.css';
import { globalCss, darkTheme } from './stitches.config';

export const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: 'InterVariable',
      fontStyle: 'normal',
      fontDisplay: 'swap',
      fontWeight: '100 900',
      src: `url('/font/inter-latin-variable-wghtOnly-normal.woff2') format('woff2') `,
      unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    },
  ],

  // '*,*::before,*::after': { margin: '0', padding: 0 },

  html: {
    minHeight: '100%',
    scrollBehavior: 'smooth',
  },

  body: {
    minHeight: ' 100%',
    fontFamily: `'InterVariable',
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    Helvetica,
    Arial,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji`,
    textRendering: 'optimizeSpeed',
    fontWeight: '$2',
    lineHeight: '$3',
    backgroundColor: '$background',
    color: '$text',
  },

  ' h1, h2, h3, h4, h5': {
    lineHeight: '$2',
  },

  /* @link https://utopia.fyi/type/calculator?c=320,16,1.2,1140,20,1.25,3,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l */

  h1: {
    fontSize: '$5',
    fontWeight: '$7',
  },
  h2: {
    fontSize: '$4',
    fontWeight: '$6',
  },
  h3: {
    fontSize: '$3',
    fontWeight: '$5',
  },
  h4: {
    fontSize: '$3',
    fontWeight: '$4',
  },
  h5: {
    fontSize: '$3',
    fontWeight: '$4',
  },
  h6: {
    fontSize: '$2',
    fontWeight: '$3',
  },
  p: {
    fontSize: '$2',
  },

  small: {
    fontSize: '$1',
    fontWeight: '$3',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },

  '#__next': {
    minHeight: '100vh',
  },

  '.container': {
    maxWidth: '56.25rem',
    p: '$4',
    mi: '$auto',
    minHeight: '100vh',
    display: 'grid',
    gridTemplate: `70px 1fr auto / 1fr`,
    gap: '$6',
  },

  '.active': {
    color: '$slate12',
    fontWeight: '$4',
  },

  '.flow > *:where(:not(:first-child)) ': {
    marginTop: 'var(--flow-spacer, 1em)',
  },

  '*,*::before,*::after': {
    '@reduce': {
      animationDuration: '1ms !important',
      animationIterationCount: '1 !important',
      transitionDuration: '1ms !important',
      scrollBehavior: 'auto !important',
    },
  },

  '@motion': {
    ':focus': {
      transition: 'outline-offset .25s ease',
    },
    ':focus:not(:active)': {
      outline: '1px solid $amber9',
      outlineOffset: '5px',
    },
  },

  '@dark': {
    ':root:not(.light)': {
      ...Object.keys(darkTheme.colors).reduce((varSet, currentColorKey) => {
        const currentColor =
          darkTheme.colors[currentColorKey as keyof typeof darkTheme.colors];
        const currentColorValue =
          currentColor.value.substring(0, 1) === '$'
            ? `$colors${currentColor.value}`
            : currentColor.value;

        return {
          [currentColor.variable]: currentColorValue,
          ...varSet,
        };
      }, {}),
    },
  },
});
