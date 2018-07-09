// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import { View, Image } from 'react-native';
import { Text } from 'native-base';

import Card from '../../card';
import styles from '../../card/styles';

// SETUP TYPES FOR FLOW

export interface Props {}
export interface State {}

// PRIMARY CLASS

export default class SingleSelectWithPicture extends Card {
  render() {
    const { questionText, picture, styleRatio } = this.props;

    return (
      <View style={styles.cardContent}>

        <View style={{ flex: styleRatio.top, alignSelf: 'center', marginTop: 4 }}>
          <Text style={styles.titleText}>
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

      </View>
    );
  }
}

SingleSelectWithPicture.propTypes = {
  questionText: PropTypes.string.isRequired,
  picture: PropTypes.any.isRequired,
  styleRatio: PropTypes.object.isRequired,
};
