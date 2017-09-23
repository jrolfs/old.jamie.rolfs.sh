import styled from 'styled-components';

import CenteringLayout from './centering-layout';

const LogoCenteringLayout = styled(CenteringLayout)`
  width: calc(100% + 600px);
  height: calc(100% + 600px);
  margin-top: -300px;
  margin-right: -300px;
  margin-bottom: -300px;
  margin-left: -300px;
`;

export default LogoCenteringLayout;
