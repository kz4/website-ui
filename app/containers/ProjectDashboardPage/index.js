/*
 *
 * ProjectDashboardPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { Button } from 'react-bootstrap';
import { makeSelectContainers } from './selectors';
import messages from './messages';
import { makeNewContainerAction } from './actions';
import makeTestContainerA from './dynamicContainers/TestContainerA';
import makeTestContainerB from './dynamicContainers/TestContainerB';

const getContainerFromType = (containerData) => {
  containerData.key = containerData.locationInStore; // eslint-disable-line no-param-reassign
  switch (containerData.type) {
    case 'TestContainerA':
      return makeTestContainerA(containerData);
    case 'TestContainerB':
      return makeTestContainerB(containerData);
    default:
      throw new Error(`Invalid containerData.type ${containerData.type}`);
  }
};

export class ProjectDashboardPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="ProjectDashboardPage"
          meta={[
            { name: 'description', content: 'Description of ProjectDashboardPage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
        <Button onClick={this.props.makeNewComponent}> Make New TestContainerB </Button>
        <div>
          {
            JSON.stringify(this.props.containers)
          }
        </div>
        {this.props.containers.map(getContainerFromType)}
      </div>
    );
  }
}

ProjectDashboardPage.propTypes = {
  makeNewComponent: PropTypes.func.isRequired,
  containers: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  containers: makeSelectContainers(),
});

function mapDispatchToProps(dispatch) {
  return {
    makeNewComponent: () => dispatch(makeNewContainerAction({
      init: false,
      type: 'TestContainerB',
      text: 'world 1',
    })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDashboardPage);
