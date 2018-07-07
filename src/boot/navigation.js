// @flow

import React from 'react';
import { Root } from 'native-base';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

/*
import Home from './components/Home';
import UniDecision from './components/UniDecision';

import CourseChoice from './components/CourseChoice';
import CourseSelection from './components/CourseSelection';
import CourseCards from './components/CourseCards';

import UniChoice from './components/UniChoice';
import UniSelection from './components/UniSelector';
import UniCards from './components/UniCards';

import FilteredData from './components/FilteredData'; */

import QuestionController from '../containers/QuestionController';
import Sidebar from '../containers/Sidebar';

const DrawerNavigation = createDrawerNavigator({
  QuestionController: {
    screen: QuestionController
  },
},
{
  initialRouteName: 'QuestionController',
  contentComponent: props => <Sidebar {...props} />,
});

/* const StackNavigator = createStackNavigator({
  Controller: {
    screen: Controller
  },

  Drawer: {
    screen: DrawerNavigation,
  }

  Home: {
    screen: Home
  },

  UniDecision: {
    screen: UniDecision,
    navigationOptions: { header: null }
  },

  CourseChoice: {
    screen: CourseChoice,
    navigationOptions: { header: null }
  },
  CourseSelection: {
    screen: CourseSelection,
    navigationOptions: { header: null }
  },
  CourseCards: {
    screen: CourseCards,
    navigationOptions: { header: null }
  },

  UniChoice: {
    screen: UniChoice,
    navigationOptions: { header: null }
  },
  UniSelection: {
    screen: UniSelection,
    navigationOptions: { header: null }
  },
  UniCards: {
    screen: UniCards,
    navigationOptions: { header: null }
  },

  FilteredData: {
    screen: FilteredData,
    navigationOptions: { header: null }
  },
},
{
  initialRouteName: 'Controller',
  headerMode: 'none',
}); */

export default () => (
  <Root>
    <DrawerNavigation />
  </Root>
);
