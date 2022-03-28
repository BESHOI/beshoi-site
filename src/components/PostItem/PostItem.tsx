import React from 'react';
import Link from 'next/link';
import { styled } from '../../stitches.config';
import Image from 'next/image';
import { Box } from '../Utils/Utils';

type Props = {
  post: any;
  // title: string;
  // slug: string;
  // img: string;
  // excerpt: string;
};

const Card = styled('div', {
  display: 'grid',
  alignItems: 'center',
  maxWidth: '700px',
  mi: '$auto',
  borderRadius: '$3',
  '@bp2': {
    gridTemplateColumns: '3fr 1fr',
    // gridTemplateRows: '300px',
    py: '$2',
    px: '$3',
  },
  '& h3 , & p': {
    mb: '$0',
  },
});

const CardText = styled('div', {
  maxWidth: '55ch',
  py: '$3',
  px: '$3',
});

const CardHeader = styled('h3', {
  mb: '$0',
  mt: '$1',
});

const CardExcerpt = styled('p', {
  mb: '$0',
});

const CardDate = styled('p', {
  mt: '$0',
});

const CardImageContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '200px',
  // maxHeight: '300px',
});

const CardImage = styled(Image, {
  width: '100%',
  cursor: 'pointer',
  borderBottomRightRadius: '$2',
  borderBottomLeftRadius: '$2',
  '@bp1': {
    borderRadius: '$2',
  },
});

export const PostItem = ({ post }: Props) => {
  const { title, excerpt, img, date, color } = post.data;
  return (
    <Card css={{ backgroundColor: color }}>
      <CardText>
        <CardDate>{date}</CardDate>
        <CardHeader>
          <Link href={`/blog/posts/${post.slug}`}>{title}</Link>
        </CardHeader>
        <CardExcerpt>{excerpt}</CardExcerpt>
      </CardText>
      <CardImageContainer>
        <Link href={`/blog/posts/${post.slug}`} passHref>
          <CardImage
            src={`/img/${img}`}
            alt={title}
            layout="fill"
            objectFit="cover"
            quality={50}
          />
        </Link>
      </CardImageContainer>
    </Card>
  );
};
