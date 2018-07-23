// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import { Text } from 'native-base';

import Chevron from '../../chevron';
import Card from '../../card';
import cardStyles from '../../card/styles';
import styles from './styles';

// SETUP TYPES FOR FLOW

export interface Props {}
export interface State {}

// PRIMARY CLASS

export default class SingleSelect extends Card {
  render() {
    const {
      priorityCard
    } = this.props;

    return (
      <View style={priorityCard === true ? cardStyles.cardContentPriority : cardStyles.cardContent}>
        <View style={styles.cardRowTopBottom}>
          <View style={styles.cardColLeftRight} />
          <View style={styles.cardColContent}>
            <View style={styles.cardHorizontalIndicator}>

              <Chevron
                direction='up'
                flashing={true}
                color={priorityCard === true ? 'white' : 'black'}
              />

            </View>
          </View>
          <View style={styles.cardColLeftRight} />
        </View>
        <View style={styles.cardRowContent}>
          <View style={styles.cardColLeftRight}>
            <View style={styles.cardVerticalIndicator}>

              <Chevron
                direction='left'
                flashing={true}
                color={priorityCard === true ? 'white' : 'black'}
              />

            </View>
          </View>
          <View style={styles.cardColContent}>


            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={styles.emojiText}>
👎
                </Text>
              </View>

              <View style={{ flex: 3, alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.emojiText}>
🤷
                  </Text>
                </View>
                <View style={{ flex: 3 }}>
                  <Text style={priorityCard === true ? cardStyles.titleTextPriority : cardStyles.titleText}>
                      You can swipe all questions three ways.
                  </Text>
                  <Text />
                  <Text style={priorityCard === true ? cardStyles.titleTextPriority : cardStyles.titleText}>
                      The answers appear at the top.
                  </Text>
                </View>
              </View>

              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                <Text style={styles.emojiText}>
👍
                </Text>
              </View>
            </View>


          </View>
          <View style={styles.cardColLeftRight}>
            <View style={styles.cardVerticalIndicator}>

              <Chevron
                direction='right'
                flashing={true}
                color={priorityCard === true ? 'white' : 'black'}
              />

            </View>
          </View>
        </View>
        <View style={styles.cardRowTopBottom}>
          <View style={styles.cardColLeftRight} />
          <View style={styles.cardColContent}>
            <View style={styles.cardHorizontalIndicator} />
          </View>
          <View style={styles.cardColLeftRight} />
        </View>
      </View>
    );
  }
}

SingleSelect.propTypes = {
  picture: PropTypes.any.isRequired,
  priorityCard: PropTypes.bool.isRequired,
};
