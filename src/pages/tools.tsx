import React from 'react';
import { Box, ColorfulHeader } from 'components';
import { Icon } from '@iconify/react';
import { styled } from 'stitches.config';
import Image from 'next/image';

type Props = {};

const Lists = styled('div', {
  display: 'grid',
  gridGap: '$4',
  mt: '$4',
});

const List = styled('ul', {
  listStyle: 'none',
});

const ListHeader = styled('h3', { m: '$0' });

const ListItem = styled('li', {
  display: 'flex',
  gap: '$2',
  alignItems: 'cneter',
  lineHeight: '1.5',
  alignContent: 'center',
  fontSize: '$4',
});

const Link = styled('a', {
  textDecoration: 'underline',
});

// const ImageContainer = styled('div', {
//   position: 'relative',
//   width: '25px',
//   height: '25px',
// });

const Tools = (props: Props) => {
  return (
    <>
      {/* <ColorfulHeader
        header="Tools"
        emoji="📐📏"
        css={{ letterSpacing: '-25px' }}
      /> */}
      <ColorfulHeader header="My Tools" emoji="📐" />

      <Lists>
        <Box>
          <ListHeader>Browsing</ListHeader>
          <List css={{ mt: '$2' }}>
            <ListItem>
              <Icon icon="simple-icons:firefox" color="var(--colors-red9)" />
              <Link href="#">Firefox</Link>
            </ListItem>
            <ListItem>
              <Icon
                icon="simple-icons:googlechrome"
                color="var(--colors-red9)"
              />
              <Link href="#">Google Chrome</Link>
            </ListItem>
            <ListItem>
              <Icon
                icon="simple-icons:ublockorigin"
                color="var(--colors-red9)"
              />
              <Link href="#">Ublock origin</Link>
            </ListItem>
            <ListItem>
              <Icon icon="simple-icons:bitwarden" color="var(--colors-red9)" />
              <Link href="#">Bitwarden</Link>
            </ListItem>
            <ListItem>
              <Icon icon="simple-icons:darkreader" color="var(--colors-red9)" />
              <Link href="#">Dark Reader</Link>
            </ListItem>
            <ListItem>
              <Icon
                icon="fluent:cookies-20-filled"
                color="var(--colors-red9)"
              />
              <Link href="#">I don&#39;t care cookies</Link>
            </ListItem>
          </List>
        </Box>

        <Box>
          <ListHeader>Development </ListHeader>
          <List css={{ mt: '$2' }}>
            <ListItem>
              <Icon
                icon="simple-icons:visualstudiocode"
                color="var(--colors-cyan9)"
              />
              <Link href="#">Vscode</Link>
            </ListItem>
            <ListItem>
              <Icon icon="clarity:plugin-solid" color="var(--colors-cyan9)" />
              <Link href="https://marketplace.visualstudio.com/items?itemName=akamud.vscode-theme-onedark">
                Atom one Dark Theme
              </Link>
            </ListItem>
            <ListItem>
              <Icon icon="clarity:plugin-solid" color="var(--colors-cyan9)" />
              <Link href="https://marketplace.visualstudio.com/items?itemName=wart.ariake-dark">
                Ariake Dark
              </Link>
            </ListItem>
          </List>
        </Box>

      </Lists>
    </>
  );
};

export default Tools;
