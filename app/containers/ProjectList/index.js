/*
 *
 * ProjectList
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectProjectList from './selectors';
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
        />
        <p>{this.props.projects}</p>

      </div>
    );
  }
}

ProjectList.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  // getProjects: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ProjectList: makeSelectProjectList(),
});

function mapDispatchToProps(dispatch) {
  return {
    // getProjects: (evt) => dispatch(makeGetProjectsAction(evt.target.value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
