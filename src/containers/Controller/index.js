// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import HomeScreen from './screens';

// SETUP TYPES FOR FLOW

export interface Props {
  navigation: any,
}

export interface State {}

// PRIMARY CLASS

const questions = [
  {
    id: '0',
    questionText: 'Do you want to go to University?',
    options: {
      top: {
        text: 'Don\'t know',
      },
      right: {
        text: 'Yes',
      },
      left: {
        text: 'No',
      },
    },
  },
  {
    id: '1',
    questionText: 'Q2?',
    options: {
      top: {
        text: 'Don\'t know',
      },
      right: {
        text: 'Yes',
      },
      left: {
        text: 'No',
      },
    },
  },
  {
    id: '2',
    questionText: 'Q3?',
    options: {
      top: {
        text: 'Don\'t know',
      },
    },
  },
  {
    id: '3',
    questionText: 'Q4?',
    options: {
      right: {
        text: 'Yes',
      },
      left: {
        text: 'No',
      },
    },
  }
];

export default class ControllerContainer extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {drawData: questions[0]};
  }

  handleSwiped(direction) {
    const { id } = this.state.drawData;

    if(id === '0') {
      this.setState({drawData: questions[1]});
    } else if(id === '1') {
      this.setState({drawData: questions[2]});
    } else if(id === '2') {
      this.setState({drawData: questions[3]});
    } else if(id === '3') {
      this.setState({drawData: questions[0]});
    }
  }

  render() {
    return (
      <HomeScreen
        navigation={this.props.navigation}
        swipedCallback={(direction) => {this.handleSwiped(direction);}}
        drawData={this.state.drawData}
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
