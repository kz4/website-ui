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

import { onChangeUsername, onDoLogIn, onChangePassword, onChangeRemember } from './actions';
import { USERNAME_UID, PASSWORD_UID } from './constants';
// import makeSelectUserLogin from './selectors';
import messages from './messages';
import LogInButton from './LogInButton';
import RememberMeCheckbox from './RememberMeCheckbox';

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
        <div id="loginErrorMsg" className="alert alert-error hide">Wrong username or password</div>
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
};

export const mapStateToProps = createStructuredSelector({
  // UserLogin: makeSelectUserLogin(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(onChangeUsername(evt.target.value)),
    onChangePassword: (evt) => dispatch(onChangePassword(evt.target.value)),
    onChangeRemember: (evt) => dispatch(onChangeRemember(evt.target.checked)),
    onDoLogIn: () => dispatch(onDoLogIn()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
