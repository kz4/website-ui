import React, { PropTypes } from 'react';
import { Glyphicon, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { LinkContainer } from 'react-router-bootstrap';
import { paths } from 'config';

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const Heading = (props) => {
  const pathname = paths.appPaths.project.editById(props.projectId);
  console.log('heading pathname', pathname);
  return (
    <Wrapper>
      <h1>{props.title}</h1>
      <LinkContainer to={{ pathname }}>
        <Button
          bsStyle="primary"
        >
          Edit Project <Glyphicon glyph="pencil"></Glyphicon>
        </Button>
      </LinkContainer>
    </Wrapper>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  projectId: PropTypes.any.isRequired, // should make more specific later
};

export default Heading;

