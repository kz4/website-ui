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
import { Button } from 'react-bootstrap';
import { profileFormUpdated } from './actions';

import makeSelectProfilePage from './selectors';
import FormInput from './FormInput';
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
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <form className="form-horizontal" role="form">
              <div>

                <legend>Profile</legend>

                <FormInput
                  name="Name"
                  updater={this.props.makeUpdater('name')}
                />

                <FormInput
                  name="Email"
                  updater={this.props.makeUpdater('email')}
                />

                <FormInput
                  name="Phone"
                  updater={this.props.makeUpdater('phone')}
                />
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <div className="pull-right">
                      <Button bsStyle="primary">Save</Button>
                    </div>
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

ProfilePage.propTypes = {
  makeUpdater: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ProfilePage: makeSelectProfilePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    makeUpdater: (storeName) => (evt) => dispatch(profileFormUpdated(storeName, evt.target.value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
