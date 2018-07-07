// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View, Image } from 'react-native';
import { Text } from 'native-base';

import HomeScreen from './screens';

import AttendedUniversityQuestion from '../../components/cards/AttendUniversityQuestion';
import WhyAttendedUniversityQuestion from '../../components/cards/WhyAttendUniversityQuestion';
import WhyDKorNUniversity from '../../components/cards/WhyDKorNUniversity';

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
    id: '1',
    size: 'large',
    options: {
      bottom: {
        text: 'Done',
      },
    },
    card: WhyAttendedUniversityQuestion,
  },
  {
    id: '2',
    size: 'large',
    options: {
      bottom: {
        text: 'Done',
      },
    },
    card: WhyDKorNUniversity,
  },
];

const tree = [
  {
    id: '0',
    next: [{
      id: '2',
      withAnswer: ['Don\'t know', 'No'],
    },
    {
      id: '1',
      withAnswer: ['Yes'],
    }]
  }
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

  getIndexOfID(id) {
    let index = null;

    questions.forEach((value, i) => {
      if(value.id === id) {
        index = i;
      }
    });

    return index;
  }

  //we loop through the tree to find what comes next
  getNextQuestionID(answer) {
    let result = null;

    tree.forEach((value) => {
      if(value.id === answer.id) {
        value.next.forEach((next) => {
          if(next.withAnswer.indexOf(answer.answer) > -1) {
            result = next.id;
          }
        });
      }
    });

    return result;
  }

  handleSwiped(direction, data) {
    const { id } = this.state.drawData;

    const answer = {
      id,
      data,
      answer: this.getAnswer(direction, id),
    };

    //todo store this in redux state
    console.log(answer);

    const nextID = this.getNextQuestionID(answer);
    const nextQuestionIndex = this.getIndexOfID(nextID);

    this.setState({ drawData: questions[nextQuestionIndex] });
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
