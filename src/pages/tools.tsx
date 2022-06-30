import React from 'react';
import getPosts from 'scripts/fileSystem';
import { Box, ColorfulHeader, Meta, PostItem } from 'components';
import { BiLink } from 'react-icons/bi';
import { styled } from 'stitches.config';
import { CardsGrid } from 'components/Card/Card.styled';
import { ToolsData } from 'components/Tools/ToolsData';
import { SortedPosts } from './blog';

const ToolsSection = styled('section', {
  display: 'grid',
  gridGap: '$7',
});

const Lists = styled('div', {
  display: 'grid',
  gridGap: '$4',
  mt: '$4',
});

const List = styled('ul', {
  listStyle: 'none',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(200px,400px))',
  gap: '$2',
});

const ListHeader = styled('h3', { m: '$0' });

const ListItem = styled('li', {
  display: 'grid',
  gridTemplateColumns: '25px 1fr',
  alignItems: 'center',
  gridGap: '$2',
  fontSize: '$2',
});

const Link = styled('a', {
  textDecoration: 'underline',
});

const Tools = ({ SortedPosts }: SortedPosts) => {
  return (
    <>
      <Meta title="Tools - Beshoi Emad" description="My tools" />
      <ToolsSection aria-labelledby="tools">
        {/* <Box>
        <ColorfulHeader header="Tools" emoji="⛏" />
        <CardsGrid>
        {SortedPosts.map(
            (post) =>
            post.data.tag === 'tools' && (
              <PostItem key={post.slug} post={post} />
              )
          )}
        </CardsGrid>
      </Box> */}

        <Box>
          <ColorfulHeader header="My Tools" emoji="📐" id="tools" />
          <Lists>
            {ToolsData.map((item, index: number) => (
              <Box key={index} aria-labelledby={item.title}>
                <ListHeader id={item.title}>{item.title}</ListHeader>
                <List css={{ mt: '$2' }}>
                  {item.list.map((tool: { name: string; link: string }) => (
                    <ListItem key={tool.name}>
                      <BiLink color="var(--colors-crimson9)" />
                      <Link href={tool.link}>{tool.name}</Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Lists>
        </Box>
      </ToolsSection>
    </>
  );
};

export default Tools;

export const getStaticProps = () => {
  const posts = getPosts();

  const SortedPosts = posts.sort((a, b) =>
    new Date(a?.data.date) < new Date(b?.data.date) ? 1 : -1
  );

  return {
    props: {
      SortedPosts,
    },
  };
};
