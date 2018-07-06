
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
  ListItem,
  Badge
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
    this.setState({ direction });
  }

  directionIsAllowed(direction) {
    const {options} = this.props.drawData;

    if(options[direction]) {
      return true;
    }

    return false;
  }

  handleClearDirection() {
    this.setState({direction: null});
  }

  handleSwiped(direction) {
    this.props.swipedCallback(direction);
  }

  render() {
    let tooltip = null;
    const {direction} = this.state;

    if(direction !== null && this.directionIsAllowed(direction)) {
      let tooltipText = null;
      const {options} = this.props.drawData;

      tooltipText = options[direction].text;

      tooltip = (
        <Badge primary>
          <Text style={styles.directionBadgeText}>{tooltipText}</Text>
        </Badge>
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
          <View style={styles.swiperTopTopView}>

          </View>
          <View style={styles.swiperTopView}>
            {tooltip}
          </View>
          <View style={styles.swiperOuterView}>
            <View style={styles.swiperLeftRightView} />
            <View style={styles.swiperInnerView}>
              <Swiper
                swipedCallback={(swipeDirection) => { this.handleSwiped(swipeDirection); }}
                drawData={this.props.drawData}
                swipingCallback={(swipeDirection) => { this.handleSwiping(swipeDirection); }}
                clearDirectionCallback={() => {this.handleClearDirection();}}
              />
            </View>
            <View style={styles.swiperLeftRightView} />
          </View>
          <View style={styles.swiperBottomView}/>
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
