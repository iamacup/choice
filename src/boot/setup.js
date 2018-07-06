import * as Expo from 'expo';
import * as React from 'react';
import { StyleProvider } from 'native-base';
import { Provider } from 'react-redux';

import configureStore from '../redux/configureStore';
import Navigation from './navigation';
import getTheme from '../theme/native-base/components';
import variables from '../theme/native-base/variables/material';

export interface Props {}

export interface State {
    store: Object,
    isLoading: boolean,
    isReady: boolean,
}

export default class Setup extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false })),
      isReady: false,
    };
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      // Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady || this.state.isLoading) {
      return <Expo.AppLoading />;
    }

    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={this.state.store}>
          <Navigation />
        </Provider>
      </StyleProvider>
    );
  }
}
