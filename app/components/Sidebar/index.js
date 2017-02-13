/**
*
* Sidebar
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';

function Sidebar(props) {
  const names = props.options.map((val, index) =>
    <div key={index.toString()}>
      <Link to={val.link} activeStyle={{ color: 'red' }}>
        {val.name}
      </Link>
    </div>);
  return (
    <div>
      <Col xs={3}>
        {names}
      </Col>
    </div>
  );
}

Sidebar.propTypes = {
  options: PropTypes.array.isRequired,
};

export default Sidebar;
