
import React from 'react';
import BootstrapTableViewData from '../../components/BootstrapTable/BootstrapTableViewData.js'
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
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import { FormattedMessage } from 'react-intl';
import messages from '../../containers/ViewDataPage/messages.js';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

export default class ViewData extends React.Component{
  constructor()
  {
    super();
  }


  render()
  {
    const datasets = [
      {variable: 'Vhm',
        units: 'm s-1',
        description: 'mean horizontal wind speed',},
      {variable: 'dVh',
        units: 'm s-1',
        description: 'standard deviation of horizontal wind speed',},
      {variable: 'VhMax',
        units: 'm s-1',
        description: 'maximum horizontal wind speed during averaging time',},
      {variable: 'VhMin',
        units: 'm s-1',
        description: 'minimum horizontal wind speed during averaging time',},
      {variable: 'Azim',
        units: 'deg',
        description: 'wind direction in meteriological coordinates',},
      {variable: 'um',
        units: 'm s-1',
        description: 'mean zonal wind speed',},
      {variable: 'du',
        units: 'm s-1',
        description: 'standard deviation of zonal wind speed',},
      {variable: 'vm',
        units: 'm s-1',
        description: 'mean meridional wind speed',},
    ];

    const purposeMessage = (<FormattedMessage {...messages.purpose} />);
    const qualityMessage = (<FormattedMessage {...messages.quality} />);
    const referencesMessage = (<FormattedMessage {...messages.references} />);

    return (
      <Grid fluid={true}>
        <Row>
          <Panel header="Wind Energy" bsStyle="primary">
            <h3 title="purpose"> Purpose </h3>
            <p> {purposeMessage} </p>

            <h3> Data Quality </h3>
            <p> {qualityMessage} </p>

            <h3> References </h3>
            <p> {referencesMessage} </p>
            <Tabs>
            <Tab eventKey={1} title="Data">
            <br />
              <Col md={8}> <Panel header="Measurements">
                <Col md={12}><BootstrapTableViewData datasets = {datasets}/></Col>
              </Panel> </Col>
              <Col md={4}> <Panel header="Attachments">
                <ListGroup fill>
                  <ListGroupItem>
                    <a>Includes information on datafiles and instrument locations</a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <a bsStyle="link">Includes information on datafiles and instrument locations</a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <a bsStyle="link">Includes information on datafiles and instrument locations</a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <a bsStyle="link">Includes information on datafiles and instrument locations</a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <a bsStyle="link">Includes information on datafiles and instrument locations</a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <a bsStyle="link">Includes information on datafiles and instrument locations</a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <a bsStyle="link">Includes information on datafiles and instrument locations</a>
                  </ListGroupItem>
                  </ListGroup>
              </Panel> </Col>

          </Tab>
            <Tab eventKey={2} title="Images">
              <br />
              <Col xs={6} md={3}>
              <Thumbnail href="#" alt="171x180" src={require('../ViewData/w1.jpg')} />
              </Col>
              <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src={require('../ViewData/w3.jpg')} />
              </Col>
              <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src={require('../ViewData/w4.jpg')} />
              </Col>
              <Col xs={6} md={3}>
                <Thumbnail href="#" alt="171x180" src={require('../ViewData/w5.jpg')} />
              </Col>
            </Tab>
            </Tabs>
        </Panel>
        </Row>
      </Grid>
    );
  }




}
