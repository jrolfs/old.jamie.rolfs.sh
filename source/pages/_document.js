// @flow

import 'babel-polyfill';

import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import Favicon from '../components/Favicon';
import Analytics from '../components/Analytics';

import { injectGlobalStyles } from '../styles/';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    injectGlobalStyles();

    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>jamie.rolfs</title>

          {this.props.styleTags}

          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />

          <Favicon />

          {process.env.NODE_ENV === 'production' && <Analytics />}

          <meta name="theme-color" content="#ffffff" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
