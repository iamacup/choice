
import * as React from 'react';

import { View, ImageBackground, Image } from 'react-native';
import PropTypes from 'prop-types';

import {
  Container,
  Header,
  Title,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Toast,
} from 'native-base';

import Swiper from '../../../components/swiper';

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

  componentDidUpdate(prevProps) {
    if (prevProps.drawData.id !== this.props.drawData.id && this.props.initialWording !== null) {
      Toast.show({
        text: this.props.initialWording,
        buttonText: 'Okay',
        duration: 6000,
        position: 'top',
        buttonStyle: styles.toastButtonStyle,
      });
    }
  }

  handleSwiping(direction) {
    this.setState({ direction });
  }

  directionIsAllowed(direction) {
    const { options } = this.props.drawData;

    if (options[direction]) {
      return true;
    }

    return false;
  }

  handleClearDirection() {
    this.setState({ direction: null });
  }

  render() {
    let tooltip = null;
    const { direction } = this.state;
    const { options, size } = this.props.drawData;

    if (direction !== null && this.directionIsAllowed(direction)) {
      tooltip = (
        <View style={styles.directionBadge}>
          <Text style={styles.directionBadgeText}>
            {options[direction].text}
          </Text>
        </View>
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
              About You
            </Title>
          </Body>
          <Right />
        </Header>

        <View style={styles.contentView}>

          <ImageBackground
            style={{
              flex:1,
              height: undefined,
              width: undefined,
            }}
            source={require('../../../theme/images/bg3.png')}
            resizeMode='cover'
          >

            <View style={size === 'large' ? styles.swiperTopTopViewLarge : styles.swiperTopTopViewStandard} />
            <View style={size === 'large' ? styles.swiperTopViewLarge : styles.swiperTopViewStandard}>
              {tooltip}
            </View>
            <View style={styles.swiperOuterView}>
              <View style={styles.swiperLeftRightView} />
              <View style={styles.swiperInnerView}>
                <Swiper
                  swipedCallback={(swipeDirection, data) => { this.props.swipedCallback(swipeDirection, data); }}
                  drawData={this.props.drawData}
                  swipingCallback={(swipeDirection) => { this.handleSwiping(swipeDirection); }}
                  clearDirectionCallback={() => { this.handleClearDirection(); }}
                />
              </View>
              <View style={styles.swiperLeftRightView} />
            </View>
            <View style={size === 'large' ? styles.swiperBottomViewLarge : styles.swiperBottomViewStandard} />

          </ImageBackground>
        </View>

      </Container>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
  swipedCallback: PropTypes.func.isRequired,
  drawData: PropTypes.object.isRequired,
  initialWording: PropTypes.any,
};

HomeScreen.defaultProps = {
  initialWording: null,
};
