import React from 'react';
import Link from 'next/link';
import { navItems } from './NavItems';
import { NavLink } from './NavLink';

type Props = {};

export const Header = (props: Props) => {
  return (
    <header>
      <nav>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none',padding:0 }}>
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink exact href={item.link}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
