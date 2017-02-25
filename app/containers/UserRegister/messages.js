/*
 * UserRegister Messages
 *
 * This contains all the text for the UserRegister component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.UserRegister.header',
    defaultMessage: 'This is UserRegister container !',
  },
  usernameInput: {
    id: 'app.containers.register_page.username',
    defaultMessage: 'Username',
  },
  emailInput: {
    id: 'app.containers.register_page.email',
    defaultMessage: 'Email',
  },
  passwordInput: {
    id: 'app.containers.register_page.password',
    defaultMessage: 'Password',
  },
  verifyPasswordInput: {
    id: 'app.containers.register_page.verify_password',
    defaultMessage: 'Verify Password',
  },
  isPrivateComputer: {
    id: 'app.containers.register_page.computer_is_private',
    defaultMessage: 'if this is a private computer',
  },
  registerButton: {
    id: 'app.containers.register_page.log_in',
    defaultMessage: 'Register',
  },
});
