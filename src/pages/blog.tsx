import React from 'react';
import getPosts from '../scripts/fileSystem';
import { PostItem, Meta, ColorfulHeader } from 'components';
import { CardsGrid } from '../components/Card/Card.styled';

type Props = {
  posts: any;
};

const Blog = ({ posts }: Props) => {
  return (
    <>
      <Meta title="Blog"/>
      <ColorfulHeader header="All Posts" emoji="📚" />
      <CardsGrid>
        {posts.map((post: any) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </CardsGrid>
    </>
  );
};

export default Blog;

export const getStaticProps = () => {
  const posts = getPosts(false);

  return {
    props: {
      posts,
    },
  };
};
