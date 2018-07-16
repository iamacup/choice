// @flow

/* eslint-disable react/no-array-index-key */

import * as React from 'react';
import PropTypes from 'prop-types';

import {
  View, FlatList, Button
} from 'react-native';
import {
  Text, Badge, Button as NBButton, Input, Item, Icon
} from 'native-base';

import Card from '../../card';
import styles from '../../card/styles';

// SETUP TYPES FOR FLOW

export interface Props {}
export interface State {}

// PRIMARY CLASS

const subjects = [
  { key: 'Uni 1' },
  { key: 'Uni 2' },
  { key: 'Uni 3' },
  { key: 'Uni 4' },
  { key: 'Uni 5' },
  { key: 'Uni 6' }
];

export default class CardContent extends Card {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      filteredData: [],
    };
  }

  handlePick(item) {
    const { data } = this.state;

    if (!(data.indexOf(item) > -1)) {
      data.push(item);
      this.setState({ data });
    }
  }

  handleUnpick(item) {
    const { data } = this.state;

    data.splice(data.indexOf(item), 1);

    this.setState({ data });
  }

  handleChange(text) {
    const filteredData = subjects.filter((item) => {
      if (item.key.toLowerCase().includes(text.toLowerCase())) return item;
      else return null;
    });

    this.setState({ filteredData });
  }


  render() {
    let filteredData = subjects;
    if (this.state.filteredData.length > 0)  filteredData = this.state.filteredData;

    return (
      <View style={styles.cardContentTrans}>
        <View style={{ flex: 3, alignSelf: 'center', marginTop: 4 }}>
          <Text style={styles.titleTextTrans}>
            Select the universities you are interested in.
          </Text>
        </View>
        <View style={{ flex: 6, justifyContent: 'center' }}>
          <View style={{
            height: '50%', backgroundColor: '#909090', width: '100%', alignSelf: 'center', borderRadius: 10
          }}
          >
            <FlatList
              data={filteredData}
              renderItem={({ item }) => (
                <View>
                  <Button onPress={() => this.handlePick(item.key)} title={item.key} color='white' />
                </View>
              )}
            />
          </View>
          <Item>
            <Icon name='ios-search' />
            <Input placeholder='Search' onChangeText={text => this.handleChange(text)} />
          </Item>
        </View>

        <View style={{ flex: 6, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {this.state.data.map((value, i) => (
              <Badge key={i} onPress={() => { this.handleUnpick(value); }} style={{ margin: 2 }} primary>
                <Text onPress={() => { this.handleUnpick(value); }}>
                  {value}
                </Text>
              </Badge>
            ))}
          </View>
        </View>

        <View style={{
          flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
        }}
        >
          <NBButton onPress={() => { this.props.doneCallback(); }} primary>
            <Text>
              Done
            </Text>
          </NBButton>
        </View>
      </View>
    );
  }
}

CardContent.propTypes = {
  doneCallback: PropTypes.func.isRequired,
};
