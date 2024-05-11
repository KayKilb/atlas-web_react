import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

test('Notifications renders without crashing', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.exists()).toBeTruthy();
});

test('Notifications renders three list items', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('li')).toHaveLength(3);
});

test('Notifications renders the text Here is the list of notifications', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.text()).toContain('Here is the list of notifications');
});
