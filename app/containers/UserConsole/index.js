/*
 *
 * UserConsole
 *
 */
import Sidebar from './../Sidebar';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectUserConsole from './selectors';
import ReactDOM from 'react-dom';


import messages from './messages';

export class UserConsole extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="UserConsole"
          meta={[
            { name: 'description', content: 'Description of UserConsole' },
          ]}
        />
        <h1>Here's where the user console will be!</h1>
        <Sidebar></Sidebar>
      </div>


    );
  }
}


UserConsole.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  UserConsole: makeSelectUserConsole(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserConsole);
