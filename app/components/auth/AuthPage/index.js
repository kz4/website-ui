import React, { PropTypes } from 'react';

const AuthPage = (props) => (
  <div className="container">
    <div className="row">
      <div className="col-sm-6 col-sm-offset-3">
        <div className="well">
          {props.children}
        </div>
      </div>
    </div>
  </div>
);

AuthPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthPage;
