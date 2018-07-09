// @flow
import * as React from 'react';

import { View, Image } from 'react-native';
import { Text } from 'native-base';

import Card from '../../card';
import styles from '../../card/styles';

// SETUP TYPES FOR FLOW

export interface Props {}
export interface State {}

// PRIMARY CLASS

export default class CardContent extends Card {
  render() {
    return (
      <View style={styles.cardContent}>

        <Text>
          Need to select course 'type' here
        </Text>

        <View style={{ flex: 2, justifyContent: 'center' }}>
          <Text style={styles.titleText}>
            Do you know what course you want to study?
          </Text>
        </View>

        <View style={{ flex: 3, justifyContent: 'center' }}>
          <Image
            style={styles.iconImage}
            source={require('../../../theme/images/CourseCards/Course/one.png')}
            resizeMode='contain'
          />
        </View>

      </View>
    );
  }
}
