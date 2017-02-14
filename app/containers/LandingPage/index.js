/*
 * LandingPage
 *
 */
import H2 from 'components/H2';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Button, Glyphicon, Col } from 'react-bootstrap';
import { SliderPanel, SliderText, SliderImg, SliderWrapper } from './slider/Slider';
import { Subtext } from './slider/Subtext';
import { FeatureWrapper, FeatureIcon, FeatureText } from './slider/Features';


const Slider = require('react-slick');

export class LandingPage extends React.Component { // eslint-disable-line react/prefer-stateless-function


  render() {
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };


    return (
      <div>
        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        >
        </script>
        <link
          rel="stylesheet" type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet" type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <Helmet
          title="LandingPage"
          meta={[
            { name: 'description', content: 'Description of LandingPage' },
          ]}
        />

        <Slider {...sliderSettings}>
          <SliderPanel>
            <Col xs={8}>
              <SliderImg src="https://placeimg.com/640/300/tech" />
            </Col>
            <Col xs={4}>
              <SliderText>Here&apos;s one reason Velo is the bomb.com.</SliderText>
              <div className="text-center">
                <Button bsStyle="success">Learn More!</Button>
              </div>
            </Col>
          </SliderPanel>
          <SliderPanel>
            <Col xs={8}>
              <SliderImg src="https://placeimg.com/640/300/tech" />
            </Col>
            <Col xs={4}>
              <SliderText>Here&apos;s another reason Velo is super awesome!</SliderText>
              <div className="text-center">
                <Button bsStyle="success">Seriously, Learn More!</Button>
              </div>
            </Col>
          </SliderPanel>
        </Slider>

        <Subtext>
          <h3>
            <i>Hello there! Velo is the greatest thing to ever exist on this planet.
              You should really learn more about Velo. Why not click the button below?</i>
          </h3>
          <p><Button bsStyle="success">Learn more!</Button></p>
        </Subtext>

        <div className="container">
          <FeatureWrapper>
            <Col sm={4}>
              <FeatureIcon>
                <Glyphicon glyph="fire"></Glyphicon>
              </FeatureIcon>
              <FeatureText>Here&apos;s one neat feature we&apos;re awesome at.</FeatureText>
            </Col>
          </FeatureWrapper>
          <FeatureWrapper>
            <Col sm={4}>
              <FeatureIcon>
                <Glyphicon glyph="leaf"></Glyphicon>
              </FeatureIcon>
              <FeatureText>Here&apos;s another neat feature we&apos;re awesome at.</FeatureText>
            </Col>
          </FeatureWrapper>
          <FeatureWrapper>
            <Col sm={4}>
              <FeatureIcon>
                <Glyphicon glyph="cloud"></Glyphicon>
              </FeatureIcon>
              <FeatureText>Cloud storage is awesome! Wouldn&apos;t you agree?</FeatureText>
            </Col>
          </FeatureWrapper>
        </div>

        <H2>See what users have to say...</H2>
        <SliderWrapper>
          <Slider {...sliderSettings}>
            <SliderPanel>
              <Col xs={4}>
                <SliderImg src="https://placeimg.com/300/200/animals" />
              </Col>
              <Col xs={8}>
                <SliderText>
                  <i>&quot;Forget about Jello. Sign up for Velo.&quot;</i>
                  <p>--Bowser, kidnapper of princesses</p>
                </SliderText>
              </Col>
            </SliderPanel>
            <SliderPanel>
              <Col xs={4}>
                <SliderImg src="https://placeimg.com/300/200/animals" />
              </Col>
              <Col xs={8}>
                <SliderText>
                  <i>&quot;With Velo in my life, I feel truly... #blessed.&quot;</i>
                  <p> --Ned Stark, Lord of Winterfell</p>
                </SliderText>
              </Col>
            </SliderPanel>
          </Slider>
        </SliderWrapper>
      </div>

    );
  }
}

LandingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(LandingPage);
