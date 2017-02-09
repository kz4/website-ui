/*
 *
 * UserLogin
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { Button } from 'react-bootstrap';

import AuthInputGroup from 'components/auth/AuthInputGroup';

import { onChangeUsername, onDoLogIn, onChangePassword, onChangeRemember } from './actions';
// import makeSelectUserLogin from './selectors';
import messages from './messages';

export class UserLogin extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const usernameMsg = (<FormattedMessage {...messages.usernameInput} />);
    const passwordMsg = (<FormattedMessage {...messages.passwordInput} />);
    const rememberMeMsg = (<FormattedMessage {...messages.rememberMe} />);
    const isPrivateComputerMsg = (<FormattedMessage {...messages.isPrivateComputer} />);
    const logInButtonMsg = (<FormattedMessage {...messages.logInButton} />);
    return (
      <div>
        <AuthInputGroup
          uid="username"
          display={usernameMsg}
          onChange={this.props.onChangeUsername}
        />
        <AuthInputGroup
          uid="password"
          display={passwordMsg}
          onChange={this.props.onChangePassword}
        />
        <div id="loginErrorMsg" className="alert alert-error hide">Wrong username og password</div>
        <div className="checkbox">
          <label htmlFor="remember">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              onChange={this.props.onChangeRemember}
            />
            {rememberMeMsg}
          </label>
          <p className="help-block">({isPrivateComputerMsg})</p>
        </div>
        <Button bsStyle="success" onClick={this.props.onDoLogIn}> {logInButtonMsg} </Button>
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

const mapStateToProps = createStructuredSelector({
  // UserLogin: makeSelectUserLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(onChangeUsername(evt.target.value)),
    onChangePassword: (evt) => dispatch(onChangePassword(evt.target.value)),
    onChangeRemember: (evt) => dispatch(onChangeRemember(evt.target.checked)),
    onDoLogIn: () => dispatch(onDoLogIn()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
