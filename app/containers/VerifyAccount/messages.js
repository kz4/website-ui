/*
 * UserLogin Messages
 *
 * This contains all the text for the UserLogin component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  verifyCodeInput: {
    id: 'app.containers.verify_account.verify_code',
    defaultMessage: 'Verification code',
  },
  usernameInput: {
    id: 'app.containers.verify_account.username',
    defaultMessage: 'Username',
  },
  verifyButton: {
    id: 'app.containers.login_page.log_in',
    defaultMessage: 'Verify Account',
  },
  // Eventually the backend should be returning a constant
  defaultVerifyError: {
    id: 'app.containers.login_page.log_in',
    defaultMessage: 'Unable to verify account. Check your username and verification code.',
  },
});
