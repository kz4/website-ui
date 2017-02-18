import React from 'react';
import { shallow } from 'enzyme';
import AuthPage from 'components/auth/AuthPage';
import { FormattedMessage } from 'react-intl';
import UserRegister from 'containers/UserRegister';
import { Register, mapDispatchToProps } from '../index';
import messages from '../messages';

describe('<Register />', () => {
  const renderedComp = shallow(<Register />);
  it('should have AuthPage with User Login', () => {
    const titleMsg = (<FormattedMessage {...messages.header} />);
    expect(renderedComp.contains(<AuthPage title={titleMsg}><UserRegister /></AuthPage>)).toEqual(true);
  });

  describe('mapDispatchToProps', () => {
    it('should return an empty object', () => {
      expect(mapDispatchToProps()).toEqual({});
    });
  });
});
