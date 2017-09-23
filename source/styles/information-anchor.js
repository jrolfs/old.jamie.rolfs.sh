import styled from 'styled-components';
import { throb } from './animations';

const InformationAnchor = styled.a`
  cursor: pointer;
  transform-origin-x: 50%;
  transform-origin-y: 50%;
  transition-property: transform;
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
