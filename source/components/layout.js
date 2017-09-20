// @flow

import * as React from 'react';
import Head from 'next/head';

type Props = {
  children: React.Node,
  title?: string,
  className?: string
};

const Layout = ({ children, title, className }: Props) => (
  <div className={className}>
    <Head>
      <title>{title}</title>

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
