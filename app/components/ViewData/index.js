
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
      {variable: 'Vhm',
        units: 'm s-1',
        description: 'mean horizontal wind speed',},
      {variable: 'Vhm',
        units: 'm s-1',
        description: 'mean horizontal wind speed',},
      {variable: 'Vhm',
        units: 'm s-1',
        description: 'mean horizontal wind speed',},
      {variable: 'Vhm',
        units: 'm s-1',
        description: 'mean horizontal wind speed',},
      {variable: 'Vhm',
        units: 'm s-1',
        description: 'mean horizontal wind speed',},
      {variable: 'Vhm',
        units: 'm s-1',
        description: 'mean horizontal wind speed',},
    ];

    const purposeMessage = (<FormattedMessage {...messages.purpose} />);
    const qualityMessage = (<FormattedMessage {...messages.quality} />);
    const referencesMessage = (<FormattedMessage {...messages.references} />);

    return (
      <Grid fluid="true">
        <Row>
          <Panel header="Wind Energy">
            <h3 title="purpose"> Purpose </h3>
            <p> {purposeMessage} </p>

            <h3> Data Quality </h3>
            <p> {qualityMessage} </p>

            <h3> References </h3>
            <p> {referencesMessage} </p>
            <Tabs>
            <Tab eventKey={1} title="Data">
            <br />
              <Col md={6}> <Panel header="Measurements">
                <Col md={12}><BootstrapTableViewData datasets = {datasets}/></Col>
              </Panel> </Col>
              <Col md={6}> <Panel header="Attachments">
                <ListGroup fill>
                  <ListGroupItem>
                    <Button bsStyle="link">Includes information on datafiles and instrument locations</Button>
                    <Button bsStyle="primary"> Download </Button>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Button bsStyle="link">Includes information on datafiles and instrument locations</Button>
                    <Button bsStyle="primary"> Download </Button>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Button bsStyle="link">Includes information on datafiles and instrument locations</Button>
                    <Button bsStyle="primary"> Download </Button>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Button bsStyle="link">Includes information on datafiles and instrument locations</Button>
                    <Button bsStyle="primary"> Download </Button>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Button bsStyle="link">Includes information on datafiles and instrument locations</Button>
                    <Button bsStyle="primary"> Download </Button>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Button bsStyle="link">Includes information on datafiles and instrument locations</Button>
                    <Button bsStyle="primary"> Download </Button>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Button bsStyle="link">Includes information on datafiles and instrument locations</Button>
                    <Button bsStyle="primary"> Download </Button>
                  </ListGroupItem>
                  </ListGroup>
              </Panel> </Col>

          </Tab>
            <Tab eventKey={2} title="Images">
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
