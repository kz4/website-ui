import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Alert } from 'react-bootstrap';
import messages from './messages';

export const showWrapper = (props) => props.show ? '' : 'display: none;';
export const Wrapper = styled.div`
  ${showWrapper}
`;

export const DEFAULT_MSG = (<FormattedMessage {...messages.defaultVerifyError} />);

const VerifyErrorMessage = (props) => {
  const msg =
    props.verifyErrorMsg ? (<FormattedMessage {...messages[props.verifyErrorMsg]} />) : DEFAULT_MSG;
  return (
    <Wrapper show={props.verifyError}><Alert bsStyle="danger">{msg}</Alert></Wrapper>
  );
};

VerifyErrorMessage.propTypes = {
  verifyErrorMsg: PropTypes.string.isRequired,
  verifyError: PropTypes.bool.isRequired,
};

export default VerifyErrorMessage;
