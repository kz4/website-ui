/*
 *
 * NiviHelloWorld
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { Button } from 'react-bootstrap';
import { makeSelectIsEditable, makeSelectExampleValue } from './selectors';
import EditableField from './EditableField';
import { makeToggleIsEditableAction, makeChangeExampleAction } from './actions';

export class NiviHelloWorld extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="NiviHelloWorld"
          meta={[
            { name: 'description', content: 'Description of NiviHelloWorld' },
          ]}
        />
        <Button bsStyle="primary" onClick={this.props.toggleIsEditable}> Edit </Button>
        <hr />
        <EditableField isEditable={this.props.isEditable} onChange={this.props.onChangeExampleValue} curVal={this.props.exampleValue} />
      </div>
    );
  }
}

NiviHelloWorld.propTypes = {
  isEditable: PropTypes.bool.isRequired,
  toggleIsEditable: PropTypes.func.isRequired,
  onChangeExampleValue: PropTypes.func.isRequired,
  exampleValue: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isEditable: makeSelectIsEditable(),
  exampleValue: makeSelectExampleValue(),
});

function mapDispatchToProps(dispatch) {
  return {
    toggleIsEditable: () => { console.log('toggleIsEditable'); dispatch(makeToggleIsEditableAction()); },
    onChangeExampleValue: (exampleVal) => { console.log('onChangeExampleValue'); dispatch(makeChangeExampleAction(exampleVal)); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NiviHelloWorld);
