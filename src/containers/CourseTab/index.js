// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import CourseTabScreen from './screens';

// SETUP TYPES FOR FLOW

export interface Props {
  navigation: any,
}

export interface State {}

// PRIMARY CLASS

export default class CourseTabContainer extends React.Component<Props, State> {
  render() {
    return (
      <CourseTabScreen
        navigation={this.props.navigation}
      />
    );
  }
}

CourseTabContainer.propTypes = {
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
