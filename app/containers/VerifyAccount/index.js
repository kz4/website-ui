/*
 *
 * VerifyAccount
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import AuthInputGroup from 'components/auth/AuthInputGroup';
import VerifyButton from './VerifyButton';
import { makeSelectVerifyError, makeSelectVerifyErrorMsg } from './selectors';
import VerifyErrorMessage from './VerifyErrorMessage';
import { makeChangeVerifyCodeAction, makeVerifyAccountAction, makeChangeUsernameAction } from './actions';
import { VERIFY_UID, USERNAME_UID } from './constants';
import messages from './messages';

export const usernameMsg = (<FormattedMessage {...messages.usernameInput} />);
export const verifyMsg = (<FormattedMessage {...messages.verifyCodeInput} />);


export class VerifyAccount extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="VerifyAccount"
          meta={[
            { name: 'description', content: 'Description of VerifyAccount' },
          ]}
        />
        <h1>Verify Account</h1>
        <VerifyErrorMessage
          verifyError={this.props.verifyError}
          verifyErrorMsg={this.props.verifyErrorMsg}
        />
        <AuthInputGroup
          uid={USERNAME_UID}
          display={usernameMsg}
          onChange={this.props.onChangeUsername}
        />
        <AuthInputGroup
          uid={VERIFY_UID}
          display={verifyMsg}
          onChange={this.props.onChangeVerifyCode}
        />
        <VerifyButton onDoVerify={this.props.onDoVerify}
        />

      </div>
    );
  }
}

VerifyAccount.propTypes = {
  onChangeUsername: PropTypes.func.isRequired,
  onChangeVerifyCode: PropTypes.func.isRequired,
  onDoVerify: PropTypes.func.isRequired,
  verifyError: PropTypes.bool.isRequired,
  verifyErrorMsg: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  verifyError: makeSelectVerifyError(),
  verifyErrorMsg: makeSelectVerifyErrorMsg(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(makeChangeUsernameAction(evt.target.value)),
    onChangeVerifyCode: (evt) => dispatch(makeChangeVerifyCodeAction(evt.target.value)),
    onDoVerify: () => dispatch(makeVerifyAccountAction()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyAccount);
