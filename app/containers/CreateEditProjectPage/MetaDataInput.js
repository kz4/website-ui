/**
 *
 * Created by brian on 2/23/17.
 */

import React from 'react';
import { FormControl } from 'react-bootstrap';

const MetaDataInput = (props) => {
  console.log('props', props);
  const metaData = JSON.stringify(props.metaData);
  const onComponentMetaDataChange = (evt) => props.onMetaDataUpdated(JSON.parse(evt.target.value));
  return (
    <FormControl
      componentClass="textarea"
      placeholder="Enter text"
      value={metaData}
      onChange={onComponentMetaDataChange}
    />);
};

export default MetaDataInput;
