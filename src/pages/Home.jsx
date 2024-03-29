import React from "react";
import { Link } from "react-router-dom";
import { Layout, Carousel } from "components";
import logo from "assets/images/logo.png";

const Home = () => {
  return (
    <Layout className="home">
      <section className="home__hero">
        <figure className="home__hero--image">
          <img src={logo} alt="rick and morty logo" />
        </figure>

        <div className="home__hero--description">
          <p>Find your favorites characters in one place.</p>
          <p>See their status, species, origin, current location and more.</p>
        </div>

        <div className="home__hero--link">
          <h2>
            <Link to="/characters">Start searching</Link>
          </h2>
        </div>
      </section>

      <section className="home__carousels">
        <Carousel id="carousel1" />
        <Carousel id="carousel2" />
      </section>
    </Layout>
  );
};

export default Home;
