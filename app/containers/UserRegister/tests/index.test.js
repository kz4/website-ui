import React from 'react';
import { shallow } from 'enzyme';
import AuthInputGroup from 'components/auth/AuthInputGroup';
import RegisterButton from '../RegisterButton';
import { UserRegister, passwordMsg, usernameMsg, verifyPasswordMsg, mapDispatchToProps } from '../index';
import { USERNAME_UID, PASSWORD_UID, VERIFY_PASSWORD_UID } from '../constants';
import { onChangeUsername, onChangePassword, onChangeVerifyPassword, onDoRegister } from '../actions';

describe('<UserRegister />', () => {
  const noop = () => {};
  const renderedComp = shallow(
    <UserRegister onDoRegister={noop} onChangeUsername={noop} onChangeVerifyPassword={noop} onChangePassword={noop} />
  );
  it('should have a log in button', () => {
    expect(renderedComp.contains(<RegisterButton onDoRegister={noop} />)).toEqual(true);
  });

  // could probably make this test more specific
  it('should have veriy password authinput', () => {
    expect(renderedComp.contains(<AuthInputGroup uid={VERIFY_PASSWORD_UID} display={verifyPasswordMsg} onChange={noop} />)).toEqual(true);
  });

  it('should have username authinput', () => {
    expect(renderedComp.contains(<AuthInputGroup uid={USERNAME_UID} display={usernameMsg} onChange={noop} />)).toEqual(true);
  });

  it('should have password authinput', () => {
    expect(renderedComp.contains(<AuthInputGroup uid={PASSWORD_UID} display={passwordMsg} onChange={noop} />)).toEqual(true);
  });

  describe('onDoRegister', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onDoRegister).toBeDefined();
    });

    it('should dispatch loadRepos when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const action = onDoRegister();
      result.onDoRegister();
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
      const action = onChangeUsername('foo');
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
      const action = onChangePassword('foo');
      const evt = { target: { value: 'foo' } };
      result.onChangePassword(evt);
      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
  describe('onChangeVerifyPassword', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onChangeVerifyPassword).toBeDefined();
    });

    it('should dispatch when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const action = onChangeVerifyPassword('foo');
      const evt = { target: { value: 'foo' } };
      result.onChangeVerifyPassword(evt);
      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});
