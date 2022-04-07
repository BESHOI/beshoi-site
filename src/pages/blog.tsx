import React from 'react';
import getPosts from '../scripts/fileSystem';
import { PostItem, Meta, ColorfulHeader } from 'components';
import { CardsGrid } from '../components/Card/Card.styled';

type Props = {
  posts: [];
};

const Blog = ({ posts }: Props) => {
  const Posts = posts.slice().map((obj: any) => {
    return { ...obj, date: new Date(obj.data.date) };
  });

  const sortedPosts = Posts.sort(
    (a: { date: string }, b: { date: string }) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Meta title="Blog" />
      <ColorfulHeader header="All Posts" emoji="📚" />
      <CardsGrid>
        {sortedPosts.map((post) => (
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
