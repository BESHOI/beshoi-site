import React from 'react';
import getPosts from 'scripts/fileSystem';
import { Box, ColorfulHeader, PostItem } from 'components';
import { Icon } from '@iconify/react';
import { styled } from 'stitches.config';
import { CardsGrid } from '../components/Card/Card.styled';
import { ToolsData, Categories } from '../components/Tools/ToolsData';
// import Image from 'next/image';

type Props = {
  posts: [
    post: {
      slug: string;
      data: {
        date: string;
        title: string;
        excerpt: string;
        img: string;
        tag: string;
      };
    }
  ];
};

type Tool = {
  title: string;
  list: {
    name: string;
    icon: string;
    link: string;
    category: string;
  };
};

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

// const ImageContainer = styled('div', {
//   position: 'relative',
//   width: '25px',
//   height: '25px',
// });

const Tools = ({ posts }: Props) => {
  const Title = ToolsData.filter((item: any) =>
    item.title === Categories.map((i) => i) ? item.title : null
  );

  console.log(Title);

  return (
    <>
      <ToolsSection aria-labelledby="tools">
        <Box>
          <ColorfulHeader header="Tools" emoji="📐" />

          <CardsGrid>
            {posts.map(
              (post) =>
                post.data.tag === 'tools' && (
                  <PostItem key={post.slug} post={post} />
                )
            )}
          </CardsGrid>
        </Box>

        <Box>
          <ColorfulHeader header="My Tools" emoji="📐" />
          <Lists>
            <Box>
              {ToolsData.map((item: any, index: number) => (
                <Box key={index}>
                  <ListHeader>{Title}</ListHeader>
                  {item.list.map((tool: any) => (
                    <>
                      <List css={{ mt: '$2' }} key={tool.name}>
                        <ListItem>
                          <Icon icon={tool.icon} color="var(--colors-red9)" />
                          <Link href={tool.link}>{tool.name}</Link>
                        </ListItem>
                      </List>
                    </>
                  ))}
                </Box>
              ))}
            </Box>
          </Lists>
        </Box>
      </ToolsSection>
    </>
  );
};

export default Tools;

export const getStaticProps = () => {
  const posts = getPosts(false);

  return {
    props: {
      posts,
    },
  };
};
