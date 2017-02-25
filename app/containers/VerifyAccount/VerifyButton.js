import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const VerifyButton = (props) => (
  <Button
    bsStyle="success"
    onClick={props.onDoVerify}
  >
    <FormattedMessage {...messages.verifyButton} />
  </Button>
);

VerifyButton.propTypes = {
  onDoVerify: PropTypes.func.isRequired,
};

export default VerifyButton;
