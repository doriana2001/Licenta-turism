import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../App.css";
// import tours from "../components/Package";
import imgCard from "../img/img-card (1).jpg";
import imgCard2 from "../img/bali2.jpg";
import imgCard3 from "../img/bali3.jpg";
import imgCard4 from "../img/bali4.jpg";
import imgCard1 from "../img/bali1.jpg"

const Tour = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={imgCard} alt="" />
        <h1>Seaside Resort</h1>
        <h4>Bali, Indonesia</h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="4">
            <div className="tour-desc">
              <p>
              Indonesia is the largest archipelago in the world. It consists of five major islands and about 30 smaller groups. The islands are located at a crossroads between two oceans, the Pacific and Indian Oceans, and straddles two continents, Asia and Australia/Oceania.
              </p>
              <p>
              Bali, the famed Island of the Gods, with its varied landscape of hills and mountains, rugged coastlines and sandy beaches, lush rice terraces, and volcanic hillsides all providing a picturesque backdrop to its colorful, deeply spiritual, and unique culture stakes a serious claim to be paradise on earth.
              </p>
              <Button color="info">Favorite</Button>
            </div>
          </Col>
          <Col sm="3">
            <div className="tour-gallery">
              <a href={imgCard1}>
                <img src={imgCard1} alt="" />
              </a>
              <a href={imgCard2}>
                <img src={imgCard2} alt="" />
              </a>
              <a href={imgCard3}>
                <img src={imgCard3} alt="" />
              </a>
              <a href={imgCard4}>
                <img src={imgCard4} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
    <section className="reviews">
      <Container>
        <section className="tour-msg text-center">
          <h1>Reviews and Suggestions</h1>
          <p>We're curious to hear about your opinion on this destination!</p>
          <form action="">
            <Row>
              <Col sm="6">
                <input
                  type="text"
                  name="Name"
                  id="reviewer-name"
                  placeholder="Your Name"
                  required
                />
                <br />
                <input
                  type="email"
                  name="Email"
                  id="reviewer-email"
                  placeholder="Your Email"
                  required
                />
              </Col>
              <Col>
                <textarea
                  name="Message"
                  id="reviewer-message"
                  rows="4"
                  placeholder="Your Message"
                />
              </Col>
            </Row>
            <Button outline color="secondary" className="float-right">
              Send Message
            </Button>
          </form>
        </section>
      </Container>
    </section>
  </div>
);

export default Tour;
