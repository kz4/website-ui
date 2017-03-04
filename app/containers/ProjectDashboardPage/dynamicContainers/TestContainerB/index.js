/*
 *
 * TestContainerB
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { Button, Panel } from 'react-bootstrap';
import makeSelectTestContainerB from './selectors';
import messages from './messages';
import { defaultAction } from './actions';

export class TestContainerB extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Panel>
        <FormattedMessage {...messages.header} />
        <div>
          My id is: {this.props.testContainerB.frontendId}
        </div>
        <Button onClick={this.props.testSaga}> testSaga </Button>
      </Panel>
    );
  }
}

TestContainerB.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  testSaga: PropTypes.func.isRequired,
  testContainerB: PropTypes.object.isRequired,
};

export default (props) => {
  const frontendId = props.frontendId;
  // assert we have frontendId
  if (!frontendId) {
    throw new Error(`no frontendId for: ${JSON.stringify(props)}`);
  }

  const mapStateToProps = createStructuredSelector({
    testContainerB: makeSelectTestContainerB(frontendId),
  });

  function mapDispatchToProps(dispatch) {
    return {
      // dispatch,
      testSaga: () => dispatch(defaultAction({ frontendId })),
    };
  }

  const DynamicTestContainerB = connect(mapStateToProps, mapDispatchToProps)(TestContainerB);

  return (<DynamicTestContainerB {...props} />);
};
