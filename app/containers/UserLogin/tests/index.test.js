import React from 'react';
import { shallow } from 'enzyme';
import LogInButton from '../LogInButton';
import { UserLogin } from '../index';

const noop = () => {};

describe('<UserLogin />', () => {
  it('should have a log in button', () => {
    const renderedComp = shallow(
      <UserLogin onDoLogIn={noop} onChangeUsername={noop} onChangeRemember={noop} onChangePassword={noop} />
    );
    expect(renderedComp.contains(<LogInButton onDoLogIn={noop} />)).toEqual(true);
  });

  // could probably make this test more specific
  it('should Remember me ', () => {
    const renderedComp = shallow(
      <UserLogin onDoLogIn={noop} onChangeUsername={noop} onChangeRemember={noop} onChangePassword={noop} />
    );
    expect(renderedComp.find('input').length).toEqual(3);
  });
});
