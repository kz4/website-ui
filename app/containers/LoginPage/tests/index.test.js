import React from 'react';
import { shallow } from 'enzyme';
import AuthPage from 'components/auth/AuthPage';
import { FormattedMessage } from 'react-intl';
import UserLogin from 'containers/UserLogin';
import { Login } from '../index';
import messages from '../messages';

describe('<Login />', () => {
  const renderedComp = shallow(<Login />);
  it('should have AuthPage with User Login', () => {
    const titleMsg = (<FormattedMessage {...messages.header} />);
    expect(renderedComp.contains(<AuthPage title={titleMsg}><UserLogin /></AuthPage>)).toEqual(true);
  });
});
