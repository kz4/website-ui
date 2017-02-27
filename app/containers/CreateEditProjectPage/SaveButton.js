/**
 * Created by Nivi on 25/02/17.
 */
import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const SaveButton = (props) => (
  <Button
    bsStyle="primary"
    onClick={props.onDoSave}
  >
    <FormattedMessage {...messages.saveButton} />
  </Button>
);

SaveButton.propTypes = {
  onDoSave: PropTypes.func.isRequired,
};

export default SaveButton;
