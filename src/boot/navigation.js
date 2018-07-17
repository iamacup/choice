// @flow

import React from 'react';
import { Root } from 'native-base';
import { createDrawerNavigator, createMaterialTopTabNavigator } from 'react-navigation';


import QuestionController from '../containers/QuestionController';
import Splash from '../containers/Splash';
import Sidebar from '../containers/Sidebar';
import DataLanding1 from '../containers/DataLanding1';
import DataLanding2 from '../containers/DataLanding2';

const uniCourseNavigation = createMaterialTopTabNavigator({
  landing1: {
    screen: DataLanding1,
  },
  landing2: {
    screen: DataLanding2,
  }
},
{
  initialRouteName: 'landing1',
});

const DrawerNavigation = createDrawerNavigator({
  Splash: {
    screen: Splash
  },
  QuestionController: {
    screen: QuestionController
  },
  DataLanding: {
    screen: uniCourseNavigation
  },
},
{
  initialRouteName: 'DataLanding',
  contentComponent: props => <Sidebar {...props} />,
});

export default () => (
  <Root>
    <DrawerNavigation />
  </Root>
);
