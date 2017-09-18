// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Layout from '../components/layout';
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
      <Layout title="jamie · rolfs">
        <svg className="logo-container" viewBox="0 0 27 36" xmlns="http://www.w3.org/2000/svg">
          <g className="logo">
            <path
              className="dot"
              d="M11.5299999,0.172 C10.2339999,0.172 9.3699999,1.108 9.3699999,2.296
              C9.3699999,3.52 10.2339999,4.42 11.5299999,4.42 C12.8259999,4.42
              13.7259999,3.52 13.7259999,2.296 C13.7259999,1.108 12.8259999,0.172
              11.5299999,0.172 Z"
            />
            <path
              className="jr"
              d="M12.6731383,27.4000435 C11.5872979,32.0698934 7.36372527,34.4757822
              0.83932178,35.5998349 L0.333171707,33.2633818 C5.97312967,32.3141978
              9.95002311,30.1602802 9.95002311,25.0127821 L9.95002311,11.0305711
              L1.99623623,11.0305711 L1.99623623,8.65761105 L12.95077,8.65761105
              L18.6387039,8.65886646 L19.0002396,12.3460814 C20.1210005,9.60805049
              22.217908,8.22078152 24.4955833,8.22078152 C25.4355763,8.22078152
              26.0863407,8.29379567 26.9901801,8.51283814 L26.4478764,11.5064186
              C25.6163442,11.2873761 25.0378869,11.1778549 24.2425083,11.1778549
              C21.6756043,11.1778549 19.6871576,13.6968433 19.0363932,16.36186
              L19.0363932,24.9905764 L24.3871226,24.9905764 L24.3871226,27.4000435
              L12.6731383,27.4000435 Z M13,11 L13,25 L16,25 L16,11 L13,11 Z"
            />
          </g>
        </svg>
      </Layout>
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
