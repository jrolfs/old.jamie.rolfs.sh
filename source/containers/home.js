// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Logo from '../components/logo';
import { setSubtitle } from '../actions/copy';

import { LogoCenteringLayout } from '../styles';

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

  render() {
    return (
      <LogoCenteringLayout>
        <Logo />
      </LogoCenteringLayout>
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
