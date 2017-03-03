/*
 *
 * TestContainerB
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { Button } from 'react-bootstrap';
import makeSelectTestContainerB from './selectors';
import messages from './messages';
import { defaultAction } from './actions';

export class TestContainerB extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <Button onClick={this.props.testSaga}> testSaga </Button>
      </div>
    );
  }
}

TestContainerB.propTypes = {
  dispatch: PropTypes.func.isRequired,
  testSaga: PropTypes.func.isRequired,
};

export default (props) => {
  const mapStateToProps = createStructuredSelector({
    TestContainerB: makeSelectTestContainerB(),
  });

  function mapDispatchToProps(dispatch) {
    return {
      dispatch,
      testSaga: () => dispatch(defaultAction()),
    };
  }

  const DynamicTestContainerB = connect(mapStateToProps, mapDispatchToProps)(TestContainerB);

  return (<DynamicTestContainerB {...props} />);
};
