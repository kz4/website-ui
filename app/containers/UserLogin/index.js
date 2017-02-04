/*
 *
 * UserLogin
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { changeUsername } from './actions';
import { createStructuredSelector } from 'reselect';
import makeSelectUserLogin from './selectors';
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
                    <input type="password" className="form-control" id="password" />
                      <span className="help-block"></span>
                  </div>
                  <div id="loginErrorMsg" className="alert alert-error hide">Wrong username og password</div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" name="remember" id="remember" /> Remember login
                    </label>
                    <p className="help-block">(if this is a private computer)</p>
                  </div>
                  <button type="submit" className="btn btn-success btn-block">Login</button>
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
  dispatch: PropTypes.func.isRequired,
  onChangeUsername: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  UserLogin: makeSelectUserLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch, // do we need this here?
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
