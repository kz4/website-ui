/*
 *
 * UserLogin
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import AuthInputGroup from 'components/auth/AuthInputGroup';

import {
  makeChangeUsernameAction,
  makeDoLogInAction,
  makeChangePasswordAction,
  makeChangeRememberAction,
} from './actions';
import { USERNAME_UID, PASSWORD_UID } from './constants';
// import makeSelectUserLogin from './selectors';
import messages from './messages';
import LogInButton from './LogInButton';
import RememberMeCheckbox from './RememberMeCheckbox';
import LoginErrorMessage from './LoginErrorMessage';
import { makeSelectLoginError, makeSelectLoginErrorMsg } from './selectors';

// is there a better way? Will this have any problems?
// export for testing
export const usernameMsg = (<FormattedMessage {...messages.usernameInput} />);
export const passwordMsg = (<FormattedMessage {...messages.passwordInput} />);

export class UserLogin extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <AuthInputGroup
          uid={USERNAME_UID}
          display={usernameMsg}
          onChange={this.props.onChangeUsername}
        />
        <AuthInputGroup
          uid={PASSWORD_UID}
          display={passwordMsg}
          onChange={this.props.onChangePassword}
        />
        <div className="alert alert-error hide">Wrong username or password</div>
        <LoginErrorMessage
          loginError={this.props.loginError}
          loginErrorMsg={this.props.loginErrorMsg}
        />
        <RememberMeCheckbox onChangeRemember={this.props.onChangeRemember} />
        <LogInButton onDoLogIn={this.props.onDoLogIn} />
      </div>
    );
  }
}

UserLogin.propTypes = {
  onChangeUsername: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onChangeRemember: PropTypes.func.isRequired,
  onDoLogIn: PropTypes.func.isRequired,
  loginError: PropTypes.bool.isRequired,
  loginErrorMsg: PropTypes.string.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  loginError: makeSelectLoginError(),
  loginErrorMsg: makeSelectLoginErrorMsg(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(makeChangeUsernameAction(evt.target.value)),
    onChangePassword: (evt) => dispatch(makeChangePasswordAction(evt.target.value)),
    onChangeRemember: (evt) => dispatch(makeChangeRememberAction(evt.target.checked)),
    onDoLogIn: () => dispatch(makeDoLogInAction()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
