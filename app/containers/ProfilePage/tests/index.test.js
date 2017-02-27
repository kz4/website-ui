import React from 'react';
import { shallow } from 'enzyme';
import UpdateButton from '../UpdateButton';
import { ProfilePage, mapDispatchToProps } from '../index';
import { makeDoUpdateAction } from '../actions';

describe('<ProfilePage />', () => {
  const noop = () => {};
  const renderedComp = shallow(
    <ProfilePage
      onDoUpdate={noop}
    />
  );

  it('should have a Update button', () => {
    expect(renderedComp.contains(<UpdateButton onDoUpdate={noop} />)).toEqual(true);
  });

  describe('onDoUpdate', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onDoUpdate).toBeDefined();
    });

    it('should dispatch loadRepos when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const action = makeDoUpdateAction();
      result.onDoUpdate();
      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});
