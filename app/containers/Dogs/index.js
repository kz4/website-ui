/*
 *
 * Dogs
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Image } from 'react-bootstrap';
import { createStructuredSelector } from 'reselect';
import makeSelectDogs from './selectors';


export class Dogs extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Dogs"
          meta={[
            { name: 'description', content: 'Description of Dogs' },
          ]}
        />
        <h1>I just love dogs so much.</h1>
        <Image src="http://loremflickr.com/320/240/dog"></Image>
      </div>
    );
  }
}

Dogs.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Dogs: makeSelectDogs(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dogs);
