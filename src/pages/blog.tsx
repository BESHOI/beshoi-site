import React from 'react';
import getPosts from '../scripts/fileSystem';
import { PostItem } from '../components';
import { Meta } from '../components/';

type Props = {
  posts: any;
};

const Blog = ({ posts }: Props) => {
  return (
    <>
      <Meta title="Blog posts - PressBlog" />
      <h1>All Posts</h1>
      {posts.map((post: any) => (
        <PostItem key={post.slug} post={post} />
      ))}
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
