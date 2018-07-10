
import * as React from 'react';

import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import Swiper from 'react-native-deck-swiper';

import styles from './styles';
import Chevron from '../../components/chevron';

// SETUP TYPES FOR FLOW

export interface Props {}
export interface State {}


// PRIMARY CLASS

const horizontalThreshold = 30;
const verticalThreshold = 30;

export default class HomeScreen extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      direction: null,
    };
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.drawData.id !== this.props.drawData.id) {
      return true;
    }

    return false;
  }

  componentDidUpdate(prevProps) {
    if (this.props.drawData.id !== prevProps.drawData.id) {
      this.swiper.swipeBack(() => { this.swiper.jumpToCardIndex(0); });
    }
  }

  directionIsAllowed(direction) {
    const { options } = this.props.drawData;

    if (options[direction]) {
      return true;
    } else if(Object.keys(options).length === 0) {
      //any direction is valid because, if no direction is specified, we assume this is being invoked throug the done callback
      return true;
    }

    return false;
  }

  doneCallback() {
    this.swiper.swipeBottom();
  }

  renderCard(cardIgnored, index) {
    const { options, card, id } = this.props.drawData;

    let cardProps = {};

    if (this.props.drawData.cardProps) {
      ({ cardProps } = this.props.drawData);
    }

    let flashing = false;

    if(this.props.drawData.flashArrows && this.props.drawData.flashArrows === true) {
      flashing = true;
    }

    let priorityCard = false;

    if(this.props.drawData.priorityCard && this.props.drawData.priorityCard === true) {
      priorityCard = true;
    }

    // if this is the top card, we worry about arrows
    if (index === 0) {
      const CardContent = card;

      // we create a 3 x 3 grid, and place indicators in the (row x column) 1x2, 2x1, 2x3 and 3x2 based on what swipe directions are available
      return (
        <View style={priorityCard === true ? styles.cardInnerPriority : styles.cardInner}>
          <View style={styles.cardRowTopBottom}>
            <View style={styles.cardColLeftRight} />
            <View style={styles.cardColContent}>
              <View style={styles.cardHorizontalIndicator}>
                {options.top
                  ? (
                    <Chevron
                      direction="up"
                      flashing={flashing}
                      color={priorityCard === true ? 'white' : 'black'}
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
                    <Chevron
                      direction="left"
                      flashing={flashing}
                      color={priorityCard === true ? 'white' : 'black'}
                    />
                  ) : null}
              </View>
            </View>
            <View style={styles.cardColContent}>
              <CardContent
                ref={(element) => { this.card = element; }}
                key={id}
                direction={this.state.direction}
                doneCallback={() => {this.doneCallback();}}
                {...cardProps}
                priorityCard={priorityCard}
              />
            </View>
            <View style={styles.cardColLeftRight}>
              <View style={styles.cardVerticalIndicator}>
                {options.right
                  ? (
                    <Chevron
                      direction="right"
                      flashing={flashing}
                      color={priorityCard === true ? 'white' : 'black'}
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
                    <Chevron
                      direction="down"
                      flashing={flashing}
                      color={priorityCard === true ? 'white' : 'black'}
                    />
                  ) : null}
              </View>
            </View>
            <View style={styles.cardColLeftRight} />
          </View>
        </View>
      );
    }

    // if its not the top card, return empty - we could put an icon or something here
    // but i am not sure what conditions need to be true for this to actually render? maybe a slow phone?
    // we don't do any of the priority card styles on this either...
    return (
      <View style={styles.cardInner} />
    );
  }

  render() {
    let verticalSwipe = true;
    let horizontalSwipe = true;

    if (this.props.drawData.disabled) {
      const { disabled } = this.props.drawData;

      if (disabled.vertical && disabled.vertical === true) {
        verticalSwipe = false;
      }

      if (disabled.horizontal && disabled.horizontal === true) {
        horizontalSwipe = false;
      }
    }

    // we 'trick' the swiper here - basically we have two cards, we then render the current drawData onto the first
    // and an empty card onto the seccond.
    // when the component sees a new card though it's id - it forced a render by swiping back a card - which will render as a new card
    // - this could be a bit glitchy and needs quite a lot of testing as this is supposed to be achieved with
    // - new cardIndex being passed into the swiper forcing a re-render to that card (and then we would just build up a card stack)
    // in order for this to work, we have to specify two cards
    return (
      <Swiper
        verticalSwipe={verticalSwipe}
        horizontalSwipe={horizontalSwipe}
        ref={(swiper) => { this.swiper = swiper; }}
        cards={['', '']}
        showSecondCard={false}
        backgroundColor='transparent'
        cardStyle={styles.cardOuter}
        renderCard={(card, index) => this.renderCard(card, index)}
        onSwipedAborted={() => { this.props.clearDirectionCallback(); }}
        onSwiped={(index) => {
          const { direction } = this.state;

          // what we do here is - if we are looking at the first card
          // and the direction is not allowed, swipe the card back ontop
          // and then once that has done (And importantly) an onSwiped event is called
          // (hence filter index to 0 only) with index 1 - but card showing is 0
          // so we use the callback of swipeBack to set the index to 0 again
          if (index === 0) {
            if (this.directionIsAllowed(direction) === false) {
              this.swiper.swipeBack(() => { this.swiper.jumpToCardIndex(0); });
              this.props.clearDirectionCallback();
            } else {
              this.props.swipedCallback(direction, this.card.getData());
              this.props.clearDirectionCallback();
            }
          }
        }}
        onSwiping={(x,y) => {
          // we replicate logic here from https://github.com/alexbrillant/react-native-deck-swiper/blob/master/Swiper.js
          // (getSwipeDirection method) to get a better accuracy
          let direction = null;

          if (x >= 0 && y >= 0) {
            // bottom right
            if (Math.abs(x) > Math.abs(y)) {
              direction = 'right';
            } else {
              direction = 'bottom';
            }
          } else if (x < 0 && y >= 0) {
            // bottom left
            if (Math.abs(x) > Math.abs(y)) {
              direction = 'left';
            } else {
              direction = 'bottom';
            }
          } else if (x >= 0 && y < 0) {
            // top right
            if (Math.abs(x) > Math.abs(y)) {
              direction = 'right';
            } else {
              direction = 'top';
            }
          } else if (x < 0 && y < 0) {
            // top left
            if (Math.abs(x) > Math.abs(y)) {
              direction = 'left';
            } else {
              direction = 'top';
            }
          }

          if (direction !== this.state.direction) {
            this.props.swipingCallback(direction);
            this.setState({ direction });
          }
        }}
        cardIndex={0}
        horizontalThreshold={horizontalThreshold}
        verticalThreshold={verticalThreshold}
      />
    );
  }
}

HomeScreen.propTypes = {
  swipedCallback: PropTypes.func,
  swipingCallback: PropTypes.func,
  clearDirectionCallback: PropTypes.func,
  drawData: PropTypes.object.isRequired,
  doneCallback: PropTypes.func,
};

HomeScreen.defaultProps = {
  swipedCallback: () => {},
  swipingCallback: () => {},
  clearDirectionCallback: () => {},
  doneCallback: () => {},
};
