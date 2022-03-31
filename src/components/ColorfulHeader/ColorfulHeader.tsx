import React, { useEffect, useState } from 'react';
import { Flex } from 'components';
import { styled } from 'stitches.config';

type Props = {
  header: string;
  emoji: string;
  css?: object;
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
});

const Colorful = () => {
  const ColorsList = [
    '$indigo',
    '$grass',
    '$blue',
    '$red',
    '$orange',
    '$violet',
    '$yellow',
    '$pink',
    '$cyan',
    '$green',
    '$bronze',
    '$plum',
    '$teal',
    '$sky',
    '$lime',
    '$crimson',
    '$brown',
    '$purple',
    '$tomato',
    '$amber',
    '$gold',
    '$slate',
  ];

  const AnglesList = [45, 90, 135, 180, 225, 270, 315, 360];
  const RandomAngle = Math.floor(Math.random() * (AnglesList.length - 1));
  const Angle = AnglesList[RandomAngle] + 'deg';

  const RandomNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  const RandomValue = () => Math.floor(Math.random() * (ColorsList.length - 1));
  const Colors = ColorsList.map((color) => color + RandomNumber(7, 12));
  const RandomColor = Colors[RandomValue()];

  return { RandomColor, Angle };
};

export const ColorfulHeader = ({ header, emoji, css }: Props) => {
  const [firstcolor, setFirstcolor] = useState('$blue5');
  const [secondColor, setSecondcolor] = useState('$crimson8');
  const [angle, setAngle] = useState('45deg');
  useEffect(() => {
    setFirstcolor(Colorful().RandomColor);
    setSecondcolor(Colorful().RandomColor);
    setAngle(Colorful().Angle);
  }, []);

  return (
    <Flex css={{ alignItems: 'center', gap: '$1' }}>
      <Header
        css={{
          backgroundImage: `linear-gradient(${angle},${firstcolor}, ${secondColor} )`,
        }}
      >
        {header}
      </Header>
      <Emoji css={{ ...css }}>{emoji}</Emoji>
    </Flex>
  );
};
