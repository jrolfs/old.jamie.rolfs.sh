// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Logo from '../components/Logo';
import { setSubtitle } from '../actions/copy';

import { OverflowCenteringLayout } from '../styles';

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
      <OverflowCenteringLayout>
        <Logo />
      </OverflowCenteringLayout>
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
