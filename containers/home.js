// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Layout from '../components/layout';
import * as copyActions from '../actions/creators/copy';

class Home extends Component {
  state: {
    subtitle: string
  }

  props: {
    subtitle: string,
    setSubtitle: Function
  }

  handleSubmitleChange = (event: Event & { target: HTMLInputElement }) => {
    this.setState({ subtitle: event.target.value });
  }

  handleFormSubmit = (event: Event) => {
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

function mapStateToProps(state) {
  return {
    subtitle: state.copy.subtitle
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(copyActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
