import React from 'react';
import { shallow } from 'enzyme';
import Grid from 'react-bootstrap/lib/Grid';
import { FormattedMessage } from 'react-intl';


import messages from '../messages';
import ViewData from 'components/ViewData';

describe('<ViewData />', () => {
  it('the ViewData should have text', () => {
    const renderedComponent = shallow(<ViewData />);
    expect(renderedComponent.contains(
      <Grid fluid={true}>
      </Grid>
    )).toBe(true);
  });
});
