// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import { View, ImageBackground, Image } from 'react-native';
import { Text } from 'native-base';

import styles from './styles';

// SETUP TYPES FOR FLOW

export interface Props {}
export interface State {}

// PRIMARY CLASS

export default class Bottle extends React.Component {
  render() {
    const {
      fillPercent
    } = this.props;

    const topFlex = 100-fillPercent;
    const bottomFlex = fillPercent;

    return (
          <View style={{flex: 1}}>

            <Image
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                zIndex: 9099,
              }}
              source={require('../../theme/images/logo-hollow.png')}
              resizeMode='cover'
            />

            <View style={{flex: topFlex }}>
              
            </View>

            <View style={{flex: bottomFlex, backgroundColor: '#ee374b'}}>

            </View>
          </View>
    );
  }
}

Bottle.propTypes = {
  fillPercent: PropTypes.number.isRequired,
};
