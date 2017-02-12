/*
 *
 * NiviHelloWorld
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsEditable } from './selectors';
import messages from './messages';
import EditableField from './EditableField';
import { Button } from 'react-bootstrap';
import { toggleIsEditableAction } from './actions';

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
        <EditableField isEditable={this.props.isEditable} />
        <EditableField isEditable={this.props.isEditable} />
      </div>
    );
  }
}

NiviHelloWorld.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isEditable: PropTypes.bool.isRequired,
  toggleIsEditable: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isEditable: makeSelectIsEditable(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    toggleIsEditable: () => {console.log('toggleIsEditable') ; dispatch(toggleIsEditableAction())}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NiviHelloWorld);
