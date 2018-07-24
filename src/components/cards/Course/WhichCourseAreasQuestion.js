// @flow

/* eslint-disable react/no-array-index-key */

import * as React from 'react';
import PropTypes from 'prop-types';

import {
  View, FlatList, Button
} from 'react-native';
import { Text, Badge, Button as NBButton  } from 'native-base';

import Card from '../../card';
import styles from '../../card/styles';

// SETUP TYPES FOR FLOW

export interface Props {}
export interface State {}

// PRIMARY CLASS

const subjects = [
  { key: 'Medicine & Dentistry' },
  { key: 'Subjects Allied to Medicine (excluding Nursing)' },
  { key: 'Nursing' },
  { key: 'Biological Sciences (excluding Psychology)' },
  { key: 'Psychology' },
  { key: 'Veterinary Science' },
  { key: 'Agriculture & Related Subjects' },
  { key: 'Physical Sciences' },
  { key: 'Mathematical Sciences' },
  { key: 'Computer Science' },
  { key: 'Engineering & Technology' },
  { key: 'Architecture, Building & Planning' },
  { key: 'Social Studies (excluding Economics)' },
  { key: 'Economics' },
  { key: 'Law' },
  { key: 'Business & Administrative Studies' },
  { key: 'Mass Communications & Documentation' },
  { key: 'Languages (excluding English Studies)' },
  { key: 'English Studies' },
  { key: 'Historical & Philosophical Studies' },
  { key: 'Creative Arts & Design' },
  { key: 'Education' },
  { key: 'Combined' },
];

export default class CardContent extends Card {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
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

  render() {
    return (
      <View style={styles.cardContentTrans}>

        <View style={{ flex: 3, alignSelf: 'center', marginTop: 4 }}>
          <Text style={styles.titleTextTrans}>
            Select up to 3 subjects you are interested in
          </Text>
        </View>

        <View style={{ flex: 6, justifyContent: 'center' }}>
          <View style={{
            height: '100%', backgroundColor: '#909090', width: '100%', alignSelf: 'center', borderRadius: 10
          }}
          >
            <FlatList
              data={subjects}
              renderItem={({ item }) => (
                <View>
                  <Button onPress={() => this.handlePick(item.key)} title={item.key} color='white' />
                </View>
              )}
            />
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
