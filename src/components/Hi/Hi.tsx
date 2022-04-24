import { keyframes, styled } from 'stitches.config';
import Image from 'next/image';
import { Box } from '../Utils/Utils';
import { GradientAnimation } from '../ColorfulHeader/ColorfulHeader';

type Props = {};

const HiSection = styled('div', {
  // textAlign: 'center',
  // alignItems: 'center',
  mt: '$3',

  '@bp2': {
    display: 'grid',
    gridTemplateColumns: 'minmax(75px,100px)  max-content',
    textAlign: 'left',
    gap: '$4',
  },

  // '@bp3': {
  //   gridTemplateColumns: '150px 1fr',
  // },

  '& h1, & h2': {
    m: '$0',
  },

  '& h2': {
    backgroundImage: 'linear-gradient(45deg,$crimson9,$blue9)',
    color: 'transparent',
    backgroundClip: 'text',
    '&:hover': {
      '@hover': {
        backgroundSize: '400%',
        animation: `${GradientAnimation} 2s linear infinite alternate`,
      },
    },
  },
});

const AvatarContainer = styled('div', {
  position: 'relative',
  width: '75px',
  height: '75px',
  objectFit: 'cover',
  // mi: '$auto',
  '@bp2': {
    mi: '$0',
    width: '100px',
    height: '100px',
  },
  '@bp6': {
    width: '150px',
    height: '150px',
  },
});

const Avatar = styled(Image, {
  borderRadius: '$5',
});

const Rotate = keyframes({
  '0%': { transform: 'rotate(-45deg)' },
  '100%': { transform: 'rotate(0)' },
});

const Wave = styled('div', {
  display: 'inline-block',
  animation: `${Rotate} 1s alternate`,
});

export const Hi = () => {
  return (
    <HiSection>
      <AvatarContainer>
        <Avatar
          src="/img/Beshoi.jpg"
          alt="profile-picture"
          layout="fill"
          priority
        />
      </AvatarContainer>
      <Box>
        <h1>
          Hi, I&#39;m Beshoi <Wave>👋</Wave>
        </h1>
        <h2>Front End Developer</h2>
      </Box>
    </HiSection>
  );
};
