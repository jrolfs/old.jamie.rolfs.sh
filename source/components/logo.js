// @flow

/* eslint-disable no-param-reassign */

import * as React from 'react';
import { defer, reduce } from 'lodash';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';

import { width as logoWidth, height as logoHeight, vertices as logoVertices } from '../data/logo';

type Props = {
  isServer: ?boolean
};

const distanceX = 95;
const distanceY = 40;

const springSettings = { stiffness: 100, damping: 35 };

const reduceVertices = reduce.bind(
  this,
  logoVertices,
  (memo, value, index) => {
    let x;
    let y;

    if (value.h) {
      x = spring(value.x, springSettings);
    } else {
      x = value.x || 0;
    }

    if (value.v) {
      y = spring(value.y, springSettings);
    } else {
      y = value.y || 0;
    }

    memo[`x${index}`] = x;
    memo[`y${index}`] = y;

    return memo;
  },
  {}
);

const reduceDefaultVertices = reduce.bind(
  this,
  logoVertices,
  (memo, value, index) => {
    let x;
    let y;

    if (value.h) {
      x = value.x + distanceX;
    } else {
      x = value.x || 0;
    }

    if (value.v) {
      y = value.y + distanceY;
    } else {
      y = value.y || 0;
    }

    memo[`x${index}`] = x;
    memo[`y${index}`] = y;

    return memo;
  },
  {}
);

const StyledVector = styled('svg')`
  height: 100%;
  width: 100%;
  transition-property: width, height;
  transition-duration: 2s;
  transition-timing-function: ease-in-out;
`;

const EmailAnchor = styled.a`
  cursor: pointer;
`;

class Logo extends React.Component<Props> {
  svg: HTMLElement;

  width: number;
  height: number;

  componentDidMount() {
    defer(() => {
      this.svg.style.height = '400px';
      this.svg.style.width = 'auto';
    });
  }

  render() {
    return (
      <Motion
        defaultStyle={{
          width: logoWidth + distanceX,
          height: logoHeight + distanceY,
          ...reduceDefaultVertices()
        }}
        style={{
          width: spring(logoWidth, springSettings),
          height: spring(logoHeight, springSettings),
          ...reduceVertices()
        }}
      >
        {(motion) => {
          const vertices = logoVertices
            .map((vertex, index) => {
              const x = motion[`x${index}`];
              const y = motion[`y${index}`];

              if (!x && !y) {
                return motion.p;
              }

              return `${vertex.p}${x},${y} `;
            })
            .join('');

          return (
            <StyledVector
              className="logo-container"
              viewBox={`0 0 ${motion.width} ${motion.height}`}
              innerRef={svg => this.svg = svg}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="logo">
                <EmailAnchor href="mailto:jamie@rolfs.sh">
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
                </EmailAnchor>
                <path className="jr" d={vertices} />
              </g>
            </StyledVector>
          );
        }}
      </Motion>
    );
  }
}

export default Logo;
