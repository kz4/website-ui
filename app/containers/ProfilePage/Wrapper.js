import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const SpacingDiv = styled.div`
  margin-bottom: 1em;
`;

const Wrapper = (props) => (
  <SpacingDiv>
    <Row>
      <Col sm={12}>
        {React.Children.toArray(props.children)}
      </Col>
    </Row>
  </SpacingDiv>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;

