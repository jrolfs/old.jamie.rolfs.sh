import styled from 'styled-components';

import { throb } from '../../../styles/animations';

const InformationAnchor = styled.a`
  cursor: pointer;
  transition-property: transform;
  transform-origin: center center;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;
  animation: ${throb} 2s infinite;

  &:hover {
    transform: scale(1.2);
  }

  .icon {
    fill: #000000;
    font-size: 4px;
    font-weight: 300;
    font-family: Helvetica Neue;
  }
`;

export default InformationAnchor;
