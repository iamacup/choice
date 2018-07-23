// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import storeNames from '../../redux/globalNames';
import defaultSwipeAnswers from '../../scripts/defaultSwipedAnswers';

import DataExplorerScreen from './screens';

// SETUP TYPES FOR FLOW

export interface Props {
  navigation: any,
}

export interface State {}

// PRIMARY CLASS

class DataExplorerContainer extends React.Component<Props, State> {
  render() {
    return (
      <DataExplorerScreen
        navigation={this.props.navigation}
        swipedAnswers={this.props.reduxState_swipedAnswers}
      />
    );
  }
}

DataExplorerContainer.propTypes = {
  navigation: PropTypes.any.isRequired,
  reduxState_swipedAnswers: PropTypes.object,
};

DataExplorerContainer.defaultProps = {
  // we use default swiped answers here in order to make sure we
  // can still jump around the app
  // during dev by setting the state to the data display
  // set the object exported by ../../scripts/defaultSwipedAnswers
  // to empty object if you do not want this
  reduxState_swipedAnswers: defaultSwipeAnswers,
};

const mapStateToProps = state => ({
  reduxState_swipedAnswers: state.dataStoreMulti[storeNames.dataStoreMulti.swipedAnswers],
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(DataExplorerContainer);
