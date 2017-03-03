/*
 *
 * UserRegister
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import AuthInputGroup from 'components/auth/AuthInputGroup';

import { onChangeUsernameAction, onChangeEmailAction, onDoRegisterAction, onChangePasswordAction, onChangeVerifyPasswordAction } from './actions';
import { USERNAME_UID, PASSWORD_UID, VERIFY_PASSWORD_UID, EMAIL_UID } from './constants';
// import makeSelectUserRegister from './selectors';
import messages from './messages';
import RegisterButton from './RegisterButton';

// is there a better way? Will this have any problems?
// export for testing
export const usernameMsg = (<FormattedMessage {...messages.usernameInput} />);
export const passwordMsg = (<FormattedMessage {...messages.passwordInput} />);
export const verifyPasswordMsg = (<FormattedMessage {...messages.verifyPasswordInput} />);
export const emailMsg = (<FormattedMessage {...messages.emailInput} />);


export class UserRegister extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
        <AuthInputGroup
          uid={VERIFY_PASSWORD_UID}
          display={verifyPasswordMsg}
          onChange={this.props.onChangeVerifyPassword}
        />
        <AuthInputGroup
          uid={EMAIL_UID}
          display={emailMsg}
          onChange={this.props.onChangeEmail}
        />
        <RegisterButton onDoRegister={this.props.onDoRegister} />
      </div>
    );
  }
}

UserRegister.propTypes = {
  onChangeUsername: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangeVerifyPassword: PropTypes.func.isRequired,
  onDoRegister: PropTypes.func.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  // UserRegister: makeSelectUserRegister(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(onChangeUsernameAction(evt.target.value)),
    onChangePassword: (evt) => dispatch(onChangePasswordAction(evt.target.value)),
    onChangeVerifyPassword: (evt) => dispatch(onChangeVerifyPasswordAction(evt.target.value)),
    onChangeEmail: (evt) => dispatch(onChangeEmailAction(evt.target.value)),
    onDoRegister: () => dispatch(onDoRegisterAction()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRegister);
