import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import getPosts from '../scripts/fileSystem';
import { ColorfulHeader, Hi, PostItem } from 'components';
import { styled } from 'stitches.config';
import { CardsGrid } from '../components/Card/Card.styled';

type Props = {
  posts: [];
};

const HomeSection = styled('section', {
  display: 'grid',
  gridGap: '$4',
  '& h1': {
    mb: '$0',
  },
});

const Box = styled('div', {
  mt: '$4',
});

const SeeMore = styled('p', {
  ml: '$2',
  fontWeight: '$3',
  '&:hover': {
    '@hover': {
      textDecoration: 'underline',
    },
  },
});

const Home: NextPage<Props> = ({ posts }) => {
  const Posts = posts.slice().map((obj: any) => {
    return { ...obj, date: new Date(obj.data.date) };
  });

  const sortedPosts = Posts.sort(
    (a: { date: string }, b: { date: string }) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 3);

  return (
    <>
      <HomeSection aria-labelledby="home">
        <Head>
          <title>Beshoi &#39;s Site</title>
          <meta name="description" content="My personal site" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Hi />

        <Box>
          <ColorfulHeader header="Latest Posts" emoji="📚" />
          <CardsGrid>
            {sortedPosts.map((post) => (
              <PostItem key={post.slug} post={post} />
            ))}
          </CardsGrid>
          <SeeMore>
            <Link href="/blog">See More Posts &#8599;</Link>
          </SeeMore>
        </Box>
      </HomeSection>
    </>
  );
};

export default Home;

export const getStaticProps = () => {
  const posts = getPosts(false);

  return {
    props: {
      posts,
    },
  };
};
