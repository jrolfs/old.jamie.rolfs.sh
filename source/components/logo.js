// @flow

/* eslint-disable no-param-reassign */

import * as React from 'react';
import { reduce } from 'lodash';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';

import { width as logoWidth, height as logoHeight, vertices as logoVertices } from '../data/logo';

const Logo = () => {
  const StyledVector = styled('svg')`height: 400px;`;
  const distance = 50;

  const reduceDefaultVertices = reduce.bind(
    this,
    logoVertices,
    (memo, value, index) => {
      memo[`x${index}`] = value.x;
      memo[`y${index}`] = value.y;

      return memo;
    },
    {}
  );

  const reduceVertices = reduce.bind(
    this,
    logoVertices,
    (memo, value, index) => {
      let x;
      let y;

      if (value.s) {
        x = value.x;
        y = value.y;
      } else {
        x = value.x ? spring(value.x + distance) : 0;
        y = value.y ? spring(value.y + distance) : 0;
      }

      memo[`x${index}`] = x;
      memo[`y${index}`] = y;

      return memo;
    },
    {}
  );

  return (
    <Motion
      defaultStyle={{
        width: logoWidth,
        height: logoHeight,
        ...reduceDefaultVertices()
      }}
      style={{
        width: spring(logoWidth + distance),
        height: spring(logoHeight + distance),
        ...reduceVertices()
      }}
    >
      {(motion) => {
        const vertices = logoVertices
          .map((vertex, index) => {
            const x = motion[`x${index}`];
            const y = motion[`y${index}`];

            if (x && y) {
              return `${vertex.p}${x},${y} `;
            }

            return motion.p;
          }).join('');

        return (
          <StyledVector
            className="logo-container"
            viewBox={`0 0 ${motion.width} ${motion.height}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g className="logo">
              <path
                className="dot"
                d="M11.5299999,0.172
                  C10.2339999,0.172
                  9.3699999,1.108
                  9.3699999,2.296
                  C9.3699999,3.52
                  10.2339999,4.42
                  11.5299999,4.42
                  C12.8259999,4.42
                  13.7259999,3.52
                  13.7259999,2.296
                  C13.7259999,1.108
                  12.8259999,0.172
                  11.5299999,0.172
                  Z"
              />
              <path className="jr" d={vertices} />
            </g>
          </StyledVector>
        );
      }}
    </Motion>
  );
};

export default Logo;
