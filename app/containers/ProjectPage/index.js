/*
 *
 * ProjectPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectProjectPage from './selectors';
import messages from './messages';
import BootstrapTable1 from 'components/BootstrapTable/BootstrapTable1.js'
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Image from 'react-bootstrap/lib/Image';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import VelloModal from 'components/ModelWrapper/modal';

export class ProjectPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const datasets = [
      {id: 'data 1',
        updated: 2052017,
        start: 1052008,
        end: 12082016,
        count: 500,
        size: 2000,},
      {id:'data 2',
        updated: 2052012,
        start: 1052007,
        end: 12082011,
        count: 800,
        size: 3000,},
    ];
    return (
      <Grid fluid>
        <Row className="show-grid page-header">
          <Col md={12}>
            <h1>BUOY&nbsp;Offshore Wind Energy - Buoy Lidar Project</h1>
            <Button bsStyle="link" href={'/'}>Edit Project&nbsp;<Glyphicon glyph="pencil"></Glyphicon></Button>
          </Col>
        </Row>
        <Row className="show-grid">
          <Panel>
            <Col xs={12} md={8}>Project Metadata</Col>
            <Col xs={6} md={4}></Col><Image responsive src="http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg" /></Panel>
        </Row>
        <Row className="show-grid">
          <Panel><Col xs={18} md={12}>
            <Tabs id="my-tabs" animation={true} defaultActiveKey={1} bsStyle="pills">
              <Tab eventKey={1} title="overview">A 2014 study estimated that U.S. offshore wind energy could generate enough power for 17 million homes. More than a dozen offshore wind farms are in various stages of development in the United States. The demonstration projects in Virginia and New Jersey receive funding from the U.S. Department of Energy (DOE).</Tab>
              <Tab eventKey={2} title="objective">How much electricity could ocean winds generate if they were harnessed? The DOE is attempting to answer that question with help from two massive 20,000-pound buoys deployed to measure offshore winds near Virginia Beach, Virginia and soon to the site of a proposed wind farm off the Atlantic City, New Jersey shore.Purchased by the DOE's Office of Energy Efficiency and Renewable Energy (EERE), the instrument-laden buoy deployed in Virginia was briefly commissioned at PNNL Marine Sciences Laboratory, operated by Battelle for DOE, at the mouth of Sequim Bay in Washington's Puget Sound.</Tab>
              <Tab eventKey={3} title="instruments">Both high-tech buoys use lidar (light detection and ranging) and other meteorological and oceanographic instruments that measure wind speed and direction and record air and sea temperature, barometric pressure, relative humidity, wave height and period, water conductivity, and subsurface ocean currents. The buoys will gather data to help characterize offshore winds. The information will help validate wind-resource models used to estimate the potential for generating energy from U.S. ocean winds.Data from the buoys also will be used to gain a better understanding of air-sea interactions and their impact on the potential for producing wind energy with turbines. Ultimately, the goal is to encourage private investment in large-scale offshore wind energy development.</Tab>
            </Tabs>
          </Col></Panel>
        </Row>
        <Row>
          <Panel header="Data Sets">

            <Col md={12}><VelloModal /></Col>
            <Col md={12}><BootstrapTable1 datasets = {datasets}/></Col>
          </Panel>
        </Row>
      </Grid>
    );
  }
}

ProjectPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ProjectPage: makeSelectProjectPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
