/**
 * Created by Nivi on 13/02/17.
 */
import React, { PropTypes } from 'react';
import PageHeader from 'react-bootstrap';

const EditableField = (props) => {
  let inside;
  if (props.isEditable) {
    inside = (<input className="form-control" type="text">Change Name</input>);
  } else {
    inside = (<PageHeader>BUOY&nbsp;<small>Offshore Wind Energy - Buoy Lidar Project</small></PageHeader>);
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
