import React from 'react';

import NavBar from './NavBar';

// At the moment this is stateless, but once we add login and register, it respond to state
function Header() { // eslint-disable-line react/prefer-stateless-function
  return (
    <NavBar></NavBar>
  );
}

export default Header;
