
import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Text, Container, List, ListItem, Content
} from 'native-base';

const navigationItems = [
  {
    location: 'Todo 1',
    name: 'Todo 1',
  },
  {
    location: 'Todo 2',
    name: 'Todo 2',
  },
  {
    location: 'Todo 3',
    name: 'Todo 3',
  },
];

export interface Props {
    navigation: any,
}

export interface State {}

const SidebarScreen = ({ navigation }) => (
  <Container>
    <Content>
      <List
        style={{ marginTop: 40 }}
        dataArray={navigationItems}
        renderRow={data => (
          <ListItem
            button
            onPress={() => { navigation.navigate(data.location); }}
          >
            <Text>
              {data.name}
            </Text>
          </ListItem>
        )}
      />
    </Content>
  </Container>
);

SidebarScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};

export default SidebarScreen;
