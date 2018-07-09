// @flow
import * as React from 'react';

// SETUP TYPES FOR FLOW

export interface Props {}
export interface State {}

// PRIMARY CLASS

export default class Card extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  getData() {
    return this.state.data;
  }
}
