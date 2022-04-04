import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Card, ColorfulHeader, Hi, PostItem } from 'components';
import getPosts from '../scripts/fileSystem';
import { styled } from 'stitches.config';
import { CardsGrid } from '../components/Card/Card.styled';

export const HomeSection = styled('section', {
  display: 'grid',
  gridGap: '$3',
  mt: '$4',
  '& h1': {
    mb: '$0',
  },
});

const Home: NextPage = ({ posts }: any) => {
  return (
    <>
      <HomeSection aria-labelledby="home">

      <Head>
        <title>Beshoi &#39;s Site</title>
        <meta name="description" content="My personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hi />

        <Box css={{mt:'$4'}}>
          <ColorfulHeader header="About Me" emoji="💻" />
          <CardsGrid>
            <Card
              info="I am a Web Designer and Front End Developer based in Cairo, Egypt. I am working in the web / 
            IT industry from last 4 years. Currently I am holding a position of Front End Developer in 
            Blueprint. I have extensively worked on Designing and Coding various User Interfaces and 
            Prototypes."
            />
          </CardsGrid>
        </Box>
        <Box>
          <ColorfulHeader header="Experience" emoji="🤵" />
          <CardsGrid>
            <Card
              date="January 18, 2020 - 2021"
              company="Business Square"
              header="Front End Developer"
              info="Producing, maintaining and modifying websites and user interfaces. Ensuring websites are 
        accessible across many platforms, including laptops and smartphones. Fixing any website 
        issues or bugs that arise."
            />
            <Card
              date="January 18, 2021 - now"
              company="Blueprint"
              header="Front End Developer"
              info="Developing and maintaining the front-end functionality of websites, participating in 
        discussions with clients to clarify what they want, developing websites that have a consistent 
        feel and look throughout all web properties, providing technical support to end users."
            />
          </CardsGrid>
        </Box>

        <Box>
          <ColorfulHeader header="Latest Posts" emoji="📚" />
          <CardsGrid>
            {posts.map((post: any) => (
              <PostItem key={post.slug} post={post} />
            ))}
          </CardsGrid>
        </Box>
      </HomeSection>
    </>
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
