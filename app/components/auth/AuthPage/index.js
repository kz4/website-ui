import React, { PropTypes } from 'react';
import { Col, Well, Row, Grid } from 'react-bootstrap';

const AuthPage = (props) => (
  <Grid>
    <Row>
      <Col sm={6} smOffset={3}>
        <h1>{props.title}</h1>
        <Well>
          {props.children}
        </Well>
      </Col>
    </Row>
  </Grid>
);

AuthPage.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
};

export default AuthPage;
