/*
 *
 * CreateEditProjectPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import MetaDataInput from './MetaDataInput';
import { makeSelectMetaData } from './selectors';
// import messages from './messages';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { makeMetaDataUpdatedAction } from './actions';

export class CreateEditProjectPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="CreateEditProjectPage"
          meta={[
            { name: 'description', content: 'Description of CreateEditProjectPage' },
          ]}
        />
        <div>
          <form>
            <FormGroup
              controlId="formBasicText"
            >
              <ControlLabel>MetaData:</ControlLabel>
              <MetaDataInput
                metaData={this.props.metaData}
                onMetaDataUpdated={this.props.metaDataUpdated}
              />
              <FormControl.Feedback />
            </FormGroup>
          </form>
        </div>
      </div>
    );
  }
}

CreateEditProjectPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  metaData: makeSelectMetaData(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    metaDataUpdated: (newMetaData) => dispatch(makeMetaDataUpdatedAction(newMetaData))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEditProjectPage);
