// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import { ImageBackground } from 'react-native';

import UniversityTabScreen from './screens';

// SETUP TYPES FOR FLOW

export interface Props {
  navigation: any,
}

export interface State {}

// PRIMARY CLASS

export default class UniversityTabContainer extends React.Component<Props, State> {
  render() {
    return (
      <ImageBackground
        style={{
          flex:1,
          height: undefined,
          width: undefined,
        }}
        source={require('../../theme/images/bg3.png')}
        resizeMode='cover'
      >
        <UniversityTabScreen
          navigation={this.props.navigation}
        />
      </ImageBackground>
    );
  }
}

UniversityTabContainer.propTypes = {
  navigation: PropTypes.any.isRequired,
};

// REDUX STUFF

/* function bindAction(dispatch) {
  return {
    fetchList: url => dispatch(fetchList(url)),
  };
}

const mapStateToProps = state => ({
  data: state.homeReducer.list,
  isLoading: state.homeReducer.isLoading,
});

export default connect(mapStateToProps, bindAction)(HomeContainer); */
