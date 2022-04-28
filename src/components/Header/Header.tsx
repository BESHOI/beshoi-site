import React from 'react';
import Image from 'next/image';
import { navItems } from './NavItems';
import { NavLink } from './NavLink';
import { styled } from 'stitches.config';
import { Flex } from 'components';

type Props = {};

const NavList = styled('ul', {
  p: '$0',
  listStyle: 'none',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
});

const NavItem = styled('li', {
  fontSize: '$2',
  '& img': {
    borderRadius: '100%',
  },
});

const NavImage = styled('div', {
  // position: 'relative',
  // width: '50px',
  // height: '50px',
});

export const Header = (props: Props) => {
  return (
    <header>
      <nav>
        <NavList>
          <NavItem>
            <NavLink exact href="/">
              <>
                <Image
                  src="/img/Beshoi.jpg"
                  alt="profile-picture"
                  // layout="fill"
                  layout="fixed"
                  width="50px"
                  height="50px"
                  priority
                />
              </>
            </NavLink>
          </NavItem>
          <Flex css={{ flexWrap: 'wrap', gap: '$5', ml: '$auto' }}>
            {navItems.map((item) => (
              <NavItem key={item.name}>
                <NavLink exact href={item.link}>
                  {item.name}
                </NavLink>
              </NavItem>
            ))}
          </Flex>
        </NavList>
      </nav>
    </header>
  );
};
