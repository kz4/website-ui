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

    const cellEdit = {
      mode: 'click',
      blurToSave: true
    };

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
        <p>{this.props.projects}</p>
        <Col xs={9}>
          <BootstrapTable
            data={this.props.projects}
            cellEdit={ cellEdit }
            striped hover condensed>
            <TableHeaderColumn dataField="project_id" isKey>ID</TableHeaderColumn>
            <TableHeaderColumn dataField="project_name">Project Name</TableHeaderColumn>
            <TableHeaderColumn dataField="project_description">Description</TableHeaderColumn>
          </BootstrapTable>
        </Col>
      </div>
    );
  }
}

ProjectList.propTypes = {
  // projects: PropTypes.object,
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
