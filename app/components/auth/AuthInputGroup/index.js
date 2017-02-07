import React, { PropTypes } from 'react';

const AuthInputGroup = (props) => (
  <div className="form-group">
    <label htmlFor={props.name} className="control-label">{props.name}</label>
    <input
      type="text"
      className="form-control"
      id={props.name}
      onChange={props.onChange}
    />
    <span className="help-block"></span>
  </div>
);

AuthInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AuthInputGroup;
