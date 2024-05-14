import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer Component', () => {
  it('should render without crashing', () => {
    shallow(<Footer />);
  });

  it('should contain the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });
});
