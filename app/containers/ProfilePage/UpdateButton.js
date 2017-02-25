import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

const UpdateButton = (props) => (
  <Button
    bsStyle="primary"
    onClick={props.onDoUpdate}>

    Update

  </Button>);

UpdateButton.propTypes = {
  onDoUpdate: PropTypes.func.isRequired,
};

export default UpdateButton;
