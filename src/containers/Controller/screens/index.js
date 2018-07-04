
import * as React from 'react';

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
import { View } from 'react-native';

import styles from './styles';

// SETUP TYPES FOR FLOW

export interface Props {
  navigation: any,
}
export interface State {}

// PRIMARY CLASS

renderCard = (card, index) => (
    <View style={styles.card}>
      <View style={{
        justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flex: 1
      }}
      >
        {/* <Image source={require('../theme/images/CourseCards/image.png')} style={styles.image} /> */}
        <Text key={index} style={styles.cardText}>
          {card}
        </Text>
      </View>
    </View>
  );

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

    <View>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>
          Do you want to go to university?
        </Text>
      </View>

      <View>
        <Swiper
            cards={['hello']}
            onSwipedRight={cardIndex => {console.log('swipeRight');}}
            onSwipedBottom={cardIndex => {console.log('swipeBottom');}}
            onSwipedLeft={cardIndex => {console.log('swipeLeft');}}
            onSwipedTop={cardIndex => {console.log('swipeTop');}}
            cardIndex={0}
            renderCard={renderCard}
            stackSize={8}
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
              bottom: {
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
