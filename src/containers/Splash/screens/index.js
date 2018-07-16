
import * as React from 'react';

import { View, Image, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';

import {
  Container,
  Text,
} from 'native-base';

import styles from './styles';

// SETUP TYPES FOR FLOW

export interface Props {
  navigation: any,
}
export interface State {}

// PRIMARY CLASS

// navigation, swipedCallback, drawData

export default class HomeScreen extends React.Component<Props, State> {
  render() {
    return (
      <Container>

        <View style={styles.contentView}>


          <ImageBackground
            style={{
              flex:1,
              height: undefined,
              width: undefined,
            }}
            source={require('../../../theme/images/bg3.png')}
            resizeMode='cover'
          >

            <View style={{ flex: 6 }}>
              <View style={{ flex: 3, marginTop: '20%' }}>
                <Image
                  style={styles.logoImage}
                  source={require('../../../theme/images/logo.png')}
                  resizeMode='contain'
                />
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                {/* Company / app name here? */}
              </View>
            </View>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>

              <Text style={styles.loadingText}>
                {this.props.message}
              </Text>

            </View>

          </ImageBackground>

        </View>

      </Container>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
  message: PropTypes.string.isRequired,
};
