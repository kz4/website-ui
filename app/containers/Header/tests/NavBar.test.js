import React from 'react';
import { render } from 'enzyme';

import NavItem from '../NavItem';

describe('<NavItem>', () => {
  it('should render an <a> tag if to passed', () => {
    const renderedComponent = render(<NavItem to={'/'} eventKey={1}>foo</NavItem>);
    expect(renderedComponent.find('a').length).toEqual(1);
  });

  it('should not render an <a> tag if to not passed', () => {
    const renderedComponent = render(<NavItem eventKey={1}>foo</NavItem>);
    expect(renderedComponent.find('a').length).toEqual(1);
  });
});
