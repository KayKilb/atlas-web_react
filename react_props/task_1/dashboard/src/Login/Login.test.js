import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { expect } from '@testing-library/jest-dom';

describe('Login Component', () => {
  it('should render without crashing', () => {
    shallow(<Login />);
  });

  it('should render 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('label')).toHaveLength(2);
  });
});
