// @flow

import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import styles from '../styles/';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    styles();

    return (
      <html lang="en">
        <Head>
          <title>jamie.rolfs</title>

          {this.props.styleTags}

          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://f001.backblazeb2.com/file/favicon/apple-touch-icon.png?v=2bQWoe5z5r"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://f001.backblazeb2.com/file/favicon/favicon-32x32.png?v=2bQWoe5z5r"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://f001.backblazeb2.com/file/favicon/favicon-16x16.png?v=2bQWoe5z5r"
          />
          <link
            rel="manifest"
            href="https://f001.backblazeb2.com/file/favicon/manifest.json?v=2bQWoe5z5r"
          />
          <link
            rel="mask-icon"
            href="https://f001.backblazeb2.com/file/favicon/safari-pinned-tab.svg?v=2bQWoe5z5r"
            color="#5bbad5"
          />
          <link
            rel="shortcut icon"
            href="https://f001.backblazeb2.com/file/favicon/favicon.ico?v=2bQWoe5z5r"
          />
          <meta
            name="msapplication-config"
            content="https://f001.backblazeb2.com/file/favicon/browserconfig.xml?v=2bQWoe5z5r"
          />
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
