
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
  questionText: 'Do you want to go to University?',
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
    //we pull this out of the layout for easy access - the layout is quite verbose!!
    const cardContent = (
        <View style={styles.cardContent}>
          
          <View style={{flex: 2, justifyContent: 'center'}}> 
            <Text style={styles.titleText}>{currentProps.questionText}</Text>
          </View>

          <View style={{flex: 3, justifyContent: 'center'}}> 
            <Image
              style={styles.iconImage}
              source={require('../../../theme/images/CourseCards/MortarboardIcon.png')}
              resizeMode='contain'
            />
          </View>
          
        </View>
      );

    // we create a 3 x 3 grid, and place indicators in the (row x column) 1x2, 2x1, 2x3 and 3x2 based on what swipe directions are available
    return (
      <View style={styles.cardInner}>
        <View style={styles.cardRowTopBottom}>
          <View style={styles.cardColLeftRight} />
          <View style={styles.cardColContent}>
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
          <View style={styles.cardColLeftRight} />
        </View>
        <View style={styles.cardRowContent}>
          <View style={styles.cardColLeftRight}>
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
          <View style={styles.cardColContent}>
            {cardContent}
          </View>
          <View style={styles.cardColLeftRight}>
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
        <View style={styles.cardRowTopBottom}>
          <View style={styles.cardColLeftRight} />
          <View style={styles.cardColContent}>
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
          <View style={styles.cardColLeftRight} /> 
        </View>
      </View>
    );
  }

  // if its not the top card, return empty
  return (
    <View style={styles.cardInner}>
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

    <View style={styles.contentView}>
      <View style={styles.swiperTopView} />
      <View style={styles.swiperOuterView}>
        <View style={styles.swiperLeftRightView} />
        <View style={styles.swiperInnerView}>
          <Swiper
            ref={swiper => { this.swiper = swiper }}
            infinite
            cards={['', '', '', '']}
            backgroundColor={'transparent'}
            cardStyle={styles.cardOuter}
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
        <View style={styles.swiperLeftRightView} />
      </View>
      <View style={styles.swiperBottomView} />
    </View>

  </Container>
);

HomeScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};
