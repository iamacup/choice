
import * as React from 'react';
// import PropTypes from 'prop-types';
import styles from './styles';

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
  Accordion,
  Card, 
  CardItem, 
  Body,
} from 'native-base';



// SETUP TYPES FOR FLOW

export interface Props {
  navigation: any,
}
export interface State {}

// PRIMARY CLASS

// navigation, swipedCallback, drawData

const courseData = [ 
    { 
      courseName: 'BDS (Hons) Dentistry', 
      courseLength: '5-year course, full time',
      fees: [ { location: 'Home/EU', fee: 9250 }, { location: 'International students – pre-clinical - years 1 and 2', fee: 20280 }, { location: 'International students – clinical - years 3, 4 and 5', fee: 36840 } ],
      employment: [ {name: 'earnings', data: [ { duration: '6 months', salary: 31000 }, { duration: '3 years', salary: 42500 } ]} ], 
      entryRequirements: [{ name: 'Degree (or equivalent) or higher qualification', data: 6 }, { name: 'Different higher education qualification', data: 0 }, { name: 'A Levels Scottish Highers or Similar', data: 94 }, { name: 'Baccalaureate', data: 0 }, { name: 'Completed Access Course', data: 0 }, { name: 'Foundation course', data: 0 }, { name: 'No/unknown prior qualifications', data: 0 }, { name: 'Other', data: 0 }], 
      university: 'University of Birmingham', 
      subject: 'Medicine & Dentistry',
      key: 'course-1',
    },
    { 
      courseName: 'BDS (Hons) Dentistry', 
      courseLength: '5-year course, full time',
      fees: [ { location: 'Home/EU', fee: 9250 },],
      employment: [ {name: 'earnings', data: [ { duration: '6 months', salary: 31000 }, { duration: '3 years', salary: 43000 } ]} ], 
      entryRequirements: [{ name: 'Degree (or equivalent) or higher qualification', data: 11 }, { name: 'Different higher education qualification', data: 0 }, { name: 'A Levels Scottish Highers or Similar', data: 89 }, { name: 'Baccalaureate', data: 0 }, { name: 'Completed Access Course', data: 0 }, { name: 'Foundation course', data: 0 }, { name: 'No/unknown prior qualifications', data: 0 }, { name: 'Other', data: 0 }], 
      university: 'King\'s College London', 
      subject: 'Medicine & Dentistry',
      key: 'course-2',
    },
]

class CourseTabScreen extends React.Component {
  render() {
    return(
  <Container>
      <View style={{
          backgroundColor: 'white', opacity: 0.2, height: '9%', paddingTop: 5
        }}
        >
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>

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

    <View style={{ flex: 1, width: '90%' }}>
    <FlatList
    data={courseData}
    renderItem={(elem) => (
    <Card style={styles.card} key={elem.item.key}>
            <CardItem header bordered>
              <Button transparent onPress={() => this.onClick('like')} textStyle={{color: '#87838B'}}>
                <Icon name="md-heart-outline" />
              </Button>
              <Text>{elem.item.courseName}</Text>
              <Button transparent onPress={() => this.onClick('delete')} textStyle={{color: '#87838B'}}>
                <Icon name="ios-close-outline" style={{ fontSize: 40 }} />
              </Button>
            </CardItem>
            <CardItem bordered>
              <Body>
                 <Text>{elem.item.courseLength}</Text>
                 <Text>{elem.item.university}</Text>
              </Body>
            </CardItem>
          </Card>
      )} />

</View>

  </Container>
);
  }
}

export default CourseTabScreen;
