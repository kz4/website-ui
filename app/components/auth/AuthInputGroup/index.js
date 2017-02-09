import React, { PropTypes } from 'react';

const AuthInputGroup = (props) => (
  <div className="form-group">
    <label htmlFor={props.uid} className="control-label">{props.display}</label>
    <input
      type="text"
      className="form-control"
      id={props.uid}
      onChange={props.onChange}
    />
    <span className="help-block"></span>
  </div>
);

AuthInputGroup.propTypes = {
  uid: PropTypes.string.isRequired,
  display: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AuthInputGroup;
