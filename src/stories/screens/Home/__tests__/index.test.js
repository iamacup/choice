import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../index';
// Note: test renderer must be required after react-native.

const navigation = { navigate: jest.fn() };
const list = { map: jest.fn() };

it('renders correctly', () => {
  const tree = renderer.create(<Home navigation={navigation} list={list} />).toJSON();
  expect(tree).toMatchSnapshot();
});
