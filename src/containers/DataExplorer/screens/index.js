
import * as React from 'react';

import { View } from 'react-native';
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
  Content,
  Footer,
  FooterTab,
  Tabs,
  Tab,
} from 'native-base';

//import styles from './styles';

import UniversityTab from '../../../containers/UniversityTab';
import CourseTab from '../../../containers/CourseTab';

// SETUP TYPES FOR FLOW

export interface Props {
  navigation: any,
}
export interface State {}

// PRIMARY CLASS

// navigation, swipedCallback, drawData

export default class DataExplorerScreen extends React.Component<Props, State> {
  render() {
    return (
      <Container>

        <Header hasTabs>
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
              Data Explorer
            </Title>
          </Body>
          <Right />
        </Header>

        <Tabs> 
          <Tab heading="Universities">
            <UniversityTab />
          </Tab>
          <Tab heading="Courses">
            <CourseTab />
          </Tab>
        </Tabs>

      </Container>
    );
  }
}

DataExplorerScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};
