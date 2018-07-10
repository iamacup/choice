
import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Text, Container, List, ListItem, Content
} from 'native-base';

const navigationItems = [
  {
    location: 'Splash',
    name: 'Restart',
  },
  {
    location: 'Todo',
    name: 'Show Me The Data!',
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
