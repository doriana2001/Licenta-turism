import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";
import MainCarousel from "./Carousel";
import { ReactComponent as Award } from "../assets/svg/award.svg";
import { ReactComponent as Shield } from "../assets/svg/shield.svg";
import { ReactComponent as Compass } from "../assets/svg/compass.svg";
import { ReactComponent as Heart } from "../assets/svg/heart.svg";

class About extends Component {
  render() {
    return (
      <div id='about'>
        <MainCarousel />

        <div className="subComponent" id="aboutBody">
          <Container>
            <header className="headerTitle text-center">
              <h1>About DreamTour</h1>
              <p>Discover the most beautiful places on earth.</p>
            </header>
            <section className="svg-group text-center subComponent">
              <Row>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Award width="48" height="48" strokeWidth="1" />
                    <p>Best Locations</p>
                      <p className="priceSubtext"><i>Certified places you need to see in this lifetime.</i></p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Shield width="48" height="48" strokeWidth="1" />
                    <p>Trust and Safety</p>
                    <p>
                      <i>Be carefree and enjoy your trip.</i>
                    </p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Heart width="48" height="48" strokeWidth="1" />
                    <p>Client Favorite</p>
                    <p>
                      <i>Over 1 million satisfied users.</i>
                    </p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Compass width="48" height="48" strokeWidth="1" />
                    <p>Guide Insurance</p>
                    <p>
                      <i>We ensure the best guides.</i>
                    </p>
                  </div>
                </Col>
              </Row>
            </section>
          </Container>
        </div>
      </div>
    );
  }
}

export default About;
