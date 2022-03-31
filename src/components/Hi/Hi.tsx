import React from 'react';
import { keyframes, styled } from '../../stitches.config';
import Image from 'next/image';
import { Box } from '../Utils/Utils';

type Props = {};

const HiSection = styled('div', {
  // flexWrap: 'wrap',
  // gap: '$3',
  textAlign: 'center',
  alignItems: 'center',
  '@bp2': {
    display: 'flex',
    gap: '$7',
    textAlign: 'left',
  },

  '& h1, & h3': {
    m: '$0',
  },

  '& h1': {
    '@bp2': {
      fontSize: '3rem',
    },
  },
  '& h3': {
    backgroundImage: 'linear-gradient(45deg,$crimson9,$blue9)',
    color: 'transparent',
    backgroundClip: 'text',
    '@bp2': {
      fontSize: '2rem',
    },
  },
});

const AvatarContainer = styled('div', {
  position: 'relative',
  width: '75px',
  height: '75px',
  mi: '$auto',
  '@bp2': {
    mi: '$0',
    width: '100px',
    height: '100px',
  },
  '@bp3': {
    width: '150px',
    height: '150px',
  },
});

const Avatar = styled(Image, {
  borderRadius: '$5',
});

const CoverContainer = styled('div', {
  position: 'relative',
  flexBasis: '100%',
  height: 300,
});

const Cover = styled(Image, {
  borderRadius: '$1',
});

const Rotate = keyframes({
  '0%': { transform: 'rotate(-45deg)' },
  '100%': { transform: 'rotate(0)' },
  // '100%': { transform: 'rotate(90deg)' },
});

const Wave = styled('div', {
  display: 'inline-block',
  // animation: `${Rotate} 1s alternate infinite`,
  animation: `${Rotate} 1s alternate`,
});

export const Hi = (props: Props) => {
  return (
    <HiSection>
      {/* <CoverContainer>
        <Cover src="/img/mac.jpg" alt="cover" layout="fill" objectFit="cover" />
      </CoverContainer> */}
      <AvatarContainer>
        <Avatar src="/img/Beshoi.jpg" alt="profile-picture" layout="fill" />
      </AvatarContainer>
      <Box>
        <h1>
          Hi, I&#39;m Beshoi Emad <Wave>👋</Wave>
        </h1>
        <h3>Front End Developer</h3>
      </Box>
    </HiSection>
  );
};
