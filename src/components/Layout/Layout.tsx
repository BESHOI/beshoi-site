import React from 'react';
import { Header, Footer } from '..';

type Props = {};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
