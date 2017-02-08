import React, { PropTypes } from 'react';

const ProjectPage = (props) => (
  <div className="container">
    <div className="row">
      <div className="col-sm-6 col-sm-offset-3">
        <h1>{props.project_id}</h1>
        <div className="well">
          {props.description}
        </div>
      </div>
    </div>
  </div>
);

ProjectPage.propTypes = {

  project_id: PropTypes.string.isRequired,

};

export default ProjectPage;
