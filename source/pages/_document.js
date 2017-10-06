// @flow

import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

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

          { /* eslint-disable */ }
          <script dangerouslySetInnerHTML={{ __html: `
            !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";
              analytics.load("MIG6odzGDzdpFg6QdK6yPIJ1pjqjLy9x");
              analytics.page();
            }}();
          ` }} />
          { /* eslint-disable */ }

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
