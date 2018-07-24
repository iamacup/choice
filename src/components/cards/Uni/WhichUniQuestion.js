// @flow

/* eslint-disable react/no-array-index-key */

import * as React from 'react';
import PropTypes from 'prop-types';

import {
  View, FlatList, Button
} from 'react-native';
import {
  Text, Badge, Button as NBButton, Input, Icon
} from 'native-base';

import Card from '../../card';
import styles from '../../card/styles';

import uniList from '../../../scripts/data/uniList';
// SETUP TYPES FOR FLOW

export interface Props {}
export interface State {}

// PRIMARY CLASS

export default class CardContent extends Card {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      filteredData: [],
      display: 'none',
    };
  }

  handlePick(item) {
    const { data } = this.state;
    if (this.state.data.length < 3) {
      if (!(data.indexOf(item) > -1)) {
        data.push(item);
        this.setState({ data });
      }
    }
  }

  handleUnpick(item) {
    const { data } = this.state;

    data.splice(data.indexOf(item), 1);

    this.setState({ data });
  }

  handleChange(text) {
    const filteredData = uniList.filter((item) => {
      if (item.name.toLowerCase().includes(text.toLowerCase())) return item;
      else return null;
    });

    this.setState({ filteredData });
  }

  handleSearch() {
    let { display } = this.state;

    if ( display === 'none' ) display = 'flex';
    else display = 'none';

    this.setState({ display });
  }


  render() {
    let filteredData = uniList;

    if (this.state.filteredData.length > 0)
    {
      ({ filteredData } = this.state);
    }

    return (
      <View style={styles.cardContentTrans}>
        <View style={{ flex: 3, alignSelf: 'center', marginTop: 4 }}>
          <Text style={styles.titleTextTrans}>
            Select up to 3 universities you are interested in.
          </Text>
        </View>
        <View style={{ flex: 6, justifyContent: 'center' }}>

          <View style={{
            height: '130%', backgroundColor: '#909090', width: '100%', alignSelf: 'center', borderRadius: 10,
          }}
          >
            <View style={{
              flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '15%'
            }}
            >
              <View style={{ width: '80%' }}>
                <Input placeholderTextColor='white' placeholder='Search' onChangeText={text => this.handleChange(text)} style={{ display: this.state.display, }} />
              </View>
              <View>
                <Text onPress={() => this.handleSearch()}>
                  <Icon name='ios-search' style={{ color: 'white' }} />
                </Text>
              </View>
            </View>
            <View style={{ height: '85%' }}>
              <FlatList
                data={filteredData}
                renderItem={({ item }) => (
                  <View>
                    <Button onPress={() => this.handlePick(item.name)} title={item.name} color='white' />
                  </View>
                )}
              />
            </View>
          </View>
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
