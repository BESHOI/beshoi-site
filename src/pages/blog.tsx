import React from 'react';
import getPosts from '../scripts/fileSystem';
import { PostItem, Meta, ColorfulHeader } from 'components';
import { CardsGrid } from '../components/Card/Card.styled';

type Props = {
  posts: [];
};

type post = {
  date: Date;
  slug: string;
  data: {
    date: string;
    tag: string;
    title: string;
    excerpt: string;
    img: string;
  };
};

const Blog = ({ posts }: Props) => {
  const Posts = posts.slice().map((obj: post) => {
    return { ...obj, date: new Date(obj.data.date) };
  });

  const sortedPosts = Posts.sort(
    (a: { date: Date }, b: { date: Date }) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  ).filter((post) => post.data.tag !== 'tools');

  return (
    <>
      <Meta title="Blog" />
      <ColorfulHeader header="All Posts" emoji="📚" />
      <CardsGrid>
        {sortedPosts.map((post: post) => (
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
