import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import toJson from 'enzyme-to-json';

import App from '../../components/App';

it('renders without crashing', () => {
  const wrapper = document.createElement('div');
  renderer.create(shallow(<App />), wrapper);
  expect(toJson(wrapper)).toMatchSnapshot();
});
