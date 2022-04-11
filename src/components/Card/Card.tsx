import React from 'react';
import { Flex } from 'components';
import * as s from './Card.styled';
import { about, experience, contact } from './CardData';

type Props = {
  data: string;
};

export const Card = ({ data }: Props) => {
  return (
    <>
      {data === 'about' && (
        <s.CardsGrid>
          {about.map((item, index) => (
            <s.CardSection key={index}>
              <s.CardParagraph>{item.about}</s.CardParagraph>
            </s.CardSection>
          ))}
        </s.CardsGrid>
      )}

      {data === 'experience' && (
        <s.CardsGrid>
          {experience.map((item) => (
            <s.CardSection key={item.date}>
              <Flex css={{ gap: '$1', flexWrap: 'wrap' }}>
                <s.CardSmall>{item.date}</s.CardSmall>
                <s.CardSmall>/ {item.company}</s.CardSmall>
              </Flex>
              <s.CardHeader>{item.header}</s.CardHeader>
              <s.CardParagraph>{item.info}</s.CardParagraph>
            </s.CardSection>
          ))}
        </s.CardsGrid>
      )}

      {data === 'contact' && (
        <s.CardsGrid css={{ gridGap: '$3' }}>
          {contact.map((item) => (
            <s.CardSection
              key={item.text}
              css={{
                display: 'grid',
                gap: '$1',
                gridTemplateColumns: '35px 1fr',
                alignItems: 'center',
                '& p': {
                  mt: '$0',
                },
                '&> *': {
                  fontSize: '$3',
                },
              }}
            >
              <s.CardParagraph>
                <s.CardIcon icon={item.icon} />
              </s.CardParagraph>
              <a href={item.link}>{item.text}</a>
            </s.CardSection>
          ))}
        </s.CardsGrid>
      )}
    </>
  );
};
