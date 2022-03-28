import type { AppProps } from 'next/app';
import { globalStyles } from '../global';
import { ThemeProvider } from 'next-themes';
import { darkTheme } from '../stitches.config';
import { Layout } from '../components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        value={{
          dark: darkTheme.className,
          light: 'light',
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
