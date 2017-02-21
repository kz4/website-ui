import React from 'react';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import NavItem from './NavItem';
import messages from './messages';

// export default styled.div`
//   text-align: center;
// `;

function NavBar() {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to={'/'}>Velo</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem to={'/'} eventKey={1}>
            <FormattedMessage {...messages.home} />
          </NavItem>
          <NavItem to={'/features'} eventKey={2} >
            <FormattedMessage {...messages.features} />
          </NavItem>
          <NavItem to={'/projects'} eventKey={3} >
            <FormattedMessage {...messages.projects} />
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem to={'/login'} eventKey={1}>Login</NavItem>
          <NavItem to={'/register'} eventKey={2}>Register</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
