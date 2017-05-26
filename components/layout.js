// @flow

import React from 'react';
import Head from 'next/head';

import stylesheet from '../styles/index.scss';

export default ({ children, title = 'jamie.rolfs' }: { title?: String }) => (
  <div>
    <Head>
      <title>{title}</title>{
        // eslint-disable-next-line react/no-danger
      }<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    {children}

    <footer />
  </div>
);
