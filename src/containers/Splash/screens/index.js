
import * as React from 'react';

import { View, Image } from 'react-native';
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

          <View style={{flex: 6}}>
            <View style={{flex: 3, marginTop: '20%'}}>
              <Image
                style={styles.logoImage}
                source={require('../../../theme/images/logo.png')}
                resizeMode='contain'
              />
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              {/*Company / app name here?*/}
            </View>
          </View>
          <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.loadingBadge}>
              <Text style={styles.loadingBadgeText}>
                {this.props.message}
              </Text>
            </View>
          </View>

            
        </View>

      </Container>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
  message: PropTypes.string.isRequired,
};
