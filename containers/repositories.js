// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../components/layout';

class Repositories extends Component {
  props: {
    repositories: Repositories
  }

  render() {
    const { repositories } = this.props;

    return (
      <Layout>
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

export default connect(mapStateToProps, null)(Repositories);
