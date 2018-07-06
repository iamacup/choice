// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import Sidebar from './screens';

export interface Props {
  navigation: any,
}
export interface State {}

export default class SidebarContainer extends React.Component<Props, State> {
  render() {
    return <Sidebar navigation={this.props.navigation} />;
  }
}

SidebarContainer.propTypes = {
  navigation: PropTypes.any.isRequired,
};
