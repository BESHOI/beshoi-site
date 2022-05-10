import React from 'react';
import { styled } from 'stitches.config';
import { Icon } from '@iconify/react';

type Props = {};

const FooterSection = styled('footer', { mt: '$2' });

const FooterReachMe = styled('p', {
  mt: '$2',
  mb: '$0',
});

const Link = styled('a', {
  textDecoration: 'underline',
  fontWeight: '$3',
});

const FooterMadeWith = styled('p', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  flexWrap: 'wrap',
  mt: '$1',
  mb: '$2',
});

export const Footer = (props: Props) => {
  return (
    <FooterSection>
      <FooterReachMe>
        Reach me at <Link href="mailto:beshoiemad16@gmail.com">Email</Link>,{' '}
        <Link href="//github.com/Beshoi">Github</Link>,{' '}
        <Link href="//twitter.com/beshoi_emad">Twitter</Link>,{' '}
        <Link href="//linkedin.com/in/beshoi-emad">Linkedin</Link>{' '}
      </FooterReachMe>

      <FooterMadeWith>
        Made with <Icon icon="simple-icons:nextdotjs" />&
        <Icon icon="radix-icons:stitches-logo" /> hosted on
        <Icon icon="simple-icons:vercel" />
      </FooterMadeWith>
    </FooterSection>
  );
};
