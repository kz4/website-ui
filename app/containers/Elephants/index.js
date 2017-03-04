/*
 *
 * Elephants
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Image, Col } from 'react-bootstrap';
import { createStructuredSelector } from 'reselect';
import makeSelectElephants from './selectors';


export class Elephants extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div>
                <Helmet
                    title="Elephants title"
                    meta={[
            { name: 'description', content: 'Description of Elephants' },
          ]}
                />
                <Col xs={9}>
                    <h1>I just love elephants so much.</h1>
                    <Image src="http://loremflickr.com/320/240/elephant"></Image>
                </Col>
            </div>
        );
    }
}

Elephants.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
    Elephants: makeSelectElephants(),
});

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Elephants);
