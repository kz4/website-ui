/*
 *
 * Login
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import UserLogin from 'containers/UserLogin';
import AuthPage from 'components/auth/AuthPage';
import messages from './messages';

export class Login extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const titleMsg = (<FormattedMessage {...messages.header} />);
    return (
      <div>
        <Helmet
          title="Login"
          meta={[
            { name: 'description', content: 'Description of Login' },
          ]}
        />
        <AuthPage title={titleMsg}>
          <UserLogin />
        </AuthPage>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  // Login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
