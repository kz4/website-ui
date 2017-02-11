import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import messages from './messages';
import { FormattedMessage } from 'react-intl';

const LogInButton = (props) => (
  <Button
    bsStyle="success"
    onClick={props.onDoLogIn}
  >
    <FormattedMessage {...messages.logInButton} />
  </Button>
);

LogInButton.propTypes = {
  onDoLogIn: PropTypes.func.isRequired,
};

export default LogInButton;
