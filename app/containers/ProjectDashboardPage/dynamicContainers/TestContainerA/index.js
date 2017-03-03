/*
 *
 * TestContainerA
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Button } from 'react-bootstrap';
import { createStructuredSelector } from 'reselect';
import makeSelectTestContainerA from './selectors';
import messages from './messages';
import { defaultAction } from './actions';

export class TestContainerA extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  // componentDidMount() {
  //   if (!this.props.init) {
  //     this.props.doInit();
  //   }
  // }

  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <Button onClick={this.props.testSaga}> testSaga </Button>
      </div>
    );
  }
}

TestContainerA.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  testSaga: PropTypes.func.isRequired,
};


export default (props) => {
  const mapStateToProps = createStructuredSelector({
    TestContainerA: makeSelectTestContainerA(),
  });

  function mapDispatchToProps(dispatch) {
    return {
      // dispatch,
      testSaga: () => dispatch(defaultAction()),
    };
  }

  const DynamicTestContainerA = connect(mapStateToProps, mapDispatchToProps)(TestContainerA);

  return (<DynamicTestContainerA {...props} />);
};
