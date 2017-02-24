import React from 'react';
import { Glyphicon, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const Heading = (props) => {
  console.log('heading props', props);
  return (
    <Wrapper>
      <h1>{props.title}</h1>
      <Button bsStyle="primary"
              href={'/'}>
        Edit Project <Glyphicon glyph="pencil"></Glyphicon>
      </Button>
    </Wrapper>
  )
};

export default Heading;

