import React from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ThemeProvider } from 'styled-components';
import { SWRConfig } from 'swr';
import theme from '@styles/theme';
import { AppProps } from 'next/app';
import Layout from 'container/Layout';
import GlobalStyles from '@styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        // revalidateOnFocus: isDesktop ? false : true,
        // revalidateOnMount: true,
        errorRetryCount: 3,
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SWRConfig>
  );
}

export default MyApp;

if (process.env.NODE_ENV === 'production') console.log = function no_console() {};
