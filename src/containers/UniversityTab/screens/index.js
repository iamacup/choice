
import * as React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  ImageBackground,
  ScrollView,
  FlatList,
  Image,
  TouchableHighlight
} from 'react-native';

import {
  Container,
  Text,
  Icon,
  Button,
} from 'native-base';

import styles from './styles';

import uniList from '../../../scripts/data/uniList';
import UniCard from '../../../components/uniCard';

// SETUP TYPES FOR FLOW

export interface Props {
  navigation: any,
}
export interface State {}

// PRIMARY CLASS
// navigation, swipedCallback, drawData

class UniversityTabScreen extends React.Component<Props, State> {
  onPress(elem) {
    console.log(elem);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* We use a background color with an alpha channel so that the OPACITY (specified as alpha channel) is only applied to the background color and not all child element */}
        <View style={{ backgroundColor: '#ffffff30', flex: 2 }}>
          <View style={{
            flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'
          }}
          >

            <TouchableHighlight onPress={() => this.onPress('gender')}>
              <View>
                <Icon name='md-transgender' style={{ alignSelf: 'center' }} />
                <Text>
Gender
                </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => this.onPress('costs')}>
              <View>
                <Icon name='ios-cash' style={{ alignSelf: 'center' }} />
                <Text>
Costs
                </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => this.onPress('location')}>
              <View>
                <Icon name='ios-pin' style={{ alignSelf: 'center' }} />
                <Text>
Location
                </Text>
              </View>
            </TouchableHighlight>

          </View>
        </View>

        <View style={{ flex: 7 }}>
          <ScrollView style={{ flex: 1 }}>

            {uniList.map((elem, i) => (
              <UniCard
                key={elem.key}
                {...uniList[i]}
              />
            ))}

          </ScrollView>
        </View>

      </View>
    );
  }
}

UniversityTabScreen.propTypes = {
  swipedAnswers: PropTypes.any.isRequired,
};

export default UniversityTabScreen;
