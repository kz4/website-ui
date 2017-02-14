import React, { PropTypes } from 'react';

const EditableField = (props) => {
  let inside;
  if (props.isEditable) {
    inside = (<input onChange={(evt) => props.onChange(evt.target.value)} className="form-control" type="text" value={props.curVal} />);
  } else {
    inside = (<div>Not editing</div>);
  }
  return (
    <div>
      <b>Current Value: {props.curVal}</b>
      {inside}
    </div>
  );
};

EditableField.propTypes = {
  isEditable: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  curVal: PropTypes.string.isRequired,
};

export default EditableField;
