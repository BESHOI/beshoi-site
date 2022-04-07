import React from 'react';
import { Card, ColorfulHeader } from 'components';

type Props = {};

const Contact = (props: Props) => {
  return (
    <>
      <ColorfulHeader header="Contac Me" emoji="✨" />
      <Card data="contact" />
    </>
  );
};

export default Contact;
