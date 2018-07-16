
import * as React from 'react';

import { Image, View } from 'react-native';
import { Text } from 'native-base';
import PropTypes from 'prop-types';

import * as OurColors from '../../theme/colors';
import styles from './styles';

// SETUP TYPES FOR FLOW

export interface Props {}
export interface State {}

// PRIMARY CLASS

const flashDelay = 50;
const opacityIncrement = 0.05;

let timeout = null;

export default class Chevron extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      opacity: OurColors.chevronOpacity,
      opacityDirection: 'up',
    };
  }

  componentDidMount() {
    // check to see if we start by flashing
    if (this.props.flashing === true) {
      this.flashing();
    }
  }

  componentDidUpdate(prevProps) {
    // check to see if we need to start flashing
    if (prevProps.flashing === false && this.props.flashing === true) {
      this.flashing();
    }
    // check to see if we need to stop flashing
    if (prevProps.flashing === true && this.props.flashing === false) {
      // reset the opacity to default
      this.setState({
        opacity: OurColors.chevronOpacity,
      });
    }
  }

  // we remove the timout so that when the thing is not mounted, it does not try to set state
  componentWillUnmount() {
    clearTimeout(timeout);
  }

  flashing() {
    if (this.props.flashing === true) {
      const { opacity } = this.state;
      const { opacityDirection } = this.state;

      timeout = setTimeout(() => {
        if (opacityDirection === 'up' && opacity < 1.0) {
          this.setState({ opacity: opacity + opacityIncrement });
        } else if (opacityDirection === 'up') {
          this.setState({ opacityDirection: 'down' });
        }


        if (opacityDirection === 'down' && opacity > OurColors.chevronOpacity) {
          this.setState({ opacity: opacity - opacityIncrement });
        } else if (opacityDirection === 'down') {
          this.setState({ opacityDirection: 'up' });
        }

        this.flashing();
      }, flashDelay);
    }
  }

  render() {
    let source = null;
    const { direction, color } = this.props;

    if (color === 'white') {
      if (direction === 'left') {
        source = require('../../theme/images/CourseCards/General/white-chevleft.png');
      } else if (direction === 'right') {
        source = require('../../theme/images/CourseCards/General/white-chevright.png');
      } else if (direction === 'up') {
        source = require('../../theme/images/CourseCards/General/white-chevup.png');
      } else if (direction === 'down') {
        source = require('../../theme/images/CourseCards/General/white-chevdown.png');
      }
    } else {
      if (direction === 'left') {
        source = require('../../theme/images/CourseCards/General/black-chevleft.png');
      } else if (direction === 'right') {
        source = require('../../theme/images/CourseCards/General/black-chevright.png');
      } else if (direction === 'up') {
        source = require('../../theme/images/CourseCards/General/black-chevup.png');
      } else if (direction === 'down') {
        source = require('../../theme/images/CourseCards/General/black-chevdown.png');
      }
    }

    /* return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex:1, justifyContent: 'center', zIndex: 9999}}>
          <Text>👍</Text>
        </View>
        <View style={{flex:1}}>
          <Image
            style={[styles.chevImage, { opacity: this.state.opacity }]}
            source={source}
            resizeMode='contain'
          />
        </View>
      </View>
    ); */
    return (
      <Image
        style={[styles.chevImage, { opacity: this.state.opacity }]}
        source={source}
        resizeMode='contain'
      />
    );
  }
}

Chevron.propTypes = {
  flashing: PropTypes.bool.isRequired,
  direction: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Chevron.defaultProps = {
  color: 'black',
};
