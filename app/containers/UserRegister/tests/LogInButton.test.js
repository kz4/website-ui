import React from 'react';
import { shallow } from 'enzyme';
import LogInButton from '../LogInButton';

describe('<LogInButton />', () => {
  const onDoLogInMock = jest.fn();
  const renderedComp = shallow(
    <LogInButton onDoLogIn={onDoLogInMock} />
  );
  it('should have a Button', () => {
    expect(renderedComp.find('Button').length).toBeTruthy();
  });

  describe('onDoLogIn', () => {
    it('should be called when button is clicked', () => {
      renderedComp.find('Button').simulate('click');
      expect(onDoLogInMock).toHaveBeenCalled();
    });
  });
});
