import React from 'react';
import { Flex} from 'components';
import * as s from './Card.styled';

type Props = {
  date?: string;
  company?: string;
  header?: string;
  info: string;
  color: string;
};

export const Card = ({ date, company, header, info, color }: Props) => {
  return (
    <s.CardSection
      css={{
        backgroundColor: `${color}2`,
        '@light': { backgroundColor: `${color}4` },
      }}
    >
      <Flex css={{ gap: '$1' }}>
        {date && <s.CardSmall>{date}</s.CardSmall>}
        {company && <s.CardSmall>/ {company}</s.CardSmall>}
      </Flex>
      <s.CardHeader>{header}</s.CardHeader>
      <s.CardParagraph >{info}</s.CardParagraph>
    </s.CardSection>
  );
};
