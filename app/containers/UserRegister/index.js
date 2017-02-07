/*
 *
 * UserRegister
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { Button } from 'react-bootstrap';

import AuthPage from 'components/auth/AuthPage';
import AuthInputGroup from 'components/auth/AuthInputGroup';

import { onChangeUsername, onDoRegister, onChangePassword } from './actions';
// import makeSelectUserRegister from './selectors';
// import messages from './messages';

export class UserRegister extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AuthPage title="Register">
        <AuthInputGroup name="Username" onChange={this.props.onChangeUsername} />
        <AuthInputGroup name="Password" onChange={this.props.onChangePassword} />
        <AuthInputGroup name="Verify Password" onChange={this.props.onChangePassword} />
        <div id="registerErrorMsg" className="alert alert-error hide">Wrong username og password</div>
        <Button bsStyle="success" onClick={this.props.onDoRegister}> Register </Button>
      </AuthPage>
    );
  }
}

UserRegister.propTypes = {
  onChangeUsername: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onDoRegister: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  // UserRegister: makeSelectUserRegister(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(onChangeUsername(evt.target.value)),
    onChangePassword: (evt) => dispatch(onChangePassword(evt.target.value)),
    onDoRegister: () => dispatch(onDoRegister()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRegister);
