import React from 'react';
import { shallow } from 'enzyme';
import AuthInputGroup from 'components/auth/AuthInputGroup';
import LogInButton from '../LogInButton';
import RememberMeCheckbox from '../RememberMeCheckbox';
import { UserLogin, passwordMsg, usernameMsg, mapDispatchToProps } from '../index';
import { USERNAME_UID, PASSWORD_UID } from '../constants';
import { onChangeUsernameAction, onChangePasswordAction, onChangeRememberAction, onDoLogInAction } from '../actions';

describe('<UserLogin />', () => {
  const noop = () => {};
  const renderedComp = shallow(
    <UserLogin onDoLogIn={noop} onChangeUsername={noop} onChangeRemember={noop} onChangePassword={noop} />
  );
  it('should have a log in button', () => {
    expect(renderedComp.contains(<LogInButton onDoLogIn={noop} />)).toEqual(true);
  });

  // could probably make this test more specific
  it('should have Remember me checkbox', () => {
    expect(renderedComp.contains(<RememberMeCheckbox onChangeRemember={noop} />)).toEqual(true);
  });

  it('should have username authinput', () => {
    expect(renderedComp.contains(<AuthInputGroup uid={USERNAME_UID} display={usernameMsg} onChange={noop} />)).toEqual(true);
  });

  it('should have password authinput', () => {
    expect(renderedComp.contains(<AuthInputGroup uid={PASSWORD_UID} display={passwordMsg} onChange={noop} />)).toEqual(true);
  });

  describe('onDoLogIn', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onDoLogIn).toBeDefined();
    });

    it('should dispatch loadRepos when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const action = onDoLogInAction();
      result.onDoLogIn();
      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
  describe('onChangeUsername', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onChangeUsername).toBeDefined();
    });

    it('should dispatch loadRepos when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const action = onChangeUsernameAction('foo');
      const evt = { target: { value: 'foo' } };
      result.onChangeUsername(evt);
      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
  describe('onChangePassword', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onChangePassword).toBeDefined();
    });

    it('should dispatch when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const action = onChangePasswordAction('foo');
      const evt = { target: { value: 'foo' } };
      result.onChangePassword(evt);
      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
  describe('onChangeRemember', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onChangeRemember).toBeDefined();
    });

    it('should dispatch when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const action = onChangeRememberAction(true);
      const evt = { target: { checked: true } };
      result.onChangeRemember(evt);
      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});
