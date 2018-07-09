// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import HomeScreen from './screens';

import preliminaryConfig from './config/Preliminary';
import courseConfig from './config/Course';

// SETUP TYPES FOR FLOW

export interface Props {
  navigation: any,
}

export interface State {}

// PRIMARY CLASS

const startSection = 'preliminary';

const sections = [
  {
    id: 'preliminary',
    data: preliminaryConfig,
    next: 'course',
  },
  {
    id: 'course',
    data: courseConfig,
    next: '',
  },
];

const getSectionByID = (id) => {
  let result = null;

  sections.forEach((value) => {
    if (value.id === id) {
      result = value;
    }
  });

  return result;
};

const getCardByID = (section, id) => {
  let result = null;

  section.forEach((value) => {
    if (value.id === id) {
      result = value;
    }
  });

  return result;
};

const getAnswer = (section, direction, id) => {
  let result = null;

  section.data.questions.forEach((value) => {
    if (value.id === id) {
      result = value.options[direction].text;
    }
  });

  return result;
};

const getNextQuestionID = (tree, answer) => {
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
};

export default class ControllerContainer extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    const section = getSectionByID(startSection);
    const card = getCardByID(section.data.questions, section.data.startID);

    this.state = {
      drawData: card,
      sectionID: startSection
    };
  }

  handleSwiped(direction, data) {
    const { id } = this.state.drawData;
    const section = getSectionByID(this.state.sectionID);
    let { sectionID } = this.state;

    // todo store this in redux state
    const answer = {
      id,
      data,
      answer: getAnswer(section, direction, id),
    };

    const nextID = getNextQuestionID(section.data.tree, answer);
    let card = null;

    if (nextID === 'NEXT-SECTION') {
      const nextSection = getSectionByID(section.next);
      card = getCardByID(nextSection.data.questions, nextSection.data.startID);
      sectionID = nextSection.id;
    } else {
      card = getCardByID(section.data.questions, nextID);
    }

    this.setState({
      drawData: card,
      sectionID,
    });
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
