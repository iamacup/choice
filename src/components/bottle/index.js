// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';

import { View, Image } from 'react-native';
// import styles from './styles';

// SETUP TYPES FOR FLOW

export interface Props {}
export interface State {}

// PRIMARY CLASS

const Bottle = ({ fillPercent, rotation, animate }) => {
  let source = null;

  if (fillPercent === 0) {
    source = require('../../theme/images/bottles/0.png');
  } else if (fillPercent === 10) {
    source = require('../../theme/images/bottles/10.png');
  } else if (fillPercent === 20) {
    source = require('../../theme/images/bottles/20.png');
  } else if (fillPercent === 30) {
    source = require('../../theme/images/bottles/30.png');
  } else if (fillPercent === 40) {
    source = require('../../theme/images/bottles/40.png');
  } else if (fillPercent === 50) {
    source = require('../../theme/images/bottles/50.png');
  } else if (fillPercent === 60) {
    source = require('../../theme/images/bottles/60.png');
  } else if (fillPercent === 70) {
    source = require('../../theme/images/bottles/70.png');
  } else if (fillPercent === 80) {
    source = require('../../theme/images/bottles/80.png');
  } else if (fillPercent === 90) {
    source = require('../../theme/images/bottles/90.png');
  }

  if (animate !== null) {
    return (
      <View style={{
        flex: 1,
        transform: [{ rotate: `${rotation}deg` }],
      }}
      >
        <Animatable.Image
          animation='bounce'
          easing='ease-out'
          iterationCount='infinite'
          style={{
            flex: 1,
            width: undefined,
            height: undefined,
          }}
          source={source}
          resizeMode='contain'
        />
      </View>
    );
  } else {
    return (
      <View style={{
        flex: 1,
        transform: [{ rotate: `${rotation}deg` }],
      }}
      >
        <Image
          style={{
            flex: 1,
            width: undefined,
            height: undefined,
          }}
          source={source}
          resizeMode='contain'
        />
      </View>
    );
  }
};


Bottle.propTypes = {
  fillPercent: PropTypes.number.isRequired,
  rotation: PropTypes.number,
  animate: PropTypes.string,
};

Bottle.defaultProps = {
  rotation: 0,
  animate: null,
};

export default Bottle;
