// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View, Image } from 'react-native';
import { Text } from 'native-base';

import HomeScreen from './screens';
import AttendedUniversityQuestion from '../../components/cards/AttendUniversityQuestion';
import WhyAttendedUniversityQuestion from '../../components/cards/WhyAttendUniversityQuestion';

// SETUP TYPES FOR FLOW

export interface Props {
  navigation: any,
}

export interface State {}

// PRIMARY CLASS

const questions = [
  {
    id: '0',
    size: 'standard',
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
    card: AttendedUniversityQuestion,
  },
  {
    id: '2',
    size: 'large',
    options: {
      bottom: {
        text: 'Done',
      },
    },
    card: WhyAttendedUniversityQuestion,
  },
];

export default class ControllerContainer extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = { drawData: questions[0] };
  }

  getAnswer(direction, id) {
    let result = null;

    questions.forEach((value) => {
      if (value.id === id) {
        result = value.options[direction].text;
      }
    });

    return result;
  }

  handleSwiped(direction, data) {
    const { id } = this.state.drawData;

    const answer = {
      data,
      answer: this.getAnswer(direction, id),
    };

    console.log(answer);

    if (id === '0') {
      this.setState({ drawData: questions[1] });
    } else if (id === '1') {
      this.setState({ drawData: questions[2] });
    }
  }

  render() {
    return (
      <HomeScreen
        navigation={this.props.navigation}
        swipedCallback={(direction, data) => { this.handleSwiped(direction, data); }}
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
