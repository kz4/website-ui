/**
 * Created by Nivi on 13/02/17.
 */

import React, { PropTypes } from 'react';
import Button from 'react-bootstrap';
import Glyphicon from 'react-bootstrap';

const EditSaveButton = (props) => {
  let inside;
  if(props.isEditable) {
    inside = (<Button bsStyle="link" href={'/'}>Save&nbsp;<Glyphicon glyph="floppy-disk"></Glyphicon></Button>)
  } else {
    inside = (<Button bsStyle="link" href={'/'}>Edit Project&nbsp;<Glyphicon glyph="pencil"></Glyphicon></Button>);
  }
  return (
    <div>
      {inside}
    </div>
  );
  };

  EditSaveButton.propTypes = {
    isEditable: PropTypes.bool.isRequired,
  };

  export default EditSaveButton;

