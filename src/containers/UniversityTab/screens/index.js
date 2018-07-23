
import * as React from 'react';

import { View } from 'react-native';
// import PropTypes from 'prop-types';

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

const UniversityTabScreen = () => (
  <Container>

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Text>
            UniversityTab
      </Text>

    </View>

  </Container>
);

export default UniversityTabScreen;
