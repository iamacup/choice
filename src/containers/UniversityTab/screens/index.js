
import * as React from 'react';
import PropTypes from 'prop-types';
import FoldView from 'react-native-foldview';

import {
  View,
  ImageBackground,
  ScrollView,
  FlatList,
  Image,
  TouchableHighlight
} from 'react-native';

import {
  Container,
  Text,
  Icon,
  Button,
} from 'native-base';

import styles from './styles';

import uniList from '../../../scripts/data/uniList.js';
// SETUP TYPES FOR FLOW

export interface Props {
  navigation: any,
}
export interface State {}

// PRIMARY CLASS
// navigation, swipedCallback, drawData

class UniversityTabScreen extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      data: uniList,
      expanded: false,
      index: 0,
    };
  }

  flip(index) {
    this.setState({
      index,
      expanded: !this.state.expanded,
    });
  }

  onPress(elem) {
    console.log(elem);
  }

  renderFrontface(elem, image, i) {
    return (
      <TouchableHighlight style={styles.card} onPress={() => this.flip(i)}>
        <View>
          <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: '100%' }}>
            <Text>
              {elem.name}
            </Text>
          </View>
          <Text style={{ fontSize: 10 }}>
            <Icon name='ios-pin-outline' style={{ fontSize: 20 }} />
            {' '}
            {elem.location}
          </Text>
          <Text style={{ fontSize: 10 }}>
            <Icon name='ios-people-outline' style={{ fontSize: 20 }} />
            {' '}
            {elem.population}
            {' '}
students in 2017
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  renderBackface(elem, image) {
    return (
      <View style={styles.card}>

        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}>
          <Text>
            {elem.name}
          </Text>
        </View>
        <FoldView
          renderFrontface={() => this.renderFrontface(elem, image)}
          renderBackface={() => this.renderBackfaceTwo(elem, image)}
        />
      </View>
    );
  }

  renderBackfaceTwo(elem, image) {
    return (
      <View>
        <Text>
Getting here!!!
        </Text>
      </View>
    );
  }


  render() {
    return (
      <View>
        <View style={{
          backgroundColor: 'white', opacity: 0.2, height: '9%', paddingTop: 5
        }}
        >
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>

            <TouchableHighlight onPress={() => this.onPress('gender')}>
              <View>
                <Icon name='md-transgender' style={{ alignSelf: 'center' }} />
                <Text>
Gender
                </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => this.onPress('costs')}>
              <View>
                <Icon name='ios-cash' style={{ alignSelf: 'center' }} />
                <Text>
Costs
                </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => this.onPress('location')}>
              <View>
                <Icon name='ios-pin' style={{ alignSelf: 'center' }} />
                <Text>
Location
                </Text>
              </View>
            </TouchableHighlight>

          </View>
        </View>


        <ScrollView>
          <View style={{
            flex: 1, marginTop: 10, marginBottom: 10, justifyContent: 'center'
          }}
          >
            {this.state.data.map((elem, i) => {
              let image = '';

              if (elem.TEF.length > 0) {
                if (elem.TEF === 'bronze') image = (<Image source={require('../../../theme/images/Medals/bronze.png')} style={{ width: 50, height: 50 }} />);
                if (elem.TEF === 'silver') image = (<Image source={require('../../../theme/images/Medals/silver.png')} style={{ width: 50, height: 50 }} />);
                if (elem.TEF === 'gold') image = (<Image source={require('../../../theme/images/Medals/gold.png')} style={{ width: 50, height: 50 }} />);
              }

              let expand = false;
              if (this.state.index === i) expand = this.state.expanded;

              return (
                <View key={i} style={{ flex: 1, marginTop: 20 }}>
                  <FoldView
                    expanded={expand}
                    renderFrontface={() => this.renderFrontface(elem, image, i)}
                    renderBackface={() => this.renderBackface(elem, image, i)}
                  >
                    <View style={styles.card}>
                      <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: '100%' }}>
                        <Text>
                          {elem.name}
                        </Text>
                      </View>
                      <Text style={{ fontSize: 10 }}>
                        { elem.location}
                      </Text>
                      <Text style={{ fontSize: 10 }}>
                        { elem.population}
                        {' '}
          students in 2017
                      </Text>
                    </View>
                  </FoldView>
                </View>
              );
            })}
          </View>
        </ScrollView>

      </View>
    );
  }
}

UniversityTabScreen.propTypes = {
  swipedAnswers: PropTypes.any.isRequired,
};


export default UniversityTabScreen;


// TODO
//
// onPress all other cards should move down
// add data to each card
// redux
// get filters to work
