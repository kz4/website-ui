import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectProjectPageDomain} from './selectors';
import BootstrapTable1 from 'components/BootstrapTable/BootstrapTable1.js';
import { Button, Grid, Row, Col, Panel, Image, Tabs, Tab, Glyphicon } from 'react-bootstrap';
import VelloModal from 'components/ModelWrapper/modal';
import {editTextAreaAction, toggleIsEditbaleAction} from './actions';
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

const EditableTextArea = (props) => {
  console.log('props', props);
  if(props.isEditable) {
    return (<textarea className="form-control" rows="3" onChange={props.onChange} value={props.value} />);
  }
  return (<span>{props.value}</span>);
};

export class ProjectPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component

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
      <Grid fluid="true">
        <Row className="show-grid page-header">
          <Col md={12} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <h1 style={{display: 'inline-block'}}>BUOY&nbsp;Offshore Wind Energy - Buoy Lidar Project</h1>
            <div style={{marginLeft: '1em'}}>
              <Button bsStyle="primary" onClick={this.props.toggleIsEditable}>Edit Project&nbsp;<Glyphicon glyph="pencil"></Glyphicon></Button>
            </div>
          </Col>
        </Row>
        <Row className="show-grid">
          <Panel>
            <Col xs={12} md={8}>
              <h3>Project Metadata</h3>
              <ul style={{
                listStyle: 'none',
                fontSize: '1.25em'
              }}>
                <li>Location: Somewhere</li>
                <li>Year: 2007</li>
                <li>Instruments: Wind thingy, Water testmajigger, florb</li>
                <li>Salinity: Saltier than a saltine</li>
                <li>Boat: BoatyMcBoatFace</li>
              </ul>
            </Col>
            <Col xs={6} md={4}>
              <Image className="center-block" src={require('./astoria_test.jpg')} responsive></Image>
            </Col>
          </Panel>
        </Row>
        <Row className="show-grid">
          <Panel><Col xs={18} md={12}>
            <Tabs animation={true} defaultActiveKey={1} bsStyle="pills">
              <Tab eventKey={1} title="overview"><EditableTextArea onChange={this.props.getOnEditTextAreaFunction('overview')} isEditable={this.props.domain.isEditable} value={this.props.domain.overview} /></Tab>
              <Tab eventKey={2} title="objective"><EditableTextArea onChange={this.props.getOnEditTextAreaFunction('objective')} isEditable={this.props.domain.isEditable} value={this.props.domain.objective} /></Tab>
              <Tab eventKey={3} title="instruments"><EditableTextArea onChange={this.props.getOnEditTextAreaFunction('instruments')} isEditable={this.props.domain.isEditable} value={this.props.domain.instruments} /></Tab>
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

const mapStateToProps = createStructuredSelector({
  domain: selectProjectPageDomain(),
});

function mapDispatchToProps(dispatch) {
  return {
    // dispatch,
    getOnEditTextAreaFunction: (textArea) => (evt) => dispatch(editTextAreaAction(textArea, evt.target.value)),
    toggleIsEditable: () => dispatch(toggleIsEditbaleAction()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);

// export default connect(mapStateToProps)(ProjectPage);
