/*
 * UserLogin Messages
 *
 * This contains all the text for the UserLogin component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.UserLogin.header',
    defaultMessage: 'This is UserLogin container !',
  },
  usernameInput: {
    id: 'app.containers.login_page.username',
    defaultMessage: 'Username',
  },
  passwordInput: {
    id: 'app.containers.login_page.password',
    defaultMessage: 'Password',
  },
  rememberMe: {
    id: 'app.containers.login_page.rememberMe',
    defaultMessage: 'Remember Login',
  },
  isPrivateComputer: {
    id: 'app.containers.login_page.computer_is_private',
    defaultMessage: 'if this is a private computer',
  },
  logInButton: {
    id: 'app.containers.login_page.log_in',
    defaultMessage: 'Log In',
  },
});
