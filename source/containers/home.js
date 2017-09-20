// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import Layout from '../components/layout';
import Logo from '../components/logo';
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

const CenteringLayout = styled(Layout)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% + 400px);
  height: calc(100% + 400px);
  margin-top: -200px;
  margin-right: -200px;
  margin-bottom: -200px;
  margin-left: -200px;
`;

class Home extends React.Component<Props, State> {
  handleSubmitleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ subtitle: event.currentTarget.value });
  };

  handleFormSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.props.setSubtitle(this.state.subtitle);
  };

  render() {
    return (
      <CenteringLayout title="jamie · rolfs">
        <Logo />
      </CenteringLayout>
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
