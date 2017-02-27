import React, { PropTypes } from 'react';
import styled from 'styled-components';

const MetaDataListItem = styled.li``;

const MetaDataList = styled.ul`
padding-left: 1em;
list-style: none;
`;

const getMetaDataList = (obj) => (
  <MetaDataList>
    {
      Object.entries(obj).map(([key, value], reactKey) => {
        if (typeof value === 'string') {
          return (<MetaDataListItem key={reactKey}>{key}: {value}</MetaDataListItem>);
        }
        // else is object
        const innerList = getMetaDataList(value);
        return (
          <MetaDataListItem key={reactKey}>{key}: <MetaDataList>{innerList}</MetaDataList></MetaDataListItem>
        );
      })
    }
  </MetaDataList>
);

const MetaDataDisplay = (props) => getMetaDataList(props.metaData);


MetaDataDisplay.propTypes = {
  metaData: PropTypes.object.isRequired,
};

export default MetaDataDisplay;
