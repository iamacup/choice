
import * as React from 'react';
// import PropTypes from 'prop-types';

import {
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import {
  Container,
  Text,
  Icon,
} from 'native-base';

import styles from './styles';

import CourseCard from '../../../components/courseCard';
import courseData from '../../../scripts/data/courseList';

// SETUP TYPES FOR FLOW

export interface Props {
  navigation: any,
}
export interface State {}

// PRIMARY CLASS

// navigation, swipedCallback, drawData

class CourseTabScreen extends React.Component {
  onPress(elem) {
    console.log(elem);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{
          backgroundColor: '#ffffff30', flex: 2,
        }}
        >
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

        <View style={{ flex: 11 }}>
          <ScrollView style={{ flex: 1 }}>

            {courseData.map((elem, i) => (
              <CourseCard
                key={elem.key}
                {...courseData[i]}
              />
            ))}

          </ScrollView>
        </View>

      </View>
    );
  }
}

export default CourseTabScreen;
