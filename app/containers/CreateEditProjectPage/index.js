/*
 *
 * CreateEditProjectPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import { createStructuredSelector } from 'reselect';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import MetaDataInput from './MetaDataInput';
import {
  makeSelectMetaData,
  makeSelectImage,
  makeProjectTitle,
  makeProjectdescription,
  makeSelectSaveError,
  makeSelectSaveErrorMsg,
} from './selectors';
import { makeMetaDataUpdatedAction, onSaveAction } from './actions';
import SaveButton from './SaveButton';
import SaveErrorMessage from './SaveErrorMessage';

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
            <FormGroup>
              <ControlLabel>Image</ControlLabel>
              <FormControl
                type="text"
                value={this.props.image}
              />
            </FormGroup>

            <FormGroup>
              <ControlLabel>Project Title</ControlLabel>
              <FormControl
                type="text"
                value={this.props.projectTitle}>
              </FormControl>

              <FormGroup>
                <ControlLabel>Project Description</ControlLabel>
                <FormControl componentClass="textarea" value={this.props.projectDescription}></FormControl>
              </FormGroup>
            </FormGroup>
            <SaveErrorMessage
              saveError={this.props.saveError}
              saveErrorMsg={this.props.saveErrorMsg}
            />
            <SaveButton onDoSave={this.props.onDoSave} />
          </form>
        </div>
      </div>
    );
  }
}

CreateEditProjectPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onDoSave: PropTypes.func.isRequired,
  metaData: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  projectTitle: PropTypes.string.isRequired,
  saveError: PropTypes.bool.isRequired,
  saveErrorMsg: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  metaData: makeSelectMetaData(),
  image: makeSelectImage(),
  projectTitle: makeProjectTitle(),
  projectDescription: makeProjectdescription(),
  saveError: makeSelectSaveError(),
  saveErrorMsg: makeSelectSaveErrorMsg(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    metaDataUpdated: (newMetaData) => dispatch(makeMetaDataUpdatedAction(newMetaData)),
    onDoSave: () => dispatch(onSaveAction()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEditProjectPage);
