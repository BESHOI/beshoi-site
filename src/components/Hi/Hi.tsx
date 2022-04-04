import { keyframes, styled } from '../../stitches.config';
import Image from 'next/image';
import { Box } from '../Utils/Utils';
// import { GradientAnimation } from '../ColorfulHeader/ColorfulHeader';

type Props = {};

const HiSection = styled('div', {
  textAlign: 'center',
  alignItems: 'center',
  '@bp2': {
    display: 'flex',
    gap: '$4',
    textAlign: 'left',
  },

  '& h1, & h2': {
    m: '$0',
  },

  '& h2': {
    backgroundImage: 'linear-gradient(45deg,$crimson9,$blue9)',
    color: 'transparent',
    backgroundClip: 'text',
    // backgroundSize: '400%',
    // backgroundPosition: 'left',
    // animation: `${GradientAnimation} 3s linear infinite alternate`,
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

// const CoverContainer = styled('div', {
//   position: 'relative',
//   flexBasis: '100%',
//   height: 300,
// });

// const Cover = styled(Image, {
//   borderRadius: '$1',
// });

const Rotate = keyframes({
  '0%': { transform: 'rotate(-45deg)' },
  '100%': { transform: 'rotate(0)' },
});

const Wave = styled('div', {
  display: 'inline-block',
  animation: `${Rotate} 1s alternate`,
});

export const Hi = (props: Props) => {
  return (
    <HiSection>
      {/* <CoverContainer>
        <Cover src="/img/mac.jpg" alt="cover" layout="fill" objectFit="cover" />
      </CoverContainer> */}
      <AvatarContainer>
        <Avatar
          src="/img/Beshoi.jpg"
          alt="profile-picture"
          layout="fill"
          priority={true}
        />
      </AvatarContainer>
      <Box>
        <h1>
          Hi, I&#39;m Beshoi Emad <Wave>👋</Wave>
        </h1>
        <h2>Front End Developer</h2>
      </Box>
    </HiSection>
  );
};
