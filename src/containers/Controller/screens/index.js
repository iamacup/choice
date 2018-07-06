
import * as React from 'react';

import { StyleSheet, View, Image } from 'react-native';
import PropTypes from 'prop-types';


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

import Swiper from './swiper';

import styles from './styles';

// SETUP TYPES FOR FLOW

export interface Props {
  navigation: any,
}
export interface State {}

// PRIMARY CLASS

// navigation, swipedCallback, drawData

export default class HomeScreen extends React.Component<Props, State> {
  
  constructor(props) {
    super(props);

    this.state = {
      direction: null,
    };
  }

  handleSwiping(direction) {
    //console.log(direction);
    if(direction !== this.state.direction) {
      this.setState({ direction });
    }
  }

  directionIsAllowed(direction) {
    const {options} = this.props.drawData;

    if(options[direction]) {
      return true;
    }

    return false;
  }

  handleSwiped() {
    //we have to check that the swiped value is valid, 
    //if it is not we have to swipe the card back
    //if we could stop the card deck from letting you swipe it would be better!
    console.log('check valid swipe');
    this.props.swipedCallback(this.state.direction);
  }

  render() {
    let tooltip = null;
    const {direction} = this.state;

    if(direction !== null && this.directionIsAllowed(direction)) {
      let tooltipText = null;
      const {options} = this.props.drawData;

      tooltipText = options[direction].text;

      tooltip = (
        <Text>{tooltipText}</Text>
      );
    }

    return (
      <Container>

        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name='menu'
                onPress={() => { this.props.navigation.openDrawer(); }}
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
          <View style={styles.swiperTopView}>
            {tooltip}
          </View>
          <View style={styles.swiperOuterView}>
            <View style={styles.swiperLeftRightView} />
            <View style={styles.swiperInnerView}>
              <Swiper
                swipedCallback={() => { this.handleSwiped(); }}
                drawData={this.props.drawData}
                swipingCallback={(direction) => { this.handleSwiping(direction); }}
              />
            </View>
            <View style={styles.swiperLeftRightView} />
          </View>
          <View style={styles.swiperBottomView} />
        </View>

      </Container>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
  swipedCallback: PropTypes.func.isRequired,
  drawData: PropTypes.object.isRequired,
};
