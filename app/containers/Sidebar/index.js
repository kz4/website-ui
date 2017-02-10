/*
 *
 * Sidebar
 *
 */

import React, { PropTypes } from 'react';
import { Button, Glyphicon, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectSidebar from './selectors';
import messages from './messages';
// import ReactSidebar from 'react-sidebar';

export class Sidebar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const sidebarContent = <b>Sidebar content</b>;
    return (
      <div>
        <Helmet
          title="Sidebar"
          meta={[
            { name: 'description', content: 'Description of Sidebar' },
          ]}
        />
        <FormattedMessage {...messages.header} />

        <Col xs={4}>
          <p>This is the sidebar</p>
        </Col>

      </div>
    );
  }
}

Sidebar.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

// const mapStateToProps = createStructuredSelector({
//   Sidebar: makeSelectSidebar(),
// });
//
// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

export default Sidebar;
