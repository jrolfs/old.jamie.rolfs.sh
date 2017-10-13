const root = 'https://f001.backblazeb2.com/file/favicon/';
const version = '2bQWoe5z5r';

const Proxy = props => props.children;

const Favicon = () => (
  <Proxy>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href={`${root}apple-touch-icon.png?v=${version}`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={`${root}favicon-32x32.png?v=${version}`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={`${root}favicon-16x16.png?v=${version}`}
    />
    <link
      rel="manifest"
      href={`${root}manifest.json?v=${version}`}
    />
    <link
      rel="mask-icon"
      href={`${root}safari-pinned-tab.svg?v=${version}`}
      color="#5bbad5"
    />
    <link
      rel="shortcut icon"
      href={`${root}favicon.ico?v=${version}`}
    />
    <meta
      name="msapplication-config"
      content="{`${root}browserconfig.xml?v=${version}`}"
    />
  </Proxy>
);

export default Favicon;
