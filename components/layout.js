// @flow

import React, { Element } from 'react';
import Head from 'next/head';

import stylesheet from '../styles/index.css';

export default ({
  children,
  title = 'jamie.rolfs'
}: {
  children: Element<any>,
  title?: string
}) => (
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
