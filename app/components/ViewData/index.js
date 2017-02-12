
import React from 'react';
import BootstrapTable1 from '../../components/BootstrapTable/BootstrapTable1.js'
import Button from 'react-bootstrap/lib/Button';
import Well from 'react-bootstrap/lib/Well';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Image from 'react-bootstrap/lib/Image';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';
import Thumbnail from 'react-bootstrap/lib/Thumbnail'

export default class ViewData extends React.Component{
  constructor()
  {
    super();
  }


  render()
  {
    const datasets = [
      {id: 'data 1',
        updated: 2052017,
        start: 1052008,
        end: 12082016,
        count: 500,
        size: 2000,},
      {id: 'data 2',
        updated: 2052017,
        start: 1052008,
        end: 12082016,
        count: 500,
        size: 2000,},
      {id: 'data 3',
        updated: 2052017,
        start: 1052008,
        end: 12082016,
        count: 500,
        size: 2000,},
      {id: 'data 4',
        updated: 2052017,
        start: 1052008,
        end: 12082016,
        count: 500,
        size: 2000,},
      {id: 'data 5',
        updated: 2052017,
        start: 1052008,
        end: 12082016,
        count: 550,
        size: 2400,},
      {id:'data 6',
        updated: 2052012,
        start: 1052007,
        end: 12082011,
        count: 800,
        size: 3000,},
    ];
    return (
      <Grid fluid="true">
        <Row>
          <Panel header="Wind Energy">
            <Tabs>
            <Tab eventKey={1} title="Data">
              <Col md={12}><BootstrapTable1 datasets = {datasets}/></Col>
          </Tab>
            <Tab eventKey={2} title="Charts"></Tab>
            <Tab eventKey={3} title="Images">
              <Col xs={6} md={3}>
              <Thumbnail href="#" alt="191x190" src={require('../ViewData/wind-img1.jpg')} />
              </Col>
              <Col xs={6} md={3}>
              <Thumbnail href="#" alt="171x180" src={require('../ViewData/wind-img2.jpg')} />
              </Col>
              <Col xs={6} md={3}>
              <Thumbnail href="#" alt="171x180" src={require('../ViewData/wind-img1.jpg')} />
              </Col>
              <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src={require('../ViewData/wind-img1.jpg')} />
              </Col>
              <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src={require('../ViewData/wind-img1.jpg')} />
              </Col>
              <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src={require('../ViewData/wind-img1.jpg')} />
              </Col>
            </Tab>
            </Tabs>
        </Panel>
        </Row>
      </Grid>
    );
  }




}
