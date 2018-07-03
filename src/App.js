/*// @flow
import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";

const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
	},
	{
		initialRouteName: "Home",
		contentComponent: props => <Sidebar {...props} />,
	}
);

const App = StackNavigator(
	{
		Login: { screen: Login },
		BlankPage: { screen: BlankPage },
		Drawer: { screen: Drawer },
	},
	{
		initialRouteName: "Login",
		headerMode: "none",
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);
*/

import { createStackNavigator } from "react-navigation";

import Home from "./components/Home";
import UniDecision from "./components/UniDecision";

import CourseChoice from "./components/CourseChoice";
import CourseSelection from "./components/CourseSelection";
import CourseCards from "./components/CourseCards";

import UniChoice from "./components/UniChoice";
import UniSelection from "./components/UniSelector";
import UniCards from "./components/UniCards";

import FilteredData from "./components/FilteredData";

const App = createStackNavigator({
  Home: { screen: Home },
  UniDecision: { screen: UniDecision, navigationOptions: { header: null } },

  CourseChoice: { screen: CourseChoice, navigationOptions: { header: null } },
  CourseSelection: { screen: CourseSelection, navigationOptions: { header: null } },
  CourseCards: { screen: CourseCards, navigationOptions: { header: null } },

  UniChoice: { screen: UniChoice, navigationOptions: { header: null } },
  UniSelection: { screen: UniSelection, navigationOptions: { header: null } },
  UniCards: { screen: UniCards, navigationOptions: { header: null } },

  FilteredData: { screen: FilteredData, navigationOptions: { header: null } },
});

export default App;
