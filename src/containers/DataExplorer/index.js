// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import DataExplorerScreen from './screens';

// SETUP TYPES FOR FLOW

export interface Props {
  navigation: any,
}

export interface State {}

// PRIMARY CLASS

export default class DataExplorerContainer extends React.Component<Props, State> {
  render() {
    return (
      <DataExplorerScreen
        navigation={this.props.navigation}
      />
    );
  }
}

DataExplorerContainer.propTypes = {
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
