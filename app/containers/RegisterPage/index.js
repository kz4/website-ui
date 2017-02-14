/*
 *
 * Register
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import UserRegister from 'containers/UserRegister';
import AuthPage from 'components/auth/AuthPage';
import messages from './messages';

export class Register extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const titleMsg = (<FormattedMessage {...messages.header} />);
    return (
      <div>
        <Helmet
          title="Register"
          meta={[
            { name: 'description', content: 'Description of Register' },
          ]}
        />
        <AuthPage title={titleMsg}>
          <UserRegister />
        </AuthPage>
      </div>
    );
  }
}

Register.propTypes = {
};

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(/* dispatch */) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
