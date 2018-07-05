
import * as React from 'react';

import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Swiper from 'react-native-deck-swiper';

import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem
} from 'native-base';
import { View, Image } from 'react-native';

import styles from './styles';

// SETUP TYPES FOR FLOW

export interface Props {
  navigation: any,
}
export interface State {}

// PRIMARY CLASS

const currentProps = {
  directions: {
    top: {
      text: 'Don\'t know',
    },
    right: {
      text: 'Yes',
    },
    left: {
      text: 'No',
    },
  }
};

renderCard = (card, index) => {
  // if this is the top card, we worry about arrows
  if (index === 0) {
  // we create a 3 x 3 grid, and place indicators in the (row x column) 1x2, 2x1, 2x3 and 3x2 based on what swipe directions are available
    return (
      <View style={{flex:1}}>
        <View style={styles.cardRow1}>
          <View style={styles.cardCol1} />
          <View style={styles.cardCol2}>
            <View style={styles.cardHorizontalIndicator}>
              {currentProps.directions.top
                ? (
                  <Image
                    style={styles.chevImage}
                    source={require('../../../theme/images/CourseCards/chevup.png')}
                    resizeMode='contain'
                  />
                ) : null}
            </View>
          </View>
          <View style={styles.cardCol3} />
        </View>
        <View style={styles.cardRow2}>
          <View style={styles.cardCol1}>
            <View style={styles.cardVerticalIndicator}>
              {currentProps.directions.left
                ? (
                  <Image
                    style={styles.chevImage}
                    source={require('../../../theme/images/CourseCards/chevleft.png')}
                    resizeMode='contain'
                  />
                ) : null}
            </View>
          </View>
          <View style={styles.cardCol2} />
          <View style={styles.cardCol3}>
            <View style={styles.cardVerticalIndicator}>
              {currentProps.directions.right
                ? (
                  <Image
                    style={styles.chevImage}
                    source={require('../../../theme/images/CourseCards/chevright.png')}
                    resizeMode='contain'
                  />
                ) : null}
            </View>
          </View>
        </View>
        <View style={styles.cardRow3}>
          <View style={styles.cardCol1} />
          <View style={styles.cardCol2}>
            <View style={styles.cardHorizontalIndicator}>
              {currentProps.directions.bottom
                ? (
                  <Image
                    style={styles.chevImage}
                    source={require('../../../theme/images/CourseCards/chevdown.png')}
                    resizeMode='contain'
                  />
                ) : null}
            </View>
          </View>
          <View style={styles.cardCol3} />
        </View>
      </View>
    );
  }

  // if its not the top card, return empty
  return (
    <View style={{flex: 1}}>
      <Text>Other card</Text>
    </View>
  );
};

export default HomeScreen = ({ navigation }) => (
  <Container>

    <Header>
      <Left>
        <Button transparent>
          <Icon
            active
            name='menu'
            onPress={() => { navigation.openDrawer(); }}
          />
        </Button>
      </Left>
      <Body>
        <Title>
          Home
        </Title>
      </Body>
      <Right />
    </Header>

    <View style={{flex: 1}}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>
          Do you want to go to university?
        </Text>
      </View>

      <View style={{flex: 1}}>
        <Swiper
          ref={swiper => { this.swiper = swiper }}
          infinite
          cards={['hello1', 'hello2', 'hello3', 'hello4', 'hello5', 'hello6']}
          backgroundColor={'#fff'}
          cardStyle={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: 'auto',
            height: 'auto',
            backgroundColor: 'purple',
          }}
          renderCard={renderCard}
          onSwipedRight={(cardIndex) => { console.log('swipeRight'); }}
          onSwipedBottom={(cardIndex) => { console.log('swipeBottom'); }}
          onSwipedLeft={(cardIndex) => { console.log('swipeLeft'); }}
          onSwipedTop={(cardIndex) => { console.log('swipeTop'); }}
          cardIndex={0}
          stackSize={3}
          showSecondCard
          stackSeparation={15}
          overlayLabels={{
            left: {
              title: 'No',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1,
                  fontSize: 30,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: -40,
                  marginLeft: 0
                }
              }
            },
            right: {
              title: 'Yes',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1,
                  fontSize: 30,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: -40,
                  marginLeft: 0
                }
              }
            },
            top: {
              title: "Don't Know",
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1,
                  fontSize: 30,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: -40,
                  marginLeft: 0
                }
              }
            },
          }}



        />
      </View>

    </View>
  </Container>
);

HomeScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};
