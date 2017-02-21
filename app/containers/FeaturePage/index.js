/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { SliderPanel, SliderText, SliderImg, SliderWrapper } from './slider/Slider';
const Slider = require('react-slick');
export default class FeaturePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  constructor(props){
    super(props);
    this.state = {
      title:  "hello world",
    };


  }

  changeTitle(title)
  {
    console.log(title);
    this.setState({title: title});
  }

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
        <Slider {...sliderSettings}>
          <SliderPanel>
            <Col xs={8}>
              <SliderImg src="http://lorempixel.com/400/200/cats/" />
            </Col>
            <Col xs={4}>
              <SliderText>Here&apos;s one really sick feature of Velo. It's cats. </SliderText>
              <div className="text-center">
                <Button bsStyle="success">Learn more about cats!</Button>
              </div>
            </Col>
          </SliderPanel>
          <SliderPanel>
            <Col xs={8}>
              <SliderImg src="http://lorempixel.com/400/200/cats/" />
            </Col>
            <Col xs={4}>
              <SliderText>Here&apos;s another reason Velo is super awesome. It's also cats.</SliderText>
              <div className="text-center">
                <Button bsStyle="success">Seriously, Learn More!</Button>
              </div>
            </Col>
          </SliderPanel>
        </Slider>
      </div>);
    ;
  }
}
