import React from "react";
import { Button } from "reactstrap";
import "../App.css";
const Hero = () => (
  <div>
    <main className="cover-page" id="hero">
      <section className="wrapped-page">
        <div className="item-center">
          <h1>DreamTour</h1>
          <h3>One click away from conquering the world. </h3>
          <Button color="info" href="#about">
            Start Exploring
          </Button>
        </div>
      </section>
    </main>
  </div>
);

export default Hero;
