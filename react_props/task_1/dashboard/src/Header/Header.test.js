import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { expect } from '@testing-library/jest-dom';

describe('Header Component', () => {
  it('should render without crashing', () => {
    shallow(<Header />);
  });

  it('should render an img and h1 tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
