
import * as React from 'react';

import { View } from 'react-native';
import PropTypes from 'prop-types';

import {
  Container,
  Text,
} from 'native-base';

// import styles from './styles';

// SETUP TYPES FOR FLOW

export interface Props {
  navigation: any,
}
export interface State {}

// PRIMARY CLASS

// navigation, swipedCallback, drawData

export default class UniversityTabScreen extends React.Component<Props, State> {
  render() {
    return (
      <Container>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <Text>
            UniversityTab
          </Text>

        </View>

      </Container>
    );
  }
}

UniversityTabScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};
