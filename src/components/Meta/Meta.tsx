import React from 'react';
import Head from 'next/head';

type Props = {
  title: string;
  content: string;
};

export const Meta = ({ title, content }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={content} />
    </Head>
  );
};

Meta.defaultProps = {
  title: 'BeshoiBlog - Your one stop blog for everything React',
  content:
    'html, css, react, tools, blog, Beshoi Emad, tutorial, tips, tricks, tips && tricks',
};
