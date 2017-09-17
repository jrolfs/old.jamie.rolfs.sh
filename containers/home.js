// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import type { State as CopyState } from '../reducers/copyReducer';
import Layout from '../components/layout';
import * as copyActions from '../actions/creators/copy';

type Props = {
  setSubtitle: SetSubtitleActionCreator
}

type State = {
  subtitle: string
}

class Home extends React.Component<Props, State> {
  handleSubmitleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ subtitle: event.currentTarget.value });
  }

  handleFormSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.props.setSubtitle(this.state.subtitle);
  }

  render() {
    const { subtitle } = this.state;

    return (
      <Layout title="JR">
        <form onSubmit={this.handleFormSubmit}>
          <input name="subtitle" type="text" onChange={this.handleSubmitleChange} />
          <button type="submit">Change Subtitle</button>
        </form>
        <p>{subtitle}</p>
      </Layout>
    );
  }
}

function mapStateToProps(state: { copy: CopyState }): State {
  return {
    subtitle: state.copy.subtitle
  };
}

function mapDispatchToProps(dispatch: Dispatch): Props {
  return bindActionCreators(copyActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
