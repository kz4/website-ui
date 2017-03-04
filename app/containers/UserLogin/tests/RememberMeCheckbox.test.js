import React from 'react';
import { shallow } from 'enzyme';
import RememberMeCheckbox from '../RememberMeCheckbox';

describe('<RememberMeCheckbox />', () => {
  const onChangeRememberMock = jest.fn();
  const renderedComp = shallow(
    <RememberMeCheckbox onChangeRemember={onChangeRememberMock} />
  );
  it('should have an input for the checkbox', () => {
    expect(renderedComp.find('#remember').length).toBeTruthy();
  });

  describe('onRememberMe', () => {
    it('should be called when checkbox is clicked', () => {
      renderedComp.find('#remember').simulate('change');
      expect(onChangeRememberMock).toHaveBeenCalled();
    });
  });
});
