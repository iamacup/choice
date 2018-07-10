// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import SplashScreen from './screens';

// SETUP TYPES FOR FLOW

export interface Props {
  navigation: any,
}

export interface State {}

// PRIMARY CLASS

const messages = [
  'Loading salary data...',
  'Organising by gender...',
  'Calculating loan payments...',
];

const timeout = 2000;

export default class ControllerContainer extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      message: messages[0],
      currentIndex: 0,
    }
  }

  componentDidMount() {
    this.updateMessage();
  }

  updateMessage() {
    const {currentIndex} = this.state;


    if(currentIndex+1 === messages.length) {
      setTimeout(() => {
        this.props.navigation.navigate('QuestionController');
      }, timeout);
    }
    else {
      setTimeout(() => {
        const newIndex = currentIndex+1;

        this.setState({
          message: messages[newIndex],
          currentIndex: newIndex,
        });

        this.updateMessage();
      }, timeout);
    }
  }

  render() {
    return (
      <SplashScreen
        navigation={this.props.navigation}
        message={this.state.message}
      />
    );
  }
}

ControllerContainer.propTypes = {
  navigation: PropTypes.any.isRequired,
};

// REDUX STUFF

/* function bindAction(dispatch) {
  return {
    fetchList: url => dispatch(fetchList(url)),
  };
}

const mapStateToProps = state => ({
  data: state.homeReducer.list,
  isLoading: state.homeReducer.isLoading,
});

export default connect(mapStateToProps, bindAction)(HomeContainer); */
