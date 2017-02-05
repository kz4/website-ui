/*
 * LandingPage
 * Attempting to recreate: https://bootstrapmaster.com/themes/free-bootstrap-themes/gotya-free-bootstrap-theme/
 *
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import DaSlider from './slider/DaSlider'
import {DaSlide, DaSlideH2, DaSlideCoolH2} from './slider/DaSlide';
import { Button } from 'react-bootstrap';
export class LandingPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></script>
        <Helmet
          title="LandingPage"
          meta={[
            { name: 'description', content: 'Description of LandingPage' },
          ]}
        />


        <div className="slider-wrapper">
          <DaSlideCoolH2> Hello </DaSlideCoolH2>
          <DaSlider>
            <DaSlide>
              <DaSlideH2>Twitter Bootstrap</DaSlideH2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
              <a href="https://www.google.com/" className="da-link">Read more</a>
              <div className="da-img"><img src={require('./img/parallax-slider/twitter.png')} alt="image01" />
              </div>
            </DaSlide>
            <DaSlide>
              <DaSlideH2>Responsive Design</DaSlideH2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
              <a href="https://www.google.com/" className="da-link">Read more</a>
              <div className="da-img"><img src={require('./img/parallax-slider/responsive.png')} alt="image02" /></div>
            </DaSlide>
            <DaSlide>
              <DaSlideH2>HTML5</DaSlideH2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
              <a href="https://www.google.com/" className="da-link">Read more</a>
              <div className="da-img"><img src={require('./img/parallax-slider/html5.png')} alt="image03" /></div>
            </DaSlide>
            <DaSlide>
              <DaSlideH2>CSS3</DaSlideH2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
              <a href="https://www.google.com/" className="da-link">Read more</a>
              <div className="da-img"><img src={require('./img/parallax-slider/css3.png')} alt="image04" /></div>
            </DaSlide>
            <nav className="da-arrows">
              <span className="da-arrows-prev"></span>
              <span className="da-arrows-next"></span>
            </nav>
          </DaSlider>
        </div>



        <div id="wrapper">
          <div className="container">
            <div className="hero-unit">
              <p>
                This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.
              </p>
              <p><a className="btn btn-success btn-large">Learn more &raquo;</a></p>
            </div>
            <div className="row">
              <div className="span4">
                <div className="icons-box">
                  <i className="ico-ok circle big"></i>
                  <div className="title"><h3>Easy to use</h3></div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                  </p>
                  <div className="clear"></div>
                </div>
              </div>

              <div className="span4">
                <div className="icons-box">
                  <i className="ico-ipad circle big"></i>
                  <div className="title"><h3>Responsive</h3></div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                  </p>
                  <div className="clear"></div>
                </div>
              </div>
              <div className="span4">
                <div className="icons-box">
                  <i className="ico-heart circle big"></i>
                  <div className="title"><h3>User friendly</h3></div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                  </p>
                  <div className="clear"></div>
                </div>
              </div>
            </div>
            <div className="clients-carousel">
              <ul className="slides clients">
                <li><img src={require('./img/logos/1.png')} alt="" /></li>
                <li><img src={require('./img/logos/2.png')} alt="" /></li>
                <li><img src={require('./img/logos/3.png')} alt="" /></li>
                <li><img src={require('./img/logos/4.png')} alt="" /></li>
                <li><img src={require('./img/logos/4.png')} alt="" /></li>
                <li><img src={require('./img/logos/6.png')} alt="" /></li>
                <li><img src={require('./img/logos/7.png')} alt="" /></li>
                <li><img src={require('./img/logos/8.png')} alt="" /></li>
                <li><img src={require('./img/logos/9.png')} alt="" /></li>
                <li><img src={require('./img/logos/10.png')} alt="" /></li>
              </ul>

            </div>

            <div className="row">

              <div className="icons-box-vert-container">

                <div className="span6">
                  <div className="icons-box-vert">
                    <i className="ico-ok ico-color circle-color big"></i>
                    <div className="icons-box-vert-info">
                      <h3>Easy to use</h3>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    </div>
                    <div className="clear"></div>
                  </div>
                </div>

                <div className="span6">
                  <div className="icons-box-vert">
                    <i className="ico-cup  ico-white circle-color-full big-color"></i>
                    <div className="icons-box-vert-info">
                      <h3>Best choice</h3>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    </div>
                    <div className="clear"></div>
                  </div>
                </div>

                <div className="span6">
                  <div className="icons-box-vert">
                    <i className="ico-ipad ico-color circle-color big"></i>
                    <div className="icons-box-vert-info">
                      <h3>Fully Responsive</h3>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    </div>
                    <div className="clear"></div>
                  </div>
                </div>

                <div className="span6">
                  <div className="icons-box-vert">
                    <i className="ico-thumbs-up  ico-white circle-color-full big-color"></i>
                    <div className="icons-box-vert-info">
                      <h3>Social Network</h3>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    </div>
                    <div className="clear"></div>
                  </div>
                </div>

              </div>
              <div className="clear"></div>
            </div>
          </div>
        </div>
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
