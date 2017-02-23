import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const RegisterButton = (props) => (
  <Button
    bsStyle="success"
    onClick={props.onDoRegister}
  >
    <FormattedMessage {...messages.registerButton} />
  </Button>
);

RegisterButton.propTypes = {
  onDoRegister: PropTypes.func.isRequired,
};

export default RegisterButton;
