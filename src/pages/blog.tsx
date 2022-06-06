import React from 'react';
import getPosts from 'scripts/fileSystem';
import { PostItem, Meta, ColorfulHeader } from 'components';
import { CardsGrid } from 'components/Card/Card.styled';

export type SortedPosts = {
  SortedPosts: [
    post: {
      date: Date;
      slug: string;
      data: {
        date: string;
        tag: string;
        title: string;
        excerpt: string;
        img: string;
      };
    }
  ];
};

const Blog = ({ SortedPosts }: SortedPosts) => {
  const BlogPosts = SortedPosts.filter((post) => post.data.tag !== 'tools');

  return (
    <>
      <Meta title="Blog" />
      <ColorfulHeader header="All Posts" emoji="📚" />
      <CardsGrid>
        {BlogPosts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </CardsGrid>
    </>
  );
};

export default Blog;

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
