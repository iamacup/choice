import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../index';
// Note: test renderer must be required after react-native.

const onLogin = jest.fn();
const loginForm = React.Component;

it('renders correctly', () => {
  const tree = renderer.create(<Login onLogin={onLogin} loginForm={loginForm} />).toJSON();
  expect(tree).toMatchSnapshot();
});
