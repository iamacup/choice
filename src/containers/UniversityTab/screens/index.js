
import * as React from 'react';

import PropTypes from 'prop-types';

//import FoldView from 'react-native-foldview';

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
  componentWillMount() {
    // this.renderBackface = this.renderBackface.bind(this);
    this.renderInnerBackFace = this.renderInnerBackFace.bind(this);
  }

  renderBlankFace() {
    return (
      <View
        style={{
          backgroundColor: '#ddd',
          flex: 1,
        }}
      />
    );
  }

  // renderBackface() {
  //   const onPress = this.props.onPress;
  //   return (
  //     <View style={{ flex: 1 }}>

  //       <FoldView
  //         renderFrontface={this.renderBlankFace}
  //         renderBackface={this.renderInnerBackFace}
  //       >
  //       </FoldView>

  //     </View>
  //   );
  // }

  renderInnerBackFace() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          borderTopWidth: 10,
          borderTopColor: '#BDC2C9',
          borderBottomLeftRadius: 2,
          borderBottomRightRadius: 2,
        }}
      >
        <View
          style={{
            backgroundColor: '#FFBD18',
            flex: 1,
            margin: 14,
            borderRadius: 2,
          }}
        >
          <Text>
              PRESS ME
          </Text>

        </View>
      </View>
    );
  }

  render() {
    // const onPress = this.props.onPress;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          flexDirection: 'column',
        }}
      >

        <View style={{ flex: 1 }}>

          <View
            style={{
              flex: 1,
              paddingBottom: 10,
              padding: 16,
            }}
          >


            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}
            >


              <View
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 10,
                  backgroundColor: '#BDC2C9',
                }}
              />

              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                }}
              />

            </View>

          </View>

          <View style={{ flex: 1 }}>

            {/*<FoldView
              renderFrontface={this.renderBlankFace}
              renderBackface={this.renderInnerBackFace}
            />*/}

          </View>

        </View>

      </View>
    );
  }
  //  onPress = () => {
  //   console.log('********')
  // }

// constructor(props) {
//   super(props);

//   this.state = {
//     expanded: false,
//   }
// }

  // componentWillMount() {
  //    this.flip = this.flip.bind(this);
  //  }

  //  flip() {
  //    this.setState({
  //      expanded: !this.state.expanded,
  //    });
  //  }

  //  renderFrontface() {
  //    return (
  //      <View>
  //        <Text>Front</Text>
  //      </View>
  //    );
  //  }

  //  renderBackface() {
  //    // *
  //    //  * You can nest <FoldView>s here to achieve the folding effect shown in the GIF above.
  //    //  * A reference implementation can be found in examples/Simple.

  //    return (
  //      <View>
  //        <Text>Back</Text>
  //      </View>
  //    );
  //  }

  // render() {

/*     <View style={{ backgroundColor: 'white', opacity: 0.2, height: '10%' }}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>

        <TouchableHighlight onPress={this.onPress}>
        <View>
          <Icon name='md-transgender' style={{ alignSelf: 'center' }} />
          <Text>Gender</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.onPress}>
        <View>
          <Icon name='ios-cash' style={{ alignSelf: 'center' }} />
          <Text>Costs</Text>
        </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.onPress}>
        <View>
          <Icon name='ios-pin' style={{ alignSelf: 'center' }} />
          <Text>Location</Text>
        </View>
        </TouchableHighlight>

        </View>
      </View>
        <ScrollView>
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
// console.log(this.state.expanded)

  //   return (
  //     <View>
  //      {
  //       <FoldView
  //              expanded={this.state.expanded}
  //              renderBackface={this.renderBackface}
  //              renderFrontface={this.renderFrontface}
  //            >
  //      {
  //      //         <Base />
  //    }
  //            </FoldView>
  //    }
  //     </View>
  //   );
  // }
}

export default UniversityTabScreen;
