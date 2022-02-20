import React from "react";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import Carousel from "../components/templates/Carousel";

const Home = () => {
  return (
    <Layout className="Home">
      <section className="Home__hero">
        <div>
          <h1>Rick & Mory Characters</h1>
          <p>Find your favorie characters in one place.</p>
        </div>
        <Link to="/characters">Start Searching</Link>
      </section>
      <Carousel id="carousel1" />
      <Carousel id="carousel2" />
    </Layout>
  );
};

export default Home;
