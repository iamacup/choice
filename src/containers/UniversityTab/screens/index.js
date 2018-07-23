
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

import uniList from './uniList';
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
      expanded: false,
    };
  }

  // componentWillMount() {
  //    this.flip = this.flip.bind(this);
  //  }

  flip() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  onPress() {
    console.log('************');
  }

  renderFrontface(elem, image) {
    return (
      <TouchableHighlight onPress={() => this.flip()} style={styles.card}>
        <View>
          <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: '100%' }}>
            <Text>
              {elem.key}
            </Text>
            {/* image */}
          </View>
          <Text style={{ fontSize: 10 }}>
            {elem.data.location}
          </Text>
          <Text style={{ fontSize: 10 }}>
            {elem.data.population}
            {' '}
students in 2017
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  renderBackface(elem, image) {
    return (
      <TouchableHighlight onPress={() => this.flip()} style={styles.card}>
        <View>
          <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: '100%' }}>
            <Text>
              {elem.key}
            </Text>
          </View>
          {image}
        </View>
      </TouchableHighlight>
    );
  }


  render() {
    return (
      <View>
        <View style={{ backgroundColor: 'white', opacity: 0.2, height: '10%' }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>

            <TouchableHighlight onPress={this.onPress}>
              <View>
                <Icon name='md-transgender' style={{ alignSelf: 'center' }} />
                <Text>
Gender
                </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={this.onPress}>
              <View>
                <Icon name='ios-cash' style={{ alignSelf: 'center' }} />
                <Text>
Costs
                </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={this.onPress}>
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
            {uniList.map((elem, i) => {
              let image = '';

              if (elem.data.TEF.length > 0) {
                if (elem.data.TEF === 'bronze') image = (<Image source={require('../../../theme/images/Medals/bronze.png')} style={{ width: 50, height: 50 }} />);
                if (elem.data.TEF === 'silver') image = (<Image source={require('../../../theme/images/Medals/silver.png')} style={{ width: 50, height: 50 }} />);
                if (elem.data.TEF === 'gold') image = (<Image source={require('../../../theme/images/Medals/gold.png')} style={{ width: 50, height: 50 }} />);
              }

              return (
                <View style={{ marginTop: 10 }} key={i}>
                  {/* <TouchableHighlight onPress={() => this.flip()} style={styles.card}> */}
                  <FoldView
                    expanded={this.state.expanded}
                    renderFrontface={() => this.renderFrontface(elem, image)}
                    renderBackface={() => this.renderBackface(elem, image)}
                  >
                    {/* I think there needs to be an onPress here? */}
                  </FoldView>

                  {/* </TouchableHighlight> */}
                </View>
              );
            })}
          </View>
        </ScrollView>

      </View>
    );
  }


/*     <ScrollView>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
            {uniList.map(elem => {
              let image = '';
              if (elem.data.TEF.length > 0) {
                if (elem.data.TEF === 'bronze') image = (<Image source={require('../../../theme/images/Medals/bronze.png')} style={{width: 50, height: 50}} />)
                if (elem.data.TEF === 'silver') image = (<Image source={require('../../../theme/images/Medals/silver.png')} style={{width: 50, height: 50}} />)
                if (elem.data.TEF === 'gold') image = (<Image source={require('../../../theme/images/Medals/gold.png')} style={{width: 50, height: 50}} />)
              }
              return (
                <TouchableHighlight onPress={this.onPress} style={styles.card}>
                <View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',borderBottomColor: 'black', borderBottomWidth: 1, width: '100%', alignItems: 'center' }}>
                      <Text>{elem.key}</Text>
                      {image}
                    </View>
                    <Icon name="ios-pin-outline" /><Text style={{ fontSize: 10 }}>{elem.data.location}</Text>
                    <Icon name="ios-people-outline" /><Text style={{fontSize: 10 }}>{elem.data.population} students in 2017</Text>
                    </View>
                </TouchableHighlight>
              )})}
          </View>
        </ScrollView> */
}

/* UniversityTabScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
}; */

export default UniversityTabScreen;


// TODO
//
// Fix the onPress thing so it works
// Make sure the animation works too
// add data to each card
// get filters to work
