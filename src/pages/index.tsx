import type { NextPage } from 'next';
import Head from 'next/head';
import { PostItem } from '../components';
import getPosts from '../scripts/fileSystem';
import { styled } from '../stitches.config';

const CardsGrid = styled('div', {
  display: 'grid',
  gridGap: '$3',
});

const Home: NextPage = ({ posts }: any) => {
  return (
    <div>
      <Head>
        <title>Beshoi &#39;s Site</title>
        <meta name="description" content="My personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Latest Posts</h1>
      <CardsGrid>
        {posts.map((post: any) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </CardsGrid>
    </div>
  );
};

export default Home;

export const getStaticProps = () => {
  const posts = getPosts(3);

  return {
    props: {
      posts,
    },
  };
};
