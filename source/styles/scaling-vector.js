import styled from 'styled-components';

const ScalingVector = styled.svg`
  height: 100%;
  width: 100%;
  transition-property: width, height;
  transition-duration: 2s;
  transition-timing-function: ease-in-out;
  overflow: visible !important;
`;

export default ScalingVector;
