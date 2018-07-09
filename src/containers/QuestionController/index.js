// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View, Image } from 'react-native';
import { Text } from 'native-base';

import HomeScreen from './screens';

// Generic card containers that take props to render out specifics
import MultiSelectCard from '../../components/cards/Generic/MultiSelect';
import SingleSelectWithPictureCard from '../../components/cards/Generic/SingleSelectWithPicture';

// Preliminary questions
// - all generics

// Course questions
import WhichCourseAreasQuestion from '../../components/cards/Course/WhichCourseAreasQuestion';

// SETUP TYPES FOR FLOW

export interface Props {
  navigation: any,
}

export interface State {}

// PRIMARY CLASS

const startQuestion = 'prelim-1';

const questions = [
  // preliminary questions
  {
    id: 'prelim-1',
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
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'Do you want to go to University?',
      picture: require('../../theme/images/CourseCards/Preliminary/one.png'),
      styleRatio: {
        top: 1,
        bottom: 3,
      },
    }
  },
  {
    id: 'prelim-2',
    size: 'large',
    options: {
      bottom: {
        text: 'Done',
      },
    },
    card: MultiSelectCard,
    cardProps: {
      options: [
        'I want to study somethign that is my passion',
        'I need a degree to get a job',
        'I want to experience the social life',
        'Other',
      ],
      questionText: 'Why do you want to go to University?',
      styleRatio: {
        top: 1,
        bottom: 5,
      },
    },
  },
  {
    id: 'prelim-3',
    size: 'large',
    options: {
      bottom: {
        text: 'Done',
      },
    },
    card: MultiSelectCard,
    cardProps: {
      options: [
        'Cost',
        'Don\'t see a benefit',
        'Am not clever enough',
        'Won\'t fit in',
        'Need special support',
        'Responsibilities at home',
      ],
      'questionText': 'Why not go to Uni?',
      'styleRatio': {
        top: 1,
        bottom: 9,
      },
    },
  },

  // course questions
  {
    id: 'course-1',
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
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'Do you know what course you want to study?',
      picture: require('../../theme/images/CourseCards/Course/one.png'),
      styleRatio: {
        top: 1,
        bottom: 3,
      },
    },
  },
  {
    id: 'course-2',
    size: 'large',
    options: {
      bottom: {
        text: 'Done',
      },
    },
    card: WhichCourseAreasQuestion,
  },
  {
    id: 'course-3',
    size: 'standard',
    options: {
      top: {
        text: 'I want to save money if i can',
      },
      right: {
        text: 'I don\'t mind, it\'s a loan after all',
      },
      left: {
        text: 'I really want the cheapest option',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'How much are you willing to pay for your course?',
      picture: require('../../theme/images/CourseCards/Course/two.png'),
      styleRatio: {
        top: 1,
        bottom: 3,
      },
    }

  },
  {
    id: 'course-4',
    size: 'standard',
    options: {
      top: {
        text: 'Don\'t know',
      },
      right: {
        text: '20-40 hours a week',
      },
      left: {
        text: '10-20 hours a week',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'How much contact time are you expecting?',
      picture: require('../../theme/images/CourseCards/Course/three.png'),
      styleRatio: {
        top: 1,
        bottom: 3,
      },
    }
  },
  {
    id: 'course-5',
    size: 'standard',
    options: {
      right: {
        text: 'Lectures',
      },
      left: {
        text: 'Labs / Practicals / Discussion Groups',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'Which way do you like to learn the most?',
      picture: require('../../theme/images/CourseCards/Course/four.png'),
      styleRatio: {
        top: 1,
        bottom: 3,
      },
    }
  },
  {
    id: 'course-6',
    size: 'standard',
    options: {
      right: {
        text: 'Exams',
      },
      left: {
        text: 'Coursework',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'Do you prefer coursework or exams?',
      picture: require('../../theme/images/CourseCards/Course/five.png'),
      styleRatio: {
        top: 1,
        bottom: 3,
      },
    }
  },
  {
    id: 'course-7',
    size: 'standard',
    options: {
      top: {
        text: 'Don\'t know',
      },
      right: {
        text: 'Very important',
      },
      left: {
        text: 'Not important at all',
      },
    },
    card: SingleSelectWithPictureCard,
    cardProps: {
      questionText: 'How important is the research reputation of the department?',
      picture: require('../../theme/images/CourseCards/Course/six.png'),
      styleRatio: {
        top: 2,
        bottom: 3,
      },
    }
  },
];

// if next is an array, it maps the an swers to IDs
// if it is just a string, it does not matter what the answer was, all answers lead to the 'next; card'

const tree = [

  // preliminary questions
  {
    id: 'prelim-1',
    next: [{
      withAnswer: ['Don\'t know', 'No'],
      id: 'prelim-3',
    },
    {
      withAnswer: ['Yes'],
      id: 'prelim-2',
    }]
  },
  {
    id: 'prelim-2',
    next: 'course-1',
  },
  {
    id: 'prelim-3',
    next: 'course-1',
  },

  // course questions
  {
    id: 'course-1',
    next: [{
      withAnswer: ['Don\'t know', 'No'],
      id: 'course-3',
    },
    {
      withAnswer: ['Yes'],
      id: 'course-2',
    }]
  },
  {
    id: 'course-2',
    next: 'course-3',
  },
  {
    id: 'course-3',
    next: 'course-4',
  },
  {
    id: 'course-4',
    next: 'course-5',
  },
  {
    id: 'course-5',
    next: 'course-6',
  },
  {
    id: 'course-6',
    next: 'course-7',
  },
  {
    id: 'course-7',
    next: '',
  },

  // uni questions
];

export default class ControllerContainer extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    const nextQuestionIndex = this.getIndexOfID(startQuestion);

    this.state = { drawData: questions[nextQuestionIndex] };
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
      if (value.id === id) {
        index = i;
      }
    });

    return index;
  }

  // we loop through the tree to find what comes next
  getNextQuestionID(answer) {
    let result = null;

    tree.forEach((value) => {
      if (value.id === answer.id) {
        if (Array.isArray(value.next)) {
          // if we are looking at an array then we check the answers
          value.next.forEach((next) => {
            if (next.withAnswer.indexOf(answer.answer) > -1) {
              result = next.id;
            }
          });
        }
        else {
          // otherwise we just return the next value as it should be a string saying where to go next
          result = value.next;
        }
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

    // todo store this in redux state
    // console.log(answer);

    const nextID = this.getNextQuestionID(answer);
    const nextQuestionIndex = this.getIndexOfID(nextID);

    console.log('answered ', id);
    console.log('moving to ', nextID, nextQuestionIndex);

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
