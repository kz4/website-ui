import React from 'react';
import { shallow } from 'enzyme';
import { Sidebar } from 'components/Sidebar';
import { UserDashboard } from '../index';
import { options } from '../constants';


describe('<UserDashboard />', () => {
  const renderedComp = shallow(<UserDashboard></UserDashboard>);
  it('Should have a Sidebar component', () => {
    expect(renderedComp.contains(<Sidebar options={options}></Sidebar>)).toEqual(true);
  });
});
