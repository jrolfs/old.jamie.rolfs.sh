// @flow

/* eslint-disable no-param-reassign */

import * as React from 'react';
import { defer, reduce } from 'lodash';
import { interpolateHclLong } from 'd3';
import styled, { keyframes } from 'styled-components';
import { Motion, spring } from 'react-motion';

import { width as logoWidth, height as logoHeight, vertices as logoVertices } from '../data/logo';

type Props = {};

type State = {
  isOverDot: boolean
};

const distanceX = 95;
const distanceY = 40;

const springSettings = { stiffness: 100, damping: 35 };
const interpolateFromBlack = interpolateHclLong('#000000', '#361F27');
const interpolateFromPurple = interpolateHclLong('#361F27', '#73D2DE');

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

const StyledVector = styled('svg')`
  height: 100%;
  width: 100%;
  transition-property: width, height;
  transition-duration: 2s;
  transition-timing-function: ease-in-out;
  overflow: visible !important;
`;

const EmailAnchor = styled.a`
  cursor: pointer;
  transform-origin: 50% 50%;
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;
  animation: ${throb} 2s infinite;

  &:hover {
    transform: scale(1.2);
  }
`;

class Logo extends React.Component<Props, State> {
  svg: HTMLElement;

  width: number;
  height: number;

  state = {
    isOverDot: false
  };

  componentDidMount() {
    defer(() => {
      this.svg.style.height = '400px';
      this.svg.style.width = 'auto';
    });
  }

  handleAnchorMouseEnter = () => {
    this.setState(state => ({ ...state, isOverDot: true }));
  };

  handleAnchorMouseLeave = () => {
    this.setState(state => ({ ...state, isOverDot: false }));
  };

  render() {
    return (
      <Motion
        defaultStyle={{
          color: 0,
          width: logoWidth + distanceX,
          height: logoHeight + distanceY,
          ...reduceDefaultVertices()
        }}
        style={{
          color: spring(this.state.isOverDot ? 2 : 0, { dampening: 10, stiffness: 30 }),
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

          let fill;

          if (motion.color < 1) {
            fill = interpolateFromBlack(motion.color);
          } else {
            fill = interpolateFromPurple(motion.color - 1);
          }

          return (
            <StyledVector
              className="logo-container"
              viewBox={`0 0 ${motion.width} ${motion.height}`}
              innerRef={svg => this.svg = svg}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="logo">
                <EmailAnchor
                  href="mailto:jamie@rolfs.sh"
                  onMouseEnter={this.handleAnchorMouseEnter}
                  onMouseLeave={this.handleAnchorMouseLeave}
                >
                  <path
                    className="dot"
                    fill={fill}
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
                  <text
                    fontFamily="HelveticaNeue-Light, Helvetica Neue"
                    fontSize="4"
                    fontWeight="300"
                    fill="#000000"
                  >
                    <tspan x="9.9" y="3.71934651">@</tspan>
                  </text>
                </EmailAnchor>
                <path className="jr" d={vertices} fill="#000000" />
              </g>
            </StyledVector>
          );
        }}
      </Motion>
    );
  }
}

export default Logo;
