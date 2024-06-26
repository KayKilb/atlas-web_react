import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login/Login';

describe('Login Component', () => {
  it('should render without crashing', () => {
    shallow(<Login />);
  });

  it('should contain 2 input and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('label')).toHaveLength(2);
  });
});
