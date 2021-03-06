
import * as React from 'react';

import PropTypes from 'prop-types';

import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Tabs,
  Tab,
} from 'native-base';

// import styles from './styles';

import UniversityTab from '../../UniversityTab';
import CourseTab from '../../CourseTab';

// SETUP TYPES FOR FLOW

export interface Props {
  navigation: any,
}
export interface State {}

// PRIMARY CLASS

// navigation, swipedCallback, drawData

const DataExplorerScreen = ({ navigation, swipedAnswers }) => (
  <Container>

    <Header hasTabs>
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
              Data Explorer
        </Title>
      </Body>
      <Right />
    </Header>

    <Tabs>
      <Tab heading='Universities'>
        <UniversityTab
          swipedAnswers={swipedAnswers}
        />
      </Tab>
      <Tab heading='Courses'>
        <CourseTab
          swipedAnswers={swipedAnswers}
        />
      </Tab>
    </Tabs>

  </Container>
);

DataExplorerScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
  swipedAnswers: PropTypes.object.isRequired,
};

export default DataExplorerScreen;
