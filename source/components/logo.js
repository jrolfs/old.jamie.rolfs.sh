// @flow

import * as React from 'react';
import { defer, reduce } from 'lodash';
import { interpolateHclLong } from 'd3';
import { Motion, spring } from 'react-motion';

import { LogoVector, InformationAnchor } from '../styles';

import { width, height, commands } from '../data/logo';

import type { Command } from '../data/logo';

type Props = {};

type State = {
  isOverDot: boolean
};

const distanceX = 95;
const distanceY = 40;

const springSettings = { stiffness: 100, damping: 35 };
const interpolateFromBlack = interpolateHclLong('#000000', '#361F27');
const interpolateFromPurple = interpolateHclLong('#361F27', '#73D2DE');

const commandsToMap = (interpolateX, interpolateY) => {
  const reducer = (memo, value: Command, index: number) => {
    const x = (value.x || 0: number);
    const y = (value.y || 0: number);

    return {
      ...memo,
      [`x${index}`]: value.h ? interpolateX(x) : x,
      [`y${index}`]: value.v ? interpolateY(y) : y
    };
  };

  return reduce(commands, reducer, {});
};

class Logo extends React.Component<Props, State> {
  svg: HTMLElement;

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
          width: width + distanceX,
          height: height + distanceY,
          ...commandsToMap(x => x + distanceX, y => y + distanceY)
        }}
        style={{
          color: spring(this.state.isOverDot ? 2 : 0, { dampening: 10, stiffness: 30 }),
          width: spring(width, springSettings),
          height: spring(height, springSettings),
          ...commandsToMap(x => spring(x, springSettings), y => spring(y, springSettings))
        }}
      >
        {(motion) => {
          const path: string = commands
            .map((command: Command, index) => {
              const x = motion[`x${index}`];
              const y = motion[`y${index}`];

              if (!x && !y) {
                return motion.p;
              }

              return `${command.p}${x},${y} `;
            })
            .join('');

          let fill;

          if (motion.color < 1) {
            fill = interpolateFromBlack(motion.color);
          } else {
            fill = interpolateFromPurple(motion.color - 1);
          }

          return (
            <LogoVector
              viewBox={`0 0 ${motion.width} ${motion.height}`}
              innerRef={svg => this.svg = svg}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="logo">
                <InformationAnchor
                  href="mailto:jamie@rolfs.sh"
                  onMouseEnter={this.handleAnchorMouseEnter}
                  onMouseLeave={this.handleAnchorMouseLeave}
                >
                  <path
                    className="dot"
                    fill={fill}
                    d="M11.5299999,0.172 C10.2339999,0.172 9.3699999,1.108 9.3699999,2.296
                      C9.3699999,3.52 10.2339999,4.42 11.5299999,4.42 C12.8259999,4.42
                      13.7259999,3.52 13.7259999,2.296 C13.7259999,1.108 12.8259999,0.172
                      11.5299999,0.172 Z"
                  />
                  <text className="icon">
                    <tspan x="9.9" y="3.71934651">@</tspan>
                  </text>
                </InformationAnchor>
                <path className="jr" d={path} fill="#000000" />
              </g>
            </LogoVector>
          );
        }}
      </Motion>
    );
  }
}

export default Logo;
