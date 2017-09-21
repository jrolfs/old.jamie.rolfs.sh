// @flow

import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import styles from '../styles/';

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();

    styles();

    return (
      <html lang="en">
        <Head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-106767345-1" />
          <script
            __dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)};
                gtag('js', new Date());

                gtag('config', 'UA-106767345-1');
              `
            }}
          />

          {styleTags}
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
          <div className="root">{main}</div>

          <NextScript />
        </body>
      </html>
    );
  }
}
