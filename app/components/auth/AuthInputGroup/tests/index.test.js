import React from 'react';
import { shallow } from 'enzyme';
import AuthInputGroup from '../index';

describe('<AuthInputGroup />', () => {
  const onChangeMock = jest.fn();
  const renderedComp = shallow(
    <AuthInputGroup onChange={onChangeMock} uid="foo" display="bar" />
  );
  it('should have a an input', () => {
    expect(renderedComp.find('input').length).toBeTruthy();
  });
  it('should have a label', () => {
    expect(renderedComp.find('label').length).toBeTruthy();
  });

  describe('onChange', () => {
    it('should get called', () => {
      renderedComp.find('input').simulate('change');
      expect(onChangeMock).toHaveBeenCalled();
    });
  });
});
