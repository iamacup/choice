import React from 'react';
import renderer from 'react-test-renderer';
import BlankPage from '../index';
// Note: test renderer must be required after react-native.

const navigation = { state: jest.fn() };

it('renders correctly', () => {
  const tree = renderer.create(<BlankPage navigation={navigation} />).toJSON();
  expect(tree).toMatchSnapshot();
});
