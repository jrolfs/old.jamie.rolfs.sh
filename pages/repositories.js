import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import Store from '../store';
import Repositories from '../containers/repositories';
import * as githubActions from '../actions/creators/github';


class App extends React.Component {
  static async getInitialProps({ store, isServer }) {
    await store.dispatch(githubActions.getAsyncRepositories());

    return { initialState: store.getState(), isServer };
  }

  constructor(props) {
    super(props);

    this.store = Store(props.initialState);
  }

  render() {
    return (
      <Provider store={this.store}>
        <Repositories />
      </Provider>
    );
  }
}

export default withRedux(Store)(App);
