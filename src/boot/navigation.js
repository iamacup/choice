// @flow

import React from 'react';
import { Root } from 'native-base';
import { createDrawerNavigator } from 'react-navigation';

import QuestionController from '../containers/QuestionController';
import Splash from '../containers/Splash';
import Sidebar from '../containers/Sidebar';
import DataExplorer from '../containers/DataExplorer';
// import LEOData from '../containers/LEOData';

const DrawerNavigation = createDrawerNavigator({
  Splash: {
    screen: Splash
  },
  QuestionController: {
    screen: QuestionController
  },
  DataExplorer: {
    screen: DataExplorer
  },
  /*LEOData: {
    screen: LEOData
  },*/
},
{
  initialRouteName: 'Splash',
  contentComponent: props => <Sidebar {...props} />,
});

export default () => (
  <Root>
    <DrawerNavigation />
  </Root>
);
