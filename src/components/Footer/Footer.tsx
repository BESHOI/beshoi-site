import React from 'react';
import { styled } from 'stitches.config';

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
        Made with{' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 15 15"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M0 7.5a7.5 7.5 0 1 1 11.697 6.216L4.907 4.21A.5.5 0 0 0 4 4.5V12h1V6.06l5.83 8.162A7.5 7.5 0 0 1 0 7.5ZM10 10V4h1v6h-1Z"
            clipRule="evenodd"
          />
        </svg>{' '}
        &
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 15 15"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M1.85 7.5c0-.287.021-.569.063-.844l7.65-4.417c.3.117.587.26.859.424L3.77 6.503a.447.447 0 0 0-.234.374a.447.447 0 0 0 .196.394l3.592 2.567l-3.453 1.994A5.638 5.638 0 0 1 1.85 7.5Zm6.518 2.775a.42.42 0 0 0 .025-.014l1.448-.836a.448.448 0 0 0 .018-.01l1.451-.838a.45.45 0 0 0 .052-.756L7.828 5.2l3.388-1.957a5.637 5.637 0 0 1 1.849 5.24L5.569 12.81a5.623 5.623 0 0 1-.882-.41l3.681-2.126Zm-.187-.931L4.817 6.939l.692-.4l3.297 2.444l-.625.36ZM6.36 6.048l.62-.357l3.296 2.444l-.62.358L6.36 6.048Zm1.973-4.137l-6.09 3.515a5.652 5.652 0 0 1 6.09-3.515ZM6.847 13.113a5.652 5.652 0 0 0 5.842-3.373l-5.842 3.373ZM7.5.85a6.65 6.65 0 1 0 0 13.3a6.65 6.65 0 0 0 0-13.3Z"
            clipRule="evenodd"
          />
        </svg>{' '}
        hosted on
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="m12 1l12 21H0L12 1Z" />
        </svg>
      </FooterMadeWith>
    </FooterSection>
  );
};
