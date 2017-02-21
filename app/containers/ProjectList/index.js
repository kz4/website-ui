/*
 *
 * ProjectList
 *
 */

import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Col } from 'react-bootstrap';import makeSelectProjectList from './selectors';

// import { makeGetProjectsAction } from './actions';

export class ProjectList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Helmet
          title="ProjectList"
          meta={[
            { name: 'description', content: 'Description of ProjectList' },
          ]}
          link={[
            { rel: 'stylesheet', href: 'https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css' },
          ]}
        />
        <h2>Your Projects:</h2>
        <Col xs={9}>
          <BootstrapTable data={this.props.projects} striped hover condensed>
            <TableHeaderColumn dataField="name" isKey>Project Name</TableHeaderColumn>
            <TableHeaderColumn dataField="description">Description</TableHeaderColumn>
          </BootstrapTable>
        </Col>
      </div>
    );
  }
}

ProjectList.propTypes = {
  // projects: React.PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  projects: makeSelectProjectList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    // getProjects: (evt) => dispatch(makeGetProjectsAction(evt.target.value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
