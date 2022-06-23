import React from 'react';
import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
};

export const CoverImage = (props: Props) => {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      width="900"
      height="400"
      layout="responsive"
      objectFit="cover"
      priority
    />
  );
};

export const RegularImage = (props: Props) => {
  return <Image src={props.src} alt={props.alt} width="900" height="200" />;
};
