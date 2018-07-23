// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import CourseTabScreen from './screens';

// SETUP TYPES FOR FLOW

export interface Props {
  navigation: any,
}

export interface State {}

// PRIMARY CLASS

export default class CourseTabContainer extends React.Component<Props, State> {
  render() {
    console.log('loading CourseTabContainer with answers:');
    console.log(this.props.swipedAnswers);

    return (
      <CourseTabScreen />
    );
  }
}

CourseTabContainer.propTypes = {
  swipedAnswers: PropTypes.object.isRequired,
};
