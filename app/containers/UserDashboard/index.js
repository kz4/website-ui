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
import { options } from './constants';
export class UserDashboard extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Helmet
          title="UserConsole"
          meta={[
            { name: 'description', content: 'Description of UserConsole' },
          ]}
        />
        <Sidebar options={options} />
        <p>{this.props.children}</p>
      </div>
    );
  }
}

UserDashboard.propTypes = {
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

// export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);

export default connect(mapStateToProps)(UserDashboard);
