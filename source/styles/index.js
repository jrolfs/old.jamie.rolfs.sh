import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
  ${styledNormalize}

  body, html, body > div, #__next, #__next > div {
    padding: 0;
    height: 100%;
    width: 100%;
  }
`;
