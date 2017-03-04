import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

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
