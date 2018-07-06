// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View, Image } from 'react-native';

import {
  Text,
} from 'native-base';

import Card from '../card';
import styles from '../card/styles';

// SETUP TYPES FOR FLOW

export interface Props {}
export interface State {}

// PRIMARY CLASS

export default class CardContent extends Card {
  componentDidMount() {
    this.setData({ question: '1' });
  }

  render() {
    return (
      <View style={styles.cardContent}>

        <View style={{ flex: 2, justifyContent: 'center' }}>
          <Text style={styles.titleText}>
            {this.props.questionText}
          </Text>
        </View>

        <View style={{ flex: 3, justifyContent: 'center' }}>
          <Image
            style={styles.iconImage}
            source={require('../../theme/images/CourseCards/MortarboardIcon.png')}
            resizeMode='contain'
          />
        </View>

      </View>
    );
  }
}

CardContent.propTypes = {
  questionText: PropTypes.string.isRequired,
};
