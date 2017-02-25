/*
 *
 * ProjectPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectProjectPageDescription,
  makeSelectProjectPageMetaData,
  makeSelectProjectPageTitle
} from './selectors';
import { Grid, Row, Col, Panel, Image } from 'react-bootstrap';
import VelloModal from 'components/ModelWrapper/modal';
import Heading from './Heading';
import MetaDataDisplay from './MetaDataDisplay';

export class ProjectPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Login"
          meta={[
            { name: 'description', content: 'Description of Login' },
          ]}
        />
        <Grid fluid>
          <Row className="show-grid page-header">
            <Col md={12}>
              <Heading title={this.props.title} />
            </Col>
          </Row>
          <Row className="show-grid">
            <Panel>
              <Col xs={12} md={8}>
                Project Metadata
                <MetaDataDisplay metaData={this.props.metaData} />
              </Col>
              <Col xs={6} md={4}><Image responsive src="http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg" /></Col>
            </Panel>
          </Row>
          <Row className="show-grid">
            <Panel>
              <Col md={12}>
                {this.props.description}
              </Col>
            </Panel>
          </Row>
          <Row>
            <Panel header="Data Sets">
              <Col md={12}><VelloModal /></Col>
              { /* <Col md={12}><BootstrapTable1 datasets = {datasets}/></Col> */ }
            </Panel>
          </Row>
        </Grid>
      </div>
    );
  }
}

ProjectPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  title: makeSelectProjectPageTitle(),
  description: makeSelectProjectPageDescription(),
  metaData: makeSelectProjectPageMetaData(),
});

function mapDispatchToProps(/* dispatch */) {
  return {
    // dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
