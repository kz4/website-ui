/*
 *
 * ProfilePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import H1 from 'components/H1';
import { makeProfileFormUpdatedAction } from './actions';

import { makeSelectProfileData } from './selectors';
import FormInput from './FormInput';
import UpdateButton from './UpdateButton';
import Wrapper from './Wrapper';
// import messages from './messages';

export class ProfilePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="ProfilePage"
          meta={[
            { name: 'description', content: 'Description of ProfilePage' },
          ]}
        />
        <Wrapper>
          <form className="form-horizontal" role="form">
            <H1>Profile</H1>
            <FormInput
              name="Name"
              value={this.props.profileData.name}
              updater={this.props.makeUpdater('name')}
            />

            <FormInput
              name="Email"
              value={this.props.profileData.email}
              updater={this.props.makeUpdater('email')}
            />

            <FormInput
              name="Phone"
              value={this.props.profileData.phone}
              updater={this.props.makeUpdater('phone')}
            />

            <div className="pull-right">
              <UpdateButton />
            </div>
          </form>
        </Wrapper>
      </div>
    );
  }
}

ProfilePage.propTypes = {
  makeUpdater: PropTypes.func.isRequired,
  profileData: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  profileData: makeSelectProfileData(),
});

function mapDispatchToProps(dispatch) {
  return {
    makeUpdater: (storeName) => (evt) => dispatch(makeProfileFormUpdatedAction(storeName, evt.target.value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
