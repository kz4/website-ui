import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { NavItem } from 'react-bootstrap';

function MyNavItem(props) {
  const to = props.to;
  const content = (
    <NavItem eventKey={props.eventKey}>
      {React.Children.toArray(props.children)}
    </NavItem>
  );

  if (to) {
    return (
      <LinkContainer to={to}>
        {content}
      </LinkContainer>
    );
  }

  return content;
}

MyNavItem.propTypes = {
  to: React.PropTypes.string,
  eventKey: React.PropTypes.number,
  children: React.PropTypes.node,
};

export default MyNavItem;
