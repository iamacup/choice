
import * as React from 'react';
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

import styles from './styles';

// SETUP TYPES FOR FLOW

export interface Props {}
export interface State {}

// PRIMARY CLASS

export default HomeScreen = ({ navigation }) => (
  <Container style={styles.container}>

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

    <Content>

      <Button light>
        <Text>
          {' '}
Light
          {' '}
        </Text>
      </Button>
      <Button primary>
        <Text>
          {' '}
Primary
          {' '}
        </Text>
      </Button>
      <Button success>
        <Text>
          {' '}
Success
          {' '}
        </Text>
      </Button>
      <Button info>
        <Text>
          {' '}
Info
          {' '}
        </Text>
      </Button>
      <Button warning>
        <Text>
          {' '}
Warning
          {' '}
        </Text>
      </Button>
      <Button danger>
        <Text>
          {' '}
Danger
          {' '}
        </Text>
      </Button>
      <Button dark>
        <Text>
          {' '}
Dark
          {' '}
        </Text>
      </Button>

    </Content>
  </Container>
);

HomeScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};
