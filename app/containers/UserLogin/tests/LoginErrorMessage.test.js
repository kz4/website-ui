import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import LoginErrorMessage, { Wrapper, DEFAULT_MSG } from '../LoginErrorMessage';
import messages from '../messages';

describe('<LoginErrorMessage />', () => {
  // TODO figure out way to test display: none when show = false
  describe('<Wrapper />', () => {
    it('should render an <div> tag', () => {
      const renderedComponent = shallow(<Wrapper />);
      expect(renderedComponent.type()).toEqual('div');
    });

    it('should have a className attribute', () => {
      const renderedComponent = shallow(<Wrapper />);
      expect(renderedComponent.prop('className')).toBeDefined();
    });

    it('should adopt a valid attribute', () => {
      const id = 'test';
      const renderedComponent = shallow(<Wrapper id={id} />);
      expect(renderedComponent.prop('id')).toEqual(id);
    });

    it('should not adopt an invalid attribute', () => {
      const renderedComponent = shallow(<Wrapper attribute={'test'} />);
      expect(renderedComponent.prop('attribute')).toBeUndefined();
    });
  });

  it('should have an Alert', () => {
    const renderedComp = shallow(
      <LoginErrorMessage loginError={false} loginErrorMsg={''} />
    );
    expect(renderedComp.find('Alert').length).toBeTruthy();
  });

  it('should used default MSG when loginErrorMsg id falsey', () => {
    const renderedComp = shallow(
      <LoginErrorMessage loginError={false} loginErrorMsg={''} />
    );
    expect(renderedComp.contains(DEFAULT_MSG)).toBeTruthy();
  });

  it('should used passed message for loginErrorMsg', () => {
    const renderedComp = shallow(
      <LoginErrorMessage loginError={false} loginErrorMsg={'rememberMe'} />
    );
    const expectedFormattedMessage = (<FormattedMessage {...messages.rememberMe} />);
    expect(renderedComp.contains(expectedFormattedMessage)).toBeTruthy();
  });
});
