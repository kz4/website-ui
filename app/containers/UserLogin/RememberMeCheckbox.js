import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { ControlLabel, Checkbox, HelpBlock } from 'react-bootstrap';
import messages from './messages';

const RememberMeCheckbox = (props) => (
  <Checkbox
    type="checkbox"
    name="remember"
    id="remember"
    onChange={props.onChangeRemember}
  >
    <ControlLabel htmlFor="remember">
      <FormattedMessage {...messages.rememberMe} />
      <HelpBlock>(<FormattedMessage {...messages.isPrivateComputer} />)</HelpBlock>
    </ControlLabel>
  </Checkbox>
);

RememberMeCheckbox.propTypes = {
  onChangeRemember: PropTypes.func.isRequired,
};

export default RememberMeCheckbox;
