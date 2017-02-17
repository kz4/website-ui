import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';


import messages from '../../containers/ViewDataPage/messages.js';
import ViewData from '../index';

describe('<ViewData />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(
      <ViewData />
    );
    expect(renderedComponent.contains(
      <p>
        <FormattedMessage {...messages.purpose} />
      </p>
    )).toBe(true);
  });
});
