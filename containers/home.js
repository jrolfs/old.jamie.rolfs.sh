// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Layout from '../components/layout';
import { setSubtitle } from '../actions/copy';

import type { State as CopyState } from '../reducers/copyReducer';
import type { SetSubtitleActionCreator } from '../actions/copy';

type Props = {
  subtitle: string,
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
    const { subtitle } = this.props;

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

function mapStateToProps(state: { copy: CopyState }) {
  return {
    subtitle: state.copy.subtitle
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({ setSubtitle }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
