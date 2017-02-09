

/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
// import Helmet from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
//import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Practice from '../../components/Practice/Practice.js'
import BootstrapTable1 from '../../components/BootstrapTable/BootstrapTable1.js'
import Well from 'react-bootstrap/lib/Well';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Image from 'react-bootstrap/lib/Image';


const options = {
  onRowClick: function (row) {
    alert(`You click row id: ${row.id}`);
  },
  onRowDoubleClick: function (row) {
    alert(`You double click row id: ${row.id}`);
  },
}

// var project = [
//   {
//   "project_id": 1,
//   "description": "Project 1",
//   "project_name": "Project 1",
//   "img": "",
//   "essentials" : [{
//     "year":2010,
//     "budget": 10000,
//     "source": "abc",
//     "location": "abc"
//   }],
//   "related_docs" : [{
//     "id": 1 ,
//     "link":"www.googledocs.com/abc.pdf"
//   },
//     {
//       "id":2,
//       "link":"www.abc.com/123.png"
//     }
//   ],
//   "datasets" : [
//     {
//       "id" : "data 1",
//       "updated":2052017,
//       "start":1052008,
//       "end":12082016,
//       "count":500,
//       "size":2000
//     },
//     {
//       "id" :"data 2",
//       "updated":2052012,
//       "start":1052007,
//       "end":12082011,
//       "count":800,
//       "size":3000
//     }
//   ]
// }];

export default class ProjectPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    //json used to display dataset table
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
      <div>
        <Grid fluid="true">
          <Row className="show-grid">
            <Col xs={12} md={8}><PageHeader>Astoria Atmospheric Data&nbsp;<small>Lorem ipsum lorem ipsum</small></PageHeader></Col>
            <Col xs={6} md={4}> <Button bsStyle="primary" href={'/'}>Upload new file</Button></Col>
          </Row>

          <Row>
            <Col xs={12} md={8}>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
            </Col>
            <Col xs={6} md={4}><Image src={require('../ProjectPage/astoria_test.jpg')} responsive></Image></Col>
          </Row>

          <Row>
            <Col md={12}><Panel header="Data Sets"><BootstrapTable1 datasets = {datasets}/></Panel></Col>
          </Row>
        </Grid>
      </div>

    );
  }
}
