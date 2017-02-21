/**
*
* Sidebar
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Col, Nav, NavItem } from 'react-bootstrap';

function Sidebar(props) {

  const names = props.options.map((val, index) =>
      <li key={index.toString()}>
        <Link
          to={val.link}
          activeClassName="active"
        >
          {val.name}
        </Link>
      </li>
  );
  return (
    <div>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
      <Col xs={3}>
        <ul className="nav nav-pills nav-stacked">
        {names}
        </ul>
      </Col>
    </div>
  );
}

Sidebar.propTypes = {
  options: PropTypes.array.isRequired,
};

export default Sidebar;
