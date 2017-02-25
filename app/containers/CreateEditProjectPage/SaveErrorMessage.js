/**
 * Created by Nivi on 25/02/17.
 */
import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Alert } from 'react-bootstrap';
import messages from './messages';

export const showWrapper = (props) => props.show ? '' : 'display: none;';
export const Wrapper = styled.div`
  ${showWrapper}
`;

export const DEFAULT_MSG = (<FormattedMessage {...messages.defaultSaveError} />);

const SaveErrorMessage = (props) => {
  const msg =
    props.saveErrorMsg ? (<FormattedMessage {...messages[props.saveErrorMsg]} />) : DEFAULT_MSG;
  return (
    <Wrapper show={props.saveError}><Alert bsStyle="danger">{msg}</Alert></Wrapper>
  );
};

SaveErrorMessage.propTypes = {
  saveErrorMsg: PropTypes.string.isRequired,
  saveError: PropTypes.bool.isRequired,
};

export default SaveErrorMessage;
