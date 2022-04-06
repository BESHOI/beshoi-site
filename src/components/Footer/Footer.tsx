import React from 'react';
import { styled } from 'stitches.config';

type Props = {};

const FooterSection = styled('footer', {
  alignSelf: 'center',
  mt: '$9',
});

export const Footer = (props: Props) => {
  return (
    <FooterSection>
      <p>Made with Nextjs, Stitches 🎉 && hosted on vercel ❤</p>
    </FooterSection>
  );
};
