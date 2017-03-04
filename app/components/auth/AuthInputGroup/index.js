import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const AuthInputGroup = (props) => (
  <FormGroup>
    <ControlLabel htmlFor={props.uid}>{props.display}</ControlLabel>
    <FormControl
      type="text"
      id={props.uid}
      onChange={props.onChange}
    />
    <span className="help-block"></span>
  </FormGroup>
);

AuthInputGroup.propTypes = {
  uid: PropTypes.string.isRequired,
  display: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AuthInputGroup;
