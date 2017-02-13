/*
 *
 * UserConsole
 *
 */
import Sidebar from 'components/Sidebar';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectUserConsole from './selectors';

export class UserConsole extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const options =
      [
        { name: 'Profile', link: '/landing' },
        { name: 'Projects', link: '/features' },
        { name: 'Cats', link: '/dashboard/cats' },
        { name: 'Dogs', link: '/dashboard/dogs' },
      ];
    return (
      <div>
        <Helmet
          title="UserConsole"
          meta={[
            { name: 'description', content: 'Description of UserConsole' },
          ]}
        />
        <Sidebar options={options} />
        <h1>{this.props.children}</h1>
      </div>
    );
  }
}

UserConsole.propTypes = {
  // dispatch: PropTypes.func,
  children: PropTypes.node,
};

const mapStateToProps = createStructuredSelector({
  UserConsole: makeSelectUserConsole(),
});

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(UserConsole);

export default connect(mapStateToProps)(UserConsole);
