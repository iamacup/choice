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
  'Cost', 
  'Don\'t see a benefit', 
  'Am not clever enough', 
  'Won\'t fit in', 
  'Need special support', 
  'Responsibilities at home',
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

        <View style={{ flex: 1 }}>
          <Text style={styles.titleText}>
            Why not go to Uni?
          </Text>
        </View>

        <View style={{ flex: 9, justifyContent: 'center' }}>
          {options.map((value, i) => {
            const style = {};

            if(i === options.length-1) {
              style.borderBottomWidth = 0;
            }

            return (
              <ListItem key={i} onPress={()=>{this.handleClick(value);}} style={style}>
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
