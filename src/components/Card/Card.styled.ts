import { styled } from 'stitches.config';
import Image from 'next/image';

export const CardsGrid = styled('div', {
  display: 'grid',
  gridGap: '$5',

  '&>:nth-child(3n - 2)': {
    backgroundColor: '$blue2',
    '& h3': {
      color: '$blue11',
    },
  },
  '&>:nth-child(3n - 1)': {
    backgroundColor: '$crimson2',
    '& h3': {
      color: '$crimson11',
    },
  },
  '&>:nth-child(3n)': {
    backgroundColor: '$cyan2',
    '& h3': {
      color: '$cyan11',
    },
  },
});

export const CardSection = styled('div', {
  borderRadius: '$3',
  py: '$3',
  px: '$5',
});

export const Card = styled('div', {
  display: 'grid',
  maxWidth: '500px',
  mi: '$auto',
  borderRadius: '$3',
  '@bp2': {
    maxWidth: '100%',
    mi: '$0',
    gridTemplateColumns: '3fr 1fr',
    gridTemplateRows: '200px',
    py: '$2',
    px: '$3',
  },
  '& h3 , & p': {
    mb: '$0',
  },
});

export const CardText = styled('div', {
  maxWidth: '55ch',
  py: '$3',
  px: '$3',
});

export const CardHeader = styled('h3', {
  mb: '$0',
  mt: '$1',
});

export const CardSmall = styled('span', {
  mt: '$0',
  color: '$slate11',
  fontSize: '$0',
  fontWeight: '$3',
});

export const CardParagraph = styled('p', { mb: '$0' });

export const CardImageContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '200px',
});

export const CardImage = styled(Image, {
  width: '100%',
  cursor: 'pointer',
  borderBottomRightRadius: '$2',
  borderBottomLeftRadius: '$2',
  '@bp1': {
    borderRadius: '$2',
  },
});
