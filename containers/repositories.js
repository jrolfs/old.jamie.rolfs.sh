// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Layout from '../components/layout';
import * as githubActions from '../actions/creators/github';

class Repositories extends Component {
  props: {
    repositories: RepositoryArray,
    getAsyncRepositories: Function
  }

  handleClick = () => {
    this.props.getAsyncRepositories();
  }

  render() {
    const { repositories } = this.props;

    return (
      <Layout>
        <button onClick={this.handleClick}>Refresh</button>
        {repositories
          ? <div>
            <h2>Repositories</h2>
            <ul>
              {repositories.map(repository => (
                <li key={repository.url}>
                  <a href={repository.url}>{repository.name}</a>
                </li>
                ))}
            </ul>
          </div>
          : <p>Loading</p>}
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    repositories: state.github.repositories
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(githubActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
