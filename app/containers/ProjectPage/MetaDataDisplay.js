import React, {PropTypes} from 'react';
import styled from 'styled-components';
const MetaDataListItem = styled.li``;

const MetaDataList = styled.ul`
padding-left: 1em;
list-style: none;
`;

const getMetaDataList = (obj) => {
  return (
    <MetaDataList>
      {
        Object.entries(obj).map(([key, value], reactKey) => {
          if (typeof value === 'string') {
            return (<MetaDataListItem key={reactKey}>{key}: {value}</MetaDataListItem>);
          } else {
            const innerList = getMetaDataList(value);
            return (
              <MetaDataListItem key={reactKey}>{key}: <MetaDataList>{innerList}</MetaDataList></MetaDataListItem>)
          }
        })
      }
    </MetaDataList>);
};

const MetaDataDisplay = (props) => {
  return getMetaDataList(props.metaData);
};

MetaDataDisplay.propTypes = {
  metaData: PropTypes.object.isRequired,
};

export default MetaDataDisplay;
