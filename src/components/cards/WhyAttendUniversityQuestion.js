// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View, Image } from 'react-native';
import { ListItem, CheckBox, Text, Body } from 'native-base';

import Card from '../card';
import styles from '../card/styles';

import * as OurColors from '../../theme/colors';

// SETUP TYPES FOR FLOW

export interface Props {}
export interface State {}

// PRIMARY CLASS

const options = [
  'Passion', 'Job', 'Social', 'Other',
];

export default class CardContent extends Card {
  
  //setup the state to have the values falsy
  constructor(props) {
    super(props);

    const obj = {};

    options.forEach((value) => {
      obj[value] = false;
    });

    this.state = {
      data: obj,
    };
  }

  handleClick(value) {
    const {data} = this.state;
    
    if(data[value] && data[value] === true) {
      data[value] = false;
    } else {
      data[value] = true;
    }

    this.setState({data});
  }

  render() {
    const {data} = this.state;

    return (
      <View style={styles.cardContent}>

        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={styles.titleText}>
            Why do you want to go to University?
          </Text>
        </View>

        <View style={{ flex: 4, justifyContent: 'center' }}>
          {options.map((value, i) => {
            return (
              <ListItem key={i} onPress={()=>{this.handleClick(value);}}>
                <CheckBox checked={data[value]} color={OurColors.primaryColor}/>
                <Body>
                  <Text style={styles.mainTextColor} >
                    {value}
                  </Text>
                </Body>
              </ListItem>
            );
          })}
        </View>

      </View>
    );
  }
}
