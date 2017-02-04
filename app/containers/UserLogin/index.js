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
import { onChangeUsername, onDoLogIn, onChangePassword } from './actions';
// import makeSelectUserLogin from './selectors';
// import messages from './messages';

export class UserLogin extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <div className="well">
                <form id="loginForm" method="POST" action="/login/" noValidate="novalidate">
                  <div className="form-group">
                    <label htmlFor="username" className="control-label">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      onChange={this.props.onChangeUsername}
                    />
                    <span className="help-block"></span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="control-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      onChange={this.props.onChangePassword}
                    />
                    <span className="help-block"></span>
                  </div>
                  <div id="loginErrorMsg" className="alert alert-error hide">Wrong username og password</div>
                  <div className="checkbox">
                    <label htmlFor="remember">
                      <input type="checkbox" name="remember" id="remember" /> Remember login
                    </label>
                    <p className="help-block">(if this is a private computer)</p>
                  </div>
                  <Button bsStyle="success" onClick={this.props.onDoLogIn}> Log In </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
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
