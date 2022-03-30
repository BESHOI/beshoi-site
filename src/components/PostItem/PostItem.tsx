import React from 'react';
import Link from 'next/link';
import * as s from '../Card/Card.styled';
import { Box} from 'components';

type Props = {
  post: any;
  // title: string;
  // slug: string;
  // img: string;
  // excerpt: string;
};

export const PostItem = ({ post }: Props) => {
  const { title, excerpt, img, date } = post.data;
  return (
    <Box
      css={{
        '&:nth-child(3n - 2)': {
          backgroundColor: '$blue2',
          '@light': { backgroundColor: '$blue4' },
        },
        '&:nth-child(3n - 1)': {
          backgroundColor: '$crimson2',
          '@light': { backgroundColor: '$crimson4' },
        },
        '&:nth-child(3n)': {
          backgroundColor: '$cyan2',
          '@light': { backgroundColor: '$cyan4' },
        },
      }}
    >
      <s.Card>
        <s.CardText>
          <s.CardSmall>{date}</s.CardSmall>
          <s.CardHeader>
            <Link href={`/blog/posts/${post.slug}`}>{title}</Link>
          </s.CardHeader>
          <s.CardParagraph>{excerpt}</s.CardParagraph>
        </s.CardText>
        <s.CardImageContainer>
          <Link href={`/blog/posts/${post.slug}`} passHref>
            <s.CardImage
              src={`/img/posts/${img}`}
              alt={title}
              layout="fill"
              objectFit="cover"
              quality={50}
            />
          </Link>
        </s.CardImageContainer>
      </s.Card>
    </Box>
  );
};
