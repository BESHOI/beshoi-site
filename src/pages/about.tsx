import React from 'react';
import { Box, Card, ColorfulHeader, Grid } from 'components';

type Props = {};

const About = (props: Props) => {
  return (
    <Grid css={{ mt: '$4', gap: '$7' }}>
      <Box>
        <ColorfulHeader header="About Me" emoji="💻" />
        <Card data="about" />
      </Box>

      <Box>
        <ColorfulHeader header="Experience" emoji="🤵" />
        <Card data="experience" />
      </Box>

      {/* <ColorfulHeader header="Reach Me" emoji="✨" /> */}
      {/* <Card data="contact" /> */}
    </Grid>
  );
};

export default About;
