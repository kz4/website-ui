import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Alert } from 'react-bootstrap';
import messages from './messages';

export const showWrapper = (props) => props.show ? '' : 'display: none;';
export const Wrapper = styled.div`
  ${showWrapper}
`;

export const DEFAULT_MSG = (<FormattedMessage {...messages.defaultLoginError} />);

const LogErrorMessage = (props) => {
  const msg =
    props.loginErrorMsg ? (<FormattedMessage {...messages[props.loginErrorMsg]} />) : DEFAULT_MSG;
  return (
    <Wrapper show={props.loginError}><Alert bsStyle="danger">{msg}</Alert></Wrapper>
  );
};

LogErrorMessage.propTypes = {
  loginErrorMsg: PropTypes.string.isRequired,
  loginError: PropTypes.bool.isRequired,
};

export default LogErrorMessage;
