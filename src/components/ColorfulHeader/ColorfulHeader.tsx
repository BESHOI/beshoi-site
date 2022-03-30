import React, { useEffect, useState } from 'react';
import { Flex } from 'components';
import { styled } from 'stitches.config';

type Props = {
  header: string;
  emoji: string;
};

const Header = styled('h1', {
  color: 'transparent',
  backgroundClip: 'text',
  m: '$0',
  lineHeight: '1',
  backgroundImage: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
});

const Emoji = styled('h2', {
  lineHeight: '1',
  letterSpacing: '-25px',
});

const Colorful = () => {
  const Names = [
    '$indigo',
    '$crimson',
    '$blue',
    '$tomato',
    '$red',
    '$violet',
    '$orange',
    '$cyan',
    '$yellow',
    '$lime',
    '$pink',
    '$slate',
  ];
  const RandomNumber = () => Math.floor(Math.random() * 7 + 4);
  const Colors = Names.map((color) => color + RandomNumber());
  const RandomColor = Colors[RandomNumber()];
  return RandomColor;
};

export const ColorfulHeader = ({ header, emoji }: Props) => {
  const [firstcolor, setFirstcolor] = useState('$blue5');
  const [secondColor, setSecondcolor] = useState('$crimson8');
  useEffect(() => {
    setFirstcolor(Colorful());
    setSecondcolor(Colorful());
  }, []);

  return (
    <Flex css={{ alignItems: 'center', gap: '$1' }}>
      <Header
        css={{
          backgroundImage: `linear-gradient(45deg,${firstcolor}, ${secondColor} )`,
        }}
      >
        {header}
      </Header>
      <Emoji>{emoji}</Emoji>
    </Flex>
  );
};
