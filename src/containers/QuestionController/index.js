// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as storeAction from '../../redux/globals/DataStoreMulti/actions';
import storeNames from '../../redux/globalNames';

import HomeScreen from './screens';

import guideConfig from './config/Guide';
import preliminaryConfig from './config/Preliminary';
import lifePreferencesConfig from './config/LifePreferences';
import coursePreferencesConfig from './config/CoursePreferences';
import uniChoicesConfig from './config/UniversityChoices';
import courseChoicesConfig from './config/CourseChoices';


// SETUP TYPES FOR FLOW

export interface Props {
  navigation: any,
}

export interface State {}

// PRIMARY CLASS

const startSection = 'guide';
const afterQuestionsSteps = 'DataExplorer';

const sections = [
  {
    id: 'guide',
    data: guideConfig,
    next: 'preliminary',
  },
  {
    id: 'preliminary',
    data: preliminaryConfig,
    next: 'lifePreferences',
  },
  {
    id: 'lifePreferences',
    data: lifePreferencesConfig,
    next: 'coursePreferences',
  },
  {
    id: 'coursePreferences',
    data: coursePreferencesConfig,
    next: 'uniChoices',
  },
  {
    id: 'uniChoices',
    data: uniChoicesConfig,
    next: 'courseChoices',
  },
  {
    id: 'courseChoices',
    data: courseChoicesConfig,
    next: null,
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
  let result = {};

  section.data.questions.forEach((value) => {
    if (value.id === id) {
      // it is possible to have no option and for the direction to be null so we check that we are catering for that
      // this case occurs when we have a no direction card that just has a button to progress
      if (value.options[direction] && value.options[direction].text) {
        result = value.options[direction].text;
      }
    }
  });

  return result;
};


const getInitialWording = (section, direction, id) => {
  let result = null;

  section.data.questions.forEach((value) => {
    if (value.id === id && value.options[direction] && value.options[direction].initialWording) {
      result = value.options[direction].initialWording;
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

class ControllerContainer extends React.Component<Props, State> {
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

    // we update the answer status here
    this.props.reduxAction_doUpdate(id, answer);

    const nextID = getNextQuestionID(section.data.tree, answer);
    let card = null;
    let doSetState = true;

    if (nextID === 'NEXT-SECTION') {
      if (section.next === null) {
        // we know there is no more questions so lets move to the next step
        doSetState = false;
        this.props.navigation.navigate(afterQuestionsSteps);
      } else {
        const nextSection = getSectionByID(section.next);
        card = getCardByID(nextSection.data.questions, nextSection.data.startID);
        sectionID = nextSection.id;
      }
    } else {
      card = getCardByID(section.data.questions, nextID);
    }

    const initialWording = getInitialWording(section, direction, id);

    if (doSetState === true) {
      this.setState({
        drawData: card,
        sectionID,
        initialWording,
      });
    }
  }

  render() {
    return (
      <HomeScreen
        navigation={this.props.navigation}
        swipedCallback={(direction, data) => { this.handleSwiped(direction, data); }}
        drawData={this.state.drawData}
        initialWording={this.state.initialWording}
      />
    );
  }
}

ControllerContainer.propTypes = {
  navigation: PropTypes.any.isRequired,
  reduxAction_doUpdate: PropTypes.func,
};

ControllerContainer.defaultProps = {
  reduxAction_doUpdate: () => {},
};

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  reduxAction_doUpdate: (subID, data) => dispatch(storeAction.doUpdate(storeNames.dataStoreMulti.swipedAnswers, subID, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ControllerContainer);
