import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import Store from '../store';
import Home from '../containers/home';

class App extends React.Component {
  static getInitialProps({ store, isServer }) {
    return { initialState: store.getState(), isServer };
  }

  constructor(props) {
    super(props);

    this.store = Store(props.initialState);
  }

  render() {
    return (
      <Provider store={this.store}>
        <Home />
      </Provider>
    );
  }
}

export default withRedux(Store)(App);
