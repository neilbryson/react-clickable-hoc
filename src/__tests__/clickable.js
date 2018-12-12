import React from 'react';
import { shallow } from 'enzyme';

import clickable from '../clickable';

describe('Clickable higher-order component', () => {
  const WrappedComponent = clickable('button');

  it('should render', () => {
    const wrapper = shallow(<WrappedComponent />);
    expect(wrapper).not.toBeEmptyRender();
  });

  describe('actions', () => {
    let wrapper;
    const onClick = jest.fn();

    beforeAll(() => {
      wrapper = shallow(<WrappedComponent onClick={onClick} />);
    });

    afterEach(() => {
      onClick.mockClear();
    });

    it('should call the onClick prop once when clicked', () => {
      expect(onClick).not.toHaveBeenCalled();
      wrapper.simulate('click');
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should call the onClick prop once when Enter or space is pressed', () => {
      expect(onClick).not.toHaveBeenCalled();
      wrapper.simulate('keydown', { key: ' ', preventDefault: () => {} });
      expect(onClick).toHaveBeenCalledTimes(1);
      onClick.mockClear();
      expect(onClick).not.toHaveBeenCalled();
      wrapper.simulate('keydown', { key: 'Enter', preventDefault: () => {} });
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
