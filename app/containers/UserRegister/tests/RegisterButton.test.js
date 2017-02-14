import React from 'react';
import { shallow } from 'enzyme';
import RegisterButton from '../RegisterButton';

describe('<RegisterButton />', () => {
  const onDoRegisterMock = jest.fn();
  const renderedComp = shallow(
    <RegisterButton onDoRegister={onDoRegisterMock} />
  );
  it('should have a Button', () => {
    expect(renderedComp.find('Button').length).toBeTruthy();
  });

  describe('onDoRegister', () => {
    it('should be called when button is clicked', () => {
      renderedComp.find('Button').simulate('click');
      expect(onDoRegisterMock).toHaveBeenCalled();
    });
  });
});
