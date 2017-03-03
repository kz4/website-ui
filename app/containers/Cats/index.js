/*
 *
 * Cats
 *
 */

import React, { PropTypes } from 'react';
import { Image, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectCats from './selectors';

export class Cats extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Cats"
          meta={[
            { name: 'description', content: 'Description of Cats' },
          ]}
        />
        <Col xs={9}>
          <h1>I just love cats so much.</h1>
          <Image src="http://loremflickr.com/320/240/cat"></Image>
        </Col>
      </div>
    );
  }
}

Cats.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Cats: makeSelectCats(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cats);
