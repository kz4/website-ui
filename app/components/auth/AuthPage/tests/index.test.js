import React from 'react';
import { shallow } from 'enzyme';
import AuthPage from '../index';

describe('<AuthPage />', () => {
  const renderedComp = shallow(<AuthPage title="my title"><div id="foo">fooText</div></AuthPage>);

  it('should display the children', () => {
    expect(renderedComp.contains(<div id="foo">fooText</div>)).toBeTruthy();
  });

  it('should display the title', () => {
    expect(renderedComp.contains('my title')).toBeTruthy();
  });
});
