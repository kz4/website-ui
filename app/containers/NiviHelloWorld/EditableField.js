import React, { PropTypes } from 'react';

const EditableField = (props) => {
  let inside;
  if (props.isEditable) {
    inside = (<input className="form-control" type="text" />);
  } else {
    inside = (<span>foo</span>);
  }
  return (
    <div>
      {inside}
    </div>
  );
};

EditableField.propTypes = {
  isEditable: PropTypes.bool.isRequired,
};

export default EditableField;
