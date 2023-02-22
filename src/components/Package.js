import React, { Component } from "react";
import { Container, Row, CardColumns, Badge } from "reactstrap";
import TourCard from "./TourCard";
import "../App.css";
import imgCard1 from "../img/img-card (1).jpg";
import imgCard2 from "../img/img-card (2).jpg";
import imgCard3 from "../img/img-card (3).jpg";
import imgCard4 from "../img/img-card (4).jpg";
import imgCard5 from "../img/img-card (5).jpg";
import imgCard6 from "../img/img-card (6).jpg";
import imgCard7 from "../img/img-card (7).jpg";
import imgCard8 from "../img/img-card (8).jpg";
import imgCard9 from "../img/img-card (9).jpg";
import imgCard10 from "../img/img-card (10).jpg";
const tours = [
  {
    id: 1,
    category: ["resort", "beach", "honeymoon"],
    img: imgCard1,
    alt: "blah blah",
    title: "Indonesia",
    subtitle: "Bali"
  },
  {
    id: 2,
    category: ["beach", "mountain"],
    img: imgCard2,
    alt: "blah blah",
    title: "Egypt",
    subtitle: "Cairo"
  },
  {
    id: 3,
    category: ["resort", "honeymoon"],
    img: imgCard3,
    alt: "blah blah",
    title: "Maldives",
    subtitle: "Malé Island"
  },
  {
    id: 4,
    category: ["climbing", "mountain"],
    img: imgCard4,
    alt: "blah blah",
    title: "Norway",
    subtitle: "Tromsø"
  },
  {
    id: 5,
    category: ["resort", "honeymoon", "beach"],
    img: imgCard5,
    alt: "blah blah",
    title: "Greece",
    subtitle: "Santorini"
  },
  {
    id: 6,
    category: ["climbing", "mountain"],
    img: imgCard6,
    alt: "blah blah",
    title: "Italy",
    subtitle: "Rome"
  },
  {
    id: 7,
    category: ["beach", "climbing"],
    img: imgCard7,
    alt: "blah blah",
    title: "Thailand",
    subtitle: "Bangkok"
  },
  {
    id: 8,
    category: ["honeymoon", "beach", "resort"],
    img: imgCard8,
    alt: "blah blah",
    title: "Sweden",
    subtitle: "Stockholm"
  },
  {
    id: 9,
    category: ["beach", "resort"],
    img: imgCard9,
    alt: "blah blah",
    title: "Iceland",
    subtitle: "Reykjavík"
  },
  {
    id: 10,
    category: ["camping", "beach"],
    img: imgCard10,
    alt: "camping in the lake",
    title: "France",
    subtitle: "Paris"
  }
];

const itemCategories = [
  /* all
    art&culture
    food&drinks
    honeymoon
    wildlifez */
  "all",
  "beach",
  "mountain",
  "resort",
  "climbing",
  "camping",
  "honeymoon"
];

class Package extends Component {
  state = {
    cards: [],
    category: "all"
  };

  componentDidMount() {
    this.setState({ cards: tours });
  }

  render() {
    const { cards, category } = this.state;
    return (
      <div className="subComponent-lg" id="packageBody">
        <Container>
          <header className="headerTitle text-center">
            <h1>Incredible Places You Need To Visit </h1>
            <p>Find out why these places are deemed by people around the world to be the most worthwhile.</p>
          </header>
          <section className="packageBody text-center">
            {itemCategories.map((badge, index) => (
              <Badge
                key={index}
                href=""
                color={badge === category ? "dark" : "light"}
                onClick={() => this.setState({ category: badge })}
              >
                {badge}
              </Badge>
            ))}

            <Row className="text-left">
              <CardColumns>
                {category !== "all"
                  ? cards.map(tourcard => {
                    return tourcard.category.map(catItem => {
                      return catItem === category ? (
                        <TourCard key={tourcard.id} tourcard={tourcard} />
                      ) : null;
                    });
                  })
                  : cards.map(tourcard => (
                    <TourCard key={tourcard.id} tourcard={tourcard} />
                  ))}
              </CardColumns>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Package;
