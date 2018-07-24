// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import { Text } from 'native-base';

import Card from '../../card';
import styles from '../../card/styles';

// SETUP TYPES FOR FLOW

export interface Props {}
export interface State {}

// PRIMARY CLASS

export default class SingleSelect extends Card {
  render() {
    const {
      questionText, priorityCard
    } = this.props;

    return (
      <View style={priorityCard === true ? styles.cardContentPriority : styles.cardContent}>

        <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
          <Text style={priorityCard === true ? styles.titleTextPriority : styles.titleText}>
            {questionText}
          </Text>
        </View>


      </View>
    );
  }
}

SingleSelect.propTypes = {
  questionText: PropTypes.string.isRequired,
  picture: PropTypes.any,
  priorityCard: PropTypes.bool.isRequired,
};
