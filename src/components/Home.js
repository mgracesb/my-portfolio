import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="homeContainer">
      <div className="homeContent">
        <h2>mercy shyu</h2>
        <p className="subtitle">Frontend developer</p>

        <Link className="moreInfo" to="/info">
          <i className="fas fa-chevron-right scroll-arrow"></i>
          <i className="fas fa-chevron-right scroll-arrow"></i>
          <i className="fas fa-chevron-right scroll-arrow"></i>
        </Link>
      </div>
    </section>
  );
};

export default Home;
