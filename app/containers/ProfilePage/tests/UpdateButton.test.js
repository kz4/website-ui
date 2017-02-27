/**
 * Created by Mounica on 2/27/2017.
 */
import React from 'react';
import { shallow } from 'enzyme';
import UpdateButton from '../UpdateButton';


describe('<UpdateButton />', () => {
  const onDoUpdateMock = jest.fn();
  const renderedComp = shallow(
    <UpdateButton onDoUpdate={onDoUpdateMock} />
  );
  it('should have a Button', () => {
    expect(renderedComp.find('Button').length).toBeTruthy();
  });

  describe('onDoUpdate', () => {
    it('should be called when button is clicked', () => {
      renderedComp.find('Button').simulate('click');
      expect(onDoUpdateMock).toHaveBeenCalled();
    });
  });
});

