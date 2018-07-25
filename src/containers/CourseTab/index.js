// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import { ImageBackground } from 'react-native';

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
      <ImageBackground
        style={{
          flex:1,
          height: undefined,
          width: undefined,
        }}
        source={require('../../theme/images/bg3.png')}
        resizeMode='cover'
      >
        <CourseTabScreen />
      </ImageBackground>
    );
  }
}

CourseTabContainer.propTypes = {
  swipedAnswers: PropTypes.object.isRequired,
};
