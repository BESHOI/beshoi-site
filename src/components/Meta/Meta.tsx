import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

type Props = {
  title: string;
  description: string;
};

export const Meta = ({ title, description }: Props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta name="keywords" content={MetaInfo.content} />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
      </Head>

      <NextSeo
        title={title ? title : MetaInfo.title}
        description={description ? description : MetaInfo.content}
        canonical={`https://beshoi.dev${router.asPath}/`}
        openGraph={{
          title: title ? title : MetaInfo.title,
          description: description ? description : MetaInfo.content,
          url: `https://beshoi.dev${router.asPath}/`,
          images: [
            {
              url: 'https://www.beshoi.dev/imgs/beshoi.jpg',
              width: 400,
              height: 400,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
          locale: MetaInfo.locale,
          site_name: MetaInfo.site_name,
        }}
        twitter={{
          handle: '@beshoi_emad',
          site: '@beshoi_emad',
          cardType: 'summary_large_image',
        }}
      />
    </>
  );
};

const MetaInfo = {
  site_name: "Beshoi's site",
  title: 'Beshoi Emad - Front End Developer',
  content:
    'html, css, flex, grid, js, react, blog, tools, extensions, terminal, commandline, bash, zsh, powershell, linux, arch, i3wm, package manager, vim, neovim, tutorials, tips, tricks, Beshoi Emad',
  locale: 'en',
};
