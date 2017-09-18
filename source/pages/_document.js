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
          {styleTags}
        </Head>

        <body>
          <div className="root">{main}</div>

          <NextScript />
        </body>
      </html>
    );
  }
}
