
import * as React from 'react';

import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import {
  Container,
  Text,
} from 'native-base';

import styles from './styles';

// SETUP TYPES FOR FLOW

export interface Props {
  navigation: any,
}
export interface State {}

// PRIMARY CLASS

// navigation, swipedCallback, drawData

export default class DataLandingScreen extends React.Component<Props, State> {
  render() {
    return (
      <Container>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

          <Text>TODO...</Text>

        </View>

      </Container>
    );
  }
}

DataLandingScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};
