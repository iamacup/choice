// @flow

/* eslint-disable react/no-array-index-key */

import * as React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import {
  ListItem, CheckBox, Text, Body, Button as NBButton
} from 'native-base';

import Card from '../../card';
import styles from '../../card/styles';

import * as OurColors from '../../../theme/colors';

// SETUP TYPES FOR FLOW

export interface Props {}
export interface State {}

// PRIMARY CLASS

export default class MultiSelect extends Card {
  // setup the state to have the values falsy
  constructor(props) {
    super(props);

    const obj = {};

    this.props.options.forEach((value) => {
      obj[value] = false;
    });

    this.state = {
      data: obj,
    };
  }

  handleClick(value) {
    const { data } = this.state;

    if (data[value] && data[value] === true) {
      data[value] = false;
    } else {
      data[value] = true;
    }

    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    const { options, questionText, styleRatio } = this.props;

    return (
      <View style={styles.cardContentTrans}>

        <View style={{ flex: styleRatio.top }}>
          <Text style={styles.titleTextTrans}>
            {questionText}
          </Text>
        </View>

        <View style={{ flex: styleRatio.bottom, justifyContent: 'center' }}>
          {options.map((value, i) => {
            const style = {};

            if (i === options.length - 1) {
              style.borderBottomWidth = 0;
            }

            return (
              <ListItem
                key={i}
                onPress={() => { this.handleClick(value); }}
                style={style}
              >
                <CheckBox checked={data[value]} color={OurColors.primaryColor} />
                <Body>
                  <Text style={styles.mainTextColor}>
                    {value}
                  </Text>
                </Body>
              </ListItem>
            );
          })}

          <View style={{
            justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 8
          }}
          >
            <NBButton onPress={() => { this.props.doneCallback(); }} primary>
              <Text>
                Done
              </Text>
            </NBButton>
          </View>

        </View>

      </View>
    );
  }
}

MultiSelect.propTypes = {
  questionText: PropTypes.string.isRequired,
  options: PropTypes.any.isRequired,
  styleRatio: PropTypes.object.isRequired,
  // priorityCard: PropTypes.bool.isRequired,
  doneCallback: PropTypes.func.isRequired,
};
