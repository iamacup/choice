// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import HomeScreen from './screens';

// SETUP TYPES FOR FLOW

export interface Props {
  navigation: any,
}

export interface State {}

// PRIMARY CLASS

export default class ControllerContainer extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      drawData: {
        id: '1',
        questionText: 'Do you want to go to University?',
        options: {
          top: {
            text: 'Don\'t know',
          },
          right: {
            text: 'Yes',
          },
          left: {
            text: 'No',
          },
        },
      },
    };
  }

  render() {
    // console.log(this.state);

    return (
      <HomeScreen
        navigation={this.props.navigation}
        swipedCallback={(direction) => {
          console.log('swiped (controller): ', direction);
        }}
        drawData={this.state.drawData}
      />
    );
  }
}

ControllerContainer.propTypes = {
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
