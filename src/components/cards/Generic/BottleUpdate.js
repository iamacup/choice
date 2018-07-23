// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import { Text } from 'native-base';

import Card from '../../card';
import styles from '../../card/styles';
import Bottle from '../../bottle';

// SETUP TYPES FOR FLOW

export interface Props {}
export interface State {}

// PRIMARY CLASS

export default class BottleUpdate extends Card {
  render() {
    const {
      questionText, fillPercentage, styleRatio, priorityCard
    } = this.props;

    return (
      <View style={priorityCard === true ? styles.cardContentPriority : styles.cardContent}>

        <View style={{ flex: styleRatio.top }}>
          <View style={{
            flex:1, justifyContent: 'center', alignItems: 'center', paddingLeft: '5%', paddingRight: '5%'
          }}
          >
            <Text style={priorityCard === true ? styles.titleTextPriority : styles.titleText}>
              {questionText}
            </Text>
          </View>
        </View>

        <View style={{ flex: styleRatio.bottom, justifyContent: 'center', padding: '2%' }}>
          <Bottle
            fillPercent={fillPercentage}
            animate='bounce'
            rotation={135}
          />
        </View>

      </View>
    );
  }
}

BottleUpdate.propTypes = {
  questionText: PropTypes.string.isRequired,
  fillPercentage: PropTypes.number.isRequired,
  styleRatio: PropTypes.object.isRequired,
  priorityCard: PropTypes.bool.isRequired,
};
