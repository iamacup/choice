
import * as React from 'react';

import { StyleSheet, View, Image } from 'react-native';
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

import styles from './styles';

// SETUP TYPES FOR FLOW

export interface Props {
  navigation: any,
}
export interface State {}


// PRIMARY CLASS

const horizontalThreshold = 10;
const verticalThreshold = 10;


export default class HomeScreen extends React.Component<Props, State> {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.drawData.id !== this.props.drawData.id) {
      return true;
    }

    return false;
  }

  renderCard(card, index) {
    const { questionText, options } = this.props.drawData;

    // if this is the top card, we worry about arrows
    if (index === 0) {
    // we pull this out of the layout for easy access - the layout is quite verbose!!
      const cardContent = (
        <View style={styles.cardContent}>

          <View style={{ flex: 2, justifyContent: 'center' }}>
            <Text style={styles.titleText}>
              {questionText}
            </Text>
          </View>

          <View style={{ flex: 3, justifyContent: 'center' }}>
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
                {options.top
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
                {options.left
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
                {options.right
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
                {options.bottom
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
        <Text>
        Other card
        </Text>
      </View>
    );
  }

  render() {
    return (
      <Swiper
        ref={(swiper) => { this.swiper = swiper; }}
        infinite
        cards={['', '', '', '']}
        backgroundColor='transparent'
        cardStyle={styles.cardOuter}
        renderCard={(card, index) => this.renderCard(card, index)}
        onSwiped={() => { this.props.swipedCallback(); }}
        onSwiping={(x,y) => {
          // we replicate logic here from https://github.com/alexbrillant/react-native-deck-swiper/blob/master/Swiper.js 
          // (getSwipeDirection method) to get a better accuracy
          if(x >= 0 && y >= 0) {
            //bottom right
            if(Math.abs(x) > Math.abs(y)) {
              this.props.swipingCallback('right');
            } else {
              this.props.swipingCallback('bottom');
            }
          } else if(x < 0 && y >= 0) {
            //bottom left
            if(Math.abs(x) > Math.abs(y)) {
              this.props.swipingCallback('left');
            } else {
              this.props.swipingCallback('bottom');
            }
          } else if(x >= 0 && y < 0) {
            //top right
            if(Math.abs(x) > Math.abs(y)) {
              this.props.swipingCallback('right');
            } else {
              this.props.swipingCallback('top');
            }
          } else if(x < 0 && y < 0) {
            //top left
            if(Math.abs(x) > Math.abs(y)) {
              this.props.swipingCallback('left');
            } else {
              this.props.swipingCallback('top');
            }
          }
        }}
        cardIndex={0}
        stackSize={3}
        showSecondCard
        stackSeparation={15}
        horizontalThreshold={horizontalThreshold}
        verticalThreshold={verticalThreshold}
        overlayLabels={{}/* {
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
            } */}
      />
    );
  }
}

HomeScreen.propTypes = {
  swipedCallback: PropTypes.func.isRequired,
  swipingCallback: PropTypes.func.isRequired,
  drawData: PropTypes.object.isRequired,
};
