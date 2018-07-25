
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

const Frontface = (props) => { return null; };
const Backface = (props) => { return null; };
const Base = (props) => { return null; };

export default class UniCard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };
  }

  flip() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  renderFrontface() {
    console.log('renderFrontFace');

    const {TEF, location, name, population} = this.props;

    let image = null;

    if (TEF.length > 0) {
      if (TEF === 'bronze') image = (<Image source={require('../../theme/images/Medals/bronze.png')} style={{ width: 50, height: 50 }} />);
      if (TEF === 'silver') image = (<Image source={require('../../theme/images/Medals/silver.png')} style={{ width: 50, height: 50 }} />);
      if (TEF === 'gold') image = (<Image source={require('../../theme/images/Medals/gold.png')} style={{ width: 50, height: 50 }} />);
    }

    return (
      <TouchableHighlight style={styles.card} onPress={ () => { this.flip(); } }>
        <View>
          <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: '100%' }}>
            <Text>
              {name}
            </Text>
          </View>
          <Text style={{ fontSize: 10 }}>
            <Icon name='ios-pin-outline' style={{ fontSize: 20 }} />
            {' '}
            {location}
          </Text>
          <Text style={{ fontSize: 10 }}>
            <Icon name='ios-people-outline' style={{ fontSize: 20 }} />
            {' '}
            {population}
            {' '}
            students in 2017
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  renderBackface() {
    console.log('renderBackface');

    const {TEF, location, name, population} = this.props;

    return (
        <View style={styles.card}>
          <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}>
            <Text>
              {name}
            </Text>
          </View>
        </View>
      );
  }

  render() {
    console.log('rendering');

    return (
      <FoldView
        expanded={this.state.expanded}
        renderBackface={() => {return this.renderBackface(); }}
        renderFrontface={() => {return this.renderFrontface(); }}
      >
        <Base />
      </FoldView>
    );
  }
}

UniCard.propTypes = {
  TEF: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string.isRequired,
  population: PropTypes.number,
};

UniCard.defaultProps = {
  TEF: '',
  location: '',
  population: 0,
};
