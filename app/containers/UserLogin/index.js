/*
 *
 * UserLogin
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectUserLogin from './selectors';
// import messages from './messages';

export class UserLogin extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <form className="form-signin mg-btm">
              <h3 className="heading-desc">
                <button type="button" className="close pull-right" aria-hidden="true">×</button>
                Login to Bootsnipp</h3>
              <div className="social-box">
                <div className="row mg-btm">
                  <div className="col-md-12">
                    <a href="https://www.google.com/" className="btn btn-primary btn-block">
                      <i className="icon-facebook"></i>    Login with Facebook
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <a href="https://www.google.com/" className="btn btn-info btn-block" >
                      <i className="icon-twitter"></i>    Login with Twitter
                    </a>
                  </div>
                </div>
              </div>
              <div className="main">
                <input type="text" className="form-control" placeholder="Email" autoFocus />
                <input type="password" className="form-control" placeholder="Password" />
                    Are you a business? <a href=""> Get started here</a>
                <span className="clearfix"></span>
              </div>
              <div className="login-footer">
                <div className="row">
                  <div className="col-xs-6 col-md-6">
                    <div className="left-section">
                      <a href="">Forgot your password?</a>
                      <a href="">Sign up now</a>
                    </div>
                  </div>
                  <div className="col-xs-6 col-md-6 pull-right">
                    <button type="submit" className="btn btn-large btn-danger pull-right">Login</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

UserLogin.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  UserLogin: makeSelectUserLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
