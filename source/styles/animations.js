import { keyframes } from 'styled-components';

const throb = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.15);
  }

  100% {
    transform: scale(1);
  }
`;

// Note: there will be more animations to come
// eslint-disable-next-line import/prefer-default-export
export { throb };
