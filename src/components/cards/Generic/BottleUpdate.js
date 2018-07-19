// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import { View, Image } from 'react-native';
import { Text } from 'native-base';

import Card from '../../card';
import styles from '../../card/styles';
import Bottle from '../../../components/bottle';

// SETUP TYPES FOR FLOW

export interface Props {}
export interface State {}

// PRIMARY CLASS

export default class SingleSelectWithPicture extends Card {
  render() {
    const {
      questionText, picture, styleRatio, priorityCard
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

        <View style={{ flex: styleRatio.bottom, justifyContent: 'flex-end', padding: '2%' }}>
          <Bottle fillPercent={30}/>
        </View>

      </View>
    );


    /* <View style={styles.cardContent}>

        <View style={{ flex: styleRatio.top, alignSelf: 'center', marginTop: 4 }}>
          <Text style={priorityCard === true ? styles.titleTextPriority : styles.titleText}>
            {questionText}
          </Text>
        </View>

        <View style={{ flex: styleRatio.bottom, justifyContent: 'center' }}>
          <Image
            style={styles.iconImage}
            source={picture}
            resizeMode='contain'
          />
        </View>

      </View> */
  }
}

SingleSelectWithPicture.propTypes = {
  questionText: PropTypes.string.isRequired,
  picture: PropTypes.any.isRequired,
  styleRatio: PropTypes.object.isRequired,
  priorityCard: PropTypes.bool.isRequired,
};
