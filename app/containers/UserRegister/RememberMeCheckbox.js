import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const RememberMeCheckbox = (props) => (
  <div className="checkbox">
    <label htmlFor="remember">
      <input
        type="checkbox"
        name="remember"
        id="remember"
        onChange={props.onChangeRemember}
      />
      <FormattedMessage {...messages.rememberMe} />
    </label>
    <p className="help-block">(<FormattedMessage {...messages.isPrivateComputer} />)</p>
  </div>
);

RememberMeCheckbox.propTypes = {
  onChangeRemember: PropTypes.func.isRequired,
};

export default RememberMeCheckbox;
