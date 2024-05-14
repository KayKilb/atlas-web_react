import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { expect } from '@testing-library/jest-dom';

describe('Footer Component', () => {
  it('should render without crashing', () => {
    shallow(<Footer />);
  });

  it('should contain the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });
});
