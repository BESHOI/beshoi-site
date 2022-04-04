import '../node_modules/modern-normalize/modern-normalize.css';
import '@fontsource/inter/variable.css';
import { globalCss, darkTheme } from './stitches.config';

export const globalStyles = globalCss({
  // '*,*::before,*::after': { margin: '0', padding: 0 },

  html: {
    display: 'block',
  },
  
  body: {
    minBlockSize: '100%',
    ' @supports (font-variation-settings: normal)': {
      fontFamily: 'interVariable',
      fontVariationSettings: 'wght 400',
    },
    fontFamily: 'interVariable, sans-serif',
    fontDisplay: 'optional',
    textRendering: 'optimizeSpeed',
    fontWeight: '$2',
    lineHeight: '$3',
    scrollBehavior: 'smooth',
    backgroundColor: '$background',
    color: '$text',
  },

  ' h1, h2, h3, h4, h5': {
    lineHeight: '$2',
  },

  /* @link https://utopia.fyi/type/calculator?c=280,14,1.2,1140,20,1.25,3,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l */

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
    fontSize: '$0',
    fontWeight: '$3',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },

  '.container': {
    width: 'min(100% - 2rem, 56.25rem)',
    mi: '$auto',
    height: '100vh',
    gap: '$4',
    display: 'grid',
    gridTemplate: `50px 1fr 50px /100%`,
  },
  main: {
    width: '100%',
  },

  '.active': {
    color: '$slate12',
    fontWeight: '$4',
  },

  '.flow > *:where(:not(:first-child)) ': {
    marginTop: 'var(--flow-spacer, 1em)',
  },

  '@print': {
    'header,footer': {
      display: 'none',
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
