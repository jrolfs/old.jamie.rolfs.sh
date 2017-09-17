// @flow

import * as React from 'react';
import Head from 'next/head';

import stylesheet from '../styles/index.css';

type Props = {
  children: React.Node,
  title?: string
}

const Layout = ({ children, title }: Props) => (
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

Layout.defaultProps = {
  title: 'jamie.rolfs'
};

export default Layout;
