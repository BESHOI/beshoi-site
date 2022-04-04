import React from 'react';
import Link from 'next/link';
import * as s from '../Card/Card.styled';

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
            quality={15}
            priority={true}
          />
        </Link>
      </s.CardImageContainer>
    </s.Card>
  );
};
