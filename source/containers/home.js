// @flow

/* eslint-disable max-len, no-param-reassign */

import * as React from 'react';
import { map, reduce, omit } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styled from 'styled-components';
import { Motion, spring } from 'react-motion';

import Layout from '../components/layout';
import { setSubtitle } from '../actions/copy';

import type { Store } from '../reducers';
import type { SetSubtitleActionCreator } from '../actions/copy';

type Props = {
  subtitle: string,
  setSubtitle: SetSubtitleActionCreator
};

type State = {
  subtitle: string
};

class Home extends React.Component<Props, State> {
  handleSubmitleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ subtitle: event.currentTarget.value });
  };

  handleFormSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.props.setSubtitle(this.state.subtitle);
  };

  render() {
    const Logo = styled('svg')`height: 400px;`;

    const distance = 10;

    const defaultWidth = 27;
    const defaultHeight = 36;

    const defaultPath = [
      { p: 'L', x: 18.6387039, y: 8.65886646 },
      { p: 'L', x: 19.0002396, y: 12.3460814 },
      { p: 'C', x: 20.1210005, y: 9.60805049 },
      { p: '', x: 22.217908, y: 8.22078152 },
      { p: '', x: 24.4955833, y: 8.22078152 },
      { p: 'C', x: 25.4355763, y: 8.22078152 },
      { p: '', x: 26.0863407, y: 8.29379567 },
      { p: '', x: 26.9901801, y: 8.51283814 },
      { p: 'L', x: 26.4478764, y: 11.5064186 },
      { p: 'C', x: 25.6163442, y: 11.2873761 },
      { p: '', x: 25.0378869, y: 11.1778549 },
      { p: '', x: 24.2425083, y: 11.1778549 },
      { p: 'C', x: 21.6756043, y: 11.1778549 },
      { p: '', x: 19.6871576, y: 13.6968433 },
      { p: '', x: 19.0363932, y: 16.36186 },
      { p: 'L', x: 19.0363932, y: 24.9905764 },
      { p: 'L', x: 24.3871226, y: 24.9905764 },
      { p: 'L', x: 24.3871226, y: 27.4000435 }
    ];

    return (
      <Layout title="jamie · rolfs">
        <Motion
          defaultStyle={{
            width: defaultWidth,
            height: defaultHeight,
            ...reduce(defaultPath, (memo, value, index) => {
              memo[`p${index}`] = value.p;
              memo[`x${index}`] = value.x;
              memo[`y${index}`] = value.y;

              return memo;
            }, {})
          }}
          style={{
            width: spring(defaultWidth + distance),
            height: spring(defaultHeight + distance),
            ...reduce(defaultPath, (memo, value, index) => {
              memo[`p${index}`] = value.p;
              memo[`x${index}`] = spring(value.x + distance);
              memo[`y${index}`] = spring(value.y);

              return memo;
            }, {})
          }}
        >
          {(motion) => {
            let vertices = map(omit(motion, 'width', 'height'), (value, key) => {
              if (/p/.test(key)) {
                return value;
              } else if (/x/.test(key)) {
                return `${value},`;
              } else if (/y/.test(key)) {
                return `${value} `;
              }

              return value;
            }).join('');

            vertices = vertices.replace(/NaN/g, '');

            return (
              <Logo
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
                  <path
                    className="jr"
                    d={`M12.6731383,27.4000435
                      C11.5872979,32.0698934
                      7.36372527,34.4757822
                      0.83932178,35.5998349
                      L0.333171707,33.2633818
                      C5.97312967,32.3141978
                      9.95002311,30.1602802
                      9.95002311,25.0127821
                      L9.95002311,11.0305711
                      L1.99623623,11.0305711
                      L1.99623623,8.65761105
                      L12.95077,8.65761105
                      ${vertices}
                      L12.6731383,27.4000435
                      Z
                      M13,11
                      L13,25
                      L16,25
                      L16,11
                      L13,11
                      Z`}
                  />
                </g>
              </Logo>
            );
          }}
        </Motion>
      </Layout>
    );
  }
}

function mapStateToProps(state: Store) {
  return {
    subtitle: state.copy.subtitle
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({ setSubtitle }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
