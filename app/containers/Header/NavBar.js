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
          <Link to={'/'}>React-Bootstrap</Link>
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
          <NavItem to={'/viewData'} eventKey={4} >
            <FormattedMessage {...messages.viewData} />
          </NavItem>
          <NavDropdown eventKey={5} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={5.1}>Action</MenuItem>
            <MenuItem eventKey={5.2}>Another action</MenuItem>
            <MenuItem eventKey={5.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={5.3}>Separated link</MenuItem>
          </NavDropdown>
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
