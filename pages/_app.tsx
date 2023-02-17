import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from "next/head";
import { Fragment } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Create Next</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="/styles/globals.css" />
      </Head>
      <Component {...pageProps} />;
    </Fragment>
  );
}
