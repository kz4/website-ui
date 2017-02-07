/*
 *
 * UserLogin
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { Button } from 'react-bootstrap';

import AuthPage from 'components/auth/AuthPage';
import AuthInputGroup from 'components/auth/AuthInputGroup';

import { onChangeUsername, onDoLogIn, onChangePassword } from './actions';
// import makeSelectUserLogin from './selectors';
// import messages from './messages';

export class UserLogin extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AuthPage>
        <AuthInputGroup name="username" onChange={this.props.onChangeUsername} />
        <AuthInputGroup name="password" onChange={this.props.onChangePassword} />
        <div id="loginErrorMsg" className="alert alert-error hide">Wrong username og password</div>
        <div className="checkbox">
          <label htmlFor="remember">
            <input type="checkbox" name="remember" id="remember" /> Remember login
          </label>
          <p className="help-block">(if this is a private computer)</p>
        </div>
        <Button bsStyle="success" onClick={this.props.onDoLogIn}> Log In </Button>
      </AuthPage>
    );
  }
}

UserLogin.propTypes = {
  onChangeUsername: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onDoLogIn: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  // UserLogin: makeSelectUserLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(onChangeUsername(evt.target.value)),
    onChangePassword: (evt) => dispatch(onChangePassword(evt.target.value)),
    onDoLogIn: () => dispatch(onDoLogIn()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
