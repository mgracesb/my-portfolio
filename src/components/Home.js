import React from "react";
import Photo from "../imgs/photo.png";

const Home = () => {
  return (
    <section className="homeContainer">
      <img src={Photo} alt="" className="photo" />
      <div className="homeText">
        <h2>mercy shyu</h2>
        <p>Frontend developer</p>
      </div>
    </section>
  );
};

export default Home;
